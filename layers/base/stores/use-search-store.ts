export const useSearchStore = defineStore("search", {
  state: () => ({ searchTerm: "", products: [] as Array<Product>, categories: [] as Array<Category>, orders: [] }),
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
    async search() {
      await Promise.all([
        this.searchCategories(),
        this.searchProducts()
      ])
    }
  }
})
