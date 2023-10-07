<template>
  <q-btn flat class="full-width q-py-xs q-my-sm" color="primary" label="INBOX">
    <q-menu>
      <q-list dense style="min-width: 100px">
        <q-item clickable v-close-popup @click="saveFolderName('INBOX')">
          <q-item-section>INBOX</q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="saveFolderName('SPAM')">
          <q-item-section>SPAM</q-item-section>
        </q-item>
        <q-separator />
        <q-item clickable>
          <q-item-section>Preferences</q-item-section>
          <q-item-section side>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>

          <q-menu anchor="top end" self="top start">
            <q-list>
              <q-item
                v-for="n in 3"
                :key="n"
                dense
                clickable
              >
                <q-item-section>Submenu Label</q-item-section>
                <q-item-section side>
                  <q-icon name="keyboard_arrow_right" />
                </q-item-section>
                <q-menu auto-close anchor="top end" self="top start">
                  <q-list>
                    <q-item
                      v-for="n in 3"
                      :key="n"
                      dense
                      clickable
                    >
                      <q-item-section>3rd level Label</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-item>
            </q-list>
          </q-menu>

        </q-item>
        <q-separator />
        <q-item clickable v-close-popup>
          <q-item-section>Quit</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script setup>
import {useMailStore} from "stores/mail-store";
const store = useMailStore()

function saveFolderName(name){
  store.setMailbox(name);
}



</script>



<style scoped lang="sass">

</style>
