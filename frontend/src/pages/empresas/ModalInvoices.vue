<template>
  <div>
    <q-dialog :value="modalInvoices" @hide="fecharModal" @show="abrirModal" key="modalInvoices">
      <div style="width: 700px; max-width: 80vw;">
 <q-table title="Faturas em aberto" :data="financeiro" :columns="columns" row-key="id" :grid="$q.screen.xs">
      <template v-slot:top-left>
        <div>
          <h2  :class="$q.dark.isActive ? ('text-green') : ''">
            <q-icon name="mdi-cash-multiple q-pr-sm" />
            Faturas em aberto
          </h2>
        </div>

      </template>
      <template v-slot:body-cell-value="props">
        <q-td key="value" :props="props">
          R$ {{ props.row.value.toFixed(2).replace('.', ',') }}
        </q-td>
      </template>
      <template v-slot:body-cell-dueDate="props">
        <q-td key="dueDate" :props="props">
          {{ formatDate(props.row.dueDate) }}
        </q-td>
      </template>
      <template v-slot:body-cell-status="props">
        <q-td
          key="status"
          :props="props"
          :style="getStatusStyle(props.row.status, props.row.dueDate)"
        >
          {{ getStatusText(props.row.status, props.row.dueDate) }}
        </q-td>
      </template>
      <template v-slot:body-cell-acoes="props">
        <q-td class="text-center">
            <q-btn flat round icon="mdi-currency-usd" @click="paidInvoice(props.row)">
              <q-tooltip content-class="shadow-4" :offset="[10, 10]">
                Marcar como Paga
              </q-tooltip>
            </q-btn>
            <q-btn flat round icon="eva-trash-outline" @click="deletarInvoice(props.row)">
              <q-tooltip content-class="shadow-4" :offset="[10, 10]">
                Deletar Fatura
              </q-tooltip>
            </q-btn>
        </q-td>
      </template>
    </q-table>
      </div>
    </q-dialog>

  </div>
</template>

<script>
import { format, parseISO, isBefore, addDays } from 'date-fns'
import { AdminListarInvoices, PaidInvoice, DeletarInvoice } from '../../service/empresas'
import { mapGetters } from 'vuex'
export default {
  name: 'ModalInvoices',
  props: {
    modalInvoices: {
      type: Boolean,
      default: false
    },
    tenant: {
      type: Object,
      default: () => { return { id: null } }
    }
  },
  computed: {
    ...mapGetters([
      'empresas'
    ]),
    columns() {
      return [
        { name: 'id', label: '#', field: 'id', align: 'left', sortable: false },
        { name: 'detail', label: 'Plano', field: 'detail', align: 'left', sortable: false },
        { name: 'value', label: 'Valor', field: 'value', align: 'center', sortable: false },
        { name: 'dueDate', label: 'Data Venc.', field: 'dueDate', align: 'center', sortable: false },
        { name: 'status', label: 'Status', field: 'status', align: 'center', sortable: false },
        { name: 'acoes', label: 'Ações', field: 'acoes', align: 'center' }
      ]
    }
  },
  data() {
    return {
      financeiro: []
    }
  },
  methods: {
    paidInvoice(invoice) {
      this.$q.dialog({
        title: 'Atenção!!',
        message: `Deseja realmente marcar como pago "${invoice.id}"?`,
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
        this.loading = true
        try {
          await PaidInvoice(invoice)
          this.$q.notify({
            type: 'positive',
            progress: true,
            position: 'top',
            message: `Fatura ${invoice.id} marcada como paga!`,
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
          this.fecharModal()
        } catch (error) {
          console.error('Erro ao marcar fatura', error)
          this.$q.notify({
            type: 'negative',
            progress: true,
            position: 'top',
            message: 'Erro ao marcar como pago. Por favor, tente novamente.',
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
        } finally {
          this.loading = false
        }
      })
    },
    deletarInvoice(invoice) {
      this.$q.dialog({
        title: 'Atenção!!',
        message: `Deseja realmente deletar a fatura "${invoice.id}"?`,
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
        this.loading = true
        try {
          await DeletarInvoice(invoice)
          this.$q.notify({
            type: 'positive',
            progress: true,
            position: 'top',
            message: `Fatura ${invoice.id} deletada!`,
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
          this.fecharModal()
        } catch (error) {
          console.error('Erro ao deletar fatura', error)
          this.$q.notify({
            type: 'negative',
            progress: true,
            position: 'top',
            message: 'Erro ao deletar a fatura. Por favor, tente novamente.',
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
        } finally {
          this.loading = false
        }
      })
    },
    formatDate(date) {
      try {
        return format(parseISO(date), 'dd/MM/yyyy')
      } catch (error) {
        console.error('Invalid date format:', error)
        return date // Fallback to original date if parsing/formatting fails
      }
    },
    getStatusStyle(status, dueDate) {
      const currentDate = addDays(new Date(), -1)
      const parsedDueDate = parseISO(dueDate)
      if (status === 'paid') {
        return { backgroundColor: 'green', color: 'black', fontWeight: 'bold' }
      } else if (status === 'open') {
        if (isBefore(currentDate, parsedDueDate)) {
          return { backgroundColor: 'yellow', color: 'black', fontWeight: 'bold' }
        } else {
          return { backgroundColor: 'red', color: 'black', fontWeight: 'bold' }
        }
      }
      return {}
    },
    getStatusText(status, dueDate) {
      const currentDate = addDays(new Date(), -1)
      const parsedDueDate = parseISO(dueDate)
      if (status === 'paid') {
        return 'PAGO'
      } else if (status === 'open') {
        if (isBefore(currentDate, parsedDueDate)) {
          return 'EM ABERTO'
        } else {
          return 'VENCIDO'
        }
      }
      return status
    },
    async abrirModal() {
      const { data } = await AdminListarInvoices(this.tenant.id)
      this.financeiro = data
    },
    fecharModal() {
      this.$emit('update:tenant', {})
      this.$emit('update:modalInvoices', false)
    }
  }
}
</script>

<style lang="scss" scoped></style>
