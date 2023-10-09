import {defineStore} from 'pinia';

export const useMailStore = defineStore('mail', {
  state: () => ({
    mailId: null,
    mailbox: 'INBOX',
    mailIdToDelete: null
  }),
  getters: {
    getMailId: (state) => state.mailId,
    getMailIdToDelete: (state) => state.mailIdToDelete,
    getMailbox: (state) => state.mailbox,

  },
  actions: {
    setMailId(id) {
      this.mailId = id;
    },
    setMailbox(name) {
      this.mailbox = name;
    },
    setMailIdToDelete(id) {
      this.mailIdToDelete = id;
    },
  },
});
