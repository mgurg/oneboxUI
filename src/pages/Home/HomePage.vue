<template>
  <top-bar/>
  <q-space />
  <top-cards/>
  <div class="row full-width">
    <div class="col bg-amber-1">
      <div class="text-center text-h6">Nadchodzące maile</div>
      <div class="text-center">Dzisiaj</div>
      <q-list bordered class="rounded-borders" dense padding>
        <q-item v-ripple clickable>
          <q-item-section>
            Item
          </q-item-section>
        </q-item>

        <q-item v-ripple clickable>
          <q-item-section>
            Item
          </q-item-section>
        </q-item>

        <q-item v-ripple clickable>
          <q-item-section>
            Item
          </q-item-section>
        </q-item>
      </q-list>

      <div class="text-center">Jutro</div>
      <q-list bordered class="rounded-borders" dense padding>
        <q-item v-ripple clickable>
          <q-item-section>
            Item
          </q-item-section>
        </q-item>

        <q-item v-ripple clickable>
          <q-item-section>
            Item
          </q-item-section>
        </q-item>

        <q-item v-ripple clickable>
          <q-item-section>
            Item
          </q-item-section>
        </q-item>
      </q-list>

      <div class="text-center">Przyszły tydzień</div>
      <q-list bordered class="rounded-borders" dense padding>
        <q-item v-ripple clickable>
          <q-item-section>
            Item
          </q-item-section>
        </q-item>

        <q-item v-ripple clickable>
          <q-item-section>
            Item
          </q-item-section>
        </q-item>

        <q-item v-ripple clickable>
          <q-item-section>
            Item
          </q-item-section>
        </q-item>
      </q-list>
    </div>


    <div class="col bg-amber-2">
    </div>
    <div class="col bg-amber-3">
    </div>
  </div>


</template>

<script setup>
import TopBar from "components/TopBar.vue";
import TopCards from "components/TopCards.vue";
</script>

