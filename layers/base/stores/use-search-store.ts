export const useSearchStore = defineStore("search", {
  state: () => ({ searchTerm: "", products: [] as Array<Product>, categories: [] as Array<Category>, orders: [] as Array<Order> }),
  getters: {
    getFoundProducts: (state) => state.products.slice(0, 4),
    getFoundCategories: (state) => state.categories.slice(0, 4),
    getFoundOrders: (state) => state.orders.slice(0, 4),
  },
  actions: {
    resetStoreData() {
      this.products = [];
      this.categories = [];
      this.orders = [];
    },
    async searchProducts() {
      const data = await $fetch<Product[]>("/api/ecommerce/products?name_like=" + encodeURIComponent(this.searchTerm));

      this.products = data || [];
    },
    async searchCategories() {
      const data = await $fetch<Category[]>("/api/ecommerce/categories?name_like=" + encodeURIComponent(this.searchTerm));

      this.categories = data || [];
    },
    async searchOrders() {
      const data = await $fetch<Order[]>("/api/ecommerce/orders?orderNumber_like=" + encodeURIComponent(this.searchTerm));

      this.orders = data || [];
    },
    async search() {
      await Promise.all([
        this.searchCategories(),
        this.searchProducts(),
        this.searchOrders()
      ])
    }
  }
})
