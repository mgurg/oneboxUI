import {defineStore} from 'pinia';

export const useMailStore = defineStore('mail', {
  state: () => ({
    mailId: null,
    nextMailId: null,
    mailbox: 'INBOX',
    mailIdToDelete: null
  }),
  getters: {
    getMailId: (state) => state.mailId,
    getNextMailId: (state) => state.nextMailId,
    getMailIdToDelete: (state) => state.mailIdToDelete,
    getMailbox: (state) => state.mailbox,

  },
  actions: {
    setMailId(id) {
      this.mailId = id;
    },
    setNextMailId(id) {
      this.nextMailId = id;
    },
    setMailbox(name) {
      this.mailbox = name;
    },
    setMailIdToDelete(id) {
      this.mailIdToDelete = id;
    },
  },
});
