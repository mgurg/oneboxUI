<!-- InfiniteScrollMessages.vue -->
<template>
  <q-page>
    <q-infinite-scroll
      :offset="offset"
      :index="page"
      :length="totalPages"
      @load="loadMore"
    >
      <q-list bordered>
        <q-item v-for="message in messages" :key="message.id">
          <q-item-section>
            <q-item-label>{{ message.subject }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-infinite-scroll>
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const messages = ref([]);
const page = ref(0);
const pageSize = 10;
const totalMessages = ref(0);

const totalPages = computed(() => Math.ceil(totalMessages.value / pageSize));
const offset = computed(() => page.value * pageSize);

const fetchMessages = async () => {
  // Make an API request to your endpoint
  const apiUrl = `http://localhost:3000/v1/messages?path=INBOX&page=${page.value}&pageSize=${pageSize}`;
  const response = await fetch(apiUrl);
  return response.json();
};

const loadMore = async () => {
  if (page.value < totalPages.value) {
    const response = await fetchMessages();
    messages.value = [...messages.value, ...response.messages];
    page.value++;
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
