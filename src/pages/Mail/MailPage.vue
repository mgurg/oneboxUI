<template>
  <div class="q-pa-md q-gutter-md">
    <div class="row q-gutter-sm">
      <div class="col">
<!--        <mail-list />-->
        <infinite-scroll />
      </div>
      <div class="col-6">
        <!-- <mail-actions /> -->
        <mail-content />
      </div>
      <div class="col">
        <mail-card />
        <mail-chat />
        <infinite-scroll-messages />

      </div>
    </div>

  </div>
</template>

<script setup>
import {ref} from "vue";
import MailChat from "components/Mail/MailChat.vue";
import MailCard from "components/Mail/MailCard.vue";
import MailList from "components/Mail/MailList.vue";
import MailActions from "components/Mail/MailActions.vue";
import MailContent from "components/Mail/MailContent.vue";
import InfiniteScrollMessages from "components/Mail/InfiniteScrollMessages.vue";
import InfiniteScroll from "components/Mail/InfiniteScroll.vue";
</script>

<style lang="sass" scoped>
</style>

