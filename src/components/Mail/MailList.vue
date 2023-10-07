<template>
  <div class="fit">

    <q-list bordered class="rounded-borders" style="min-height: 70vh;">
      <q-item-label header> Page: {{ page }} Total: {{ totalPages }}</q-item-label>
      <q-item-label>
        <mail-folders/>
      </q-item-label>


      <div ref="scrollTargetRef" class="q-pa-md" style="max-height: 80vh; overflow: auto;">
        <q-infinite-scroll :offset="250" :scroll-target="scrollTargetRef" @load="onLoadRef">


          <!--          <q-item v-for="message in messages" :key="message.id">-->
          <!--            <q-item-section>-->
          <!--              <q-item-label>{{ message.subject }}</q-item-label>-->
          <!--            </q-item-section>-->
          <!--          </q-item>-->

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

            <q-item clickable @click="saveMailId(message.id)">
              <q-item-section>
                <q-item-label>{{ message.from.name }}</q-item-label>
                <q-item-label lines="2">{{ message.subject }}</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>5 min ago</q-item-label>
                <q-icon name="star" color="yellow" />
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


  </div>


</template>

<script setup>
import {computed, onBeforeMount, ref} from 'vue'
import {useUserApi} from "src/composables/api/mailApi";
import MailFolders from "components/Mail/MailFolders.vue";
import {useMailStore} from "stores/mail-store";

const store = useMailStore()

const itemsRef = ref([{}, {}, {}, {}, {}, {}, {}])
const scrollTargetRef = ref(null)

const messages = ref([]);
const page = ref(0);
const pageSize = 5;
const totalMessages = ref(0);

function onLoadRef(index, done) {
  setTimeout(() => {
    itemsRef.value.push({}, {}, {}, {}, {}, {}, {})

    console.log(index)
    loadMore()
    done()
  }, 2000)
}


// function onLoadId(index, done) {
//   setTimeout(() => {
//     itemsId.value.push({}, {}, {}, {}, {}, {}, {})
//     done()
//   }, 2000)
// }


const api = useUserApi();


const totalPages = computed(() => Math.ceil(totalMessages.value / pageSize));
// const offset = computed(() => page.value * pageSize);
const offset = 0;
const fetchMessages = async () => {
  // Make an API request to your endpoint
  const {data} = await api.get(`http://localhost:3000/v1/account/MGU_123/messages?path=INBOX&page=${page.value}&pageSize=${pageSize}&documentStore=false`)
  totalMessages.value = data.total;
  return data
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
