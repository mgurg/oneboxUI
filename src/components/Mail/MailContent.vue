<template>
  <div class="column" style="height: calc(100vh - 70px)">
    <div class="col-auto">
      <q-card v-if="messageDetails!==null" bordered class="full-height" flat>
        <q-card-section vertical>
          <div class="row">
            <div class="text-h6">{{ messageDetails.subject }}</div>
          </div>
        </q-card-section>
        <q-card-section vertical>

          <div class="row">
            <div class="col">
              <div class="text-caption text-grey-8">Od:
                <q-btn dense flat no-caps>{{ messageDetails.from.address }}</q-btn>
              </div>
              <div class="text-caption text-grey-8">Do:
                <q-btn dense flat no-caps>{{ messageDetails.to[0].address }}</q-btn>
              </div>
            </div>
            <div class="col-auto">
              <div class="text-grey-8 q-gutter-xs">
                <q-btn class="gt-xs" dense flat icon="reply" round size="12px"/>
                <q-btn class="gt-xs" dense flat icon="delete" round size="12px"
                       @click="deleteEmail(messageDetails.id)"/>
                <q-btn class="gt-xs" dense flat icon="done" round size="12px"/>
                <q-btn dense flat icon="more_vert" round size="12px">
                  <q-menu auto-close cover>
                    <q-list>
                      <q-item clickable>
                        <q-item-section>Odpowiedz</q-item-section>
                      </q-item>
                      <q-item clickable>
                        <q-item-section>Przekaż dalej</q-item-section>
                      </q-item>
                      <q-separator/>
                      <q-item clickable>
                        <q-item-section>Usuń</q-item-section>
                      </q-item>
                      <q-item clickable>
                        <q-item-section>Drukuj</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </div>
            </div>
          </div>
        </q-card-section>

      </q-card>
    </div>
    <div class="col">
      <iframe v-if="messageDetails!==null" :srcdoc="messageDetails.text.html"
              style="width: 100%; height: 100%; border: #ffffff; background-color: #ffffff;"></iframe>
    </div>

    <!--  -->
    <!--  <q-card bordered no-shadow class="card_style q-mt-md">-->
    <!--    <q-card-section vertical>-->
    <!--      <div class="text-subtitle1">Team Members</div>-->
    <!--      <div class="text-caption text-grey-8">Invite your team members to collaborate.</div>-->
    <!--    </q-card-section>-->
    <!--    <q-card-section vertical padding="none">-->
    <!--      <q-list>-->
    <!--        <q-item clickable class="q-link cursor-pointer q-focusable q-hoverable full-width q-py-none q-pr-none">-->
    <!--          <q-item-section side justify-center>-->
    <!--            <q-avatar rounded>-->
    <!--              <div class="q-avatar__content row flex-center overflow-hidden">-->
    <!--                <img src="https://cdn.quasar.dev/img/avatar.png" alt="Avatar">-->
    <!--              </div>-->
    <!--            </q-avatar>-->
    <!--          </q-item-section>-->
    <!--          <q-item-section main justify-center>-->
    <!--            <div class="q-item__label">Sofia Davis</div>-->
    <!--            <div class="q-item__label text-grey-7">sofiadavis@example.com</div>-->
    <!--          </q-item-section>-->
    <!--          <q-card-section side>-->
    <!--            <q-btn flat rounded class="bg-dark text-white q-btn&#45;&#45;actionable q-hoverable card_style" dropdown-->
    <!--              label="Member">-->
    <!--              <q-icon name="arrow_drop_down" class="q-btn-dropdown__arrow"></q-icon>-->
    <!--            </q-btn>-->
    <!--          </q-card-section>-->
    <!--        </q-item>-->
    <!--        <q-item clickable class="q-link cursor-pointer q-focusable q-hoverable full-width q-py-none q-pr-none">-->
    <!--          <q-item-section side justify-center>-->
    <!--            <q-avatar rounded>-->
    <!--              <div class="q-avatar__content row flex-center overflow-hidden">-->
    <!--                <img src="https://cdn.quasar.dev/img/boy-avatar.png" alt="Avatar">-->
    <!--              </div>-->
    <!--            </q-avatar>-->
    <!--          </q-item-section>-->
    <!--          <q-item-section main justify-center>-->
    <!--            <div class="q-item__label">Jackson Lee</div>-->
    <!--            <div class="q-item__label text-grey-7">jacksonlee@example.com</div>-->
    <!--          </q-item-section>-->
    <!--          <q-card-section side>-->
    <!--            <q-btn flat rounded class="bg-dark text-white q-btn&#45;&#45;actionable q-hoverable card_style" dropdown-->
    <!--              label="Owner">-->
    <!--              <q-icon name="arrow_drop_down" class="q-btn-dropdown__arrow"></q-icon>-->
    <!--            </q-btn>-->
    <!--          </q-card-section>-->
    <!--        </q-item>-->
    <!--      </q-list>-->
    <!--    </q-card-section>-->
    <!--  </q-card>-->

    <!--  <q-card class="no-shadow" bordered>-->
    <!--    <q-card-section class="text-center">-->
    <!--      <q-avatar color="primary" rounded text-color="white">JA</q-avatar>-->
    <!--    </q-card-section>-->

    <!--    <q-card-section class="q-pt-none text-left ">-->
    <!--      <div class="text-h6  text-grey-8">-->
    <!--        FW: identyfikator i grafika-->
    <!--      </div>-->
    <!--      <div class="text-caption text-grey-8">-->
    <!--        BBB-->
    <!--      </div>-->
    <!--    </q-card-section>-->

    <!--  </q-card>-->


    <!--    <q-card v-if="messageDetails!==null" bordered flat >-->
    <!--      <q-card-section>-->
    <!--        <iframe :srcdoc="messageDetails.text.html" style="width: 100%; height: 50vh; border: #dddddd"></iframe>-->
    <!--      </q-card-section>-->
    <!--    </q-card>-->


  </div>

</template>


<script setup>
import {ref, watch} from "vue";
import {useUserApi} from "src/composables/api/mailApi";
import {useMailStore} from "stores/mail-store";
import {storeToRefs} from "pinia";


const mailStore = useMailStore()

const {mailId} = storeToRefs(mailStore)

watch(mailId, () => {
  fetchMessage(mailId.value);
})

// TODO: https://runthatline.com/pinia-watch-state-getters-inside-vue-components/
const messageDetails = ref(null)

const api = useUserApi();
const fetchMessage = async (eid) => {
  // Make an API request to your endpoint
  const {data} = await api.get(`http://localhost:3000/v1/account/MGU_123/message/${eid}?textType=*&webSafeHtml=false&embedAttachedImages=false&preProcessHtml=false&markAsSeen=false&documentStore=false`)
  messageDetails.value = data
};

const deleteEmail = async (eid) => {

  await mailStore.setMailIdToDelete(eid);
  const {data} = await api.delete(`http://localhost:3000/v1/account/MGU_123/message/${eid}`)
  console.log(data)
};
</script>


<style lang="sass" scoped>

</style>

