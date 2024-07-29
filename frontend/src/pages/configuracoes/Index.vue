<template>
  <div class="mass-container container-rounded-10" :class="$q.dark.isActive ? ('text-white bg-grey-10') : 'container-border'" v-if="userProfile === 'admin'">
    <q-list class="text-weight-medium">
      <q-item-label header class="text-bold text-h6 q-mb-lg">Configurações</q-item-label>

      <q-item-label caption class="q-mt-lg q-pl-sm">Módulo: Atendimento</q-item-label>
      <q-separator spaced />

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Não visualizar Tickets já atribuidos à outros usuários</q-item-label>
          <q-item-label caption>Somente o usuário responsável pelo ticket e/ou os administradores visualizarão a
            atendimento.</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="NotViewAssignedTickets" false-value="disabled" true-value="enabled" checked-icon="check"
            keep-color :color="NotViewAssignedTickets === 'enabled' ? 'green' : 'negative'" size="md"
            unchecked-icon="clear" @input="atualizarConfiguracao('NotViewAssignedTickets')" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Não visualizar Tickets no ChatBot</q-item-label>
          <q-item-label caption>Somente administradores poderão visualizar tickets que estivem interagindo com o
            ChatBot.</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="NotViewTicketsChatBot" false-value="disabled" true-value="enabled" checked-icon="check"
            keep-color :color="NotViewTicketsChatBot === 'enabled' ? 'green' : 'negative'" size="md"
            unchecked-icon="clear" @input="atualizarConfiguracao('NotViewTicketsChatBot')" />
        </q-item-section>
      </q-item>

      <q-item class="config-item" tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Habilitar guia de atendimento de Chatbots</q-item-label>
          <q-item-label caption> Habilitando esta opção será adicionada uma guia de atendimento exclusiva para os chatbots. </q-item-label>
        </q-item-section>

      <q-item-section avatar>
        <q-toggle
            v-model="chatbotLane"
            false-value="disabled"
            true-value="enabled"
            checked-icon="check"
            keep-color
            :color="chatbotLane === 'enabled' ? 'green' : 'negative'"
            size="md"
            unchecked-icon="clear"
            @input="atualizarConfiguracao('chatbotLane')"
        />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Somente administradores podem acessar os lista de contatos</q-item-label>
          <q-item-label caption>Somente os administradores visualizarão lista de contatos no sistema.</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="ContactAdmin" false-value="disabled" true-value="enabled" checked-icon="check"
            keep-color :color="ContactAdmin === 'enabled' ? 'green' : 'negative'" size="md"
            unchecked-icon="clear" @input="atualizarConfiguracao('ContactAdmin')" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Forçar atendimento via Carteira</q-item-label>
          <q-item-label caption>Caso o contato tenha carteira vínculada, o sistema irá direcionar o atendimento somente
            para os donos da carteira de clientes.</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="DirectTicketsToWallets" false-value="disabled" true-value="enabled" checked-icon="check"
            keep-color :color="DirectTicketsToWallets === 'enabled' ? 'green' : 'negative'" size="md"
            unchecked-icon="clear" @input="atualizarConfiguracao('DirectTicketsToWallets')" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Fluxo ativo para o Bot de atendimento</q-item-label>
          <q-item-label caption>Fluxo a ser utilizado pelo Bot para os novos atendimentos</q-item-label>
        </q-item-section>
        <q-btn  @click="resetarFluxoAtivo"
            flat
            icon="mdi-replay"
            color="negative"
            class="bg-padrao btn-rounded" >
          <q-tooltip content-class="bg-negative text-bold">
            Resetar Fluxo Chatbot
          </q-tooltip>
        </q-btn>
        <q-item-section avatar>
          <q-select style="width: 300px" outlined dense v-model="botTicketActive" :options="listaChatFlow" map-options
            emit-value option-value="id" option-label="name" @input="atualizarConfiguracao('botTicketActive')" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Ignorar Mensagens de Grupo</q-item-label>
          <q-item-label caption>Habilitando esta opção o sistema não abrirá ticket para grupos</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="ignoreGroupMsg" false-value="disabled" true-value="enabled" checked-icon="check" keep-color
            :color="ignoreGroupMsg === 'enabled' ? 'green' : 'negative'" size="md" unchecked-icon="clear"
            @input="atualizarConfiguracao('ignoreGroupMsg')" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Recusar chamadas no Whatsapp</q-item-label>
          <q-item-label caption>Quando ativo, as ligações de aúdio e vídeo serão recusadas,
            automaticamente.</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="rejectCalls" false-value="disabled" true-value="enabled" checked-icon="check" keep-color
            :color="rejectCalls === 'enabled' ? 'green' : 'negative'" size="md" unchecked-icon="clear"
            @input="atualizarConfiguracao('rejectCalls')" />
        </q-item-section>
      </q-item>

      <div class="row q-px-md" v-if="rejectCalls === 'enabled'">
        <div class="col-12">
          <q-input v-model="callRejectMessage" type="textarea" autogrow dense outlined
            label="Mensagem ao rejeitar ligação:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('callRejectMessage')" />
        </div>
      </div>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Permitir que usuário desabilite a assinatura</q-item-label>
          <q-item-label caption>Os usuários poderão desativar a assinatura das mensagens</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="userDisableSignature" false-value="disabled" true-value="enabled" checked-icon="check"
            keep-color :color="userDisableSignature === 'enabled' ? 'green' : 'negative'" size="md"
            unchecked-icon="clear" @input="atualizarConfiguracao('userDisableSignature')" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Listar apenas os contatos da carteira do Usuario</q-item-label>
          <q-item-label caption>Irá listar apenas os contatos da carteira que tiver vinculado ao usuario</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="userContactWallet" false-value="disabled" true-value="enabled" checked-icon="check"
            keep-color :color="userContactWallet === 'enabled' ? 'green' : 'negative'" size="md"
            unchecked-icon="clear" @input="atualizarConfiguracao('userContactWallet')" />
        </q-item-section>
      </q-item>

        <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Mensagem boas vidas ao aceitar ticket</q-item-label>
          <q-item-label caption>Irá mandar automaticamente uma mensagem informando nome atendente</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="sendGreetingAccepted" false-value="disabled" true-value="enabled" checked-icon="check"
            keep-color :color="sendGreetingAccepted === 'enabled' ? 'green' : 'negative'" size="md"
            unchecked-icon="clear" @input="atualizarConfiguracao('sendGreetingAccepted')" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Enviar mensagem de transferencia de Fila</q-item-label>
          <q-item-label caption>Irá mandar automaticamente uma mensagem informando transferencia</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="sendMsgTransfTicket" false-value="disabled" true-value="enabled" checked-icon="check"
            keep-color :color="sendMsgTransfTicket === 'enabled' ? 'green' : 'negative'" size="md"
            unchecked-icon="clear" @input="atualizarConfiguracao('sendMsgTransfTicket')" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Usuarios podem espiar ticket</q-item-label>
          <q-item-label caption>Desativando essa opção somente administradores podem ver mensagens antes de iniciar atendimento</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="spyticket" false-value="disabled" true-value="enabled" checked-icon="check"
            keep-color :color="spyticket === 'enabled' ? 'green' : 'negative'" size="md"
            unchecked-icon="clear" @input="atualizarConfiguracao('spyticket')" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Contador nas tabs superiores (Privados/Grupos)</q-item-label>
          <q-item-label caption> Habilitando esta opção o usuário irá visualizar os tickcets com mensagens abertas nas tabs superiores de conversas privadas e grupos. </q-item-label>
        </q-item-section>

      <q-item-section avatar>
        <q-toggle
            v-model="universalCounter"
            false-value="disabled"
            true-value="enabled"
            checked-icon="check"
            keep-color
            :color="universalCounter === 'enabled' ? 'green' : 'negative'"
            size="md"
            unchecked-icon="clear"
            @input="atualizarConfiguracao('universalCounter')"
        />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Resolver atendimento sem interação automaticamente</q-item-label>
          <q-item-label caption> Habilitando esta opção atendimentos ociosos serão resolvidos automaticamente. </q-item-label>
        </q-item-section>

      <q-item-section avatar>
        <q-toggle
            v-model="autoClose"
            false-value="disabled"
            true-value="enabled"
            checked-icon="check"
            keep-color
            :color="autoClose === 'enabled' ? 'green' : 'negative'"
            size="md"
            unchecked-icon="clear"
            @input="atualizarConfiguracao('autoClose')"
        />
        </q-item-section>
      </q-item>

      <div class="row q-px-md" v-if="autoClose === 'enabled'">
        <div class="col-12">
          <q-select
            v-model="autoCloseTime"
            :options="tempoOptions"
            outlined
            label="Escolha uma opção (tempo em minutos)"
            input-style="min-height: 6vh; max-height: 9vh;"
            debounce="700"
            @input="atualizarConfiguracao('autoCloseTime')"
          />
        </div>
      </div>

      <div class="row q-px-md" v-if="autoClose === 'enabled'">
        <div class="col-12">
          <q-input
            v-model="autoCloseMessage"
            type="textarea"
            autogrow
            dense
            outlined
            label="Mensagem de encerramento"
            input-style="min-height: 6vh; max-height: 9vh;"
            debounce="700"
            @input="atualizarConfiguracao('autoCloseMessage')"
          />
        </div>
      </div>

    </q-list>

