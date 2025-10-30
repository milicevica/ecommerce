import type { BreadcrumbItem } from "@nuxt/ui";

export const useBreadcrumbStore = defineStore("breadcrumbs", {
  state: () => ({ items: [] as BreadcrumbItem[] }),
  actions: {
    set(items: BreadcrumbItem[]) {
      this.items = items;
    },
    clear() {
      this.items = [];
    },
  },
});
