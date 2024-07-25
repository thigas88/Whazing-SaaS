<template>
  <div class="wall WAL position-relative bg-grey-3" :style="style">
    <div class="bar-background">s</div>
    <q-layout class="wall-box WAL__layout shadow-3" container view="lHr LpR lFr">
      <q-drawer
        v-model="drawerTickets"
        @hide="drawerTickets = false"
        show-if-above
        :overlay="$q.screen.lt.md"
        persistent
        :breakpoint="769"
        bordered
        :width="$q.screen.lt.md ? $q.screen.width : 380"
        content-class="hide-scrollbar full-width"
      >
        <q-toolbar class="q-pr-none menu-header menu-left q-gutter-xs full-width" style="height: 64px">
          <q-btn
            flat
            class="chat-button-avatar" size="lg">
            <q-avatar size="sm">
              {{ $iniciaisString(username) }}
            </q-avatar>
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item-label header> Olá! <b> {{ username }} </b> </q-item-label>
                <cStatusUsuario @update:usuario="atualizarUsuario"
                  :usuario="usuario" />
                <q-item clickable
                  v-close-popup
                  @click="abrirModalUsuario">
                  <q-item-section>Perfil</q-item-section>
                </q-item>
                <q-item clickable
                  v-close-popup
                  @click="efetuarLogout">
                  <q-item-section>Sair</q-item-section>
                </q-item>
              </q-list>
            </q-menu>

            <q-tooltip>Usuário</q-tooltip>
          </q-btn>
          <q-space />
          <q-btn flat class="btn-rounded" :class="$q.dark.isActive ? 'text-white bg-black' : ''" icon="eva-message-circle-outline" @click="() => $router.push({ name: 'chat-interno' })" :disable="loadingMount">
            <q-tooltip content-class="text-bold"> Chat Interno </q-tooltip>
            <q-badge v-if="this.notificacaoInternaNaoLida > 0"
              color="red"
              floating
              class="badge-left"
            > {{ this.notificacaoInternaNaoLida }}</q-badge>
          </q-btn>
          <q-btn flat class="btn-rounded" :class="$q.dark.isActive ? 'text-white bg-black' : ''" icon="refresh" @click="reloadPage" :disable="loadingMount">
            <q-tooltip content-class="text-bold"> Atualizar Página </q-tooltip>
          </q-btn>
          <q-btn style="margin-right: 5px;" flat class="btn-rounded" :class="$q.dark.isActive ? 'text-white bg-black' : ''" icon="eva-undo-outline" @click="() => $router.push({ name: 'home-dashboard' })" :disable="loadingMount">
            <q-tooltip content-class="text-bold"> Retornar ao menu </q-tooltip>
          </q-btn>
        </q-toolbar>
        <q-linear-progress
          v-if="loadingMount"
          indeterminate
          color="primary"
          class="absolute-top"
          style="width: 100%;"
        />
        <StatusWhatsapp v-if="false" class="q-mx-sm full-width" />
        <q-toolbar v-show="toolbarSearch" class="menu-container column q-gutter-sm items-center full-width">
          <div class="search full-width">
          <q-input v-model="pesquisaTickets.searchParam" dense outlined rounded type="search" class="full-width" :debounce="700" @input="BuscarTicketFiltro()" >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
          <div class="row-buttons full-width">
            <q-btn flat class="bg-grey-3 btn-rounded-50" :color="cFiltroSelecionado ? 'deep-orange-9' : 'primary'" style="flex: 1;">
              Filtro
            <q-menu content-class="shadow-10 no-scroll container-rounded-10 max-height-none" style="max-height: 100vh !important">
              <div class="row q-pa-sm" style="min-width: 350px; max-width: 350px">
                <div class="q-ma-sm">
                  <div class="text-h6 q-mb-md font-family-main">Filtros Avançados</div>
                  <q-toggle
                    v-if="profile === 'admin'"
                    class="full-width"
                    v-model="pesquisaTickets.showAll"
                    label="(Admin) - Visualizar Todos"
                    :class="{ 'q-mb-lg': pesquisaTickets.showAll }"
                    @input="debounce(BuscarTicketFiltro(), 700)"
                  />
                  <q-toggle toggle-indeterminate v-model="ordenar" label="Ordenar por data de criação" @input="loadOrdenar()" />
                  <q-separator class="q-mb-md" v-if="!pesquisaTickets.showAll" />
                  <div v-if="!pesquisaTickets.showAll">
                    <q-select
                      :disable="pesquisaTickets.showAll"
                      rounded
                      dense
                      outlined
                      hide-bottom-space
                      emit-value
                      map-options
                      multiple
                      options-dense
                      use-chips
                      label="Filas"
                      color="primary"
                      v-model="pesquisaTickets.queuesIds"
                      :options="cUserQueues"
                      :input-debounce="700"
                      option-value="id"
                      option-label="queue"
                      @input="debounce(BuscarTicketFiltro(), 700)"
                      input-style="width: 300px; max-width: 300px;"
                    />

                    <q-list dense class="q-my-md">
                      <q-item tag="label" v-ripple>
                        <q-item-section avatar>
                          <q-checkbox v-model="pesquisaTickets.status" val="open" color="primary" keep-color @input="debounce(BuscarTicketFiltro(), 700)" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>Abertos</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item tag="label" v-ripple v-if="profile === 'admin'">
                        <q-item-section avatar>
                          <!-- <q-checkbox v-model="pesquisaTickets.showAll" color="negative" keep-color @input="debounce(BuscarTicketFiltro(), 700)" /> -->
                          <q-checkbox v-model="pesquisaTickets.status" val="pending" color="negative" keep-color @input="debounce(BuscarTicketFiltro(), 700)" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>Pendentes</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item tag="label" v-ripple v-if="profile !== 'admin'">
                        <q-item-section avatar>
                          <q-checkbox v-model="pesquisaTickets.status" val="pending" color="negative" keep-color @input="debounce(BuscarTicketFiltro(), 700)" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>Pendentes</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item tag="label" v-ripple>
                        <q-item-section avatar>
                          <q-checkbox v-model="pesquisaTickets.status" val="closed" color="positive" keep-color @input="debounce(BuscarTicketFiltro(), 700)" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>Resolvidos</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                    <q-separator class="q-mb-md" />
                    <q-toggle v-model="pesquisaTickets.withUnreadMessages" label="Somente Tickets com mensagens não lidas" @input="debounce(BuscarTicketFiltro(), 700)" />
                    <!-- <q-toggle v-model="pesquisaTickets.isNotAssignedUser" label="Somente Tickets não atribuidos (sem usuário definido)" @input="debounce(BuscarTicketFiltro(), 700)" /> -->
                  </div>
                  <q-separator class="q-my-md" spaced v-if="!pesquisaTickets.showAll" />
                  <q-btn class="float-right q-my-md" color="negative" label="Fechar" push v-close-popup />
                </div>
              </div>
            </q-menu>
            <q-tooltip content-class="text-bold"> Filtro Avançado </q-tooltip>
          </q-btn>
          <q-btn flat class="bg-grey-3 btn-rounded-50" :class="$q.dark.isActive ? 'text-white bg-black' : ''" @click="$q.screen.lt.md ? (modalNovoTicket = true) : $router.push({ name: 'chat-contatos' })" style="flex: 1;" v-if="canAccessPageContact">
            Contatos
          <q-tooltip :content-class="`${$q.dark.isActive ? 'text-white bg-black' : ''} text-bold`">Contatos</q-tooltip>
          </q-btn>
          <q-btn flat class="bg-grey-3 btn-rounded-50" :class="$q.dark.isActive ? 'text-white bg-black' : ''" @click="showNotification()" v-if="hasMoreTickets"  style="flex: 1;">
            Atendimentos
            <q-tooltip :content-class="`${$q.dark.isActive ? 'text-white bg-black' : ''} text-bold`"> Carregar Mais Atendimentos </q-tooltip>
          </q-btn>
          </div>

          <!-- <q-toolbar class="q-space-between q-flex items-right"> -->
          <!-- <q-btn
            v-if="hasMoreTickets"
            @click="loadMoreOpenTickets"
            class="q-ml-auto"
            style="z-index: 2;"
            icon="mdi-book-account-outline"
          >
          </q-btn> -->
        <!-- </q-toolbar> -->

        </q-toolbar>

        <q-toolbar class="padding-person menu-left items-center ">
          <q-separator class="absolute-top" />
          <div class="full-width">

            <q-tabs
              v-model="tabTickets"
              narrow-indicator
              dense
              :active-bg-color="$q.dark.isActive ? 'primary' : 'grey-3'"
              inline-label
              align="justify"
              :class="{
                'text-white': $q.dark.isActive,
                'text-black': !$q.dark.isActive
              }"

              class="btn-rounded"

            >
            <q-tab
              :ripple="false"
              name="private"
              class="btn-rounded-50"
              :class="$q.dark.isActive ? 'bg-black text-white' : 'bg-grey-3 btn-rounded-50 q-tab-personalized'"
              icon="eva-person-outline"
            >

            <q-badge
              v-if="contadorUniversal === 'enabled'"
              color="red"
              floating
              class="badge-left"
            > {{ privateMessages.length }}</q-badge>
              <q-tooltip content-class="text-bold"> Conversas Privadas </q-tooltip>

            </q-tab>
            <q-tab
              v-if="grupoAtivo === 'disabled'"
              :ripple="false"
              name="groups"
              class="btn-rounded-50"
              :class="$q.dark.isActive ? 'bg-black text-white' : 'bg-grey-3 btn-rounded-50 q-tab-personalized'"
              icon="eva-people-outline"
            >
            <q-badge
              v-if="contadorUniversal === 'enabled'"
              color="red"
              floating
              class="badge-left"
            > {{ groupMessages.length }}</q-badge>
            <q-tooltip content-class="text-bold"> Conversas em Grupo </q-tooltip>
            </q-tab>
            </q-tabs>
          </div>
        </q-toolbar>

        <q-toolbar v-show="toolbarSearch" class="row q-gutter-sm q-py-sm items-center" v-if="fixarConexao === 'enabled'">
          <q-toggle
            size="xl"
            keep-color
            dense
            class="text-bold q-ml-md flex flex-block"
            :icon-color="$q.dark.isActive ? 'black' : 'white'"
            :value="$q.dark.isActive"
            :color="$q.dark.isActive ? 'grey-3' : 'black'"
            checked-icon="mdi-white-balance-sunny"
            unchecked-icon="mdi-weather-sunny"
            @input="$setConfigsUsuario({ isDark: !$q.dark.isActive })"
          >
            <q-tooltip content-class="text-body1"> {{ $q.dark.isActive ? 'Desativar' : 'Ativar' }} Modo Escuro (Dark Mode) </q-tooltip>
          </q-toggle>
          <div class="flex flex-inline q-pt-xs">
            <q-scroll-area horizontal style="height: 40px; width: 300px">
              <template v-for="item in whatsapps">
                  <q-btn rounded flat dense size="18px" :key="item.id" class="q-mx-xs q-pa-none" :style="`opacity: ${item.status === 'CONNECTED' ? 1 : 0.2}`" :icon="`img:${item.type}-logo.png`">
                    <q-tooltip max-height="300px" content-class="bg-blue-1 text-body1 text-grey-9 hide-scrollbar">
                      <ItemStatusChannel :item="item" />
                    </q-tooltip>
                  </q-btn>
              </template>
            </q-scroll-area>
          </div>
          <q-separator class="absolute-bottom" />
        </q-toolbar>

        <q-toolbar
          v-show="tabTickets === 'private'"
          class="items-center"
        >
          <div class="full-width q-py-xs">
            <q-tabs
              v-model="tabTicketsStatus"
              narrow-indicator
              dense
              align="justify"
              :active-bg-color="$q.dark.isActive ? 'primary' : 'grey-2'"
              class="text-primary btn-rounded"
            >
              <q-tab
                :ripple="false"
                name="open"
                icon="eva-message-circle-outline"
                label="Aberto"
                :class="{
                'text-white': $q.dark.isActive,
                'tab-item': !$q.dark.isActive
                }"
              >
                <q-badge
                  color="red"
                  floating
                  class="badge-left"
                > {{ openTickets.length }}</q-badge>
                <q-tooltip content-class="bg-padrao text-grey-9 text-bold"> Tickets em atendimento </q-tooltip>
              </q-tab>
              <q-tab
                :ripple="false"
                name="pending"
                icon="eva-clock-outline"
                label="Pendente"
                :class="{
                'text-white': $q.dark.isActive,
                'tab-item': !$q.dark.isActive
                }"
              >
                <q-badge
                  color="red"
                  floating
                  class="badge-left"
                > {{ pendingTickets.length }}</q-badge>
                <q-tooltip content-class="bg-padrao text-grey-9 text-bold"> Tickets pendentes </q-tooltip>
              </q-tab>
              <q-tab
                :ripple="false"
                name="closed"
                icon="eva-lock-outline"
                label="Fechado"
                :class="{
                'text-white': $q.dark.isActive,
                'tab-item': !$q.dark.isActive
                }"
              >
                <q-badge
                  color="red"
                  floating
                  class="badge-left"
                > {{ closedTickets.length }}</q-badge>
                <q-tooltip content-class="bg-padrao text-grey-9 text-bold"> Tickets fechados </q-tooltip>
              </q-tab>
              <q-tab
                v-if="chatbotLane === 'enabled'"
                :ripple="false"
                name="chatbot"
                icon="mdi-robot-outline"
                label="Chatbot"
                :class="{
                'text-white': $q.dark.isActive,
                'tab-item': !$q.dark.isActive
                }"
              >
                <q-badge
                  color="red"
                  floating
                  class="badge-left"
                > {{ pendingTicketsChatBot.length }}</q-badge>
                <q-tooltip content-class="bg-padrao text-grey-9 text-bold"> Conversas Privadas </q-tooltip>
              </q-tab>
            </q-tabs>
          </div>
        </q-toolbar>

        <q-toolbar
          v-show="tabTickets === 'groups'"
          class="items-center"
        >
          <div class="full-width q-py-xs">
            <q-tabs
              v-model="tabTicketsStatus"
              narrow-indicator
              dense
              align="justify"
              :active-bg-color="$q.dark.isActive ? 'primary' : 'grey-2'"
              class="text-primary btn-rounded"
            >
              <q-tab
                :ripple="false"
                name="open"
                icon="eva-message-circle-outline"
                label="Aberto"
                :class="{
                'text-white': $q.dark.isActive,
                'text-black': !$q.dark.isActive
                }"
              >
                <q-badge
                  color="red"
                  floating
                  class="badge-left"
                > {{ openGroupTickets.length }}</q-badge>
                <q-tooltip content-class="bg-padrao text-grey-9 text-bold"> Conversas em Grupo </q-tooltip>
              </q-tab>
              <q-tab
                :ripple="false"
                name="pending"
                icon="eva-clock-outline"
                label="Pendente"
                :class="{
                'text-white': $q.dark.isActive,
                'text-black': !$q.dark.isActive
                }"
              >
                <q-badge
                  color="red"
                  floating
                  class="badge-left"
                > {{ pendingGroupTickets.length }}</q-badge>
                <q-tooltip content-class="bg-padrao text-grey-9 text-bold"> Conversas em Grupo </q-tooltip>
              </q-tab>
              <q-tab
                :ripple="false"
                name="closed"
                icon="eva-lock-outline"
                label="Fechado"
                :class="{
                'text-white': $q.dark.isActive,
                'text-black': !$q.dark.isActive
                }"
              >
                <q-badge
                  color="red"
                  floating
                  class="badge-left"
                > {{ closedGroupTickets.length }}</q-badge>
                <q-tooltip content-class="bg-padrao text-grey-9 text-bold"> Conversas em Grupo </q-tooltip>
              </q-tab>
            </q-tabs>
          </div>
        </q-toolbar>

        <ItemTicket
          v-show="tabTickets === 'private' && tabTicketsStatus === 'open'"
          v-for="ticket in openTickets"
          :key="ticket.id"
          :ticket="ticket"
          :filas="filas"
        />

        <ItemTicket
          v-show="tabTickets === 'private' && tabTicketsStatus === 'pending'"
          v-for="ticket in pendingTickets"
          :key="ticket.id"
          :ticket="ticket"
          :filas="filas"
        />

        <ItemTicket
          v-show="tabTickets === 'private' && tabTicketsStatus === 'chatbot'"
          v-for="ticket in pendingTicketsChatBot"
          :key="ticket.id+'bot'"
          :ticket="ticket"
          :filas="filas"
        />

        <ItemTicket
          v-show="tabTickets === 'private' && tabTicketsStatus === 'closed'"
          v-for="ticket in closedTickets"
          :key="ticket.id"
          :ticket="ticket"
          :filas="filas"
        />

        <ItemTicket
        v-show="tabTickets === 'groups' && tabTicketsStatus === 'open'"
          v-for="ticket in openGroupTickets"
          :key="ticket.id"
          :ticket="ticket"
          :filas="filas"
        />

        <ItemTicket
        v-show="tabTickets === 'groups' && tabTicketsStatus === 'pending'"
          v-for="ticket in pendingGroupTickets"
          :key="ticket.id"
          :ticket="ticket"
          :filas="filas"
        />

        <ItemTicket
        v-show="tabTickets === 'groups' && tabTicketsStatus === 'closed'"
          v-for="ticket in closedGroupTickets"
          :key="ticket.id"
          :ticket="ticket"
          :filas="filas"
        />

        <div class="absolute-bottom row justify-between" style="height: 50px" v-if="fixarConexao === 'disabled'">
          <q-toggle
            size="xl"
            keep-color
            dense
            class="text-bold q-ml-md flex flex-block"
            :icon-color="$q.dark.isActive ? 'black' : 'white'"
            :value="$q.dark.isActive"
            :color="$q.dark.isActive ? 'grey-3' : 'black'"
            checked-icon="mdi-white-balance-sunny"
            unchecked-icon="mdi-weather-sunny"
            @input="$setConfigsUsuario({ isDark: !$q.dark.isActive })"
          >
            <q-tooltip content-class="text-body1"> {{ $q.dark.isActive ? 'Desativar' : 'Ativar' }} Modo Escuro (Dark Mode) </q-tooltip>
          </q-toggle>
          <div class="flex flex-inline q-pt-xs">
            <q-scroll-area horizontal style="height: 40px; width: 300px">
              <template v-for="item in whatsapps">
                  <q-btn rounded flat dense size="18px" :key="item.id" class="q-mx-xs q-pa-none" :style="`opacity: ${item.status === 'CONNECTED' ? 1 : 0.2}`" :icon="`img:${item.type}-logo.png`">
                    <q-tooltip max-height="300px" content-class="bg-blue-1 text-body1 text-grey-9 hide-scrollbar">
                      <ItemStatusChannel :item="item" />
                    </q-tooltip>
                  </q-btn>
              </template>
            </q-scroll-area>
          </div>
        </div>
      </q-drawer>

      <q-page-container>
        <router-view :mensagensRapidas="mensagensRapidas" :key="ticketFocado.id"></router-view>
      </q-page-container>

      <q-drawer v-if="!cRouteContatos && ticketFocado.id" v-model="drawerContact" show-if-above bordered side="right" class="dados-contato" content-class="bg-grey-3">
        <div class="flex justify-start items-end bg-white full-width no-border-radius q-pa-sm" style="height: 60px">
          <span class=" text-h6"> <q-btn flat class="btn-small" @click="toggleDrawer" label="" icon="mdi-close" :color="$q.dark.isActive ? ('white') : 'primary'"/>  Dados Contato </span>
        </div>

        <q-scroll-area style="height: calc(100vh - 70px)">
          <div >
            <!--<q-card class="bg-white btn-rounded" style="width: 100%" bordered flat>
              <q-card-section class="text-bold q-pa-sm">
                <q-btn flat class="btn-small" @click="toggleDrawer" label="" icon="mdi-close" />
              </q-card-section>

            </q-card>
             -->
            <q-card class="bg-white border-radius-none q-mt-sm" style="width: 100%" flat>
              <q-card-section class="text-center">
                <q-avatar style="border: 1px solid #9e9e9ea1 !important; width: 100px; height: 100px">
                  <q-icon name="mdi-account" style="width: 100px; height: 100px" size="6em" color="grey-5" v-if="!ticketFocado.contact.profilePicUrl" />
                  <q-img :src="ticketFocado.contact.profilePicUrl" style="width: 100px; height: 100px">
                    <template v-slot:error>
                      <q-icon name="mdi-account" size="1.5em" :color="$q.dark.isActive ? ('white') : 'grey-5'" />
                    </template>
                  </q-img>
                </q-avatar>
                <div class="text-caption q-mt-md blur-effect"  style="font-size: 14px">
                  {{ ticketFocado.contact.name || '' }}
                </div>
                <div class="text-caption q-mt-sm blur-effect"  style="font-size: 14px" id="number">
                  <template v-if="ticketFocado.contact.number">
                    <a :class="$q.dark.isActive ? ('text-white') : ''" :href="getPhoneNumberLink(ticketFocado.contact.number)">
                      {{ ticketFocado.contact.number }}
                    </a>
                  </template>
                </div>
                <!-- <div class="text-caption q-mt-sm" style="font-size: 14px" id="number" @click="copyContent(ticketFocado.contact.number || '')">
                  {{ ticketFocado.contact.number || '' }}
                </div> -->
                <div class="text-caption q-mt-md" style="font-size: 14px" id="email">
                  <template v-if="ticketFocado.contact.email">
                    <a :href="'mailto:' + ticketFocado.contact.email">{{ ticketFocado.contact.email }}</a>
                  </template>
                  <template v-else>
                    {{ ticketFocado.contact.email || '' }}
                  </template>
                </div>

                <q-btn flat class="btn-rounded-50 btn-outline btn-small" icon="eva-edit-outline" label="Editar" @click="editContact(ticketFocado.contact.id)" :class="$q.dark.isActive ? ('text-white') : ''"/>
                <template v-if="cIsExtraInfo">
                  <q-list>
                    <q-item v-for="(info, idx) in ticketFocado.contact.extraInfo" :key="idx">
                      <q-item-section>
                        <q-item-label>{{ info.value }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </template>
              </q-card-section>
            </q-card>
            <q-card class="bg-white border-radius-none q-mt-sm" style="width: 100%" flat>
              <q-card-section class="text-bold text-center q-pa-sm">
                <q-btn
                  style="margin-right: 4px;"
                  icon="mdi-email-open-outline"
                  flat
                  class="btn-rounded-50 btn-outline btn-small"
                  :class="$q.dark.isActive ? ('text-white') : ''"
                  @click="atualizarLido(ticketFocado)" >
                  <q-tooltip content-class="bg-primary text-bold">
                    Marcar Como Lido
                  </q-tooltip>
                </q-btn>
                <q-btn
                  style="margin-right: 4px;"
                  icon="mdi-email-outline"
                  flat
                  class="btn-rounded-50 btn-outline btn-small"
                  @click="atualizarNaoLido(ticketFocado)"
                  :class="$q.dark.isActive ? ('text-white') : ''">
                  <q-tooltip content-class="bg-primary text-bold">
                    Marcar Como Não Lido
                  </q-tooltip>
                </q-btn>
                <q-btn flat class="btn-rounded-50 btn-outline btn-small" icon="mdi-timeline-text-outline"
                :class="$q.dark.isActive ? ('text-white') : ''" @click="abrirModalLogs">
                  <q-tooltip content-class="bg-primary text-bold">
                    Logs
                  </q-tooltip>
                </q-btn>
              </q-card-section>
            </q-card>

              </q-card-section>
            </q-card>

            <q-card class="bg-white q-mt-sm border-radius-none q-pa-sm" style="width: 100%" flat :key="ticketFocado.id + $uuid()">
              <q-card-section class="text-bold q-pb-none" :class="$q.dark.isActive ? ('text-white') : ''">
                Etiquetas
                <q-separator />
              </q-card-section>
              <q-card-section class="q-pa-none" :class="$q.dark.isActive ? ('text-white') : ''">
                <q-select
                  square
                  borderless
                  :value="ticketFocado.contact.tags"
                  multiple
                  :options="etiquetas"
                  use-chips
                  option-value="id"
                  option-label="tag"
                  emit-value
                  map-options
                  dropdown-icon="add"
                  @input="tagSelecionada"
                  :content-class="$q.dark.isActive ? ('text-white') : ''"
                >
                  <template v-slot:option="{ itemProps, itemEvents, opt, selected, toggleOption }">
                    <q-item v-bind="itemProps" v-on="itemEvents">
                      <q-item-section>
                        <q-item-label v-html="opt.tag"></q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <q-checkbox :value="selected" @input="toggleOption(opt)" />
                      </q-item-section>
                    </q-item>
                  </template>
                  <template v-slot:selected-item="{ opt }">
                    <q-chip dense square color="white" text-color="primary" class="q-ma-xs row col-12 text-body1">
                      <q-icon :style="`color: ${opt.color}`" name="mdi-pound-box-outline" size="28px" class="q-mr-sm" />
                      {{ opt.tag }}
                    </q-chip>
                  </template>
                  <template v-slot:no-option="{ itemProps, itemEvents }">
                    <q-item v-bind="itemProps" v-on="itemEvents">
                      <q-item-section>
                        <q-item-label class="text-negative text-bold"> Ops... Sem etiquetas criadas! </q-item-label>
                        <q-item-label caption> Cadastre novas etiquetas na administração de sistemas. </q-item-label>
                      </q-item-section>
                    </q-item>
                  </template>
                </q-select>
              </q-card-section>
            </q-card>

            <q-card class="bg-white q-mt-sm border-radius-none q-pa-sm" style="width: 100%" flat :key="ticketFocado.id + $uuid()">
              <q-card-section class="text-bold q-pb-none" :class="$q.dark.isActive ? ('text-white') : ''">
                Carteira
                <q-separator />
              </q-card-section>
              <q-card-section class="q-pa-none">
                <q-select
                  square
                  borderless
                  :value="ticketFocado.contact.wallets"
                  multiple
                  :max-values="1"
                  :options="usuarios"
                  use-chips
                  option-value="id"
                  option-label="name"
                  emit-value
                  map-options
                  dropdown-icon="add"
                  @input="carteiraDefinida"
                >
                  <template v-slot:option="{ itemProps, itemEvents, opt, selected, toggleOption }">
                    <q-item v-bind="itemProps" v-on="itemEvents">
                      <q-item-section>
                        <q-item-label v-html="opt.name"></q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <q-checkbox :value="selected" @input="toggleOption(opt)" />
                      </q-item-section>
                    </q-item>
                  </template>
                  <template v-slot:selected-item="{ opt }">
                    <q-chip dense square color="white" text-color="primary" class="q-ma-xs row col-12 text-body1">
                      {{ opt.name }}
                    </q-chip>
                  </template>
                  <template v-slot:no-option="{ itemProps, itemEvents }">
                    <q-item v-bind="itemProps" v-on="itemEvents">
                      <q-item-section>
                        <q-item-label class="text-negative text-bold"> Ops... Sem carteiras disponíveis!! </q-item-label>
                      </q-item-section>
                    </q-item>
                  </template>
                </q-select>
              </q-card-section>
            </q-card>

            <q-card class="bg-white q-mt-sm border-radius-none q-pa-sm" style="width: 100%; margin-bottom: 2vh" flat :key="ticketFocado.id + $uuid()" v-if="ticketFocado.channel !== 'instagram' && ticketFocado.channel !== 'telegram'">
              <q-card-section class="text-bold q-pb-none" :class="$q.dark.isActive ? ('text-white') : ''">
                Mensagens Agendadas
                <q-separator />
              </q-card-section>
              <q-card-section class="q-pa-none">
                <template v-if="ticketFocado.scheduledMessages">
                  <q-list>
                    <q-item v-for="(message, idx) in ticketFocado.scheduledMessages.filter((msg) => !msg.isDeleted)" :key="idx" clickable>
                      <q-item-section>
                        <q-item-label caption>
                          <div class="row justify-between items-center no-wrap">
                            <div>
                              <strong>Agendado para:</strong>
                              <div>{{ $formatarData(message.scheduleDate, 'dd/MM/yyyy HH:mm') }}</div>
                            </div>

                            <div>
                              <div class="row q-gutter-xs no-wrap">
                                <!-- <q-btn flat round dense icon="edit" size="sm" @click="editarMensagem(message)" /> -->
                                <q-btn flat round dense icon="mdi-trash-can-outline" size="sm" @click="deletarMensagem(message)" />
                              </div>
                            </div>
                          </div>
                        </q-item-label>
                        <q-item-label caption lines="2"> <b>Msg:</b> {{ message.mediaName || message.body }} </q-item-label>
                      </q-item-section>
                      <q-tooltip :delay="500">
                        <MensagemChat :mensagens="[message]" />
                      </q-tooltip>
                    </q-item>
                  </q-list>
                </template>
              </q-card-section>
            </q-card>
          </div>
        </q-scroll-area>
      </q-drawer>

      <ModalNovoTicket :modalNovoTicket.sync="modalNovoTicket" />
      <ContatoModal
        :contactId="selectedContactId"
        :modalContato.sync="modalContato"
        @contatoModal:contato-editado="contatoEditado"
      />

      <ModalUsuario
        :isProfile="true"
        :modalUsuario.sync="modalUsuario"
        :usuarioEdicao.sync="usuario"
      />

      <q-dialog v-model="exibirModalLogs" no-backdrop-dismiss full-height position="right" @hide="logsTicket = []">
        <q-card style="width: 400px">
          <q-card-section :class="{ 'bg-grey-2': !$q.dark.isActive, 'bg-primary': $q.dark.isActive }">
            <div class="text-h6">
              Logs Ticket: {{ ticketFocado.id }}
              <q-btn icon="close" color="negative" flat class="bg-padrao float-right" round v-close-popup />
            </div>
          </q-card-section>
          <q-card-section class="">
            <q-scroll-area style="height: calc(100vh - 200px)" class="full-width">
              <q-timeline color="black" style="width: 360px" class="q-pl-sm" :class="{ 'text-black': !$q.dark.isActive }">
                <template v-for="(log, idx) in logsTicket">
                  <div>
                    <q-timeline-entry
                      :key="(log && log.id) || idx"
                      :subtitle="$formatarData(log.createdAt, 'dd/MM/yyyy HH:mm')"
                      :color="(messagesLog[log.type] && messagesLog[log.type].color) || ''"
                      :icon="(messagesLog[log.type] && messagesLog[log.type].icon) || ''"
                    >
                      <template v-slot:title>
                        <div :class="{ 'text-white': $q.dark.isActive }" style="width: calc(100% - 20px)">
                          <div class="row col text-bold text-body2">{{ (log.user && log.user.name) || 'Bot' }}:</div>
                          <div class="row col">{{ messagesLog[log.type] && messagesLog[log.type].message }}</div>
                        </div>
                      </template>
                    </q-timeline-entry>
                  </div>
                </template>
              </q-timeline>
            </q-scroll-area>
          </q-card-section>
        </q-card>
      </q-dialog>

    </q-layout>
  </div>
</template>

<script>
import ItemStatusChannel from 'src/pages/sessaoWhatsapp/ItemStatusChannel.vue'
import ContatoModal from 'src/pages/contatos/ContatoModal'
import ItemTicket from './ItemTicket'
import { ConsultarLogsTicket, ConsultarTickets, DeletarMensagem } from 'src/service/tickets'
import { mapGetters } from 'vuex'
import mixinSockets from './mixinSockets'
import ModalNovoTicket from './ModalNovoTicket'
import { ListarFilas } from 'src/service/filas'
const UserQueues = JSON.parse(localStorage.getItem('queues'))
const profile = localStorage.getItem('profile')
const username = localStorage.getItem('username')
const usuario = JSON.parse(localStorage.getItem('usuario'))
import StatusWhatsapp from 'src/components/StatusWhatsapp'
import { ListarWhatsapps } from 'src/service/sessoesWhatsapp'
import { debounce, uid } from 'quasar'
import { format } from 'date-fns'
import ModalUsuario from 'src/pages/usuarios/ModalUsuario'
import { ListarConfiguracoes } from 'src/service/configuracoes'
import { ListarMensagensRapidas } from 'src/service/mensagensRapidas'
import { ListarEtiquetas } from 'src/service/etiquetas'
import { EditarEtiquetasContato, EditarCarteiraContato } from 'src/service/contatos'
import { RealizarLogout } from 'src/service/login'
import { ListarUsuarios, DadosUsuario } from 'src/service/user'
import MensagemChat from './MensagemChat.vue'
import { messagesLog } from '../../utils/constants'
import { listCountUnreadMessage } from 'src/service/chatInterno'
export default {
  name: 'IndexAtendimento',
  mixins: [mixinSockets],
  components: {
    ItemTicket,
    ModalNovoTicket,
    StatusWhatsapp,
    ContatoModal,
    ModalUsuario,
    MensagemChat,
    ItemStatusChannel
  },
  data () {
    return {
      tabTickets: 'private',
      tabTicketsStatus: 'open',
      messagesLog,
      configuracoes: [],
      debounce,
      usuario,
      usuarios: [],
      selectedTab: 'open',
      username,
      modalUsuario: false,
      toolbarSearch: true,
      drawerTickets: true,
      loading: false,
      profile,
      modalNovoTicket: false,
      modalContato: false,
      selectedContactId: null,
      filterBusca: '',
      showDialog: false,
      atendimentos: [],
      countTickets: 0,
      pesquisaTickets: {
        searchParam: '',
        pageNumber: 1,
        status: ['open', 'pending', 'closed'],
        showAll: false,
        count: null,
        queuesIds: [],
        withUnreadMessages: false,
        isNotAssignedUser: false,
        includeNotQueueDefined: true
        // date: new Date(),
      },
      ordernar: null,
      filter: false,
      filas: [],
      filasUser: [],
      etiquetas: [],
      mensagensRapidas: [],
      modalEtiquestas: false,
      exibirModalLogs: false,
      logsTicket: [],
      notificacaoInternaNaoLida: '',
      drawerContact: false,
      contadorUniversal: '',
      tempoFechamento: '',
      autoFechamentoAtivo: '',
	  ContactAdmin: null,
      chatbotLane: null,
      mensagemDeEncerramento: ''
    }
  },
  computed: {
    canAccessPageContact() {
      return this.ContactAdmin !== 'enabled' || this.userProfile === 'admin';
    },
    ...mapGetters([
      'tickets',
      'ticketFocado',
      'hasMore',
      'whatsapps',
      'notificacaoChatInterno'
    ]),
    cUserQueues () {
      return UserQueues
    },
    style () {
      return {
        height: this.$q.screen.height + 'px'
      }
    },
    cToolbarSearchHeigthAjust () {
      return this.toolbarSearch ? 58 : 0
    },
    cHeigVerticalTabs () {
      return `${50 + this.cToolbarSearchHeigthAjust}px`
    },
    cRouteContatos () {
      return this.$route.name === 'chat-contatos'
    },
    cFiltroSelecionado () {
      const { queuesIds, showAll, withUnreadMessages, isNotAssignedUser } = this.pesquisaTickets
      return !!(queuesIds?.length || showAll || withUnreadMessages || isNotAssignedUser)
    },
    cIsExtraInfo () {
      return this.ticketFocado?.contact?.extraInfo?.length > 0
    },
    openTickets() {
      const filteredTickets = this.tickets.filter(ticket => ticket.status === 'open' && !ticket.isGroup)
      let tickets = filteredTickets;
      console.log(tickets);
      if(this.ordenar == true){
        tickets.sort((a,b)=>{
          let data1 = new Date(a.updatedAt);
          let data2 = new Date(b.updatedAt);
          if(data1.getTime() > data2.getTime()){
            return 1;
          }
          if(data1.getTime() < data2.getTime()){
            return -1;
          }
          return 0;
          })
      }
      if(this.ordenar == false){
        tickets.sort((a,b)=>{
          let data1 = new Date(a.updatedAt);
          let data2 = new Date(b.updatedAt);
          if(data1.getTime() < data2.getTime()){
            return 1;
          }
          if(data1.getTime() > data2.getTime()){
            return -1;
          }
          return 0;
          })
      }
      const groupedTickets = tickets.reduce((acc, ticket) => {
        const key = `${ticket.whatsappId}_${ticket.userId}_${ticket.status}_${ticket.contactId}`;
        if (!acc[key] || acc[key].id > ticket.id) {
          acc[key] = ticket;
        }
        return acc;
      }, {});
      const groupedTicketIds = new Set(Object.values(groupedTickets).map(ticket => ticket.id));
      const remainingTickets = filteredTickets.filter(ticket => !groupedTicketIds.has(ticket.id));      
      remainingTickets.forEach(ticket => {
        AtualizarStatusTicketNull(ticket.id, 'closed', ticket.userId);
        console.log(`Ticket duplo ${ticket.id} tratado.`);
      });
      // return Object.values(groupedTickets).slice(0, this.batchSize);
      return Object.values(groupedTickets)
    },
    pendingTickets() {
      
      const filteredTickets = this.tickets.filter(ticket => ticket.status === 'pending' && !ticket.isGroup)
      let tickets = filteredTickets;
      if(this.ordenar == true){
        tickets.sort((a,b)=>{
          let data1 = new Date(a.updatedAt);
          let data2 = new Date(b.updatedAt);
          if(data1.getTime() > data2.getTime()){
            return 1;
          }
          if(data1.getTime() < data2.getTime()){
            return -1;
          }
          return 0;
          })
      }
      if(this.ordenar == false){
        tickets.sort((a,b)=>{
          let data1 = new Date(a.updatedAt);
          let data2 = new Date(b.updatedAt);
          if(data1.getTime() < data2.getTime()){
            return 1;
          }
          if(data1.getTime() > data2.getTime()){
            return -1;
          }
          return 0;
          })
      }
      const groupedTickets = tickets.reduce((acc, ticket) => {
        const key = `${ticket.whatsappId}_${ticket.userId}_${ticket.status}_${ticket.contactId}`;
        if (!acc[key] || acc[key].id > ticket.id) {
          acc[key] = ticket;
        }
        return acc;
      }, {});
      const groupedTicketIds = new Set(Object.values(groupedTickets).map(ticket => ticket.id));
      const remainingTickets = filteredTickets.filter(ticket => !groupedTicketIds.has(ticket.id));      
      remainingTickets.forEach(ticket => {
        AtualizarStatusTicketNull(ticket.id, 'closed', ticket.userId);
        console.log(`Ticket duplo ${ticket.id} tratado.`);
      });
      return Object.values(groupedTickets)
      // return Object.values(groupedTickets).slice(0, this.batchSize);
    },
    pendingTicketsChatBot() {
      // return this.tickets.filter(ticket => ticket.status === 'pending' && !ticket.isGroup)
      const filteredTickets = this.tickets.filter(ticket => ticket.status === 'pending' && !ticket.isGroup && (ticket.stepAutoReplyId && ticket.autoReplyId || ticket.chatFlowId && ticket.stepChatFlow));
      let tickets = filteredTickets;
      if(this.ordenar == true){
        tickets.sort((a,b)=>{
          let data1 = new Date(a.updatedAt);
          let data2 = new Date(b.updatedAt);
          if(data1.getTime() > data2.getTime()){
            return 1;
          }
          if(data1.getTime() < data2.getTime()){
            return -1;
          }
          return 0;
          })
      }
      if(this.ordenar == false){
        tickets.sort((a,b)=>{
          let data1 = new Date(a.updatedAt);
          let data2 = new Date(b.updatedAt);
          if(data1.getTime() < data2.getTime()){
            return 1;
          }
          if(data1.getTime() > data2.getTime()){
            return -1;
          }
          return 0;
          })
      }
      const groupedTickets = tickets.reduce((acc, ticket) => {
        const key = `${ticket.whatsappId}_${ticket.userId}_${ticket.status}_${ticket.contactId}`;
        if (!acc[key] || acc[key].id > ticket.id) {
          acc[key] = ticket;
        }
        return acc;
      }, {});
      return Object.values(groupedTickets);
      // return Object.values(groupedTickets).slice(0, this.batchSize);
    },
    closedTickets() {
      let tickets = this.tickets;
      if(this.ordenar == true){
        tickets.sort((a,b)=>{
          let data1 = new Date(a.updatedAt);
          let data2 = new Date(b.updatedAt);
          if(data1.getTime() > data2.getTime()){
            return 1;
          }
          if(data1.getTime() < data2.getTime()){
            return -1;
          }
          return 0;
          })
      }
      if(this.ordenar == false){
        tickets.sort((a,b)=>{
          let data1 = new Date(a.updatedAt);
          let data2 = new Date(b.updatedAt);
          if(data1.getTime() < data2.getTime()){
            return 1;
          }
          if(data1.getTime() > data2.getTime()){
            return -1;
          }
          return 0;
          })
      }
      return tickets.filter(ticket => ticket.status === 'closed' && !ticket.isGroup)
      // return this.tickets.filter(ticket => ticket.status === 'closed' && !ticket.isGroup).slice(0, this.batchSize);
    },
    closedGroupTickets() {
      let tickets = this.tickets;
      if(this.ordenar == true){
        tickets.sort((a,b)=>{
          let data1 = new Date(a.updatedAt);
          let data2 = new Date(b.updatedAt);
          if(data1.getTime() > data2.getTime()){
            return 1;
          }
          if(data1.getTime() < data2.getTime()){
            return -1;
          }
          return 0;
          })
      }
      if(this.ordenar == false){
        tickets.sort((a,b)=>{
          let data1 = new Date(a.updatedAt);
          let data2 = new Date(b.updatedAt);
          if(data1.getTime() < data2.getTime()){
            return 1;
          }
          if(data1.getTime() > data2.getTime()){
            return -1;
          }
          return 0;
          })
      }
      return tickets.filter(ticket => ticket.status === 'closed' && ticket.isGroup)
      // return this.tickets.filter(ticket => ticket.status === 'closed' && ticket.isGroup).slice(0, this.batchSize);
    },
    openGroupTickets() {
      // return this.tickets.filter(ticket => ticket.status === 'open' && ticket.isGroup)
      const filteredTickets = this.tickets.filter(ticket => ticket.status === 'open' && ticket.isGroup);
      let tickets = filteredTickets;
      if(this.ordenar == true){
        tickets.sort((a,b)=>{
          let data1 = new Date(a.updatedAt);
          let data2 = new Date(b.updatedAt);
          if(data1.getTime() > data2.getTime()){
            return 1;
          }
          if(data1.getTime() < data2.getTime()){
            return -1;
          }
          return 0;
          })
      }
      if(this.ordenar == false){
        tickets.sort((a,b)=>{
          let data1 = new Date(a.updatedAt);
          let data2 = new Date(b.updatedAt);
          if(data1.getTime() < data2.getTime()){
            return 1;
          }
          if(data1.getTime() > data2.getTime()){
            return -1;
          }
          return 0;
          })
      }
      const groupedTickets = tickets.reduce((acc, ticket) => {
        const key = `${ticket.whatsappId}_${ticket.userId}_${ticket.status}_${ticket.contactId}`;
        if (!acc[key] || acc[key].id > ticket.id) {
          acc[key] = ticket;
        }
        return acc;
      }, {});
      return Object.values(groupedTickets);
      // return Object.values(groupedTickets).slice(0, this.batchSize);
    },
    pendingGroupTickets() {
      // return this.tickets.filter(ticket => ticket.status === 'pending' && ticket.isGroup)
      const filteredTickets = this.tickets.filter(ticket => ticket.status === 'pending' && ticket.isGroup);
      let tickets = filteredTickets;
      if(this.ordenar == true){
        tickets.sort((a,b)=>{
          let data1 = new Date(a.updatedAt);
          let data2 = new Date(b.updatedAt);
          if(data1.getTime() > data2.getTime()){
            return 1;
          }
          if(data1.getTime() < data2.getTime()){
            return -1;
          }
          return 0;
          })
      }
      if(this.ordenar == false){
        tickets.sort((a,b)=>{
          let data1 = new Date(a.updatedAt);
          let data2 = new Date(b.updatedAt);
          if(data1.getTime() < data2.getTime()){
            return 1;
          }
          if(data1.getTime() > data2.getTime()){
            return -1;
          }
          return 0;
          })
      }
      const groupedTickets = tickets.reduce((acc, ticket) => {
        const key = `${ticket.whatsappId}_${ticket.userId}_${ticket.status}_${ticket.contactId}`;
        if (!acc[key] || acc[key].id > ticket.id) {
          acc[key] = ticket;
        }
        return acc;
      }, {});
      return Object.values(groupedTickets);
      // return Object.values(groupedTickets).slice(0, this.batchSize);
    },
    privateMessages() {
      let tickets = this.tickets;
      if(this.ordenar == true){
        tickets.sort((a,b)=>{
          let data1 = new Date(a.updatedAt);
          let data2 = new Date(b.updatedAt);
          if(data1.getTime() > data2.getTime()){
            return 1;
          }
          if(data1.getTime() < data2.getTime()){
            return -1;
          }
          return 0;
          })
      }
      if(this.ordenar == false){
        tickets.sort((a,b)=>{
          let data1 = new Date(a.updatedAt);
          let data2 = new Date(b.updatedAt);
          if(data1.getTime() < data2.getTime()){
            return 1;
          }
          if(data1.getTime() > data2.getTime()){
            return -1;
          }
          return 0;
          })
      }
      return tickets.filter(ticket => ticket.unreadMessages && !ticket.isGroup)
    },
    groupMessages() {
      let tickets = this.tickets;
      if(this.ordenar == true){
        tickets.sort((a,b)=>{
          let data1 = new Date(a.updatedAt);
          let data2 = new Date(b.updatedAt);
          if(data1.getTime() > data2.getTime()){
            return 1;
          }
          if(data1.getTime() < data2.getTime()){
            return -1;
          }
          return 0;
          })
      }
      if(this.ordenar == false){
        tickets.sort((a,b)=>{
          let data1 = new Date(a.updatedAt);
          let data2 = new Date(b.updatedAt);
          if(data1.getTime() < data2.getTime()){
            return 1;
          }
          if(data1.getTime() > data2.getTime()){
            return -1;
          }
          return 0;
          })
      }
      return tickets.filter(ticket => ticket.unreadMessages && ticket.isGroup)
    }
  },
  methods: {
    async loadOrdenar() {
      try{
        this.$store.commit('RESET_TICKETS')
        this.loading = true
        switch (this.ordenar){
          case false:
          this.ordenar = null;
          break;
          case true:
          this.ordenar = false;
          break;
          case null:
          this.ordenar = true;
          break;
          
        }
        this.consultarTicketsOrdenados()
      }catch(error){
        console.log(error)
      }
    },
    async atualizarUsuario() {
      try {
        const { data } = await DadosUsuario(this.usuario.userId)
        this.filasUser = data.queues
      } catch (error) {
        console.error(error)
        this.$notificarErro('Problema ao carregar usuário', error)
      }
    },
    async loadMoreOpenTickets() {
      // this.batchSize += 30;
      // this.consultarTickets();
      this.$q.notify({
        type: 'warning',
        message: 'Atendimentos carregados nas abas aberto, pendente e fechado!',
        position: 'top'
      })
      try {
        this.loading = true
        this.pesquisaTickets.pageNumber++
        await this.consultarTickets()
        this.loading = false
      } catch (error) {
        this.loading = false
      }
    },
    showNotification() {
      this.$q.notify({
        type: 'warning',
        message: 'Atendimentos carregados nas abas aberto, pendente e fechado!',
        position: 'top'
      })
      this.loadMoreOpenTickets()
    },
    async downloadPDF() {
      const doc = new jsPDF()

      try {
        const response = await LocalizarMensagens({ ticketId: this.ticketFocado.id })
        const mensagens = response.data.messages
        let yPosition = 10

        mensagens.forEach((mensagem, index) => {
          if (yPosition > 280) {
            doc.addPage()
            yPosition = 10
          }

          const remetente = mensagem.fromMe ? 'Eu' : mensagem.contact.name || 'Contato'
          doc.setFontSize(12)
          doc.text(`Mensagem de: ${remetente}`, 10, yPosition)
          yPosition += 10

          const lines = doc.splitTextToSize(mensagem.body, 180)
          doc.text(lines, 10, yPosition)
          yPosition += lines.length * 10
          yPosition += 10
        })

        doc.save('atendimento_' + this.ticketFocado.id + '_mensagens.pdf')
      } catch (error) {
        console.error('Erro ao baixar as mensagens:', error)
      }
    },
    async atualizarNaoLido (ticketFocado) {
      try {
        await AtualizarTicketNaoLido(ticketFocado.id, 1)
      } catch (e) {

      }
    },
    async atualizarLido (ticketFocado) {
      try {
        await AtualizarTicketNaoLido(ticketFocado.id, 0)
      } catch (e) {

      }
    },
    toggleDrawer() {
      this.drawerContact = !this.drawerContact
    },
    getPhoneNumberLink(number) {
      if ((number.startsWith('55')) && (number.charAt(4) > 5)) {
        return `tel:${number.slice(0, 4)}9${number.slice(-8)}`
      } else {
        return `tel:${number}`
      }
    },
    // async setarFonteAudio(){
    //  if (this.notificacaoAtivo === 'enabled'){
    //   this.notificacaoSound = this.alertSound
    //  }
    //  else if (this.notificacaoAtivo === 'disabled'){
    //    this.notificacaoSound = this.silenceSound
    //  }
    // },
    async listarMensagens() {
      try {
        const { data } = await listCountUnreadMessage(this.usuario.userId)
        this.notificacaoInternaNaoLida = data.count
      } catch (e) {

      }
    },
    reloadPage() {
      window.location.reload()
    },
    handlerNotifications (data) {
      const options = {
        body: `${data.body} - ${format(new Date(), 'HH:mm')}`,
        icon: data.ticket.contact.profilePicUrl,
        tag: data.ticket.id,
        renotify: true
      }

      const notification = new Notification(
        `Mensagem de ${data.ticket.contact.name}`,
        options
      )

      setTimeout(() => {
        notification.close()
      }, 10000)

      notification.onclick = e => {
        e.preventDefault()
        window.focus()
        this.$store.dispatch('AbrirChatMensagens', data.ticket)
        this.$router.push({ name: 'atendimento' })
        // history.push(`/tickets/${ticket.id}`);
      }

     // this.$nextTick(() => {
        // utilizar refs do layout
      //  this.$refs.audioNotificationPlay.play()
     // })
    },
    async listarConfiguracoes () {
      const { data } = await ListarConfiguracoes()
      localStorage.setItem('configuracoes', JSON.stringify(data))
      const ignoreGroupMsg = data.find(config => config.key === 'ignoreGroupMsg')
      this.grupoAtivo = ignoreGroupMsg.value
      const universalCounter = data.find(config => config.key === 'universalCounter')
      this.contadorUniversal = universalCounter.value
      const autoCloseTime = data.find(config => config.key === 'autoCloseTime')
      this.tempoFechamento = autoCloseTime.value
      const autoClose = data.find(config => config.key === 'autoClose')
      this.autoFechamentoAtivo = autoClose.value
      const autoCloseMessage = data.find(config => config.key === 'autoCloseMessage')
      this.mensagemDeEncerramento = autoCloseMessage.value
      const ContactAdmin = data.find(config => config.key === 'ContactAdmin')
      this.ContactAdmin = ContactAdmin.value
      const chatbotLane = data.find(config => config.key === 'chatbotLane')
      this.chatbotLane = chatbotLane.value
      // await this.autoCloseTickets(this.tempoFechamento, this.mensagemDeEncerramento)
    },
    onScroll (info) {
      if (info.verticalPercentage <= 0.85) return
      this.onLoadMore()
    },
    editContact (contactId) {
      this.selectedContactId = contactId
      this.modalContato = true
    },
    contatoEditado (contato) {
      this.$store.commit('UPDATE_TICKET_FOCADO_CONTACT', contato)
    },
    async consultarTickets (paramsInit = {}) {
      const params = {
        ...this.pesquisaTickets,
        ...paramsInit
      }
      try {
        let { data } = await ConsultarTickets(params)
        this.countTickets = data.count // count total de tickets no status
        this.$store.commit('LOAD_TICKETS', data.tickets)
        this.$store.commit('SET_HAS_MORE', data.hasMore)
      } catch (err) {
        this.$notificarErro('Algum problema', err)
        console.error(err)
      }
      // return () => clearTimeout(delayDebounceFn)
    },
    async consultarTicketsOrdenados (paramsInit = {}) {
      const params = {
        ...this.pesquisaTickets,
        ...paramsInit
      }
      try {
        let { data } = await ConsultarTickets(params)
        this.countTickets = data.count

        let tickets = data.tickets;

        if(this.ordenar == true){
          tickets.sort((a,b)=>{
          let data1 = new Date(a.updatedAt);
          let data2 = new Date(b.updatedAt);
          if(data1.getTime() > data2.getTime()){
            return 1;
          }
          if(data1.getTime() < data2.getTime()){
            return -1;
          }
          return 0;
          })
          this.$store.commit('LOAD_TICKETS', tickets);
        }
        if(this.ordenar == false){
          tickets.sort((a,b)=>{
          let data1 = new Date(a.updatedAt);
          let data2 = new Date(b.updatedAt);
          if(data1.getTime() > data2.getTime()){
            return 1;
          }
          if(data1.getTime() < data2.getTime()){
            return -1;
          }
          return 0;
        })
        this.$store.commit('LOAD_TICKETS', tickets);
        }
        if(this.ordenar == null){
          this.$store.commit('LOAD_TICKETS', tickets);
        }

        
        this.$store.commit('SET_HAS_MORE', data.hasMore)

        console.log(tickets)
        
      } catch (err) {
        this.$notificarErro('Algum problema', err)
        console.error(err)
      }
      // return () => clearTimeout(delayDebounceFn)
    },
    async BuscarTicketFiltro () {
      this.$store.commit('RESET_TICKETS')
      this.loading = true
      localStorage.setItem('filtrosAtendimento', JSON.stringify(this.pesquisaTickets))
      this.pesquisaTickets = {
        ...this.pesquisaTickets,
        pageNumber: 1
      }
      await this.consultarTickets(this.pesquisaTickets)
      this.loading = false
      this.$setConfigsUsuario({ isDark: this.$q.dark.isActive })
    },
    async onLoadMore () {
      if (this.tickets.length === 0 || !this.hasMore || this.loading) {
        return
      }
      try {
        this.loading = true
        this.pesquisaTickets.pageNumber++
        await this.consultarTickets()
        this.loading = false
      } catch (error) {
        this.loading = false
      }
    },
    async listarFilas () {
      const { data } = await ListarFilas()
      this.filas = data
      localStorage.setItem('filasCadastradas', JSON.stringify(data || []))
    },
    async listarWhatsapps () {
      const { data } = await ListarWhatsapps()
      this.$store.commit('LOAD_WHATSAPPS', data)
    },
    async listarEtiquetas () {
      const { data } = await ListarEtiquetas(true)
      this.etiquetas = data
    },
    async abrirModalUsuario () {
      // if (!usuario.id) {
      //   await this.dadosUsuario()
      // }
      // const { data } = await DadosUsuario(userId)
      // this.usuario = data
      this.modalUsuario = true
    },
    async efetuarLogout () {
      // console.log('logout - index atendimento')
      try {
        await RealizarLogout(usuario)
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('profile')
        localStorage.removeItem('userId')
        localStorage.removeItem('queues')
        localStorage.removeItem('usuario')
        localStorage.removeItem('filtrosAtendimento')

        this.$router.go({ name: 'login', replace: true })
      } catch (error) {
        this.$notificarErro(
          'Não foi possível realizar logout',
          error
        )
      }
    },
    copyContent (content) {
      navigator.clipboard.writeText(content)
        .then(() => {
          // Copiado com sucesso
          // console.log('Conteúdo copiado: ', content)
        })
        .catch((error) => {
        // Ocorreu um erro ao copiar
          console.error('Erro ao copiar o conteúdo: ', error)
        })
    },
    deletarMensagem (mensagem) {
      const data = { ...mensagem }
      this.$q.dialog({
        title: 'Atenção!! Deseja realmente deletar a mensagem? ',
        message: 'Mensagens antigas não serão apagadas no cliente.',
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
      }).onOk(() => {
        this.loading = true
        DeletarMensagem(data)
          .then(res => {
            this.loading = false
            mensagem.isDeleted = true
          })
          .catch(error => {
            this.loading = false
            console.error(error)
            this.$notificarErro('Não foi possível apagar a mensagem', error)
          })
      }).onCancel(() => {
      })
    },
    async tagSelecionada (tags) {
      const { data } = await EditarEtiquetasContato(this.ticketFocado.contact.id, [...tags])
      this.contatoEditado(data)
    },
    async carteiraDefinida (wallets) {
      const { data } = await EditarCarteiraContato(this.ticketFocado.contact.id, [...wallets])
      this.contatoEditado(data)
    },
    async listarUsuarios () {
      try {
        const { data } = await ListarUsuarios()
        this.usuarios = data.users
      } catch (error) {
        console.error(error)
        this.$notificarErro('Problema ao carregar usuários', error)
      }
    },
    async autoCloseTickets(tempo, mensagem) {
      if (this.autoFechamentoAtivo !== 'enabled') {

      } else if (this.autoFechamentoAtivo === 'enabled') {
        const currentTimeInSeconds = Math.floor(new Date().getTime() / 1000)
        await Promise.all(this.tickets.map(async (ticket) => {
          const lastMessageTimeInSeconds = Math.floor(ticket.lastMessageAt / 1000)
          if (currentTimeInSeconds - lastMessageTimeInSeconds > tempo && ticket.status === 'open') {
            await EnviarMensagemTexto(ticket.id, message)
            await AtualizarStatusTicket(ticket.id, 'closed', ticket.userId)
            const message = {
              read: 1,
              fromMe: true,
              mediaUrl: '',
              body: mensagem,
              scheduleDate: null,
              quotedMsg: null,
              idFront: uid()
            }
            this.$q.notify({
              type: 'warning',
              message: 'Atendimento ' + ticket.id + ' resolvido automaticamente por ter ficado sem interação por mais de ' + tempo + ' minutos.',
              position: 'top'
            })
          }
        }))
      }
    },
    setValueMenu () {
      this.drawerTickets = !this.drawerTickets
    },
    setValueMenuContact () {
      this.drawerContact = !this.drawerContact
    },
    async abrirModalLogs () {
      const { data } = await ConsultarLogsTicket({ ticketId: this.ticketFocado.id })
      this.logsTicket = data
      this.exibirModalLogs = true
    }
  },
  beforeMount () {
    this.$store.commit('RESET_TICKETS')
    this.listarFilas()
    this.listarEtiquetas()
    this.listarConfiguracoes()
    const filtros = JSON.parse(localStorage.getItem('filtrosAtendimento'))
    if (!filtros?.pageNumber) {
      localStorage.setItem('filtrosAtendimento', JSON.stringify(this.pesquisaTickets))
    }
  },
  async mounted () {
    this.loadingMount = true

    this.notify = this.$q.notify({
      position: 'top',
      type: 'positive',
      message: 'Aguarde enquanto os tickets são carregados...',
      progress: true,
      actions: [{ icon: 'close', round: true, color: 'white' }]
    })

    if (!localStorage.getItem('reloaded')) {
      localStorage.setItem('reloaded', 'true')
      window.location.reload()
    } else {
      localStorage.removeItem('reloaded')
    }

    try {
      this.$root.$on('infor-cabecalo-chat:acao-menu', this.setValueMenu)
      this.$root.$on('update-ticket:info-contato', this.setValueMenuContact)
      await this.atualizarUsuario()
      await this.listarMensagens()
      this.$store.commit('UPDATE_SHOW_MENU', this.showMenu)
      this.socketTicketList()
      this.pesquisaTickets = JSON.parse(localStorage.getItem('filtrosAtendimento'))
      this.$root.$on('handlerNotifications', this.handlerNotifications)
      await this.listarWhatsapps()
      await this.consultarTickets()
      await this.listarUsuarios()
      const { data } = await ListarMensagensRapidas()
      this.mensagensRapidas = data

      if ('Notification' in window) {
        Notification.requestPermission()
      }
      this.userProfile = localStorage.getItem('profile')

      // Verificar se existe ticket na URL e abrir o ticket
      if (this.$route?.params?.ticketId) {
        const ticketId = this.$route.params.ticketId
        if (ticketId && this.tickets.length > 0) {
          const ticket = this.tickets.find((t) => t.id === +ticketId)
          if (ticket) {
            if (this.$q.screen.lt.md && ticket.status !== 'pending') {
              this.$root.$emit('infor-cabecalo-chat:acao-menu')
            }
            this.$store.commit('SET_HAS_MORE', true)
            this.$store.dispatch('AbrirChatMensagens', ticket)
          }
        }
      } else {
        this.$router.push({ name: 'chat-empty' })
      }
    } catch (error) {
      console.error('Erro ao montar o componente:', error)
    } finally {
      this.isMounted = true
      this.loadingMount = false
      if (this.notify) {
        this.notify()
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    if (!this.isMounted) {
      next(false)
    } else {
      next()
    }
  },
  destroyed() {
    this.$store.commit('RESET_TICKETS')
    this.$root.$off('handlerNotifications', this.handlerNotifications)
    this.$root.$off('infor-cabecalo-chat:acao-menu', this.setValueMenu)
    this.$root.$on('update-ticket:info-contato', this.setValueMenuContact)
    // this.socketDisconnect()
    this.$store.commit('TICKET_FOCADO', {})
  }
}
</script>

<style lang="sass">
absolute-top
  position: absolute
  top: 0
.upload-btn-wrapper
  position: relative
  overflow: hidden
  display: inline-block

  & input[type="file"]
    font-size: 100px
    position: absolute
    left: 0
    top: 0
    opacity: 0

.WAL
  width: 100%
  height: 100%

  &:before
    content: ''
    height: 127px
    position: fixed
    top: 0
    width: 100%

  &__layout
    margin: 0 auto
    z-index: 4000
    height: 100%
    width: 100%

  &__field.q-field--outlined .q-field__control:before
    border: none

  .q-drawer--standard
    .WAL__drawer-close
      display: none

@media (max-width: 850px)
  .WAL
    padding: 0
    &__layout
      width: 100%
      border-radius: 0

@media (min-width: 691px)
  .WAL
    &__drawer-open
      display: none

.conversation__summary
  margin-top: 4px

.conversation__more
  margin-top: 0!important
  font-size: 1.4rem

.tab-container
  overflow-x: auto
  font-size: 0.75rem

.tab-scroll
  white-space: nowrap

.badge-left
  border-radius: 50%

.black-icon
  color: black !important

.q-tabs__indicator
  background: transparent !important

.blur-effect
  filter: blur(0px)
</style>
