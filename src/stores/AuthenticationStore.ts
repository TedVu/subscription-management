import { defineStore } from "pinia";
export const useAuthenticationStore = defineStore("authentication", {
  state: () => ({ isLogin: false }),
  getters: {},
  actions: {
    login() {
      this.isLogin = true;
    },
    logout() {
      this.isLogin = false;
    },
  },
  persist: true,
});
