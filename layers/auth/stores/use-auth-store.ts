export const useAuthStore = defineStore("auth", {
  state: () => ({ user: null as { id: number; name: string; email: string } | null }),
  getters: {
    isAuthenticated: (state) => state.user !== null,
  },
  actions: {
    async logIn(email: string, password: string) {
      this.user = { id: 1, name: "John Doe", email: "john.doe@gmail.com" };
    },
    logOut() {
      this.user = null;
    }
  }
})
