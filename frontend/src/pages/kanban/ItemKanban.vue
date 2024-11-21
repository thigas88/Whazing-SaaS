<template>
  <div>
    <q-list
      separator
      class="q-mr-sm q-ml-none q-my-sm q-pa-xs"
      :class="$q.dark.isActive ? 'bg-grey-5' : 'bg-grey-6'"
      style="border-radius: 5px"
    >
      <!-- <wait-dialog :d-wait="dialogWait" /> -->
      <q-item
        id="item-ticket-houve"
        class="ticketBorder q-px-none"
        style="height: auto; max-width: 100%; cursor: move;"
        :style="`
    background: ${$q.dark.isActive ? '#000000' : '#ebebeb'};
    ${titleColor ? `border-left: 3px solid ${titleColor} !important;` : ''}
  `"
      >
        <q-item-section avatar class="q-px-xs">
          <q-avatar size="45px" class="relative-position">
            <img
              :src="Value(contato, 'profilePicUrl')"
              onerror="this.style.display='none'"
              v-show="!!Value(contato, 'profilePicUrl')"
            />
            <q-icon size="45px" name="mdi-account-circle" color="grey-8" />
          </q-avatar>
        </q-item-section>
        <q-item-section id="ListItemsTicket">
          <q-item-label class="text-bold h5" lines="1">
            <span :class="$q.dark.isActive ? 'text-white' : ''">{{
                contato.name
              }}</span>
          </q-item-label>
          <q-item-label class="text-bold h6" lines="1">
            <a :class="$q.dark.isActive ? ('text-white') : ''" :href="getPhoneNumberLink(contato.number)">
              {{ formatId(contato.number) }}
            </a>
          </q-item-label>
          <q-item-label v-if="contato.deadline">
            <div class="row text-caption q-pt-xs">
              <q-icon size="sm" color="red-5" class="q-mr-xs" name="timer" />
              <span>{{ formatarDataTZ(contato.deadline) }}</span>
            </div>
          </q-item-label>
          <q-item-label v-if="contato.commentary">
            <div class="row text-caption q-pt-xs q-pl-none">
              <div class="col-xs-1">
                <q-icon color="primary" size="sm" name="mdi-text" />
              </div>
              <div class="col-sm-9 q-ml-sm ellipsis">
                {{ contato.commentary }}
              </div>
            </div>
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon
            @click="openCard(contato)"
            name="edit"
            color="blue-10"
            style="cursor: pointer"
          >
            <q-tooltip>Editar</q-tooltip>
          </q-icon>
          <q-icon
            @click="handleSaveTicket(contato, 'whatsapp')"
            name="mdi-whatsapp"
            color="green-10"
            class="text-bold q-mt-sm"
            style="cursor: pointer"
            v-if="contato.number"
          >
            <q-tooltip>Atendimento</q-tooltip>
          </q-icon>
          <q-icon
            @click="handleSaveTicket(contato, 'hub_facebook')"
            name="mdi-instagram"
            color="purple"
            class="text-bold q-mt-sm"
            style="cursor: pointer"
            v-if="contato.instagramPK"
          >
            <q-tooltip>Atendimento</q-tooltip>
          </q-icon>
          <q-icon
            @click="handleSaveTicket(contato, 'hub_webchat')"
            name="mdi-web"
            color="cyan"
            class="text-bold q-mt-sm"
            style="cursor: pointer"
            v-if="contato.webchatId"
          >
            <q-tooltip>Atendimento</q-tooltip>
          </q-icon>
          <q-icon
            @click="handleSaveTicket(contato, 'hub_facebook')"
            name="mdi-facebook-messenger"
            color="blue"
            class="text-bold q-mt-sm"
            style="cursor: pointer"
            v-if="contato.messengerId"
          >
            <q-tooltip>Atendimento</q-tooltip>
          </q-icon>
          <q-badge color="cyan">{{`$ ${formatKanbanPrice(contato.kanbanPrice)}`}}</q-badge>
        </q-item-section>
      </q-item>
      <!-- <q-separator spaced color="grey-2" /> -->
      <!-- <q-separator /> -->
    </q-list>
    <q-dialog v-model="modelCard">
      <CardModal :data-card="openCardData" @hide="updateContato"></CardModal>
    </q-dialog>
    <q-dialog v-model="modalTransferirTicket"
              @hide="modalTransferirTicket = false"
              persistent>
      <q-card class="q-pa-md"
              style="width: 500px">
        <q-card-section>
          <div class="text-h6">Selecione o destino:</div>
        </q-card-section>
        <q-card-section>
          <q-select square
                    outlined
                    v-model="filaSelecionada"
                    :options="filas"
                    emit-value
                    map-options
                    option-value="id"
                    option-label="queue"
                    label="Fila de destino" />
        </q-card-section>
        <q-card-section>
          <q-select square
                    outlined
                    v-model="usuarioSelecionado"
                    :options="usuariosTransferencia.filter(filterUsers)"
                    emit-value
                    map-options
                    option-value="id"
                    option-label="name"
                    label="Usuário destino" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat
                 label="Sair"
                 color="negative"
                 v-close-popup
                 class="q-mr-lg" />
          <q-btn flat
                 label="Salvar"
                 color="primary"
                 @click="confirmarTransferenciaTicket" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
const userId = +localStorage.getItem('userId')
import { format, parseISO, formatDistance, parseJSON } from 'date-fns'
import pt from 'date-fns/locale/pt-BR'
import { outlinedAccountCircle } from '@quasar/extras/material-icons-outlined'
import CardModal from './CardModal.vue'
import { AtualizarTicket, CriarTicket } from 'src/service/tickets'
import { ListarFilas } from 'src/service/filas'
import { ListarUsuarios } from 'src/service/user'
import formatSerializedId from 'src/utils/phoneFormatter'
import { mapGetters } from 'vuex'

export default {
  name: 'ItemKanban',
  components: { CardModal },
  data: () => ({
    openCardData: { contactId: null, deadline: null, commentary: null, kanbanPrice: null },
    modelCard: false,
    modalTransferirTicket: false,
    usuarioSelecionado: null,
    filaSelecionada: null,
    filas: [],
    usuariosTransferencia: [],
    usuarios: [],
    dialogWait: false,
    outlinedAccountCircle,
    recalcularHora: 1,
    statusAbreviado: {
      open: 'A',
      pending: 'P',
      closed: 'R'
    },
    status: {
      open: 'Aberto',
      pending: 'Pendente',
      closed: 'Resolvido'
    },
    color: {
      open: 'primary',
      pending: 'negative',
      closed: 'positive'
    },
    borderColor: {
      open: 'primary',
      pending: 'negative',
      closed: 'positive'
    },
    ticketStatusText: {
      open: 'Ticket aberto',
      pending: 'Ticket pendente',
      closed: 'Ticket encerrado'
    }
  }),
  props: {
    statusTicket: {
      type: String,
      default: () => null
    },
    titleColor: {
      type: String,
      default: () => ''
    },
    contato: {
      type: Object,
      default: () => {
      }
    },
    buscaTicket: {
      type: Boolean,
      default: false
    },
    filas: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    async listarFilas() {
      return new Promise((resolve, reject) => {
        ListarFilas()
          .then(({ data }) => {
            this.filas = data.filter(fila => fila.isActive)
            this.modalTransferirTicket = true
            return this.listarUsuariosTransferencia()
          })
          .then(() => {
            this.$once('modalClosed', () => {
              resolve()
            })
          })
          .catch(error => {
            console.error(error)
            this.$notificarErro('Problema ao carregar filas', error)
            reject(error)
          })
      })
    },
    async listarUsuariosTransferencia () {
      try {
        const { data } = await ListarUsuarios()
        this.usuariosTransferencia = data.users
        this.modalTransferirTicket = true
      } catch (error) {
        console.error(error)
        this.$notificarErro('Problema ao carregar usuários', error)
      }
    },
    async listarUsuarios () {
      try {
        const { data } = await ListarUsuarios()
        this.usuarios = data.users
      } catch (error) {
        console.error(error)
        this.$notificarErro('Problema ao carregar usuários', error)
      }
    },
    filterUsers (element, index, array) {
      const fila = this.filaSelecionada
      if (fila == null) return true
      const queues_valid = element.queues.filter(function (element, index, array) {
        return (element.id == fila)
      })
      return (queues_valid.length > 0)
    },
    getPhoneNumberLink(number) {
      if ((number.startsWith('55')) && (number.charAt(4) > 5)) {
        return `tel:${number.slice(0, 4)}9${number.slice(-8)}`
      } else {
        return `tel:${number}`
      }
    },
    formatKanbanPrice(price) {
      // Se price for nulo, indefinido ou não um número, retornar '0.00'
      return !isNaN(price) ? Number(price).toFixed(2) : '0.00'
    },
    formatId(id) {
      const formattedId = formatSerializedId(id)
      return formattedId
    },
    formatarDataTZ(utcDate) {
      // const localDate = new Date(utcDate).toLocaleString('pt-BR', {
      //   // localeMatcher: 'best fit',
      //   // timeZoneName: 'short',
      // })
      return format(parseISO(utcDate), 'dd-MM-yyyy')
      // return localDate
    },
    updateContato(data) {
      this.modelCard = false // Fecha o modal
      this.$emit('update-contato', { contato: data }) // Emite o evento com os dados atualizados
    },
    openCard(contato) {
      // function dateIsValid(date) {
      //   return !Number.isNaN(new Date(date).getTime())
      // }

      const dd = contato.deadline
      const dados = {
        contactId: contato.id,
        deadline: dd
          ? format(parseISO(dd), 'yyyy-MM-dd')
          : format(new Date(), 'yyyy-MM-dd'),
        commentary: contato.commentary,
        kanbanPrice: contato.kanbanPrice
      }
      this.openCardData = dados
      this.modelCard = true
    },
    getContactName(contato) {
      return contato?.name
    },
    Value(obj, prop) {
      try {
        return obj[prop]
      } catch (error) {
        return ''
      }
    },

    dataInWords(timestamp, updated) {
      if (!updated) return ''
      let data = parseJSON(updated)
      if (timestamp) {
        data = new Date(Number(timestamp))
      }
      return formatDistance(data, new Date(), { locale: pt })
    },
    async handleSaveTicket(contact, channel) {
      if (!contact.id) return
      const itens = []
      const channelId = null

      this.whatsapps.forEach(w => {
        if (w.type === channel) {
          itens.push({ label: w.name, value: w.id })
        }
      })

      this.$q.dialog({
        title: `Contato: ${contact.name}`,
        message: 'Selecione o canal para iniciar o atendimento.',
        options: {
          type: 'radio',
          model: channelId,
          isValid: v => !!v,
          items: itens
        },
        ok: {
          push: true,
          color: 'positive',
          label: 'Iniciar'
        },
        cancel: {
          push: true,
          label: 'Cancelar',
          color: 'negative'
        },
        persistent: true
      }).onOk(async channelId => {
        if (!channelId) return
        this.loading = true

        try {
          const { data: ticket } = await CriarTicket({
            contactId: contact.id,
            isActiveDemand: true,
            userId: userId,
            channel,
            channelId,
            status: 'open'
          })

          this.ticketFocado = ticket
          await this.listarFilas()
          await this.$store.commit('SET_HAS_MORE', true)
          await this.$store.dispatch('AbrirChatMensagens', ticket)

          this.$q.notify({
            message: `Atendimento Iniciado || ${ticket.contact.name} - Ticket: ${ticket.id}`,
            type: 'positive',
            position: 'top',
            progress: true,
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })

          this.$router.push({ name: 'chat', params: { ticketId: ticket.id } })
        } catch (error) {
          this.loading = false // Garante que loading seja desativado
          console.log('error', error)
          const errorMessage = error?.data?.message || 'Ocorreu um erro desconhecido!'
          if (error.status === 409 && errorMessage === 'Já existe um ticket') {
            console.log('Erro 409:', error)
            const ticketAtual = error.data?.ticket
            this.abrirAtendimentoExistente(contact, ticketAtual)
          } else {
            if (error.status === 409) {
              console.log(error)
              this.$q.dialog({
                title: 'Atenção!!',
                message: `${errorMessage}`,
                ok: {
                  label: 'Fechar',
                  color: 'primary',
                  push: true
                },
                persistent: true
              })
              this.$q.notify({
                message: errorMessage,
                type: 'negative',
                position: 'top',
                progress: true,
                actions: [{
                  icon: 'close',
                  round: true,
                  color: 'white'
                }]
              })
            }
          }
        }
      })
    },
    abrirChatContato (ticket) {
      // caso esteja em um tamanho mobile, fechar a drawer dos contatos
      if (this.$q.screen.lt.md && ticket.status !== 'pending') {
        this.$root.$emit('infor-cabecalo-chat:acao-menu')
      }
      if (!(ticket.status !== 'pending' && (ticket.id !== this.$store.getters.ticketFocado.id || this.$route.name !== 'chat'))) return
      this.$store.commit('SET_HAS_MORE', true)
      this.$store.dispatch('AbrirChatMensagens', ticket)
    },
    abrirAtendimentoExistente (contato, ticket) {
      this.$q.dialog({
        title: 'Atenção!!',
        message: `${contato.name} possui um atendimento em curso (Atendimento: ${ticket.id}). Deseja abrir o atendimento?`,
        cancel: {
          label: 'Não',
          color: 'primary',
          push: true
        },
        ok: {
          label: 'Sim',
          color: 'negative',
          push: true
        },
        persistent: true
      }).onOk(async () => {
        try {
          this.abrirChatContato(ticket)
        } catch (error) {
          this.$notificarErro(
            'Não foi possível atualizar o token',
            error
          )
        }
      })
    },
    async confirmarTransferenciaTicket () {
      await AtualizarTicket(this.ticketFocado.id, {
        userId: this.usuarioSelecionado || userId,
        queueId: this.filaSelecionada || null,
        status: 'open',
        isTransference: 1
      })
      this.$q.notify({
        type: 'positive',
        message: 'Ticket transferido.',
        progress: true,
        actions: [{
          icon: 'close',
          round: true,
          color: 'white'
        }]
      })
      this.modalTransferirTicket = false
      this.$emit('modalClosed')
      this.$store.commit('TICKET_FOCADO', {})
    }
  },
  mounted () {
    this.listarUsuarios()
  },
  computed: {
    ...mapGetters(['whatsapps']),
    cWhatsapps() {
      return this.whatsapps.filter(
        (item) =>
          item.type == 'whatsapp' &&
          item.status == 'CONNECTED' &&
          !item.isDeleted &&
          item.tenantId == this.$store.getters.user.usuario.tenantId
      )
    },
    ctags() {
      return this.ticket?.contact?.tags
        ? this.ticket.contact.tags.map((i) => i.tag).join(', ')
        : ''
    },
    atags() {
      return this.ticket?.contact?.tags
        ? this.ticket.contact.tags.map((i) => i.tag)
        : ''
    },
    colortags() {
      // console.log(this.ticket)
      return this.ticket?.contact?.tags
        ? this.ticket.contact.tags.map((i) => i.color)
        : []
    }
  },
  created() {
    setInterval(() => {
      this.recalcularHora++
    }, 50000)
  }
}
</script>

<style lang="sass">
.position-status
  position: absolute !important

  left:-65px

  top:-10px

img:after
  content: ""
  vertical-align: middle
  display: inline-block
  border-radius: 50%
  font-size: 48px
  position: absolute
  top: 0
  left: 0
  width: inherit
  height: inherit
  z-index: 10
  background: #ebebeb url('http://via.placeholder.com/300?text=PlaceHolder') no-repeat center
  color: transparent

.ticket-active-item
  // border: 2px solid rgb(21, 120, 173)
  // border-left: 3px solid $light //rgb(21, 120, 173)
  border-radius: 0
  position: relative
  height: 100%
  background: $blue-1
//$active-item-ticket
// background-color: #e6ebf5

#ListItemsTicket
  .q-item__label + .q-item__label
    margin-top: 1.5px

#item-ticket-houve:hover
  background: $grey-5
  //$active-item-ticket
  transition: all .4s

.primary
  border-left: 2px solid $primary

.negative
  border-left: 2px solid $negative

.positive
  border-left: 2px solid $positive

.ticketNotAnswered
  border-left: 2px solid $amber !important

.ticketBorder
  border-left: 2px solid $grey-9

.ticketBorderGrey
  border-left: 2px solid $grey-4
</style>
