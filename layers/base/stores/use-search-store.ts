export const useSearchStore = defineStore("search", {
  state: () => ({ searchTerm: "", products: [] as Array<Product>, categories: [] as Array<Category>, orders: [] }),
  actions: {
    resetStoreData() {
      this.products = [];
      this.categories = [];
      this.orders = [];
    },
    async searchProducts() {
      if (this.searchTerm == "") {
        this.resetStoreData();
        return;
      }

      const data = await $fetch<Product[]>("/api/ecommerce/products?name_like=" + encodeURIComponent(this.searchTerm));

      this.products = data || [];
    }
  }
})
