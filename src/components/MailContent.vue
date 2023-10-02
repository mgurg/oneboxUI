<template>

  <div style="width: 100%; height: 100%;">
    <iframe :srcdoc="body" style="width: 100%; height: 50vh;"></iframe>
  </div>
  <q-editor
    v-model="editor"
    :definitions="{
        bold: {label: 'Bold', icon: null, tip: 'My bold tooltip'}
      }"
  />
</template>


<script setup>
import {ref} from "vue";
import MessageBody from 'src/assets/message_response_text.json'

const body = ref(MessageBody.html)

const editor = ref('Here we are overriding the <b>bold</b> command to include a label instead of an icon and also changing its tooltip.')

</script>
