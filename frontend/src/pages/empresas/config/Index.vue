<template>
  <div class="mass-container container-rounded-10" :class="$q.dark.isActive ? ('text-white bg-grey-10') : 'container-border'">
    <q-list class="text-weight-medium"/>
      <q-item-label :class="$q.dark.isActive ? ('text-green') : ''">Módulo: SaaS</q-item-label>
      <q-separator spaced />
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Permitir solicitação de teste</q-item-label>
          <q-item-label caption>Habilitando essa opção poderá ser feito a solicitação de teste automático</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="allowSignup" false-value="disabled" true-value="enabled" checked-icon="check"
            keep-color :color="allowSignup === 'enabled' ? 'green' : 'negative'" size="md"
            unchecked-icon="clear" @input="atualizarConfiguracao('allowSignup')" />
        </q-item-section>
      </q-item>
      <div class="row q-px-md" v-if="allowSignup === 'enabled'">
        <div class="col-12">
          <q-input v-model="timeTest" type="number" autogrow dense outlined
            label="Tempo em dias teste:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('timeTest')" />
        </div>
      </div>

      <div v-if="allowSignup === 'enabled'">
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Habilitar envio WhatsApp enviar solicitar teste</q-item-label>
          <q-item-label caption>Vai enviar um whatsapp de boas vindas</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="apienviarwhatsapp" false-value="disabled" true-value="enabled" checked-icon="check"
            keep-color :color="apienviarwhatsapp === 'enabled' ? 'green' : 'negative'" size="md"
            unchecked-icon="clear" @input="atualizarConfiguracao('apienviarwhatsapp')" />
        </q-item-section>
      </q-item>

        <div class="col-12" v-if="apienviarwhatsapp === 'enabled'">
          <q-input v-model="apiendpoint" type="textarea" autogrow dense outlined
            label="URL DA API:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('apiendpoint')" />
          <q-input v-model="apitoken" type="textarea" autogrow dense outlined
            label="Token:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('apitoken')" />
            <textarea ref="apimessage"
              style="min-height: 15vh; max-height: 15vh;"
              class="q-pa-sm bg-white full-width"
              placeholder="Digite a mensagem"
              autogrow
              dense
              outlined
              @input="atualizarConfiguracao('apimessage')"
              v-model="apimessage" />
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

        </div>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Exibir informativo</q-item-label>
          <q-item-label caption>Mostrará uma informação em todas as páginas</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="informative" false-value="disabled" true-value="enabled" checked-icon="check"
            keep-color :color="informative === 'enabled' ? 'green' : 'negative'" size="md"
            unchecked-icon="clear" @input="atualizarConfiguracao('informative')" />
        </q-item-section>
      </q-item>

      <div class="row q-px-md" v-if="informative === 'enabled'">
        <div class="col-12">
          <q-input v-model="textinformative" type="textarea" autogrow dense outlined
            label="Informativo:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('textinformative')" />
        </div>
      </div>

      <div class="row q-px-md" v-if="informative === 'enabled'">
        <div class="col-12">
          <q-input
            label="Cor do Fundo do informativo:"
            autogrow dense outlined
            :style="`background: ${colorinformative}`"
            v-model="colorinformative"
            input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            :dark="false"
            @input="atualizarConfiguracao('colorinformative')"
          >
            <template v-slot:preappend></template>
            <template v-slot:append>
              <q-icon
                name="colorize"
                class="cursor-pointer"
                @click="openColorPicker = true"
              ></q-icon>
              <q-popup-proxy
                v-model="openColorPicker"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-color
                  format-model="hex"
                  square
                  default-view="palette"
                  no-header
                  bordered
                  v-model="colorinformative"
                  @input="atualizarConfiguracao('colorinformative')"
                />
              </q-popup-proxy>
            </template>
          </q-input>
        </div>
      </div>

      <div class="row q-px-md" v-if="informative === 'enabled'">
        <div class="col-12">
          <q-input
            label="Cor do Texto do informativo:"
            autogrow dense outlined
            :style="`background: ${colorinformativetext}`"
            v-model="colorinformativetext"
            input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            :dark="false"
            @input="atualizarConfiguracao('colorinformativetext')"
          >
            <template v-slot:preappend></template>
            <template v-slot:append>
              <q-icon
                name="colorize"
                class="cursor-pointer"
                @click="openColorPicker2 = true"
              ></q-icon>
              <q-popup-proxy
                v-model="openColorPicker2"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-color
                  format-model="hex"
                  square
                  default-view="palette"
                  no-header
                  bordered
                  v-model="colorinformativetext"
                  @input="atualizarConfiguracao('colorinformativetext')"
                />
              </q-popup-proxy>
            </template>
          </q-input>
        </div>
      </div>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Selecionar Gateway de Pagamento</q-item-label>
          <q-item-label caption>Selecione qual sistema de pagamentos pretende usar</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-select style="width: 300px" outlined dense v-model="paymentGateway" :options="optionsPagamentosTypes" map-options
            emit-value option-value="value" option-label="label" @input="atualizarConfiguracao('paymentGateway')" />
        </q-item-section>
      </q-item>

      <div class="row q-px-md" v-if="paymentGateway === 'efi'">
        <div class="col-12">
          <q-input v-model="efiClientId" type="textarea" autogrow dense outlined
            label="Chave Client ID:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('efiClientId')" />
          <q-input v-model="efiClientSecret" type="textarea" autogrow dense outlined
            label="Chave Client Secret:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('efiClientSecret')" />
          <q-input v-model="efiPixKey" type="textarea" autogrow dense outlined
            label="Chave PIX:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('efiPixKey')" />
      <!-- Campo de Upload -->
          <q-input v-model="efiCertFile" readonly type="textarea" autogrow dense outlined
            label="Certificado:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
             />
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Enviar certificado EFI</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <input type="file" @change="onFileChange" ref="fileInput" class="q-mt-md" />
        </q-item-section>
      </q-item>
        </div>
      </div>

      <div class="row q-px-md" v-if="paymentGateway === 'owen'">
        <div class="col-12">
          <q-input v-model="owenCnpj" type="textarea" autogrow dense outlined
            label="CNPJ:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('owenCnpj')" />
          <q-input v-model="owenToken" type="textarea" autogrow dense outlined
            label="Token:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('owenToken')" />
          <q-input v-model="owenSecretKey" type="textarea" autogrow dense outlined
            label="Secret Key:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('owenSecretKey')" />
        </div>
      </div>

      <div class="row q-px-md" v-if="paymentGateway === 'mercadopago'">
        <div class="col-12">
          <q-input v-model="keyMp" type="textarea" autogrow dense outlined
            label="Access Token:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('keyMp')" />
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Aceitar PIX</q-item-label>
          <q-item-label caption>Para funcionar tem que ter chave PIX cadastrada na conta</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="mp_pix" false-value="disabled" true-value="enabled" checked-icon="check"
            keep-color :color="mp_pix === 'enabled' ? 'green' : 'negative'" size="md"
            unchecked-icon="clear" @input="atualizarConfiguracao('mp_pix')" />
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Aceitar Boleto</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="mp_boleto" false-value="disabled" true-value="enabled" checked-icon="check"
            keep-color :color="mp_boleto === 'enabled' ? 'green' : 'negative'" size="md"
            unchecked-icon="clear" @input="atualizarConfiguracao('mp_boleto')" />
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Aceitar Cartão de crédito</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="mp_cartao" false-value="disabled" true-value="enabled" checked-icon="check"
            keep-color :color="mp_cartao === 'enabled' ? 'green' : 'negative'" size="md"
            unchecked-icon="clear" @input="atualizarConfiguracao('mp_cartao')" />
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Aceitar Cartão de débito caixa</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="mp_debito" false-value="disabled" true-value="enabled" checked-icon="check"
            keep-color :color="mp_debito === 'enabled' ? 'green' : 'negative'" size="md"
            unchecked-icon="clear" @input="atualizarConfiguracao('mp_debito')" />
        </q-item-section>
      </q-item>

        <q-item-section>
          <q-item-label>Configurar WEBHOOK</q-item-label>
          <q-item-label caption>Em notificações - Webhooks</q-item-label>
          <q-item-label caption>Configurar notificações</q-item-label>
          <q-item-label caption>Modo de Produção</q-item-label>
          <q-item-label caption>URL de produção  - Verificar abaixo</q-item-label>
          <q-input v-model="webhookUrl" readonly type="textarea" autogrow dense outlined
            label="URL de produção" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
             />
          <q-item-label caption>Eventos marque Pagamentos</q-item-label>
        </q-item-section>
        </div>
      </div>

      <div class="row q-px-md" v-if="paymentGateway === 'asaas'">
          <q-item-label>Minha Conta - Informações - Site (Opcional) - Preencher URL do Frontend</q-item-label>
        <div class="col-12">
          <q-input v-model="keyAsaas" type="textarea" autogrow dense outlined
            label="Chave da API:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('keyAsaas')" />

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Selecionar Formas de pagamento aceita</q-item-label>
          <q-item-label caption>Selecione qual forma de pagamento você aceita</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-select style="width: 300px" outlined dense v-model="billingType_Asaas" :options="optionsAsaasBilling" map-options
            emit-value option-value="value" option-label="label" @input="atualizarConfiguracao('billingType_Asaas')" />
        </q-item-section>
      </q-item>

        <q-item-section>
          <q-item-label>Configurar WEBHOOK</q-item-label>
          <q-item-label caption>Em integrações - Webhooks - Adicionar Webhook</q-item-label>
          <q-item-label caption>Este Webhook ficará ativo ? - sim</q-item-label>
          <q-item-label caption>URL do Webhook  - Verificar abaixo</q-item-label>
          <q-input v-model="webhookUrl" readonly type="textarea" autogrow dense outlined
            label="URL do Webhook" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
             />
          <q-item-label caption>E-mail - Seu email</q-item-label>
          <q-item-label caption>Versão da API - V3</q-item-label>
          <q-item-label caption>Fila de sincronização ativada ? - Sim</q-item-label>
          <q-item-label caption>Tipo de envio - Sequencial</q-item-label>
          <q-item-label caption>Adicionar Eventos - Cobranças - PAYMENT_CONFIRMED</q-item-label>
        </q-item-section>
        </div>
      </div>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Habilitar envio Emails</q-item-label>
          <q-item-label caption>Usado para enviar email da prataforma recuperação de senha</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="habilitasmtp" false-value="disabled" true-value="enabled" checked-icon="check"
            keep-color :color="habilitasmtp === 'enabled' ? 'green' : 'negative'" size="md"
            unchecked-icon="clear" @input="atualizarConfiguracao('habilitasmtp')" />
        </q-item-section>
      </q-item>

      <div class="row q-px-md" v-if="habilitasmtp === 'enabled'">
        <div class="col-12">
        <q-item-section>
          <q-item-label :class="$q.dark.isActive ? ('text-green') : ''">Servidor SMTP</q-item-label>
        </q-item-section>
          <q-input v-model="smtp" type="textarea" autogrow dense outlined
            label="SMTP:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('smtp')" />
          <q-input v-model="usuariosmtp" type="textarea" autogrow dense outlined
            label="Usuario SMTP:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('usuariosmtp')" />
          <q-input v-model="senhasmtp" type="textarea" autogrow dense outlined
            label="Senha SMTP:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('senhasmtp')" />
          <q-input v-model="fromemail" type="textarea" autogrow dense outlined
            label="FROM:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('fromemail')" />
          <q-input v-model="portasmtp" type="number" autogrow dense outlined
            label="Porta SMTP:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('portasmtp')" />
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Habilitar SSL/TLS</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="smtpsecure" false-value="false" true-value="true" checked-icon="check"
            keep-color :color="smtpsecure === 'true' ? 'green' : 'negative'" size="md"
            unchecked-icon="clear" @input="atualizarConfiguracao('smtpsecure')" />
        </q-item-section>
      </q-item>
        </div>
      </div>

      <div class="row q-px-md">
        <div class="col-12">
        <q-item-section>
          <q-item-label :class="$q.dark.isActive ? ('text-green') : ''">Alteração de logo / Titulo</q-item-label>
        <q-input v-model="title" type="textarea" autogrow dense outlined
            label="Titulo do Site:" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('title')" />
          </q-item-section>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Selecionar Arquivo</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-select
            style="width: 300px"
            outlined
            dense
            v-model="selectedFileType"
            :options="fileOptions"
            emit-value
            option-value="value"
            option-label="label"
            @input="handleFileTypeChange"
          />
        </q-item-section>
      </q-item>
    </div>

    <div class="col-12">
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label :class="$q.dark.isActive ? ('text-green') : ''">Whatsapp Suporte</q-item-label>
          <q-input v-model="whatsappnumber" type="number" autogrow dense outlined
                  label="Whatsapp Suporte" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
                  @input="atualizarConfiguracao('whatsappnumber')" />
        </q-item-section>
      </q-item>
    </div>

      <div class="row q-px-md" v-if="selectedFileType">
        <div class="col-12">
          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>Selecionar arquivo:</q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <input
                type="file"
                @change="onFileChangeLogo"
                ref="fileInput"
                class="q-mt-md"
                :accept="fileAcceptType"
              />
            </q-item-section>
          </q-item>
        </div>
      </div>
      <div class="row q-px-md">
      <div class="col-12">
       <q-item-section>
      <q-item-label :class="$q.dark.isActive ? ('text-green') : ''">Configurações Gerais</q-item-label>
      <q-separator spaced />
        <q-item-section>
          <q-item-label>Limitar tamanho dos arquivos / evitar travamento / Congestionar o HD do Servidor:</q-item-label>
        </q-item-section>
          <q-input v-model="downloadLimit" type="number" autogrow dense outlined
            label="Limite de Download de arquivos (MB):" input-style="min-height: 6vh; max-height: 9vh;" debounce="700"
            @input="atualizarConfiguracao('downloadLimit')"
            style="margin-bottom: 10px;"
          />
        </q-item-section>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { ListarConfiguracoesGeneral, AlterarConfiguracaoGeneral, enviarArquivoPrivado } from '../../../service/configuracoesgeneral'
