<template>
  <q-card flat bordered class="my-card q-ma-sm" :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'">
    <q-card-section class="q-ma-xs q-pa-xs">
      <div class="row items-center no-wrap">
        <div class="col">
          <div class="text-h6">Przypisane do:</div>
        </div>

        <div class="col-auto">
          <q-btn color="grey-7" round flat icon="add">
          </q-btn>
        </div>
      </div>
    </q-card-section>

    <q-card-section class="q-ma-xs q-pa-xs">
      Osoba:
      <div class="q-pa-xs">
        <div class="q-gutter-xs">
          <q-chip removable square>
            <q-avatar color="primary" text-color="white">
              AK
            </q-avatar>
            Adam Kowalski
          </q-chip>
        </div>
      </div>
    </q-card-section>

    <q-card-section class="q-ma-xs q-pa-xs">
      Sprawa:
      <div class="q-pa-xs">
        <div class="q-gutter-xs">
          <q-chip removable square>
            <span class="text-weight-bold">#WI-123 &nbsp;</span>Windykacja BMW
          </q-chip>
        </div>
      </div>
    </q-card-section>
    <q-card-section class="q-ma-xs q-pa-xs">
      Status:
      <div class="q-pa-xs">
        <div class="q-gutter-xs">
          <q-chip removable square>
            W trakcie
          </q-chip>
        </div>
      </div>
    </q-card-section>

    <q-card-section class="q-ma-xs q-pa-xs">
      Data:
      <div class="q-pa-xs">
        <div class="q-gutter-xs">
          <q-chip removable square>
            13-07-2023
          </q-chip>
        </div>
      </div>
    </q-card-section>
  </q-card>

<!--  <q-card flat bordered class="my-card q-ma-sm" :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'">-->
<!--    <q-card-section class="q-ma-xs q-pa-xs">-->
<!--      <div class="row items-center no-wrap">-->
<!--        <div class="text-h6">Status: W trakcie</div>-->
<!--      </div>-->
<!--    </q-card-section>-->

<!--    <q-separator />-->

<!--    <q-card-actions>-->
<!--      <q-btn flat round icon="event" />-->
<!--      <q-btn flat>-->
<!--        7:30PM-->
<!--      </q-btn>-->
<!--      <q-btn flat color="primary">-->
<!--        Reserve-->
<!--      </q-btn>-->
<!--    </q-card-actions>-->
<!--  </q-card>-->

  <q-card flat bordered class="my-card q-ma-sm" :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'">
    <q-card-section class="q-ma-xs q-pa-xs">
      <div class="row items-center no-wrap">
        <div class="col">
          <div class="text-h6">Tagi</div>
        </div>

        <div class="col-auto">
          <q-btn color="grey-7" round flat icon="add">
            <q-menu cover auto-close>
              <q-list>
                <q-item clickable>
                  <q-item-section>Ice cream</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Eclair</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Cupcake</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </div>
    </q-card-section>

    <q-card-section class="q-ma-xs q-pa-xs">
      <div class="q-pa-xs">
        <div class="q-gutter-xs">
          <q-chip color="primary" icon="local_offer" removable text-color="white">
            Ice cream
          </q-chip>
          <q-chip color="teal" icon="local_offer" removable text-color="white">
            Eclair
          </q-chip>
          <q-chip color="orange" icon="local_offer" removable text-color="white">
            Cupcake
          </q-chip>
          <q-chip color="red" disable icon="local_offer" removable text-color="white">
            Gingerbread (disable)
          </q-chip>
        </div>
      </div>
    </q-card-section>
  </q-card>




  <q-card flat bordered class="my-card q-ma-sm" :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'">
    <q-card-section class="q-ma-xs q-pa-xs">
      <div class="row items-center no-wrap">
        <div class="text-h6">Komentarze
          <q-badge color="orange">22</q-badge>
        </div>
      </div>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <q-input class="full-width" outlined />
    </q-card-section>

    <q-separator />
    <q-card-section>
      <q-scroll-area style="height: 200px;">
      <q-list bordered class="rounded-borders">
        <q-item>
          <q-item-section>
            <q-item-label>
              <span class="text-weight-bold">Janet</span>
              -- I'll be in your neighborhood doing errands this
              weekend. Do you want to grab brunch?

              -- I'll be in your neighborhood doing errands this
              weekend. Do you want to grab brunch?
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <div>1 min ago</div>
            <q-avatar size="sm" rounded color="primary" text-color="white">JA</q-avatar>
          </q-item-section>
        </q-item>

        <q-separator inset="item" />

        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>
              <span class="text-weight-bold">John</span>
              -- Can we schedule a call for tomorrow?-- Can we schedule a call for tomorrow?
            </q-item-label>
          </q-item-section>

        </q-item>
      </q-list>
      </q-scroll-area>
    </q-card-section>
  </q-card>

</template>

<script setup>
</script>
