<template>
  <div class="container">
    <div class="login-section">
      <q-layout class="full-width">
        <q-page-container>
          <q-page class="flex justify-center items-center">
            <q-ajax-bar
              position="top"
              color="primary"
              size="5px"
            />
            <div class="login-content">
              <q-img
                :src="generateMediaUrl()"
                spinner-color="white"
                class="logo-image q-mb-lg q-px-md"
                style="max-width: 100%"
              />
              <q-separator spaced />
              <div class="text-primary">
                <div class="text-h6">Bem vindo!</div>
                <div>
                  <q-input
                    rounded
                    :color="$q.dark.isActive ? 'white ' : 'black'"
                    class="q-mb-md"
                    clearable
                    v-model="form.email"
                    placeholder="meu@email.com"
                    @blur="$v.form.email.$touch"
                    :error="$v.form.email.$error"
                    error-message="Deve ser um e-mail válido."
                    outlined
                    @keypress.enter="fazerLogin"
                  >
                    <template v-slot:prepend>
                      <q-icon
                        name="mdi-email-outline"
                        class="cursor-pointer"
                        color='primary'
                      />
                    </template>
                  </q-input>

                  <q-input
                    rounded
                    :color="$q.dark.isActive ? 'white ' : 'black'"
                    outlined
                    v-model="form.password"
                    :type="isPwd ? 'password' : 'text'"
                    @keypress.enter="fazerLogin"
                  >
                    <template v-slot:prepend>
                      <q-icon
                        name="mdi-shield-key-outline"
                        class="cursor-pointer"
                        color='primary'
                      />
                    </template>
                    <template v-slot:append>
                      <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                      />
                    </template>
                  </q-input>
              <q-btn flat color="info" no-caps dense class="q-px-sm" label="Esqueci a senha" @click="modalEsqueciSenha = true" />
                </div>
              <q-btn flat color="info" no-caps dense class="q-px-sm" label="Registre-se, agora mesmo!" @click="redirecionarParaCadastro" />
                <q-btn
                  class="q-mr-sm q-my-lg generate-button btn-rounded-50"
                  style="width: 150px"
                  :loading="loading"
                  @click="fazerLogin"
                >
                  Entrar
                  <span slot="loading">
                    <q-spinner-puff class="on-left" />Entrando...
                  </span>
                </q-btn>
              </div>
            </div>
          </q-page>
        </q-page-container>
      </q-layout>
    </div>

<!-- Modal de Recuperação de Senha -->
<q-dialog v-model="modalEsqueciSenha" persistent>
  <q-card class="q-pa-md" style="max-width: 400px; margin: auto;">
    <q-card-section>
      <div class="row items-center">
        <div class="col text-h6 text-center">Recuperar Senha</div>
        <q-btn dense flat round icon="close" @click="modalEsqueciSenha = false" class="modal-close-btn col-auto" />
      </div>
    </q-card-section>
    <q-card-section>
      <q-form @submit.prevent="enviarEmail" class="flex flex-center column">
        <q-input
          rounded
          :color="$q.dark.isActive ? 'white ' : 'black'"
          clearable
          v-model="emailRedefinicao"
          placeholder="meu@email.com"
          @blur="$v.form.email.$touch"
          :error="$v.form.email.$error"
          error-message="Deve ser um e-mail válido."
          outlined
          class="full-width"
        >
          <template v-slot:prepend>
            <q-icon
              name="mdi-email-outline"
              class="cursor-pointer"
              color='primary'
            />
          </template>
        </q-input>
        <q-btn class="q-my-lg generate-button btn-rounded-50" style="width: 150px" type="submit">
          Enviar Email
        </q-btn>
      </q-form>
      <div v-if="showAdditionalFields" class="flex flex-center column">
        <q-input
          rounded
          :color="$q.dark.isActive ? 'white ' : 'black'"
          class="q-mb-md full-width"
          clearable
          v-model="codigoVerificacao"
          label="Código de Verificação"
          outlined
        >
          <template v-slot:prepend>
            <q-icon
              name="mdi-keyboard"
              class="cursor-pointer"
              color='primary'
            />
          </template>
        </q-input>
        <q-input
          rounded
          :color="$q.dark.isActive ? 'white ' : 'black'"
          outlined
          v-model="novaSenha"
          :type="isPwd ? 'password' : 'text'"
          label="Nova Senha"
          class="q-mb-md full-width"
        >
          <template v-slot:prepend>
            <q-icon
              name="mdi-shield-key-outline"
              class="cursor-pointer"
              color='primary'
            />
          </template>
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <q-input
          rounded
          :color="$q.dark.isActive ? 'white ' : 'black'"
          outlined
          v-model="confirmarNovaSenha"
          :type="isPwd ? 'password' : 'text'"
          label="Confirmar Nova Senha"
          class="q-mb-md full-width"
        >
          <template v-slot:prepend>
            <q-icon
              name="mdi-shield-key-outline"
              class="cursor-pointer"
              color='primary'
            />
          </template>
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <q-btn class="q-my-lg generate-button btn-rounded-50" style="width: 150px" @click="redefinirSenha">
          Redefinir Senha
        </q-btn>
      </div>
    </q-card-section>
  </q-card>
