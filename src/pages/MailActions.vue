
<template>
  <q-card flat class="my-card">
    <q-card-section>
      <div class="row items-center no-wrap">
        <div class="col">
          <div class="text-h6">Status płatności PBSR-VNL-VWM</div>
          <div class="text-subtitle2">by John Doe</div>
        </div>

        <div class="col-auto">
          <q-btn color="grey-7" round flat icon="more_vert">
            <q-menu cover auto-close>
              <q-list>
                <q-item clickable>
                  <q-item-section>Remove Card</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Send Feedback</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Share</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </div>
    </q-card-section>

    <q-card-section>
      <div class="q-pa-md q-gutter-sm" style="height: 80px">
      <q-avatar
        v-for="n in 5"
        :key="n"
        size="40px"
        class="overlapping"
        :style="`left: ${n * 25}px`"
      >
        <img :src="`https://cdn.quasar.dev/img/avatar${n + 1}.jpg`">
      </q-avatar>
      </div>
    </q-card-section>

    <q-separator />

    <q-card-actions>
      <q-btn flat>Action 1</q-btn>
      <q-btn flat>Action 2</q-btn>
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
