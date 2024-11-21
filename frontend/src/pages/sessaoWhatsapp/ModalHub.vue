<template>
  <q-dialog :value="value" @hide="close" persistent>
    <q-card class="container-rounded-10 q-pa-md" style="width: 500px">
      <q-card-section class="row q-col-gutter-md">
        <div class="text-h6">Alterar Hub Token</div>
      </q-card-section>
      <q-card-section class="row q-col-gutter-md">
        <q-input class="col-12" v-model="hubToken" label="Hub Token" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancelar" @click="close" />
        <q-btn flat label="Salvar" color="primary" @click="saveHubToken" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { ListarConfiguracoes, AlterarConfiguracao } from 'src/service/configuracoes'

export default {
  name: 'HubModal',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      hubToken: ''
    }
  },
  methods: {
    async listarConfiguracoes() {
      try {
        const { data } = await ListarConfiguracoes()
        const hubConfig = data.find(el => el.key === 'hubToken')
        if (hubConfig) {
          this.hubToken = hubConfig.value
        }
      } catch (error) {
        this.$q.notify({
          type: 'negative',
          message: 'Erro ao carregar configuração do Hub Token',
          progress: true
        })
      }
    },
    close() {
      this.$emit('input', false)
      this.hubToken = ''
    },
    async saveHubToken() {
      const params = { key: 'hubToken', value: this.hubToken }
      try {
        await AlterarConfiguracao(params)
        this.$q.notify({
          type: 'positive',
          message: 'Hub Token alterado com sucesso!',
          progress: true,
          actions: [{ icon: 'close', round: true, color: 'white' }]
        })
        this.$emit('input', false)
        this.close()
      } catch (error) {
        this.$q.notify({
          type: 'negative',
          message: 'Erro ao salvar Hub Token',
          progress: true
        })
      }
    }
  },
  watch: {
    value(val) {
      if (val) {
        this.listarConfiguracoes()
      }
    }
  }
}
</script>
