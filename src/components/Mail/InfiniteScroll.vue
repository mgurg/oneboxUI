<template>
 Page: {{ page}}
 Total: {{totalPages}}
  <div>
    <div ref="scrollTargetRef" class="q-pa-md" style="max-height: 250px; overflow: auto;">
      <q-infinite-scroll :offset="250" :scroll-target="scrollTargetRef" @load="onLoadRef">

        <q-list bordered>
          <q-item v-for="message in messages" :key="message.id">
            <q-item-section>
              <q-item-label>{{ message.subject }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
<!--        <div v-for="(item, index) in itemsRef" :key="index" class="caption">-->
<!--          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>-->
<!--        </div>-->
        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="primary" size="40px"/>
          </div>
        </template>
      </q-infinite-scroll>
    </div>

<!--    <q-separator style="height: 2px"/>-->

<!--    <div id="scroll-target-id" class="q-pa-md" style="max-height: 248px; overflow: auto;">-->
<!--      <q-infinite-scroll :offset="250" scroll-target="#scroll-target-id" @load="onLoadId">-->
<!--        <div v-for="(item, index) in itemsId" :key="index" class="caption">-->
<!--          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>-->
<!--        </div>-->
<!--        <template v-slot:loading>-->
<!--          <div class="row justify-center q-my-md">-->
<!--            <q-spinner-dots color="primary" size="40px"/>-->
<!--          </div>-->
<!--        </template>-->
<!--      </q-infinite-scroll>-->
<!--    </div>-->
  </div>
</template>

<script setup>
import {computed, onBeforeMount, onMounted, ref} from 'vue'
import {useUserApi} from "src/composables/api/mailApi";

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

onBeforeMount(() => {
  fetchMessages()
});


</script>
