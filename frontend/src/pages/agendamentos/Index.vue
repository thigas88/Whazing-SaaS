<template>
  <div v-if="userProfile === 'admin' || userProfile === 'super'">
    <q-table
      class="contact-table my-sticky-dynamic container-rounded-10"
      title="Agendamentos"
      :data="agendamentos"
      :columns="columns"
      :loading="loading"
      row-key="id"
      virtual-scroll
      :virtual-scroll-item-size="48"
      :virtual-scroll-sticky-size-start="48"
      :pagination.sync="pagination"
      :rows-per-page-options="[0]"
      @virtual-scroll="onScroll"
    >
      <template v-slot:top-left>
        <div>
          <h2 :class="$q.dark.isActive ? ('text-white') : ''">
            <q-icon name="eva-clock-outline q-pr-sm"/>
            Agendamentos
          </h2>
          <div class="contact-header full-width">
            <DatePick dense rounded outlined label="Data Inicial"
              class="row col"
              v-model="params.startDate"
              @input="onDateChange"
            />
            <DatePick dense rounded outlined label="Data Final"
              class="row col"
              v-model="params.endDate"
              @input="onDateChange"
            />
          </div>
        </div>
      </template>
      <template v-slot:body-cell-mediaUrl="props">
        <q-td :props="props">
          <span v-if="props.row.mediaUrl">
            <a :href="props.row.mediaUrl" target="_blank" style="text-decoration: underline; cursor: pointer;">
              Abrir Arquivo
            </a>
          </span>
          <span v-else>
            Sem Arquivo
          </span>
        </q-td>
      </template>
      <template v-slot:body-cell-ticketId="props">
        <q-td :props="props">
          <a :href="getTicketUrl(props.row.ticketId)">{{ props.row.ticketId }}</a>
        </q-td>
      </template>
      <template v-slot:body-cell-contactId="props">
        <q-td :props="props">
          {{ props.row.contactName || 'Carregando...' }}
        </q-td>
      </template>
      <template v-slot:body-cell-userId="props">
        <q-td :props="props">
          {{ formatUser(props.row.userId) }}
        </q-td>
      </template>
      <template v-slot:body-cell-createdAt="props">
        <q-td :props="props">
          {{ formatDate(props.row.createdAt) }}
        </q-td>
      </template>
      <template v-slot:body-cell-acoes="props">
        <q-td class="text-center">
          <q-btn
            flat
            round
            :class="$q.dark.isActive ? ('text-white bg-black') : ''"
            icon="eva-trash-outline"
            @click="deletarMensagem(props.row)"
          />
        </q-td>
      </template>
      <template v-slot:pagination="{ pagination }">
        {{ agendamentos.length }}/{{ pagination.rowsNumber }}
      </template>
    </q-table>
  </div>
</template>

<script>
import { ListarAgendamento, DeletarMensagem } from 'src/service/tickets';
import { ListarUsuarios } from 'src/service/user';

export default {
  name: 'Protocolos',
  data() {
    return {
      userProfile: 'user',
      contatosCache: {},
      usuarios: [],
      agendamentos: [],
      pagination: {
        rowsPerPage: 40,
        rowsNumber: 0,
        lastIndex: 0
      },
      params: {
        pageNumber: 1,
        startDate: null,
        endDate: null,
        hasMore: true
      },
      loading: false,
      columns: [
        { name: 'body', label: 'Mensagem', field: row => row.body.substring(0, 20) + '...', align: 'left' },
        { name: 'mediaUrl', label: 'Arquivo', field: 'mediaUrl', align: 'left' },
        { name: 'ticketId', label: 'Ticket', field: 'ticketId', align: 'left' },
        { name: 'scheduleDate', label: 'Data Envio', field: 'scheduleDate', align: 'left', format: (val) => this.formatDate(val) },
        { name: 'userId', label: 'Usuário', field: 'userId', align: 'center', format: (val) => this.formatUser(val) },
        { name: 'createdAt', label: 'Data foi agendado', field: 'createdAt', align: 'center', format: (val) => this.formatDate(val) },
        { name: 'acoes', label: 'Ações', field: 'acoes', align: 'center' }
      ]
    }
  },
  methods: {
    deletarMensagem(mensagem) {
      this.$q
        .dialog({
          title: 'Atenção!! Deseja realmente deletar essa mensagem? ',
          message: 'Mensagens antigas não serão apagadas no cliente.',
          cancel: {
            label: 'Não',
            color: 'primary',
            push: true,
          },
          ok: {
            label: 'Sim',
            color: 'negative',
            push: true,
          },
          persistent: true,
        })
        .onOk(() => {
          this.loading = true
          DeletarMensagem(mensagem)
            .then((res) => {
              this.loading = false
              mensagem.isDeleted = true
              window.location.reload();
            })
            .catch((error) => {
              this.loading = false
              console.error(error)
              this.$notificarErro('Não foi possível apagar a mensagem', error)
            })
        })
        .onCancel(() => {})
    },
    async listarUsuarios() {
      const data = await ListarUsuarios();
      this.usuarios = data.data.users;
    },
    async listarAgendamentos() {
      this.loading = true;
      try {
        const response = await ListarAgendamento({
          startDate: this.params.startDate,
          endDate: this.params.endDate,
          pageNumber: this.params.pageNumber,
          tenantId: localStorage.getItem('tenantId')
        });

        if (response.data && Array.isArray(response.data.messages)) {
          this.agendamentos = [
            ...this.agendamentos,
            ...(await Promise.all(
              response.data.messages.map(async (protocolo) => {
                return protocolo;
              })
            ))
          ];
          this.pagination.rowsNumber = response.data.count || 0;
          this.pagination.hasMore = response.data.hasMore;
        } else {
          console.error('Resposta da API não está no formato esperado:', response.data);
        }
      } catch (error) {
        console.error('Erro ao listar agendamentos:', error);
      } finally {
        this.loading = false;
      }
    },
    formatUser(userId) {
      const user = this.usuarios.find(user => user.id === userId);
      return user ? user.name : 'Usuário não encontrado';
    },
    getTicketUrl(ticketId) {
      const route = this.$router.resolve({ path: `/atendimento/${ticketId}` });
      return route.href;
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    },
    async filtrarProtocolos() {
      this.params.pageNumber = 1;
      this.params.hasMore = true; // Garantir que há mais dados a serem carregados
      this.agendamentos = []; // Limpar agendamentos atuais para aplicar o novo filtro
      await this.listarAgendamentos();
    },
    onDateChange() {
      if (this.params.startDate && this.params.endDate) {
        this.filtrarProtocolos();
      }
    },
    onScroll({ to, ref, ...all }) {
      if (!this.loading && this.params.hasMore && to >= (this.agendamentos.length - 10)) {
        this.loading = true;
        this.params.pageNumber++;
        this.listarAgendamentos();
      }
    }
  },
  async mounted() {
    await this.listarAgendamentos();
    await this.listarUsuarios();
    this.userProfile = localStorage.getItem('profile');
  }
}
</script>

<style lang="sass">
.my-sticky-dynamic
  /* height or max-height is important */
  height: 85vh

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th /* bg color is important for th; just specify one */
    background-color: #fff

  thead tr th
    position: sticky
    z-index: 1
  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 63px
  thead tr:first-child th
    top: 0

.heightChat
  height: calc(100vh - 0px)
  .q-table__top
    padding: 8px

#tabela-contatos-atendimento
  thead
    th
      height: 55px

.blur-effect
  filter: blur(0px)
</style>