import { UploadLogo } from '../../../service/empresas'
import { VEmojiPicker } from 'v-emoji-picker'

export default {
  components: { VEmojiPicker },
  name: 'ConfiguracoesSaaS',
  data() {
    return {
      optionsPagamentosTypes: [
        { label: 'Desativar', value: 'disabled' },
        { label: 'Mercado Pago', value: 'mercadopago' },
        { label: 'Asaas', value: 'asaas' },
        { label: 'EFI Bank', value: 'efi' },
        { label: 'Owen Payments', value: 'owen' }
      ],
      optionsAsaasBilling: [
        { label: 'Todos', value: 'UNDEFINED' },
        { label: 'BOLETO/PIX', value: 'BOLETO' },
        { label: 'Cartão de crédito', value: 'CREDIT_CARD' },
        { label: 'PIX', value: 'PIX' }
      ],
      fileOptions: [
        { label: 'Logo Tela Login', value: 'login' },
        { label: 'Logo Cadastro', value: 'signup' },
        { label: 'Logo Tela Atendimento', value: 'atendimento' },
        { label: 'Favicon 16x16', value: 'favicon-16x16' },
        { label: 'Favicon 32x32', value: 'favicon-32x32' },
        { label: 'Favicon 96x96', value: 'favicon-96x96' },
        { label: 'Icon 128x128', value: 'icon-128x128' },
        { label: 'Icon  192x192', value: 'icon-192x192' },
        { label: 'Icon 256x256', value: 'icon-256x256' },
        { label: 'Icon 384x384', value: 'icon-384x384' },
        { label: 'Icon 512x512', value: 'icon-512x512' },
        { label: 'Icone Favorito', value: 'favicon' }
      ],
      variaveis: [
        { label: 'Nome da Empresa', value: '{{nomeempresa}}' },
        { label: 'Nome do Responsavel', value: '{{nomeresponsavel}}' },
        { label: 'Email', value: '{{email}}' },
        { label: 'Senha', value: '{{senha}}' }
      ],
      configuracoes: [],
      webhookUrl: '',
      allowSignup: null,
      apienviarwhatsapp: null,
      apiendpoint: '',
      apitoken: '',
      apiexternalKey: '',
      apimessage: '',
      timeTest: '',
      informative: null,
      paymentGateway: null,
      textinformative: '',
      colorinformative: '',
      colorinformativetext: '',
      openColorPicker: false,
      openColorPicker2: false,
      efiClientId: '',
      efiClientSecret: '',
      efiPixKey: '',
      owenCnpj: '',
      owenToken: '',
      owenSecretKey: '',
      efiCertFile: '',
      keyMp: '',
      keyAsaas: '',
      billingType_Asaas: '',
      mp_boleto: null,
      mp_pix: null,
      mp_cartao: null,
      mp_debito: null,
      smtp: '',
      usuariosmtp: '',
      senhasmtp: '',
      fromemail: '',
      portasmtp: '',
      smtpsecure: '',
      downloadLimit: '',
      title: '',
      filename: '',
      habilitasmtp: '',
      selectedFileType: null,
      fileAcceptType: '',
      whatsappnumber: null
    }
  },
  methods: {
    generateWebhookUrl() {
      return `${process.env.URL_API}/subscription/whazing/webhook/`
    },
    onInsertSelectEmoji (emoji) {
      const self = this
      var tArea = this.$refs.apimessage
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
      self.txtContent = this.apimessage
      self.txtContent = tmpStr.substring(0, startPos) + emoji.data + tmpStr.substring(endPos, tmpStr.length)
      this.apimessage = self.txtContent
      // move cursor:
      setTimeout(() => {
        tArea.selectionStart = tArea.selectionEnd = cursorPos + emoji.data.length
      }, 10)
    },
    onInsertSelectVariable (variable) {
      const self = this
      var tArea = this.$refs.apimessage
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
      self.txtContent = this.apimessage
      self.txtContent = tmpStr.substring(0, startPos) + variable + tmpStr.substring(endPos, tmpStr.length)
      this.apimessage = self.txtContent
      // move cursor:
      setTimeout(() => {
        tArea.selectionStart = tArea.selectionEnd = cursorPos + 1
      }, 10)
    },
    async listarConfiguracoes() {
      const { data } = await ListarConfiguracoesGeneral()
      this.configuracoes = data
      this.configuracoes.forEach(el => {
        const value = el.value
        this.$data[el.key] = value
      })
    },
    async atualizarConfiguracao(key) {
      const params = {
        key,
        value: this.$data[key]
      }
      try {
        await AlterarConfiguracaoGeneral(params)
        this.$q.notify({
          type: 'positive',
          message: 'Configuração alterada!',
          progress: true,
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        })
      } catch (error) {
        console.error('error - AlterarConfiguracao', error)
        this.$data[key] = this.$data[key] === 'enabled' ? 'disabled' : 'enabled'
        this.$notificarErro('Ocorreu um erro!', error)
      }
    },
    async onFileChange(event) {
      const file = event.target.files[0]
      if (file) {
        try {
          await enviarArquivoPrivado(file)
          this.efiCertFile = file.name
          this.$q.notify({
            type: 'positive',
            message: 'Arquivo enviado com sucesso!',
            progress: true,
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
        } catch (error) {
          console.error('Erro ao enviar arquivo', error)
          this.$q.notify({
            type: 'negative',
            message: 'Erro ao enviar arquivo!',
            progress: true,
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
        }
      }
    },
    async onFileChangeLogo(event) {
      const file = event.target.files[0]
      if (file) {
        try {
          await UploadLogo(file, this.selectedFileType)
          this.filename = file.name
          this.$q.notify({
            type: 'positive',
            message: 'Arquivo enviado com sucesso!',
            progress: true,
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
        } catch (error) {
          console.error('Erro ao enviar arquivo', error)
          this.$q.notify({
            type: 'negative',
            message: 'Erro ao enviar arquivo!',
            progress: true,
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
        }
      }
    },
    handleFileTypeChange(value) {
      // Atualiza o tipo de arquivo aceito com base na seleção
      switch (value) {
        case 'login':
        case 'signup':
        case 'atendimento':
        case 'favicon-16x16':
        case 'favicon-96x96':
        case 'icon-128x128':
        case 'icon-192x192':
        case 'icon-256x256':
        case 'icon-384x384':
        case 'icon-512x512':
          this.fileAcceptType = 'image/png'
          break
        case 'favicon':
          this.fileAcceptType = 'image/x-icon'
          break
        default:
          this.fileAcceptType = ''
      }
    }
  },
  async mounted() {
    await this.listarConfiguracoes()
    this.webhookUrl = this.generateWebhookUrl()
  }
}
</script>

<style scoped>
.file-upload-container {
  position: relative;
  display: inline-block;
}

.file-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.file-upload-button {
  background-color: #007bff; /* Cor de fundo do botão no tema claro */
  color: #fff; /* Cor do texto do botão */
  border: none;
  border-radius: 12px; /* Arredondar os cantos do botão */
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
}

.file-upload-button:hover {
  background-color: #0056b3; /* Cor do botão ao passar o mouse */
}

.generate-button-dark {
  background-color: #28a745; /* Cor de fundo do botão no tema escuro */
}
</style>
