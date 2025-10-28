export const useCartStore = defineStore("cart", {
  state: () => ({ cartItems: [] }),
  getters: {
    numberOfItemsInCart: (state) => state.cartItems.length
  }
});
