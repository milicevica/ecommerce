import type { BreadcrumbItem } from "@nuxt/ui";

import { useBreadcrumbStore } from "../stores/use-breadcrumb-store";

export default function (arrayOfBreadcrumbs: Array<BreadcrumbItem> = []) {
  const breadcrumbStore = useBreadcrumbStore();

  onMounted(() => {
    breadcrumbStore.resetBreadcrumb();
    breadcrumbStore.addBreadcrumbs(arrayOfBreadcrumbs);
  });
}
