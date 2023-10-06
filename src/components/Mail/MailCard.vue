<template>
  <q-card bordered class="my-card" flat>
    <q-card-section>
      <p>Przypisano do:</p>
      <div class="q-px-md q-gutter-sm" style="height: 80px">
        <q-avatar
          v-for="n in 5"
          :key="n"
          :style="`left: ${n * 25}px`"
          class="overlapping"
          size="40px"
        >
          <img :src="`https://cdn.quasar.dev/img/avatar${n + 1}.jpg`">
        </q-avatar>
      </div>
    </q-card-section>
    <q-card-section horizontal>
      <div class="text-grey-10 q-px-md">
        Nie wysyłać odpowiedzi do czasu ustalenia nowej oferty
      </div>

    </q-card-section>
    <q-separator/>

    <q-card-actions>
      <q-btn flat icon="event" round/>
      <q-btn flat>
        7:30PM
      </q-btn>
      <q-btn outline color="primary">
        in progress
      </q-btn>
    </q-card-actions>
  </q-card>
</template>


<script setup>

</script>


<style lang="sass" scoped>
.overlapping
  border: 2px solid white
  position: absolute
</style>
