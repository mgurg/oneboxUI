<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          aria-label="Menu"
          dense
          flat
          icon="menu"
          round
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
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
import EssentialLink from 'components/EssentialLink.vue'

const essentialLinks = [
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

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>
