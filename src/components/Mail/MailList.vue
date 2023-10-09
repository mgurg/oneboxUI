<template>
  Page: {{ page }} Total: {{ totalPages }}
  <mail-folders/>
  <q-list>
    <div ref="scrollTargetRef" class="q-pa-md" style="overflow: auto;">
      <q-infinite-scroll :offset="250" :scroll-target="scrollTargetRef" @load="onLoadRef">
        <div v-for="(message, index) in messages" v-if="messages != null" v-bind:key="message.id">

          <!--            <q-item clickable @click="saveMailId(message.id)">-->
          <!--              <q-item-section avatar top>-->
          <!--                <q-avatar color="primary" rounded text-color="white">JA</q-avatar>-->
          <!--              </q-item-section>-->
          <!--              <q-item-section top>-->
          <!--                <q-item-label lines="1">-->
          <!--                  <span class="text-weight-medium">{{ message.subject }}</span>-->
          <!--                </q-item-label>-->
          <!--                <q-item-label lines="2">-->
          <!--                  Wejdź na nasz fanpage i polub Zwoltex! Śledź nasze nowości i bądź z na bieżąco z promocjami.-->
          <!--                </q-item-label>-->
          <!--                <q-item-label lines="1">-->
          <!--                  <span class="text-grey-8">{{ message.from.name }}</span>-->
          <!--                </q-item-label>-->
          <!--                <q-item-label class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase" lines="1">-->
          <!--                </q-item-label>-->
          <!--              </q-item-section>-->
          <!--              <q-item-section side top>-->
          <!--                <div class="text-grey-8 q-gutter-xs">-->
          <!--                  <q-btn class="gt-xs" dense flat icon="delete" round size="12px"/>-->
          <!--                  <q-btn class="gt-xs" dense flat icon="done" round size="12px"/>-->
          <!--                  <q-btn dense flat icon="more_vert" round size="12px"/>-->
          <!--                </div>-->
          <!--              </q-item-section>-->
          <!--            </q-item>-->

          <q-item clickable @click="saveMailId(message.id)" class="q-ma-xs q-pa-xs">
            <q-item-section>
              <q-item-label class="text-body2 text-blue-grey-14">{{ message.from.name }}</q-item-label>
              <q-item-label lines="2" class="text-body2 text-blue-grey-10">{{ message.subject }}</q-item-label>
              <q-item-label class="q-gutter-xs text-blue-grey-13">
                <q-icon size="xs" name="person"/>
                <q-icon size="xs" name="attach_file"/>
                <q-icon size="xs" name="local_offer"/>
                <q-icon size="xs" name="event"/>
                <q-icon size="xs" name="circle"/>
                <q-badge color="blue-grey-13" text-color="white">
                  3
                  <q-icon
                    name="expand_more"
                    class="q-ml-xs"
                  />
                </q-badge>
              </q-item-label>
            </q-item-section>


            <q-item-section side top>
              <q-item-label caption>5 min ago</q-item-label>
              <q-icon color="yellow" name="star"/>
              <q-btn dense flat icon="more_vert" round size="12px">

                <q-menu>

                  AAAA
                </q-menu>
              </q-btn>
            </q-item-section>
          </q-item>

          <q-separator spaced/>

        </div>

        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="primary" size="40px"/>
          </div>
        </template>
      </q-infinite-scroll>
    </div>
  </q-list>


</template>

<script setup>
import {computed, onBeforeMount, ref, watch} from 'vue'
import {useUserApi} from "src/composables/api/mailApi";
import MailFolders from "components/Mail/MailFolders.vue";
import {useMailStore} from "stores/mail-store";
import {storeToRefs} from "pinia";

const store = useMailStore()


const {mailIdToDelete} = storeToRefs(store)

watch(mailIdToDelete, () => {
  console.log('mailId ref changed, delete something!' + mailIdToDelete.value)
  const result = messages.value.filter(message => message.id !== mailIdToDelete.value);
  messages.value = result;
})

const scrollTargetRef = ref(null)

const messages = ref([]);
const page = ref(0);
const pageSize = 5;
const totalMessages = ref(0);

function onLoadRef(index, done) {
  setTimeout(() => {
    loadMore()
    done()
  }, 2000)
}


const api = useUserApi();


const totalPages = computed(() => Math.ceil(totalMessages.value / pageSize));
// const offset = computed(() => page.value * pageSize);
const offset = 0;
const fetchMessages = async () => {
  // Make an API request to your endpoint

  const {data} = await api.get(`http://localhost:3000/v1/account/MGU_123/messages?path=INBOX&page=${page.value}&pageSize=${pageSize}&documentStore=false`)
  totalMessages.value = data.total;
  return data


  // PINIA
  // await store.setMailList('MGU_123', page.value, pageSize)
  // totalMessages.value = await store.getTotalMessages;
  // return await store.getMailList;
};

const loadMore = async () => {
  if (page.value < totalPages.value) {
    const response = await fetchMessages();
    messages.value = [...messages.value, ...response.messages];
    page.value++;
  }
};


function saveMailId(id) {
  store.setMailId(id);
  console.log(id)
}

onBeforeMount(() => {
  fetchMessages()
});


</script>