<q-separator spaced />
  </div>
</template>

<script>
import { ListarChatFlow } from 'src/service/chatFlow'
import { ListarConfiguracoes, AlterarConfiguracao } from 'src/service/configuracoes'
export default {
  name: 'IndexConfiguracoes',
  data() {
    return {
      userProfile: 'user',
      tempoOptions: [
        { value: '10', label: '10 minutos' },
        { value: '60', label: '1 hora' },
        { value: '1440', label: '1 dia' },
        { value: '7200', label: '5 dias' },
        { value: '14400', label: '10 dias' }
      ],
      configuracoes: [],
      listaChatFlow: [],
      NotViewAssignedTickets: null,
      NotViewTicketsChatBot: null,
      ContactAdmin: null,
      DirectTicketsToWallets: null,
      botTicketActive: null,
      ignoreGroupMsg: null,
      userContactWallet: null,
      rejectCalls: null,
      userDisableSignature: null,
      sendGreetingAccepted: null,
      sendMsgTransfTicket: null,
      spyticket: null,
      universalCounter: null,
      autoClose: null,
      autoCloseTime: null,
      autoCloseMessage: '',
      chatbotLane: null,
      callRejectMessage: ''
    }
  },
  methods: {
    resetarFluxoAtivo() {
      this.botTicketActive = ''
      this.atualizarConfiguracao('botTicketActive')
    },
    async listarConfiguracoes() {
      const { data } = await ListarConfiguracoes()
      this.configuracoes = data
      this.configuracoes.forEach(el => {
        let value = el.value
        if (el.key === 'botTicketActive' && el.value) {
          value = +el.value
        }
        this.$data[el.key] = value
      })
    },
    async listarChatFlow() {
      const { data } = await ListarChatFlow()
      this.listaChatFlow = data.chatFlow
    },
    async atualizarConfiguracao(key) {
      if (key === 'autoCloseTime') {
        const params = { key, value: this.$data[key].value }
        try {
          await AlterarConfiguracao(params)
          this.$q.notify({
            type: 'positive',
            message: 'Configuração alterada!',
            progress: true,
            actions: [{ icon: 'close', round: true, color: 'white' }]
          })
        } catch (error) {
          console.error('error - AlterarConfiguracao', error)
          this.$data[key] = this.$data[key] === 'enabled' ? 'disabled' : 'enabled'
          this.$notificarErro('Ocorreu um erro!', error)
        }
      } else {
        const params = { key, value: this.$data[key] }
        try {
          await AlterarConfiguracao(params)
          this.$q.notify({
            type: 'positive',
            message: 'Configuração alterada!',
            progress: true,
            actions: [{ icon: 'close', round: true, color: 'white' }]
          })
        } catch (error) {
          console.error('error - AlterarConfiguracao', error)
          this.$data[key] = this.$data[key] === 'enabled' ? 'disabled' : 'enabled'
          this.$notificarErro('Ocorreu um erro!', error)
        }
      }
    }
  },
  async mounted() {
    this.userProfile = localStorage.getItem('profile')
    await this.listarConfiguracoes()
    await this.listarChatFlow()
  }
}
</script>

<style lang="scss" scoped></style>
