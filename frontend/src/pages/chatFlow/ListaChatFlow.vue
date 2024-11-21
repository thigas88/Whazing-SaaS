<template>
  <div>
    <div class="row">
      <div class="col">
        <q-table
          square
          flat
          bordered
          class="contact-table container-rounded-10 my-sticky-dynamic q-ma-lg"
          hide-bottom
          :data="listachatFlow"
          :columns="columns"
          :loading="loading"
          row-key="id"
          :pagination.sync="pagination"
          :rows-per-page-options="[0]"
        >
          <template v-slot:top-left>
            <div>
              <h2  :class="$q.dark.isActive ? ('text-green') : ''">
                <q-icon name="mdi-robot-outline q-pr-sm" />
                Fluxos
              </h2>
              <q-btn
              class="generate-button btn-rounded-50"
              icon="eva-plus-outline"
              label="Adicionar"
              @click="chatFlowSelecionado = {}; modalChatFlow = true"
            />
              <q-btn
              class="generate-button btn-rounded-50"
              icon="mdi-import"
              label="Importar"
              @click="modalImportFlow = true"
            />
              <q-btn flat class="generate-button btn-rounded-50"
                     v-if="whatsappNumber"
                     icon="mdi-whatsapp"
                     label="Chamar Suporte"
                     @click="abrirWhatsApp"
              />
            </div>

          </template>
          <template v-slot:body-cell-isActive="props">
            <q-td class="text-center">
              <q-icon
                size="16px"
                :name="props.value ? 'mdi-check-circle-outline' : 'mdi-close-circle-outline'"
                :color="props.value ? 'positive' : 'negative'"
                class=""
              />
              <span class="q-mx-xs text-bold"> {{ props.value ? 'Ativo' : 'Inativo' }} </span>
            </q-td>
          </template>
          <template v-slot:body-cell-acoes="props">
            <q-td class="text-center">
              <q-btn
                :class="$q.dark.isActive ? ('text-green bg-black') : ''"
                icon="eva-edit-outline"
                flat
                round
                class="q-mx-sm"
                @click="editFlow(props.row)"
              >
                <q-tooltip>
                  Editar informações
                </q-tooltip>
              </q-btn>
              <q-btn
                icon="mdi-sitemap"
                flat
                round
                class="q-mx-sm"
                 :class="$q.dark.isActive ? ('text-green bg-black') : ''"
                @click="abrirFluxo(props.row)"
              >
                <q-tooltip>
                  Abrir Fluxo
                </q-tooltip>
              </q-btn>
              <q-btn
                icon="eva-trash-outline"
                flat
                round
                class="q-mx-sm"
                 :class="$q.dark.isActive ? ('text-green bg-black') : ''"
                @click="deletarFluxo(props.row)"
              >
                <q-tooltip>
                  Excluir
                </q-tooltip>
              </q-btn>
            </q-td>
          </template>

        </q-table>
      </div>
    </div>
    <ModalChatFlow
      :modalChatFlow.sync="modalChatFlow"
      :chatFlowEdicao.sync="chatFlowSelecionado"
      @chatFlow:criada="novoFluxoCriado"
      @chatFlow:editado="fluxoEditado"
    />
    <ModalImportFlow
      :modalImportFlow.sync="modalImportFlow"
      @chatFlow:criada="novoFluxoCriado"
    />
    <q-dialog v-model="confirmDelete" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Você tem certeza que dessa excluir esse fluxo?</div>
          <div>{{ chatFlowSelecionado.name }}</div>
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn
            label="Cancelar"
            v-close-popup
            class="q-mr-md"
            color="primary"
          />
          <q-btn label="Excluir" color="negative" v-close-popup @click="confirmDeleteFoo()" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ListarFilas } from 'src/service/filas'
import { ListarChatFlow, DeletarChatFlow } from 'src/service/chatFlow'
import { ListarUsuarios } from 'src/service/user'
import { ListarConfiguracaoPublica } from 'src/service/configuracoesgeneral'
import ModalChatFlow from './ModalChatFlow.vue'
import ModalImportFlow from './ModalImportFlow.vue'

export default {
  name: 'ChatFlowIndex',
  components: { ModalChatFlow, ModalImportFlow },
  data () {
    return {
      confirmDelete: false,
      listachatFlow: [],
      modalChatFlow: false,
      modalImportFlow: false,
      whatsappNumber: null,
      chatFlowSelecionado: {},
      pagination: {
        rowsPerPage: 40,
        rowsNumber: 0,
        lastIndex: 0
      },
      params: {
        pageNumber: 1,
        searchParam: null,
        hasMore: true
      },
      loading: false,
      columns: [
        { name: 'name', label: 'Nome', field: 'name', align: 'left' },
        { name: 'isActive', label: 'Status', field: 'isActive', align: 'center' },
        { name: 'celularTeste', label: 'Celular Teste', field: 'celularTeste', align: 'center' },
        { name: 'acoes', label: '', field: 'acoes', align: 'center' }
      ],
      filas: [],
      usuarios: []
    }
  },
  methods: {
    async fetchConfigurations() {
      try {
        const response = await ListarConfiguracaoPublica()
        const configurations = response.data
        this.whatsappNumber = configurations.whatsappnumber || null
      } catch (error) {
        console.error('Erro ao buscar configurações:', error)
      }
    },
    abrirWhatsApp() {
      if (this.whatsappNumber) {
        const url = `https://wa.me/${this.whatsappNumber}?text=Ol%C3%A1%21+tenho+duvidas+bot`
        window.open(url, '_blank') // Abre o WhatsApp em uma nova aba
      }
    },
    async listarChatFlow () {
      const { data } = await ListarChatFlow()
      this.listachatFlow = data.chatFlow
    },
    async listarFilas () {
      const { data } = await ListarFilas({ isActive: true })
      this.filas = data.filter(q => q.isActive)
    },
    async listarUsuarios () {
      const { data } = await ListarUsuarios(this.params)
      this.usuarios = data.users
    },
    novoFluxoCriado (flow) {
      const lista = [...this.listachatFlow]
      lista.push(flow)
      this.listachatFlow = lista
    },
    fluxoEditado (flow) {
      const lista = [...this.listachatFlow.filter(f => f.id !== flow.id)]
      lista.push(flow)
      this.listachatFlow = lista
    },
    editFlow (flow) {
      this.chatFlowSelecionado = flow
      this.modalChatFlow = true
    },
    async abrirFluxo (flow) {
      await this.$store.commit('SET_FLOW_DATA', {
        usuarios: this.usuarios,
        filas: this.filas,
        flow
      })
      this.$router.push({ name: 'chat-flow-builder' })
    },
    deletarFluxo (flow) {
      this.chatFlowSelecionado = flow
      this.confirmDelete = true
    },
    async confirmDeleteFoo (flow) {
      await DeletarChatFlow(this.chatFlowSelecionado)
      await this.listarChatFlow()
    }
  },
  async mounted () {
    this.fetchConfigurations()
    await this.listarChatFlow()
    await this.listarFilas()
    await this.listarUsuarios()
  }
}
</script>

<style lang="scss" scoped>
</style>
