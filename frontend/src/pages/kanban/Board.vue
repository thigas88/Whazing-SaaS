<template>
  <div>
    <wait-dialog :d-wait="dialogWait" />
    <q-card class="no-shadow">
      <q-card-section class="text-h6 text-bold q-py-xs q-mb-sm">
        Kanban
      </q-card-section>
    </q-card>
    <q-card class="no-shadow">
      <q-card-section class="q-px-sm q-py-none">
        <draggable
          class="row justify-between q-mt-none cards"
          v-model="lists"
          @change="log($event)"
          group="upper"
        >
          <List
            :data="list"
            :key="list.id"
            @delete-list="deleteList"
            @update-list="updateList"
            @update-card="updateCard"
            @save-ordenacao="salvarOrdem"
            class="col-xs-12 col-sm-6 col-md-4 col-lg-3 q-mt-none q-mb-xs q-gutter-sm"
            v-for="list in lists"
          />
        </draggable>
        <q-card class="no-shadow col-auto">
          <q-card-section>
            <!-- New list button -->
            <q-btn
              @click="showDialog()"
              color="primary"
              dense
              flat
              icon="add"
              v-if="!showNew"
            />
            <!-- New list -->
            <q-form @reset="cancelNewList" @submit="newList" v-else>
              <div class="row items-center no-wrap">
                <div class="col q-mr-sm">
                  <q-card
                    class="bg-white btn-rounded q-pa-sm"
                    style="width: 100%"
                    bordered
                    flat
                  >
                    <q-card-section class="text-bold q-px-none" :class="{'text-white': $q.dark.isActive}">
                      Nova lista
                      <q-separator />
                    </q-card-section>
                    <q-card-section class="q-pa-none">
                      <q-input
                        autofocus
                        dense
                        outlined
                        v-model="newListTitle"
                        :class="{'text-white': $q.dark.isActive}"
                      />
                      <q-input
                        filled
                        dense
                        hide-bottom-space
                        :style="`background: ${titleColor} `"
                        v-model="titleColor"
                        :rules="['anyColor']"
                        class="q-my-md"
                        :class="{'text-white': $q.dark.isActive}"
                        :dark="false"
                      >
                        <template v-slot:preappend> </template>
                        <template v-slot:append>
                          <q-icon name="colorize" class="cursor-pointer" :color="$q.dark.isActive ? 'white' : 'black'">
                            <q-popup-proxy
                              transition-show="scale"
                              transition-hide="scale"
                            >
                              <q-color
                                format-model="hex"
                                square
                                default-view="palette"
                                no-header
                                bordered
                                v-model="titleColor"
                              />
                            </q-popup-proxy>
                          </q-icon>
                        </template>
                      </q-input>
                    </q-card-section>
                  </q-card>
                </div>
                <div class="col-auto">
                  <q-btn color="primary" dense flat icon="close" type="reset" />
                  <q-btn color="primary" dense flat icon="done" type="submit" />
                </div>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
const userId = +localStorage.getItem('userId')

import WaitDialog from 'src/components/WaitDialog.vue'
import {
  ListarKanbans,
  DeletarKanban,
  AlterarKanban,
  ConsultarContatosKanbanService,
  CriarKanban
} from 'src/service/kanban'
import { ListarFilas } from 'src/service/filas'
import { DadosUsuario, UpdateUsuarios } from 'src/service/user'

import _ from 'lodash'

import draggable from 'vuedraggable'
import List from './List.vue'

