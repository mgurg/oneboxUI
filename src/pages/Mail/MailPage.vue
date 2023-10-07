<template>
  <q-page style="max-height: 100%">
    <div class="q-pa-md q-gutter-md fit">
      <div class="row q-gutter-sm">
        <div class="col">
          <mail-list/>
        </div>
        <div class="col-6">
          <mail-content/>
        </div>
        <div class="col">
          <mail-card/>
          <mail-chat/>

        </div>
      </div>

    </div>
  </q-page>
</template>

<script setup>
import MailChat from "components/Mail/MailChat.vue";
import MailCard from "components/Mail/MailCard.vue";
import MailList from "components/Mail/MailList.vue";
import MailContent from "components/Mail/MailContent.vue";
</script>

<style lang="sass" scoped>
// TODO: https://stackoverflow.com/questions/69840924/how-to-have-q-card-take-full-height-in-q-splitter-in-quasar
</style>

