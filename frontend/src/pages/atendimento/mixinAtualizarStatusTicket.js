import { AtualizarStatusTicket, EnviarMensagemTexto, AtualizarTicket } from 'src/service/tickets'
import { ListarDespedidas } from 'src/service/despedida'
const userId = +localStorage.getItem('userId')
import { uid } from 'quasar'

export default {
  data() {
    return {
      despedidas: [] // Armazena as mensagens de despedida
    }
  },
  methods: {
    // Método para listar as despedidas
    async listarDespedidas () {
      try {
        const { data } = await ListarDespedidas()
        this.despedidas = data.farewellMessages // Corrigido o nome da propriedade
        console.log(this.despedidas) // Exibe as despedidas no console para debug
      } catch (error) {
        console.error('Erro ao listar despedidas:', error)
      }
    },
    // Iniciar atendimento
    async iniciarAtendimento(ticket) {
      this.loading = true
      const contactName = (ticket.contact && ticket.contact.name) || (this.contatoSelecionado ? this.contatoSelecionado.name : 'Cliente')
      try {
        await AtualizarStatusTicket(ticket.id, 'open', userId)
        this.loading = false
        this.$q.notify({
          message: `Atendimento Iniciado || ${contactName} - Ticket: ${ticket.id}`,
          type: 'positive',
          progress: true,
          position: 'top',
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        })
        this.$store.commit('TICKET_FOCADO', {})
        this.$store.commit('SET_HAS_MORE', false)
        this.$store.dispatch('AbrirChatMensagens', ticket)
      } catch (error) {
        this.loading = false
        console.error(error)
        this.$notificarErro('Não foi possível atualizar o status', error)
      }
    },

    async atualizarStatusTicket2 (ticket) {
      const contatoName = ticket.contact.name || ''
      const ticketId = ticket.id
      const userId = this.$store.state.user.id // Pegar o userId da store
      const title = 'Encerrar o atendimento?'
      const toast = 'Atendimento encerrado!'

      // Listar despedidas
      await this.listarDespedidas()

      const dialogOptions = {
        title: title,
        message: `Cliente: ${contatoName} || Ticket: ${ticketId}`,
        options: {
          model: null,
          items: this.despedidas.map((despedida) => ({
            label: despedida.message.substring(0, 15) + '...',
            value: despedida.id
          }))
        },
        cancel: {
          label: 'Não',
          color: 'negative',
          push: true
        },
        ok: {
          label: 'Sim',
          color: 'primary',
          push: true
        },
        persistent: true
      }

      this.$q.dialog(dialogOptions).onOk(async (despedidaId) => {
        this.loading = true

        const despedidaSelecionada = this.despedidas.find(
          (despedida) => despedida.id === despedidaId
        )

        if (despedidaSelecionada) {
          const message = {
            read: 1,
            fromMe: true,
            mediaUrl: '',
            body: despedidaSelecionada.message,
            scheduleDate: null,
            quotedMsg: null,
            idFront: uid() // Gerar um ID único
          }

          try {
            await EnviarMensagemTexto(ticketId, message)
            this.$q.notify({
              type: 'positive',
              progress: true,
              position: 'top',
              message: 'A mensagem de despedida está sendo enviada e o ticket será fechado dentro de 30 segundos.',
              actions: [{
                icon: 'close',
                round: true,
                color: 'white'
              }]
            })
            try {
              await AtualizarTicket(ticketId, {
                isFarewellMessage: true
              })
            } catch (e) {
              console.error('Erro ao atualizar o ticket:', e)
            }
            await new Promise(resolve => setTimeout(resolve, 30000)) // Espera 30 segundos
          } catch (e) {
            console.error('Erro ao enviar a mensagem de despedida:', e)
          }
        }

        // Encerrar o ticket após enviar a despedida
        AtualizarStatusTicket(ticketId, 'closed', userId)
          .then(res => {
            this.loading = false
            this.$q.notify({
              message: `${toast} || ${contatoName} (Ticket ${ticketId})`,
              type: 'positive',
              progress: true,
              actions: [{
                icon: 'close',
                round: true,
                color: 'white'
              }]
            })
            this.$store.commit('TICKET_FOCADO', {})
            this.$router.push({ name: 'chat-empty' }) // Redireciona para a página 'chat-empty'
          })
          .catch(error => {
            this.loading = false
            this.$q.notify({
              message: 'Erro ao encerrar o atendimento.',
              type: 'warning',
              progress: true,
              actions: [{
                icon: 'close',
                round: true,
                color: 'white'
              }]
            })
            console.error(error)
            this.$notificarErro('Não foi possível encerrar o atendimento', error)
          })
      })
    },

    // Atualizar status do ticket e incluir despedidas no fechamento
    async atualizarStatusTicket(status) {
      const contatoName = this.ticketFocado.contact.name || ''
      const ticketId = this.ticketFocado.id
      const title = {
        open: 'Atendimento será iniciado, ok?',
        pending: 'Retornar à fila?',
        closed: 'Encerrar o atendimento?'
      }
      const toast = {
        open: 'Atendimento iniciado!',
        pending: 'Retornado à fila!',
        closed: 'Atendimento encerrado!'
      }

      let dialogOptions = {
        title: title[status],
        message: `Cliente: ${contatoName} || Ticket: ${ticketId}`,
        cancel: {
          label: 'Não',
          color: 'negative',
          push: true
        },
        persistent: true
      }

      if (status === 'closed') {
        await this.listarDespedidas() // Lista as despedidas disponíveis
        dialogOptions = {
          ...dialogOptions,
          options: {
            model: null,
            items: this.despedidas.map((despedida) => ({
              label: despedida.message.substring(0, 15) + '...',
              value: despedida.id
            }))
          },
          ok: {
            label: 'Sim',
            color: 'primary',
            push: true
          }
        }
      } else {
        dialogOptions = {
          ...dialogOptions,
          ok: {
            label: 'Sim',
            color: 'primary',
            push: true
          }
        }
      }

      this.$q.dialog(dialogOptions).onOk(async (data) => {
        this.loading = true
        if (status === 'closed' && data !== null) {
          const despedidaSelecionada = this.despedidas.find(
            (despedida) => despedida.id === data
          )
          if (despedidaSelecionada) {
            const message = {
              read: 1,
              fromMe: true,
              mediaUrl: '',
              body: despedidaSelecionada.message,
              scheduleDate: null,
              quotedMsg: null,
              idFront: uid()
            }
            try {
              await EnviarMensagemTexto(ticketId, message)
              this.$q.notify({
                type: 'positive',
                progress: true,
                position: 'top',
                message: 'A mensagem selecionada está sendo enviada e o ticket será fechado dentro de 30 segundos!',
                actions: [{
                  icon: 'close',
                  round: true,
                  color: 'white'
                }]
              })
              try {
                await AtualizarTicket(this.ticketFocado.id, {
                  isFarewellMessage: true
                })
              } catch (e) {
                console.error('Erro ao atualizar o ticket:', e)
              }
              await new Promise(resolve => setTimeout(resolve, 30000)) // Espera 30 segundos
            } catch (e) {
              console.error('Erro ao enviar a mensagem de despedida:', e)
            }
          }
        }

        // Altera o userId para null se o status for 'pending'
        const userIdToUpdate = status === 'pending' ? null : userId

        AtualizarStatusTicket(ticketId, status, userIdToUpdate)
          .then(res => {
            this.loading = false
            this.$q.notify({
              message: `${toast[status]} || ${contatoName} (Ticket ${ticketId})`,
              type: 'positive',
              progress: true,
              actions: [{
                icon: 'close',
                round: true,
                color: 'white'
              }]
            })
            this.$store.commit('TICKET_FOCADO', {})
            if (status !== 'open') this.$router.push({ name: 'chat-empty' })
          })
          .catch(error => {
            this.loading = false
            this.$q.notify({
              message: 'Atendimento nessa conexão já iniciado ou solicite ao admin para abrir um novo atendimento na opção contato.',
              type: 'warning',
              progress: true,
              actions: [{
                icon: 'close',
                round: true,
                color: 'white'
              }]
            })
            console.error('Erro ao atualizar o status:', error)
          })
      })
    }

  }
}
