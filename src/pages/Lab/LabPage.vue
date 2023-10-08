<template>
  <q-page>

    <div class="row no-wrap q-gutter-xs q-mt-md">
      <div class="col-3 bg-grey-1">
        <div class="column" style="height: calc(100vh - 70px); overflow: auto;">
          <div class="col-auto">
            <mail-list/>
          </div>
        </div>
      </div>
      <div class="col-6 bg-amber-2">
        <mail-content/>
      </div>
      <div class="col-3 bg-grey-12">
        <div class="rounded-borders" style="height: calc(100vh - 70px)">
          <tag-card />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import MailList from "components/Mail/MailList.vue";
import MailContent from "components/Mail/MailContent.vue";
import TagCard from "components/Mail/TagCard.vue";
</script>
