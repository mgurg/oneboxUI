<!-- InfiniteScrollMessages.vue -->
<template>
  <q-page>
    <div class="q-pa-md" style="max-height: 250px; overflow: auto;">
    <q-infinite-scroll
      @load="loadMore"
      :offset="10"
    >
      <q-list bordered>
        <q-item v-for="message in messages" :key="message.id">
          <q-item-section>
            <q-item-label>{{ message.subject }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import {useUserApi} from "src/composables/api/mailApi";

const api = useUserApi();

const messages = ref([]);
const page = ref(0);
const pageSize = 5;
const totalMessages = ref(0);

const totalPages = computed(() => Math.ceil(totalMessages.value / pageSize));
// const offset = computed(() => page.value * pageSize);
const offset = 0;
const fetchMessages = async () => {
  // Make an API request to your endpoint
  const {data} = await api.get(`http://localhost:3000/v1/account/MGU_123/messages?path=INBOX&page=${page.value}&pageSize=${pageSize}&documentStore=false`)
  return data
};

const loadMore = async (index, done) => {

  console.log(index)
  if (page.value < totalPages.value) {
    const response = await fetchMessages();
    messages.value = [...messages.value, ...response.messages];
    page.value++;
    done();
  }
};

onMounted(async () => {
  // Initialize the component by loading the first set of messages
  const response = await fetchMessages();
  messages.value = response.messages;
  totalMessages.value = response.total;
  page.value++;
});

onUnmounted(() => {
  // Clean up any resources if needed
});
</script>
