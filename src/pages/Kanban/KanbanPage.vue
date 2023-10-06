<template>
  <div class="flex m-10">
    <draggable :list="list" class="dragArea list-group w-full" @change="log">

      <q-card
        v-for="element in list"
        :key="element.name"
        class="q-ma-md"
      >
        <q-card-section>
          {{ element.name }}
        </q-card-section>
      </q-card>

    </draggable>
  </div>
</template>


<script setup>

import {ref} from "vue";
import {VueDraggableNext as draggable} from "vue-draggable-next";

const enabled = ref(true);
const list = ref([
  {name: 'John', id: 1},
  {name: 'Joao', id: 2},
  {name: 'Jean', id: 3},
  {name: 'Gerard', id: 4},
]);
const dragging = ref(false);

function log(event) {
  console.log(event)
}

</script>
