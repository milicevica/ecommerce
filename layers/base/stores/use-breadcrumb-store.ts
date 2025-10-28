import type { BreadcrumbItem } from "@nuxt/ui";

export const useBreadcrumbStore = defineStore("breadcrumbs", {
  state: () => ({ breadcrumbs: [] as Array<unknown> }),
  getters: {
    getBreadcrumbs: (state) => state.breadcrumbs as Array<BreadcrumbItem>,
  },
  actions: {
    addBreadcrumbs(arrayOfBreadcrumbs: Array<BreadcrumbItem>) {
      this.resetBreadcrumb();
      this.addHomeBreadcrumb();

      arrayOfBreadcrumbs.forEach(breadcrumb => this.addBreadcrumb(breadcrumb));
    },
    addBreadcrumb(breadcrumb: BreadcrumbItem) {
      this.breadcrumbs.push(breadcrumb);
    },
    addHomeBreadcrumb() {
      this.breadcrumbs.push({
        label: "",
        icon: "tabler:home",
        to: "/",
      })
    },
    resetBreadcrumb() {
      this.breadcrumbs = [];
    }
  }
});
