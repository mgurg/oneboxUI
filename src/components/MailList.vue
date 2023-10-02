<template>
  <q-list bordered class="rounded-borders" style="max-width: 600px">
    <q-item-label header>Google Inbox style</q-item-label>

    <div v-for="(message, index) in messages" v-if="messages != null" v-bind:key="index">

      <q-item>
        <!--        <q-item-section avatar top>-->
        <!--          <q-avatar color="primary" rounded text-color="white">JA</q-avatar>-->
        <!--        </q-item-section>-->

        <q-item-section top>
          <q-item-label lines="1">
            <span class="text-weight-medium">{{ message.subject }}</span>

          </q-item-label>
          <q-item-label lines="2">
            Wejdź na nasz fanpage i polub Zwoltex! Śledź nasze nowości i bądź z na bieżąco z promocjami.
          </q-item-label>
          <q-item-label lines="1">
            <span class="text-grey-8">{{ message.from.name }}</span>
          </q-item-label>
          <q-item-label class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase" lines="1">

          </q-item-label>
        </q-item-section>

        <!--            <q-item-section top side>-->
        <!--              <div class="text-grey-8 q-gutter-xs">-->
        <!--                <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />-->
        <!--                <q-btn class="gt-xs" size="12px" flat dense round icon="done" />-->
        <!--                <q-btn size="12px" flat dense round icon="more_vert" />-->
        <!--              </div>-->
        <!--            </q-item-section>-->
      </q-item>

      <q-separator spaced/>

    </div>
  </q-list>
</template>

<script setup>
import AccountMessagesResponse from 'src/assets/account_messages_response.json'
import {ref} from "vue";

const messages = ref(AccountMessagesResponse.messages)
</script>

<style lang="sass" scoped>

</style>
