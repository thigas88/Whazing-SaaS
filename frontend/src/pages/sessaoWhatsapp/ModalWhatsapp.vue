<template>
  <q-dialog :value="modalWhatsapp"
    @hide="fecharModal"
    @show="abrirModal"
    persistent>
    <q-card class="q-pa-md"
      style="width: 500px">
      <q-card-section>
        <div class="text-h6">
          <q-icon size="50px"
            class="q-mr-md"
            :name="whatsapp.type ? `img:${whatsapp.type}-logo.png` : 'mdi-alert'" /> {{ whatsapp.id ? 'Editar' :
              'Adicionar'
            }}
          Canal
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <div class="col-12 q-my-sm">
            <q-select :disable="!!whatsapp.id"
              v-model="whatsapp.type"
              :options="optionsWhatsappsTypes"
              label="Tipo"
              emit-value
              map-options
              filled />
          </div>
          <div class="col-12">
            <c-input outlined
              label="Nome"
              v-model="whatsapp.name"
              :validator="$v.whatsapp.name"
              @blur="$v.whatsapp.name.$touch" />
          </div>
          <div class="col-12" v-if="!!whatsapp.id">
        <q-input
          filled
          hide-bottom-space
          :style="`background: ${whatsapp.color} `"
          v-model="whatsapp.color"
          :rules="['anyColor']"
          class="q-my-md"
          :dark="false"
          rounded
        >
          <template v-slot:preappend>
          </template>
          <template v-slot:append>
            <q-icon
              name="colorize"
              class="cursor-pointer"
            >
              <q-popup-proxy
                transition-show="scale"
                transition-hide="scale"
              >
                <q-color
                  format-model="hex"
                  rounded
                  default-view="palette"
                  no-header
                  bordered
                  v-model="whatsapp.color"
                />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
          </div>
          <div class="col-12 q-my-sm" v-if="whatsapp.type === 'hub'">
            <q-select v-model="selectedHubOption"
                      rounded
                      outlined
                      dense
                      :options="hubOptions"
                      label="Selecione um Hub"
                      filled />
          </div>
          <div class="col-12 q-mt-md"
            v-if="whatsapp.type === 'telegram'">
            <c-input outlined
              label="Token Telegram"
              v-model="whatsapp.tokenTelegram" />
          </div>
          <div class="q-mt-md row full-width justify-center"
            v-if="whatsapp.type === 'instagram'">
            <div class="col">
              <fieldset class="full-width q-pa-md">
                <legend>Dados da conta do Instagram</legend>
                <legend>Somente use se seu servidor é no BRASIL</legend>
                <div class="col-12 q-mb-md"
                  v-if="whatsapp.type === 'instagram'">
                  <c-input outlined
                    label="Usuário"
                    v-model="whatsapp.instagramUser"
                    hint="Seu usuário do Instagram (sem @)" />
                </div>
                <div v-if="whatsapp.type === 'instagram' && !isEdit"
                  class="text-center">
                  <q-btn flat
                    color="info"
                    class="bg-padrao"
                    icon="edit"
                    label="Nova senha"
                    @click="isEdit = !isEdit">
                    <q-tooltip>
                      Alterar senha
                    </q-tooltip>
                  </q-btn>
                </div>
                <div class="col-12"
                  v-if="whatsapp.type === 'instagram' && isEdit">
                  <c-input filled
                    label="Senha"
                    :type="isPwd ? 'password' : 'text'"
                    v-model="whatsapp.instagramKey"
                    hint="Senha utilizada para logar no Instagram"
                    placeholder="*************"
                    :disable="!isEdit">
                    <template v-slot:after>
                      <q-btn class="bg-padrao"
                        round
                        flat
                        color="negative"
                        icon="mdi-close"
                        @click="isEdit = !isEdit">
                        <q-tooltip>
                          Cancelar alteração de senha
                        </q-tooltip>

                      </q-btn>
                    </template>
                    <template v-slot:append>
                      <q-icon :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd" />
                    </template>
                  </c-input>
                </div>
              </fieldset>

            </div>

          </div>
          <!-- <q-checkbox
            class="q-ml-md"
            v-model="whatsapp.isDefault"
            label="Padrão"
          /> -->
        </div>

        <div class="row q-my-md" v-if="!!whatsapp.id">
          <div class="col-12">
            <label class="text-caption">Mensagem de Despedida do Atendimento:</label>
            <textarea ref="inputFarewellMessage"
              style="min-height: 15vh; max-height: 15vh;"
              class="q-pa-sm bg-white full-width"
              placeholder="Digite a mensagem"
              autogrow
              dense
              outlined
              v-model="whatsapp.farewellMessage" />
          </div>
          <q-btn round
            flat
            dense>
            <q-icon size="2em"
              name="mdi-variable" />
            <q-tooltip>
              Variáveis
            </q-tooltip>
            <q-menu touch-position>
              <q-list dense
                style="min-width: 100px">
                <q-item v-for="variavel in variaveis"
                  :key="variavel.label"
                  clickable
                  @click="onInsertSelectVariable(variavel.value)"
                  v-close-popup>
                  <q-item-section>{{ variavel.label }}</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
             <q-btn
                round
                flat
                class="q-ml-sm"
              >
              <q-icon
                size="2em"
                name="mdi-emoticon-happy-outline"
              />
              <q-tooltip>
                Emoji
              </q-tooltip>
              <q-menu
                anchor="top right"
                self="bottom middle"
                :offset="[5, 40]"
              >
                <VEmojiPicker
                  style="width: 40vw"
                  :showSearch="false"
                  :emojisByRow="20"
                  labelSearch="Localizar..."
                  lang="pt-BR"
                  @select="onInsertSelectEmoji"
                />
              </q-menu>
            </q-btn>
        </div>

        <q-checkbox v-if="!!whatsapp.id"
          v-model="whatsapp.sendGreetingAccepted"
          label="Enviar mensagem aceitar TICKET"
        />

        <div class="row q-my-md" v-if="whatsapp.sendGreetingAccepted == true">
          <div class="col-12">
            <label class="text-caption"> Mensagem para enviar ao aceitar TICKET</label>
            <textarea ref="inputsendGreetingAcceptedMSG"
              style="min-height: 15vh; max-height: 15vh;"
              class="q-pa-sm bg-white full-width"
              placeholder="Digite a mensagem"
              autogrow
              dense
              outlined
              v-model="whatsapp.sendGreetingAcceptedMSG" />
          <q-btn round
            flat
            dense>
            <q-icon size="2em"
              name="mdi-variable" />
            <q-tooltip>
              Variáveis
            </q-tooltip>
            <q-menu touch-position>
              <q-list dense
                style="min-width: 100px">
                <q-item v-for="variavel in variaveis2"
                  :key="variavel.label"
                  clickable
                  @click="onInsertSelectVariable2(variavel.value)"
                  v-close-popup>
                  <q-item-section>{{ variavel.label }}</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          </div>
          </div>

        <q-checkbox v-if="!!whatsapp.id"
          v-model="whatsapp.sendMsgTransfTicket"
          label="Enviar mensagem transferir TICKET"
        />

        <div class="row q-my-md" v-if="whatsapp.sendMsgTransfTicket == true">
          <div class="col-12">
            <label class="text-caption">Mensagem para enviar ao transferir TICKET</label>
            <textarea ref="inputsendMsgTransfTicketMSG"
              style="min-height: 15vh; max-height: 15vh;"
              class="q-pa-sm bg-white full-width"
              placeholder="Digite a mensagem"
              autogrow
              dense
              outlined
              v-model="whatsapp.sendMsgTransfTicketMSG" />
          <q-btn round
            flat
            dense>
            <q-icon size="2em"
              name="mdi-variable" />
            <q-tooltip>
              Variáveis
            </q-tooltip>
            <q-menu touch-position>
              <q-list dense
                style="min-width: 100px">
                <q-item v-for="variavel in variaveis2"
                  :key="variavel.label"
                  clickable
                  @click="onInsertSelectVariable3(variavel.value)"
                  v-close-popup>
                  <q-item-section>{{ variavel.label }}</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          </div>
          </div>

        <q-checkbox v-if="!!whatsapp.id"
          v-model="whatsapp.rating"
          label="Habilitar avaliação de atendimento"
        />

        <div class="row q-my-md" v-if="whatsapp.rating == true">
          <div class="col-12">
            <label class="text-caption">Mensagem para solicitar avaliação(nota do 1 ao 3):</label>
            <textarea
              style="min-height: 15vh; max-height: 15vh;"
              class="q-pa-sm bg-white full-width"
              placeholder="Digite a mensagem"
              autogrow
              dense
              outlined
              v-model="whatsapp.ratingMessage" />

            <label class="text-caption">Mensagem após cliente avaliar atendimento:</label>
            <textarea
              style="min-height: 15vh; max-height: 15vh;"
              class="q-pa-sm bg-white full-width"
              placeholder="Digite a mensagem"
              autogrow
              dense
              outlined
              v-model="whatsapp.ratingClosing" />

            <label class="text-caption">Mensagem caso avaliação seja invalida:</label>
            <textarea
              style="min-height: 15vh; max-height: 15vh;"
              class="q-pa-sm bg-white full-width"
              placeholder="Digite a mensagem"
              autogrow
              dense
              outlined
              v-model="whatsapp.ratingInvalid" />

            <label class="text-caption">Tempo em minutor que aguarda cliente avaliar:</label>

          <div class="col-12">
            <c-input outlined
              label="Tempo"
              type="number"
              v-model="whatsapp.timeRating" />
          </div>
          </div>
          </div>

        <q-checkbox v-if="!!whatsapp.id"
          v-model="whatsapp.transcription"
          label="Converter áudio em texto"
        />

        <div class="row q-my-md" v-if="whatsapp.transcription == true">
          <div class="col-12">

          <div class="col-12">
            <c-input outlined
              label="Chave da API Converter Áudio para Texto"
              v-model="whatsapp.transcriptionkey"/>
          </div>
          <td><a href="https://console.groq.com/keys" target="_blank" rel="noopener noreferrer">Obter chave da API Converter Áudio para Texto</a></td>
          </div>
        </div>

      <q-card-actions align="center"
        class="q-mt-lg">
        <q-btn flat
          label="Sair"
          class="q-px-md q-mr-lg"
          color="negative"
          v-close-popup />
        <q-btn flat
          label="Salvar"
          color="primary"
          class="q-px-md"
          @click="handleSaveWhatsApp(whatsapp)" />
      </q-card-actions>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import { UpdateWhatsapp, CriarWhatsapp } from 'src/service/sessoesWhatsapp'
