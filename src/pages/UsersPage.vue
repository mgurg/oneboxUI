<template>
  <div class="row justify-center">
    <q-page class="col-lg-8 col-sm-10 col-xs q-pa-xs">
    <q-list bordered class="rounded-borders">
      <q-item-label header>Users</q-item-label>
      <q-separator spaced/>
      <q-item v-ripple clickable>
        <q-item-section avatar>
          <q-avatar color="primary" rounded text-color="white">JA</q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Brunch this weekend?</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold">Janet</span>
            -- I'll be in your neighborhood doing errands this
            weekend. Do you want to grab brunch?
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" dense flat icon="delete" round size="12px"/>
            <q-btn class="gt-xs" dense flat icon="done" round size="12px"/>
            <q-btn dense flat icon="more_vert" round size="12px"/>
          </div>
        </q-item-section>
      </q-item>

      <q-separator inset="item"/>

      <q-item v-ripple clickable>
        <q-item-section avatar>
          <q-avatar color="primary" rounded text-color="white">GO</q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Linear Project</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold">John</span>
            -- Can we schedule a call for tomorrow?
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" dense flat icon="delete" round size="12px"/>
            <q-btn class="gt-xs" dense flat icon="done" round size="12px"/>
            <q-btn dense flat icon="more_vert" round size="12px"/>
          </div>
        </q-item-section>
      </q-item>
    </q-list>

    </q-page>
  </div>
</template>
<script setup>
</script>
