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
        <div class="column" style="height: calc(100vh - 55px)">
          <div class="col-auto">
            <q-card :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'" bordered class="my-card" flat>
              <q-card-section>
                <div class="row items-center no-wrap">
                  <div class="col">
                    <div class="text-h6">Our Planet</div>
                    <div class="text-subtitle2">by John Doe</div>
                  </div>

                  <div class="col-auto">
                    <q-btn color="grey-7" flat icon="more_vert" round>
                      <q-menu auto-close cover>
                        <q-list>
                          <q-item clickable>
                            <q-item-section>Remove Card</q-item-section>
                          </q-item>
                          <q-item clickable>
                            <q-item-section>Send Feedback</q-item-section>
                          </q-item>
                          <q-item clickable>
                            <q-item-section>Share</q-item-section>
                          </q-item>
                        </q-list>
                      </q-menu>
                    </q-btn>
                  </div>
                </div>
              </q-card-section>

              <q-card-section>
                <div v-for="n in 2" :key="n" class="q-my-md">{{ n }}. Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus
                  obcaecati commodi minima assumenda consectetur culpa fuga null5ullam. In, libero.
                </div>
              </q-card-section>

              <q-separator/>

              <q-card-actions>
                <q-btn flat>Action 1</q-btn>
                <q-btn flat>Action 2</q-btn>
              </q-card-actions>
            </q-card>
          </div>
          <div class="col">
            <iframe srcdoc="<p >Hello world!</p>" style="width: 100%;height: 100%"></iframe>
          </div>
        </div>
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
</script>
