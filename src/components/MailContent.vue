<template>
  <q-card no-shadow no-border>
    <q-card-section vertical>
      <div class="row">
        <div class="col">
          <div class="text-h6">FW: identyfikator i grafika</div>
          <div class="text-caption text-grey-8">From: ala@mapsa.com</div>
          <div class="text-caption text-grey-8">To: toloa@lola.com</div>
        </div>
        <div class="col-auto">
          <div class="row">
            <q-avatar color="primary" rounded text-color="white" size="md">JA</q-avatar>
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
      </div>
    </q-card-section>
    <q-card-section vertical class="row q-pa-xs">
      <div class="q-pa-xs">
        <div class="q-gutter-xs">
          <q-chip removable color="primary" text-color="white" icon="cake">
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
    </q-card-section>
  </q-card>


  <!--  -->
  <q-card bordered no-shadow class="card_style q-mt-md">
    <q-card-section vertical>
      <div class="text-subtitle1">Team Members</div>
      <div class="text-caption text-grey-8">Invite your team members to collaborate.</div>
    </q-card-section>
    <q-card-section vertical padding="none">
      <q-list>
        <q-item clickable class="q-link cursor-pointer q-focusable q-hoverable full-width q-py-none q-pr-none">
          <q-item-section side justify-center>
            <q-avatar rounded>
              <div class="q-avatar__content row flex-center overflow-hidden">
                <img src="https://cdn.quasar.dev/img/avatar.png" alt="Avatar">
              </div>
            </q-avatar>
          </q-item-section>
          <q-item-section main justify-center>
            <div class="q-item__label">Sofia Davis</div>
            <div class="q-item__label text-grey-7">sofiadavis@example.com</div>
          </q-item-section>
          <q-card-section side>
            <q-btn flat rounded class="bg-dark text-white q-btn--actionable q-hoverable card_style" dropdown
              label="Member">
              <q-icon name="arrow_drop_down" class="q-btn-dropdown__arrow"></q-icon>
            </q-btn>
          </q-card-section>
        </q-item>
        <q-item clickable class="q-link cursor-pointer q-focusable q-hoverable full-width q-py-none q-pr-none">
          <q-item-section side justify-center>
            <q-avatar rounded>
              <div class="q-avatar__content row flex-center overflow-hidden">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" alt="Avatar">
              </div>
            </q-avatar>
          </q-item-section>
          <q-item-section main justify-center>
            <div class="q-item__label">Jackson Lee</div>
            <div class="q-item__label text-grey-7">jacksonlee@example.com</div>
          </q-item-section>
          <q-card-section side>
            <q-btn flat rounded class="bg-dark text-white q-btn--actionable q-hoverable card_style" dropdown
              label="Owner">
              <q-icon name="arrow_drop_down" class="q-btn-dropdown__arrow"></q-icon>
            </q-btn>
          </q-card-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>

  <q-card class="no-shadow" bordered>
    <q-card-section class="text-center">
      <q-avatar color="primary" rounded text-color="white">JA</q-avatar>
    </q-card-section>

    <q-card-section class="q-pt-none text-left ">
      <div class="text-h6  text-grey-8">
        FW: identyfikator i grafika
      </div>
      <div class="text-caption text-grey-8">
        BBB
      </div>
    </q-card-section>

  </q-card>

  <div style="width: 100%; height: 100%;">
    <iframe :srcdoc="body" style="width: 100%; height: 50vh;"></iframe>
  </div>
  <q-editor v-model="editor" :definitions="{
    bold: { label: 'Bold', icon: null, tip: 'My bold tooltip' }
  }" />
</template>


<script setup>
import { ref } from "vue";
import MessageBody from 'src/assets/message_response_text.json'

const body = ref(MessageBody.html)

const editor = ref('Here we are overriding the <b>bold</b> command to include a label instead of an icon and also changing its tooltip.')

</script>


<style lang="sass" scoped>
.overlapping
  border: 2px solid white
  position: absolute
</style>

