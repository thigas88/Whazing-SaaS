<template>
  <q-card style="min-width: 400px">
    <wait-dialog :d-wait="dialogWait" />
    <q-card-section class="bg-secondary q-py-xs">
      <div class="text-h6">Comentários</div>
    </q-card-section>
    <!-- Deadline -->
    <q-card-section>
      <q-datetime-picker
        dense
        rounded
        hide-bottom-space
        outlined
        stack-label
        bottom-slots
        hint="Data"
        v-model="deadline"
        mode="date"
        color="primary"
        format24h
      />
    </q-card-section>

    <!-- Description -->
    <q-card-section>
      <div>Comentário</div>
      <q-form>
        <q-input
          autofocus
          dense
          outlined
          type="textarea"
          v-model="commentary"
        />
      </q-form>
    </q-card-section>
    <q-card-actions align="right" class="q-mt-xs column items-end q-mr-sm">
      <div>Valor em pauta($)</div>
      <q-form>
        <q-input
          dense
          v-model="kanbanPrice"
          input-class="text-right"
          @blur="formatKanbanPrice"
        ></q-input>
      </q-form>
    </q-card-actions>
    <q-card-actions align="right" class="q-mt-xs">
      <q-btn
        flat
        label="Cancelar"
        color="negative"
        v-close-popup
        class="q-mr-md"
      />
      <q-btn flat label="Salvar" color="primary" @click="editarContato()" />
    </q-card-actions>
  </q-card>
</template>

<script>
// import { parse } from 'date-fns'
import { ObterContato, EditarContato } from 'src/service/contatos'
import WaitDialog from 'src/components/WaitDialog.vue'

export default {
  name: 'openCard',
  props: {
    dataCard: {
      type: Object,
      default: () => {}
    }
  },
  components: { WaitDialog },
  data: (vm) => ({
    dialogWait: false,
    deadline: vm.dataCard.deadline,
    commentary: vm.dataCard.commentary,
    kanbanPrice: vm.dataCard.kanbanPrice
  }),
  computed: {
    teste() {
      return this.dataCard.commentary
    }
  },
  methods: {
    formatKanbanPrice() {
      if (this.kanbanPrice) {
        // Substitui qualquer vírgula por ponto para garantir que está no formato correto
        const price = this.kanbanPrice.toString().replace(',', '.')

        // Converte para número float e depois garante o formato com duas casas decimais
        this.kanbanPrice = parseFloat(price).toFixed(2)
      }
    },
    async editarContato() {
      this.dialogWait = true

      try {
        // const { data } =
        const { data } = await ObterContato(this.dataCard.contactId)
        const ddl = this.deadline
        //   ? parse(this.deadline, 'dd/MM/yyyy', new Date())
        //   : null
        // console.log(ddl.toUTCString())
        const contato = {
          ...data,
          deadline: ddl,
          commentary: this.commentary,
          kanbanPrice: this.kanbanPrice ? Number(this.kanbanPrice) : 0
        }
        await EditarContato(contato.id, contato)
        this.$q.notify({
          type: 'info',
          progress: true,
          position: 'top',
          textColor: 'black',
          message: 'Contato editado!',
          actions: [
            {
              icon: 'close',
              round: true,
              color: 'white'
            }
          ]
        })
        this.$emit('hide', contato)
      } catch (error) {
        console.log(error)
        this.$notificarErro('Ocorreu um erro ao salvar dados', error)
      } finally {
        this.dialogWait = false
      }
    }
  }
}
</script>

<style scoped></style>