import { ListarHub, AdicionarHub } from 'src/service/hub'
import cInput from 'src/components/cInput.vue'
import { copyToClipboard, Notify } from 'quasar'
import { VEmojiPicker } from 'v-emoji-picker'

export default {
  components: { cInput, VEmojiPicker },
  name: 'ModalWhatsapp',
  props: {
    modalWhatsapp: {
      type: Boolean,
      default: false
    },
    whatsAppId: {
      type: Number,
      default: null
    },
    whatsAppEdit: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
      isPwd: true,
      isEdit: false,
      hubOptions: [],
      selectedHubOption: null,
      whatsapp: {
        name: '',
        isDefault: false,
        tokenTelegram: '',
        instagramUser: '',
        instagramKey: '',
        tokenAPI: '',
        type: 'whatsapp',
        farewellMessage: '',
        ratingMessage: '',
        rating: false,
        ratingClosing: '',
        ratingInvalid: '',
        timeRating: null,
        transcription: false,
        transcriptionkey: '',
        sendMsgTransfTicket: false,
        sendGreetingAcceptedMSG: '',
        sendGreetingAccepted: false,
        sendMsgTransfTicketMSG: '',
        color: ''
      },
      optionsWhatsappsTypes: [
        { label: 'Whatsapp', value: 'whatsapp' },
        { label: 'Telegram', value: 'telegram' },
        { label: 'Hub Instagram - Facebook', value: 'hub' }
        // { label: 'Instagram', value: 'instagram' }
      ],
      variaveis: [
        { label: 'Nome Completo', value: '{{name}}' },
        { label: 'Nome', value: '{{firstName}}' },
        { label: 'Saudação', value: '{{greeting}}' },
        { label: 'Protocolo', value: '{{protocol}}' },
        { label: 'Telefone', value: '{{phoneNumber}}' },
        { label: 'Email do Contato', value: '{{email}}' },
        { label: 'Numero Ticket', value: '{{ticket_id}}' },
        { label: 'Hora', value: '{{hour}}' },
        { label: 'Data', value: '{{date}}' },
        { label: 'Fila', value: '{{fila}}' },
        { label: 'Nome atendente', value: '{{user}}' },
        { label: 'Email atendente', value: '{{userEmail}}' }
      ],
      variaveis2: [
        { label: 'Nome', value: '{{name}}' },
        { label: 'Saudação', value: '{{greeting}}' },
        { label: 'Telefone', value: '{{phoneNumber}}' },
        { label: 'Email do Contato', value: '{{email}}' },
        { label: 'Nome do Atendente', value: '{{user}}' }
      ]
    }
  },
  validations: {
    whatsapp: {
      name: { required, minLength: minLength(3), maxLength: maxLength(50) },
      isDefault: {}
    }
  },
  watch: {
    'whatsapp.type' (newType) {
      if (newType === 'hub') {
        this.listarHubOptions()
      }
    }
  },
  methods: {
    async listarHubOptions () {
      try {
        const response = await ListarHub()
        this.hubOptions = response.data
          .filter(hub => hub.channel === 'facebook' || hub.channel === 'instagram' || hub.channel === 'webchat')
          .map(hub => ({
            label: hub.name,
            value: hub
          }))
      } catch (error) {
        console.error('Erro ao listar Hubs:', error)
      }
    },
    onInsertSelectEmoji (emoji) {
      const self = this
      var tArea = this.$refs.inputFarewellMessage
      // get cursor's position:
      var startPos = tArea.selectionStart,
        endPos = tArea.selectionEnd,
        cursorPos = startPos,
        tmpStr = tArea.value
      // filter:
      if (!emoji.data) {
        return
      }
      // insert:
      self.txtContent = this.whatsapp.farewellMessage
      self.txtContent = tmpStr.substring(0, startPos) + emoji.data + tmpStr.substring(endPos, tmpStr.length)
      this.whatsapp.farewellMessage = self.txtContent
      // move cursor:
      setTimeout(() => {
        tArea.selectionStart = tArea.selectionEnd = cursorPos + emoji.data.length
      }, 10)
    },
    copy (text) {
      copyToClipboard(text)
        .then(this.$notificarSucesso('URL de integração copiada!'))
        .catch()
    },

    onInsertSelectVariable (variable) {
      const self = this
      var tArea = this.$refs.inputFarewellMessage
      // get cursor's position:
      var startPos = tArea.selectionStart,
        endPos = tArea.selectionEnd,
        cursorPos = startPos,
        tmpStr = tArea.value
      // filter:
      if (!variable) {
        return
      }
      // insert:
      self.txtContent = this.whatsapp.farewellMessage
      self.txtContent = tmpStr.substring(0, startPos) + variable + tmpStr.substring(endPos, tmpStr.length)
      this.whatsapp.farewellMessage = self.txtContent
      // move cursor:
      setTimeout(() => {
        tArea.selectionStart = tArea.selectionEnd = cursorPos + 1
      }, 10)
    },
    onInsertSelectVariable2 (variable) {
      const self = this
      var tArea = this.$refs.inputsendGreetingAcceptedMSG
      // get cursor's position:
      var startPos = tArea.selectionStart,
        endPos = tArea.selectionEnd,
        cursorPos = startPos,
        tmpStr = tArea.value
      // filter:
      if (!variable) {
        return
      }
      // insert:
      self.txtContent = this.whatsapp.sendGreetingAcceptedMSG
      self.txtContent = tmpStr.substring(0, startPos) + variable + tmpStr.substring(endPos, tmpStr.length)
      this.whatsapp.sendGreetingAcceptedMSG = self.txtContent
      // move cursor:
      setTimeout(() => {
        tArea.selectionStart = tArea.selectionEnd = cursorPos + 1
      }, 10)
    },
    onInsertSelectVariable3 (variable) {
      const self = this
      var tArea = this.$refs.inputsendMsgTransfTicketMSG
      // get cursor's position:
      var startPos = tArea.selectionStart,
        endPos = tArea.selectionEnd,
        cursorPos = startPos,
        tmpStr = tArea.value
      // filter:
      if (!variable) {
        return
      }
      // insert:
      self.txtContent = this.whatsapp.sendMsgTransfTicketMSG
      self.txtContent = tmpStr.substring(0, startPos) + variable + tmpStr.substring(endPos, tmpStr.length)
      this.whatsapp.sendMsgTransfTicketMSG = self.txtContent
      // move cursor:
      setTimeout(() => {
        tArea.selectionStart = tArea.selectionEnd = cursorPos + 1
      }, 10)
    },
    fecharModal() {
      this.whatsapp = {
        name: '',
        isDefault: false,
        tokenTelegram: '',
        instagramUser: '',
        instagramKey: '',
        tokenAPI: '',
        type: 'whatsapp',
        farewellMessage: '',
        ratingMessage: '',
        rating: false,
        ratingClosing: '',
        ratingInvalid: '',
        timeRating: null,
        transcription: false,
        sendMsgTransfTicket: false,
        sendGreetingAcceptedMSG: '',
        sendGreetingAccepted: false,
        sendMsgTransfTicketMSG: '',
        color: ''
      }
      this.isEdit = false // Reseta o estado da edição de senha
      this.$emit('update:whatsAppEdit', {})
      this.$emit('update:modalWhatsapp', false)
    },
    abrirModal () {
      if (this.whatsAppEdit.id) {
        this.whatsapp = { ...this.whatsAppEdit }
      }
    },
    async handleSaveWhatsApp (whatsapp) {
      this.$v.whatsapp.$touch()
      if (whatsapp.type !== 'hub') {
        if (this.$v.whatsapp.$error) {
          return this.$q.notify({
            type: 'warning',
            progress: true,
            position: 'top',
            message: 'Ops! Verifique os erros...',
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
        }
        try {
          if (this.whatsAppEdit.id) {
            await UpdateWhatsapp(this.whatsAppEdit.id, whatsapp)
          } else {
            await CriarWhatsapp(whatsapp)
          }
          this.$q.notify({
            type: 'positive',
            progress: true,
            position: 'top',
            message: `Whatsapp ${this.whatsAppEdit.id ? 'editado' : 'criado'} com sucesso!`,
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
          this.$emit('recarregar-lista')
          this.fecharModal()
        } catch (error) {
          console.error(error, error.data.error === 'ERR_NO_PERMISSION_CONNECTIONS_LIMIT')
          if (error.data.error === 'ERR_NO_PERMISSION_CONNECTIONS_LIMIT') {
            Notify.create({
              type: 'negative',
              message: 'Limite de conexões atingida.',
              caption: 'ERR_NO_PERMISSION_CONNECTIONS_LIMIT',
              position: 'top',
              progress: true
            })
          } else {
            console.error(error)
            return this.$q.notify({
              type: 'error',
              progress: true,
              position: 'top',
              message: 'Ops! Verifique os erros... O nome da conexão não pode existir na plataforma, é um identificador único.',
              actions: [{
                icon: 'close',
                round: true,
                color: 'white'
              }]
            })
          }
        }
      } else if (whatsapp.type === 'hub') {
        if (this.$v.whatsapp.$error) {
          return this.$q.notify({
            type: 'warning',
            progress: true,
            position: 'top',
            message: 'Ops! Verifique os erros...',
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
        }
        if (!this.selectedHubOption) {
          return this.$q.notify({
            type: 'warning',
            message: 'Por favor, selecione um Hub antes de continuar.',
            position: 'top',
            actions: [{ icon: 'close', round: true, color: 'white' }]
          })
        }
        const selectedHub = this.selectedHubOption.value
        const data = {
          name: this.whatsapp.name,
          status: 'CONNECTED',
          isDefault: false,
          type: 'hub_' + selectedHub.channel,
          wabaId: selectedHub.id,
          number: selectedHub.id,
          profilePic: selectedHub.profile_pic,
          phone: selectedHub
        }

        const payload = {
          channels: [data]
        }
        try {
          const response = await AdicionarHub(payload)
          console.log(response)
          this.$q.notify({
            type: 'positive',
            message: 'Hub adicionado com sucesso!',
            position: 'top'
          })
          this.$emit('recarregar-lista')
          this.fecharModal()
        } catch (error) {
          console.error('Erro ao adicionar o Hub:', error)
          this.$q.notify({
            type: 'negative',
            message: 'Erro ao adicionar o Hub. Por favor, tente novamente.',
            position: 'top'
          })
        }
      }
    }
  },
  destroyed () {
    this.$v.whatsapp.$reset()
  }
}
</script>

<style lang="scss" scoped>
</style>
