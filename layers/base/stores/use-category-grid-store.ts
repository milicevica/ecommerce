export const useCategoryGridStore = defineStore("category-grid", {
  state: () => ({ layout: "grid" as CategoryLayout }),
  getters: {
    isGridLayout: state => state.layout === "grid",
    isListLayout: state => state.layout === "list",
    getLayoutClass(state) {
      return state.layout === "grid" ? "grid-cols-4" : "grid-cols-1";
    },
  },
  actions: {
    setLayout(layout: CategoryLayout) {
      this.layout = layout;
    },
    changeToGridLayout() {
      this.setLayout("grid");
    },
    changeToListLayout() {
      this.setLayout("list");
    },
  },
});
