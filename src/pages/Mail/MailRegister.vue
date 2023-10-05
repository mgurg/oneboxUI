<template>
  <div class="row justify-center">
    <q-page class="col-lg-8 col-sm-10 col-xs q-pa-xs">

      <q-card bordered class="my-card" flat>
        <q-card-section>
          <div class="text-h6">Dodaj nową skrzynkę pocztową</div>
          <div class="text-caption">Podaj adres zbiorczej skrzynki pocztowej z której korzysta kilka osób. Np.:
            info@twojafirma.pl lub kontakt@twojafirma.pl
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-form
            class="q-gutter-md"
            @reset="onReset"
            @submit="onSubmit"
          >
            <q-input
              v-model="fullName"
              filled
              hint="Nazwa będzie widoczna w polu nadawca (np. Reklamacje od ABC sp. z o.o.)"
              label="Nazwa nadawcy maili"
            />

            <q-input
              v-model="emailAddress"
              filled
              hint="Firmowy adres email (we własnej domenie) np. reklamacje@firma-abc.pl"
              label="Email address"
              type="email"
            />

            <q-input
              v-model="emailPassword"
              filled
              hint="Tw)jeAktualneHa$$loD()Podanej$krzynkiEmaiL"
              label="Password"
            />

            <div class="row sm-gutter">
              <div class="q-pa-xs col-xs-6 col-sm-6">
                IMAP
              </div>
              <div class="q-pa-xs col-xs-6 col-sm-6">
                SMTP
              </div>
            </div>
            <div class="row sm-gutter">
              <div class="q-pa-xs col-xs-6 col-sm-6">
                <q-input
                  v-model="imapUsername"
                  filled
                  hint="Użytkownik (IMAP)"
                  label="Użytkownik"
                />
              </div>
              <div class="q-pa-xs col-xs-6 col-sm-6">
                <q-input
                  v-model="smtpUsername"
                  filled
                  hint="Użytkownik (SMTP)"
                  label="Użytkownik"
                />
              </div>
            </div>
            <div class="row sm-gutter">
              <div class="q-pa-xs col-xs-6 col-sm-6">
                <q-input
                  v-model="imapPassword"
                  filled
                  hint="Hasło (SMTP)"
                  label="Hasło"
                />
              </div>
              <div class="q-pa-xs col-xs-6 col-sm-6">
                <q-input
                  v-model="smtpPassword"
                  filled
                  hint="Hasło (SMTP)"
                  label="Hasło"
                />
              </div>
            </div>
            <div class="row sm-gutter">
              <div class="q-pa-xs col-xs-6 col-sm-6">
                <q-input
                  v-model="imapHost"
                  filled
                  hint="Hostname"
                  label="Hostname"
                />
              </div>
              <div class="q-pa-xs col-xs-6 col-sm-6">
                <q-input
                  v-model="smtpHost"
                  filled
                  hint="Hostname"
                  label="Hostname"
                />
              </div>
            </div>
            <div class="row sm-gutter">
              <div class="q-pa-xs col-xs-6 col-sm-6">
                <q-input
                  v-model="imapPort"
                  filled
                  hint="Port"
                  label="Port"
                />
              </div>
              <div class="q-pa-xs col-xs-6 col-sm-6">
                <q-input
                  v-model="smtpPort"
                  filled
                  hint="Port"
                  label="Port"
                />
              </div>
            </div>
            <div class="row sm-gutter">
              <div class="q-pa-xs col-xs-6 col-sm-6">
                <q-checkbox
                  v-model="imapTLS"
                  label="TLS"
                />
              </div>
              <div class="q-pa-xs col-xs-6 col-sm-6">
                <q-checkbox
                  v-model="smtpTLS"
                  label="TLS"
                />
              </div>
            </div>

            <div class="row sm-gutter">
              <q-btn class="q-mr-xs" color="primary" label="Test Settings"/>
              <q-btn color="primary" label="Import mailbox" type="submit"/>
              <q-btn class="q-ml-sm" color="primary" flat label="Reset" type="reset"/>
            </div>
          </q-form>
        </q-card-section>


      </q-card>
    </q-page>
  </div>
</template>

<script setup>

import {ref} from "vue";
import {useUserApi} from "src/composables/api/mailApi";

const api = useUserApi();

const emailAddress = ref('');
const emailPassword = ref('');
const fullName = ref('');
const imapUsername = ref('');
const imapPassword = ref('');
const imapHost = ref('');
const imapPort = ref('');
const imapTLS = ref(true);
const smtpUsername = ref('');
const smtpPassword = ref('');
const smtpHost = ref('');
const smtpPort = ref('');
const smtpTLS = ref(true);

async function onSubmit() {
  console.log('submit');

  // const {data} = await api.get('/v1/autoconfig?email=me%40wp.pl')

  const imap = {
    "auth": {
      "user": "myuser@gmail.com",
      "accessToken": false,
      "pass": "verysecret"
    },
    "useAuthServer": false,
    "host": "imap.gmail.com",
    "port": 993,
    "secure": true,
    "tls": {
      "rejectUnauthorized": true,
      "minVersion": "TLSv1.2"
    }
  }

  const smtp = {
    "auth": {
      "user": "myuser@gmail.com",
      "accessToken": false,
      "pass": "verysecret"
    },
    "useAuthServer": false,
    "host": "smtp.gmail.com",
    "port": 587,
    "secure": false,
    "tls": {
      "rejectUnauthorized": true,
      "minVersion": "TLSv1.2"
    }
  }

  console.log(imap);
  console.log(smtp)
}

function onReset() {
  console.log('reset');
}
</script>
