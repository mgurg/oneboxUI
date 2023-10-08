<template>
  <q-page>

    <div class="row no-wrap">
      <div class="col-2 bg-grey-1">
        <div class="column" style="height: calc(100vh - 55px); overflow: auto;">
          <div class="col-auto">
            <mail-list/>
          </div>
        </div>
      </div>
      <div class="col-8 bg-amber-2">
        <mail-content/>
        <!--        <div class="rounded-borders" style="height: calc(100vh - 55px)">-->

        <!--          <div class="row">-->
        <!--            <div class="col-12">two thirds</div>-->
        <!--            <div class="col-12">one sixth</div>-->
        <!--          </div>-->

        <!--        </div>-->
      </div>
      <div class="col-2 bg-amber-12 fit">
        <div class="rounded-borders" style="height: calc(100vh - 55px)">C</div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import MailList from "components/Mail/MailList.vue";
import MailContent from "components/Mail/MailContent.vue";
</script>