</q-dialog>

  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { enviarEmailRedefinicao, redefinirSenha } from 'src/service/redifinirsenhas'

export default {
  name: 'Login',
  data () {
    return {
      modalEsqueciSenha: false,
      emailRedefinicao: '',
      codigoVerificacao: '',
      novaSenha: '',
      confirmarNovaSenha: '',
      showAdditionalFields: false,
      form: {
        email: null,
        password: null
      },
      contasCliente: {},
      isPwd: true,
      loading: false
    }
  },
  validations: {
    form: {
      email: { required, email },
      password: { required }
    },
    emailRedefinicao: { required, email },
    codigoVerificacao: { required },
    novaSenha: { required },
    confirmarNovaSenha: { required }
  },
  methods: {
    generateMediaUrl() {
      return `${process.env.URL_API}/public/logos/login.png`
    },
    redirecionarParaCadastro() {
      this.$router.push('/signup')
    },
    fazerLogin () {
      this.$v.form.$touch()
      if (this.$v.form.$error) {
        this.$q.notify('Informe usuário e senha corretamente.')
        return
      }
      this.loading = true
      this.$store.dispatch('UserLogin', this.form)
        .then(data => {
          this.loading = false
        })
        .catch(err => {
          console.error('exStore', err)
          this.loading = false
        })
    },
    clear () {
      this.form.email = ''
      this.form.password = ''
      this.$v.form.$reset()
    },
    enviarEmail() {
      if (this.$v.emailRedefinicao.$invalid) {
        this.$v.emailRedefinicao.$touch()
        return
      }
      enviarEmailRedefinicao(this.emailRedefinicao)
        .then(response => {
          if (response.data.status === 404) {
            this.$q.notify({
              type: 'negative',
              message: 'Email não encontrado'
            })
          } else {
            this.$q.notify({
              type: 'positive',
              message: 'Email enviado com sucesso!'
            })
            this.showAdditionalFields = true
          }
        })
        .catch(err => {
          console.log('API Error:', err)
          this.$q.notify({
            type: 'negative',
            message: 'Erro ao enviar email'
          })
        })
    },
    redefinirSenha() {
      if (this.novaSenha !== this.confirmarNovaSenha) {
        this.$q.notify({
          type: 'negative',
          message: 'As senhas não correspondem'
        })
        return
      }
      redefinirSenha(this.emailRedefinicao, this.codigoVerificacao, this.novaSenha)
        .then(() => {
          this.$q.notify({
            type: 'positive',
            message: 'Senha redefinida com sucesso.'
          })
          this.modalEsqueciSenha = false
          this.showAdditionalFields = false
        })
        .catch(err => {
          console.log('API Error:', err)
          this.$q.notify({
            type: 'negative',
            message: 'Erro ao redefinir senha'
          })
        })
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
}

.login-section {
  width: 400px;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: white;
  border-radius: 10px
}

.full-width {
  width: 100%;
}

.login-content {
  text-align: center;
}

.video-container {
  display: flex;
  justify-content: flex-end;
  width: 55%;
}

.logo-image {
  height: auto;
  max-width: 100%;
}

.fixed-layout {
  width: 45%;
}

</style>
