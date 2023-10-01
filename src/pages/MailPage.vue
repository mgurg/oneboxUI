<template>
  <div class="q-pa-md q-gutter-md">
    <div class="row q-gutter-sm">
      <div class="col">
        <mail-list />
      </div>
      <div class="col-6">
        <mail-actions />
        <div class="q-pa-md">
          <div class="q-gutter-xs">
            <q-chip removable  color="primary" text-color="white" icon="cake">
              Ice cream
            </q-chip>
            <q-chip removable color="teal" text-color="white" icon="cake">
              Eclair
            </q-chip>
            <q-chip removable color="orange" text-color="white" icon="cake">
              Cupcake
            </q-chip>
            <q-chip disable removable color="red" text-color="white" icon="cake">
              Gingerbread (disable)
            </q-chip>
          </div>
        </div>
        <q-editor
          v-model="editor"
          :definitions="{
        bold: {label: 'Bold', icon: null, tip: 'My bold tooltip'}
      }"
        />
      </div>
      <div class="col">
        <mail-card />
        <mail-chat />
      </div>
    </div>

  </div>
</template>

<script setup>
import {ref} from "vue";
import MailChat from "components/MailChat.vue";
import MailCard from "components/MailCard.vue";
import MailList from "components/MailList.vue";
import MailActions from "pages/MailActions.vue";

const editor =  ref('Here we are overriding the <b>bold</b> command to include a label instead of an icon and also changing its tooltip.')
</script>

<style lang="sass" scoped>
.overlapping
  border: 2px solid white
  position: absolute
</style>

