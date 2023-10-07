import {defineStore} from 'pinia';

export const useMailStore = defineStore('mail', {
  state: () => ({
    mailId: null,
    mailbox: 'INBOX'
  }),
  getters: {
    getMailId: (state) => state.mailId,
    getMailbox: (state) => state.mailbox,

  },
  actions: {
    setMailId(id) {
      this.mailId = id;
    },
    setMailbox(name) {
      this.mailbox = name;
    },
  },
});
