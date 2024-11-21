<template>
  <!-- <div style="max-height: 50vh; min-width: 320px" class="scroll"> -->
  <!-- :style="
      data.color
        ? `border-top:6px solid ${data.color} !important;`
        : `border-top:6px solid ${$q.isDark ? 'grey' : 'grey'}`
    " -->
  <q-card
    class="no-shadow scroll q-my-none q-mt-none scrollBar"
    style="max-height: 58vh"
    :style="
      data.color
        ? `border:2px solid ${data.color}; border-top:8px solid ${data.color};`
        : `border:2px solid grey; border-top:8px solid grey;`
    "
  >
    <q-card-section class="q-py-sm q-ma-sm">
      <div class="row items-center no-wrap">
        <div class="col">
          <div
            @click="editTitle = true"
            class="text-subtitle1 text-weight-medium q-px-sm"
            :class="{
    'text-grey-10': !$q.dark.isActive,  // Modo normal: texto cinza escuro
    'text-white': $q.dark.isActive      // Modo dark: texto branco
  }"
            :style="`border-left: 5px; border-radius: 10px; cursor: pointer;`"
            v-if="!editTitle"
          >
            {{ data.name }}
            <q-badge color="positive" floating>{{ data.cards.length }}</q-badge>
            <q-badge color="cyan">{{`$ ${sumPrices(data.cards)}`}}</q-badge>
          </div>
          <!-- <q-form @reset="cancelNewTitle" @submit="saveTitle" v-else> -->
          <q-form v-else>
            <div class="row items-center no-wrap">
              <div class="col q-mr-sm">
                <!-- <q-input autofocus dense outlined v-model="newTitle" /> -->
                <q-card
                  class="bg-white btn-rounded q-pa-sm"
                  style="width: 100%"
                  bordered
                  flat
                >
                  <q-card-section class="text-bold q-px-none">
                    Editar
                    <q-separator />
                  </q-card-section>
                  <q-card-section class="q-pa-none">
                    <q-input autofocus dense outlined v-model="newListTitle" />
                    <q-input
                      filled
                      dense
                      hide-bottom-space
                      :style="`background: ${titleColor} `"
                      v-model="titleColor"
                      class="q-my-md"
                      :dark="false"
                    >
                      <template v-slot:preappend> </template>
                      <template v-slot:append>
                        <q-icon name="colorize" class="cursor-pointer">
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
                <q-btn
                  color="primary"
                  dense
                  flat
                  icon="close"
                  @click="cancelNewTitle"
                />
                <q-btn
                  color="primary"
                  dense
                  flat
                  icon="done"
                  @click="saveTitle"
                />
              </div>
            </div>
          </q-form>
        </div>
        <div class="" v-if="!editTitle && data.id !== 0">
          <q-btn :color="$q.dark.isActive ? 'white' : 'black'" dense flat icon="more_horiz">
            <q-tooltip
              anchor="top middle"
              self="bottom middle"
              :offset="[10, 10]"
            >Opções</q-tooltip
            >
            <q-menu auto-close fit>
              <q-list>
                <!-- <q-item clickable>
                  <q-item-section @click="newCard(data)"
                    >Novo card</q-item-section
                  >
                </q-item>
                <q-separator /> -->
                <q-item clickable>
                  <q-item-section
                    @click="deleteList(data)"
                    :disabled="data.id == 0"
                  >Remove lista</q-item-section
                  >
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </div>
    </q-card-section>
    <q-card-section class="q-pt-none q-px-none">
      <!-- v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false" -->
      <draggable
        :list="data.cards"
        group="cards"
        :animation="200"
        ghost-class="ghost-card"
        @change="logInner($event, data.name)"
      >
        <!-- <transition-group type="transition" name="flip-list"> -->
        <!-- <div v-for="(contato, index) in data.cards" :key="`key-${index}`">
          {{ contato[0].name }}
        </div> -->
        <ItemKanban
          v-for="(contato, index) in data.cards"
          :key="`key-${index}`"
          :contato="contato"
          :filas="filas"
          :title-color="data.color"
          class="anyhover"
          @update-contato="updateContato"
        >
        </ItemKanban>
        <!-- </transition-group> -->
      </draggable>
      <!-- <span class="flex justify-center q-mt-md">
        <q-btn @click="newCard(data)" color="primary" dense flat icon="add" />
      </span> -->
    </q-card-section>
  </q-card>
  <!-- </div> -->
</template>

<script>
import draggable from 'vuedraggable'
import ItemKanban from './ItemKanban.vue'

export default {
  name: 'List',
  props: ['data', 'filas'],
  components: {
    draggable,
    // Card,
    ItemKanban
  },
  data: (vm) => ({
    drag: false,
    editTitle: false,
    titleColor: vm.data.color,
    newListTitle: vm.data.name
  }),
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      }
    }
  },
  methods: {
    sumPrices(cards) {
      let soma = 0
      cards.forEach((item) => {
        soma += Number(item?.kanbanPrice || 0)
      })
      return soma.toFixed(2) // Retorna o valor com 2 casas decimais
    },
    updateContato(ob) {
      this.$emit('update-card', ob)
    },
    logInner(evt, group) {
      console.log('inner', evt, group)
      this.$emit('save-ordenacao')
    },
    saveTitle() {
      this.data.name = this.newListTitle
      this.data.color = this.titleColor
      this.$emit('update-list', this.data)
      this.editTitle = false
    },
    cancelNewTitle() {
      this.newListTitle = this.data?.name || ''
      this.titleColor = this.data?.color || ''
      this.editTitle = false
    },
    // newCard(list) {
    //   list.cards.push({
    //     id: list.cards.length,
    //     date: new Date().toLocaleDateString('fi-FI'),
    //     title: 'New #' + Math.floor(Math.random() * 100),
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet odio erat.',
    //   })
    // },
    deleteList() {
      this.$emit('delete-list', this.data)
    }
  },
  async mounted() {
    // Recuperando o valor de localStorage
    this.userProfile = localStorage.getItem('profile')
  }
}
</script>

<style>
.button {
  margin-top: 35px;
}

.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.list-group {
  min-height: 20px;
}

.list-group-item {
  cursor: move;
}

.list-group-item i {
  cursor: pointer;
}
/* .scrollBar::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.1);
}

.scrollBar::-webkit-scrollbar {
  width: 6px;
  background-color: rgba(0, 0, 0, 0.1);
}

.scrollBar::-webkit-scrollbar-thumb {
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
} */

.scrollBar {
  scrollbar-width: auto;
  scrollbar-color: #5472a0 #ffffff;
}

/* Chrome, Edge, and Safari */
.scrollBar::-webkit-scrollbar {
  width: 13px;
}

.scrollBar::-webkit-scrollbar-track {
  background: #ffffff;
}

.scrollBar::-webkit-scrollbar-thumb {
  background-color: #5472a0;
  border-radius: 10px;
  border: 3px solid #ffffff;
}

.ghost-card {
  opacity: 0.5;
  background: #f7fafc;
  border: 1px solid #4299e1;
}
/* .anyhover:hover {
  animation: move 1.5s ease-in-out forwards;
}

@keyframes float {
  100% {
    transform: rotateX(360deg);
  }
} */
</style>