export default {
  name: 'Board',
  components: {
    List,
    WaitDialog,
    draggable
  },
  data: (vm) => ({
    // userId: vm.$store.getters.userId,
    // profile:
    dialogWait: false,
    // pesquisaTickets: {
    //   showAll: true,
    //   dateStart: format(sub(new Date(), { days: 30 }), 'yyyy-MM-dd'),
    //   dateEnd: format(new Date(), 'yyyy-MM-dd'),
    //   queuesIds: [],
    // },
    // tickets: [],
    contatos: [],
    filas: [],
    showNew: false,
    usuario: {},
    newListTitle: '',
    titleColor: null,
    lists: [
      {
        id: 0,
        name: 'Contatos',
        cards: [
          // {
          //   id: 0,
          //   title: 'Run full diagnostics',
          //   description:
          //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet odio erat.',
          //   duedate: '23.9.2019',
          // },
        ]
      }
    ]
  }),
  async mounted() {
    this.userProfile = localStorage.getItem('profile')
    try {
      this.dialogWait = true
      const { data } = await ListarFilas()
      this.filas = data
      const { data: usu } = await DadosUsuario(userId)
      this.usuario = usu
      await this.consultarContatos()
      await this.listarKanbans()
      this.ordenar()
    } finally {
      this.dialogWait = false
    }
  },
  methods: {
    log(evt) {
      // console.log('upper', evt)
    },
    showDialog() {
      this.newListTitle = ''
      this.titleColor = null
      this.showNew = true
    },
    // [{"0":[1,12,5,4,6,2,10,9,8,7,3]},{"1":[13]},{"2":[]},{"3":[]}]
    ordenar() {
      const ordenacao = this.usuario.kanbanOrder || [] // JSON.parse(localStorage.getItem('ordenacao') || '[]')
      let itemsOthersArraysOrdenacao = []
      const contactIds = new Set()
      // pega lista a partir do 1 pois 0 é a lista original de tickets
      for (let i = 1; i < this.lists.length; i++) {
        const id = this.lists[i].id
        const savedOrdem = ordenacao.find((el) => el.id == id)?.value || []
        itemsOthersArraysOrdenacao = [
          ...itemsOthersArraysOrdenacao,
          ...savedOrdem
        ]
        this.lists[i].cards = this.doOrdenacao(this.contatos, savedOrdem)
        const mc = this.lists[i].cards.map((o) => {
          if (o.id) return o.id
        })
        for (const el of mc) {
          contactIds.add(el)
        }
      }
      const arrContactIds = [...contactIds]
      const tempContatos = this.contatos.filter(
        (x) =>
          !itemsOthersArraysOrdenacao.includes(x.id) &&
          !arrContactIds.includes(x.id)
      )
      this.lists[0].cards = _.uniqBy(tempContatos, (obj) => obj.id)
      this.lists = _.cloneDeep(this.lists)
    },

    doOrdenacao(list, ordenacoes) {
      // First create an index object, with _.reduce, like this
      const indexObject = _.reduce(
        list,
        (result, currentObject) => {
          result[currentObject.id] = currentObject
          return result
        },
        {}
      )
      // const temp = _.map(ordenacoes, (el) => {
      //   return indexObject?.[10101]
      // })
      // ordenacoes.push(10000)
      const temp = ordenacoes.reduce(function (res, el) {
        const cel = indexObject[el]
        if (cel) {
          res.push(cel)
        }
        return res
      }, [])
      return temp
    },
    async salvarOrdem() {
      const ordenacao = []
      for (const tasks of this.lists) {
        const tempCardsIds = tasks.cards.map((el) => el.id)
        const tempListId = tasks.id
        const ob = { id: tempListId, value: tempCardsIds }
        ordenacao.push(ob)
      }
      const { email, id, name, tenantId, password } = this.usuario

      const params = {
        email,
        id,
        name,
        tenantId,
        password,
        kanbanOrder: ordenacao
      }

      if (this.$store.state.user.isAdmin) {
        params.profile = this.usuario.profile
      }

      try {
        await UpdateUsuarios(params.id, params)
        this.usuario.kanbanOrder = params.kanbanOrder || []
        // this.$notificarSucesso('Salvo.')
        // localStorage.setItem('ordenacao', JSON.stringify(ordenacao))
      } catch (error) {
        this.$notificarErro(error)
        console.log(error)
      }
    },
    async getKanbans() {
      const { data } = await ListarKanbans()
      return data
    },
    async listarKanbans() {
      const data = await this.getKanbans()
      // concatena os tickets com a lista de kanbans
      this.lists = [...this.lists, ...data]
      const nmap = this.lists.map((el) => {
        el.filas = this.filas
        if (el.id !== 0) {
          el.cards = []
        } else {
          el.cards = this.contatos
        }
        // console.log(el)
        return el
      })
      //
      this.lists = _.cloneDeep(nmap)
    },
    async consultarContatos() {
      const ordenacao = this.usuario.kanbanOrder || []
      const Ids = new Set()
      const values = ordenacao.map((o) => o.value)
      for (let i = 0; i < values.length; i++) {
        if (values[i].length > 0) {
          Ids.add(...values[i])
        }
      }
      // const contatoIds = Array.from(Ids).map((o) => +o)
      try {
        const { data } = await ConsultarContatosKanbanService({})
        // this.tickets = data
        this.contatos = data
      } catch (error) {
        console.error(error)
        this.$notificarErro('Erro ao consultar atendimentos', error)
      }
    },
    async newList() {
      try {
        const { data } = await CriarKanban({
          name: this.newListTitle,
          color: this.titleColor
        })
        this.lists.push({
          id: data.id,
          name: this.newListTitle,
          cards: [],
          filas: this.filas,
          color: this.titleColor
        })
        this.showNew = false
        this.newListTitle = ''
        this.$emit('modal-kanban:criada', data)
        this.$q.notify({
          type: 'positive',
          progress: true,
          position: 'top',
          message: 'Lista Kanban criada!',
          actions: [
            {
              icon: 'close',
              round: true,
              color: 'white'
            }
          ]
        })
      } catch (error) {
        console.error(error)
        this.$notificarErro('Ocorreu um erro!', error)
      }
    },
    cancelNewList() {
      this.newListTitle = ''
      this.titleColor = null
      this.showNew = false
    },
    updateCard(ob) {
      const { contato } = ob

      // Percorre as listas dentro de this.lists
      for (const list of this.lists) {
        const cardIndex = list.cards.findIndex(
          (item) => item.id === contato.id
        )

        // Se encontrar o card com o mesmo id do contato
        if (cardIndex >= 0) {
          const { deadline, commentary, kanbanPrice } = contato

          // Atualiza os valores do card com as novas informações
          list.cards[cardIndex] = {
            ...list.cards[cardIndex],
            deadline,
            commentary,
            kanbanPrice,
            contact: contato // Atualiza o contato completo
          }
        }
      }

      // Faz uma cópia profunda para garantir que as reativas mudanças sejam percebidas
      this.lists = _.cloneDeep(this.lists)
    },
    async updateList(newdata) {
      this.salvarOrdem()
      try {
        const { data } = await AlterarKanban(newdata)
        this.$q.notify({
          type: 'positive',
          progress: true,
          position: 'top',
          message: `Lista ${data.name} atualizada!`,
          actions: [
            {
              icon: 'close',
              round: true,
              color: 'white'
            }
          ]
        })
      } catch (error) {
        console.error(error)
        this.$notificarErro('Ocorreu um erro!', error)
      }
    },
    async deleteList(data) {
      // devolve cards para a a lista padrao
      this.lists[0].cards = [...this.lists[0].cards, ...data.cards]
      this.salvarOrdem()
      await DeletarKanban({ id: data.id })
      let newLists = [...this.lists]
      newLists = newLists.filter((f) => f.id !== data.id)

      this.lists = [...newLists]
      this.$q.notify({
        type: 'positive',
        progress: true,
        position: 'top',
        message: `Item ${data.name} deletado!`,
        actions: [
          {
            icon: 'close',
            round: true,
            color: 'white'
          }
        ]
      })
    }
  }
}
</script>
<style lang="scss">
// .cards::after {
// content: '';
// flex: auto;
// }
</style>
