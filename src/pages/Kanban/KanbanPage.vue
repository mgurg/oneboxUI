<template>
  <div class="row">
    <div class="col">
      <div class="text-center text-h6 q-pa-sm q-ma-sm">New</div>
      <draggable
          :list="list1"
          class="list-group"
          group="people"
          @change="log"
          style="min-height: 100px; border: 2px dashed #4f3631; border-radius: 10px;"
      >
        <q-card
          v-for="(element, index) in list1"
          :key="element.name"
          class="q-ma-md list-group-item"
        >
          <q-card-section>
            {{ element.name }} {{ index }}
          </q-card-section>
        </q-card>
      </draggable>
    </div>

    <div class="col">
      <div class="text-center text-h6 q-pa-sm q-ma-sm">In progress</div>
      <draggable
        :list="list2"
        class="list-group"
        style="min-height: 100px; border: 2px dashed #4f3631; border-radius: 10px;"
        group="people"
        @change="log"
      >

        <q-card
          v-for="(element, index) in list2"
          :key="element.name"
          class="q-ma-md list-group-item"
        >
          <q-card-section>
            {{ element.name }} {{ index }}
          </q-card-section>
        </q-card>

      </draggable>
    </div>
    <div class="col">
      <div class="text-center text-h6 q-py-sm">Paused</div>
    </div>
    <div class="col">
      <div class="text-center text-h6 q-py-sm">Done</div>
    </div>
    <div class="col">
      <div class="text-center text-h6 q-py-sm">Rejected</div>
    </div>

  </div>
</template>
<script setup>
import {VueDraggableNext as draggable} from "vue-draggable-next";
import {ref} from "vue";

const name = "two-lists";
const display = "Two Lists";
const order = 1;
const list1 = ref([
  {name: "John", id: 1},
  {name: "Joao", id: 2},
  {name: "Jean", id: 3},
  {name: "Gerard", id: 4}
])

const list2 = ref([
  {name: "Juan", id: 5},
  {name: "Edgard", id: 6},
  {name: "Johnson", id: 7}
]);

function add() {
  this.list.push({name: "Juan"});
}

function replace() {
  this.list = [{name: "Edgard"}];
}

function clone(el) {
  return {
    name: el.name + " cloned"
  };
}

function log(evt) {
  window.console.log(evt);
}

</script>
