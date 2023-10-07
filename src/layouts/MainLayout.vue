<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <div class="q-gutter-y-md column" style="width: 300px; max-width: 100%">
        <q-toolbar class="bg-primary text-white rounded-borders">
          <q-btn
            aria-label="Menu"
            dense
            flat
            icon="menu"
            round
            @click="toggleLeftDrawer"
          />
          <q-avatar class="gt-xs">
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>

          <q-space />

          <q-input dark dense standout v-model="text" input-class="text-right" class="q-ml-md">
            <template v-slot:append>
              <q-icon v-if="text === ''" name="search" />
              <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
            </template>
          </q-input>
<!--          <q-toolbar-title>-->
<!--            Quasar App-->
<!--          </q-toolbar-title>-->

<!--          <div>Quasar v{{ $q.version }}</div>-->
        </q-toolbar>
      </div>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :mini="miniState"
      @mouseover="miniState = true"
      @mouseout="miniState = true"
      mini-to-overlay
      bordered
      show-if-above
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import {ref} from 'vue'
import EssentialLink from 'components/Mail/EssentialLink.vue'

const essentialLinks = [
  {
    title: 'Home',
    caption: 'Home',
    icon: 'home',
    link: '/'
  },
  {
    title: 'Mail',
    caption: 'Inbox',
    icon: 'email',
    link: '/mail'
  },
  {
    title: 'Tasks',
    caption: 'kanban board',
    icon: 'view_kanban',
    link: '/kanban'
  },
  {
    title: 'Users',
    caption: 'App users',
    icon: 'people',
    link: '/users'
  },
  {
    title: 'Settings',
    caption: 'github.com/quasarframework',
    icon: 'settings',
    link: '/settings'
  },
]


const leftDrawerOpen = ref(false);

const miniState = ref(true)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>
