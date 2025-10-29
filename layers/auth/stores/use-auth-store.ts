export const useAuthStore = defineStore("auth", {
  state: () => ({ user: null as { id: number; name: string; email: string } | null }),
  getters: {
    isAuthenticated: (state) => state.user !== null,
  },
  actions: {
    logIn() {
      this.user = { id: 1, name: "John Doe", email: "john.doe@gmail.com" };
    },
    logOut() {
      this.user = null;
    }
  }
})
