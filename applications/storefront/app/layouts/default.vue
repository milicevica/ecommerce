<script lang="ts" setup>
import type { BreadcrumbItem } from "@nuxt/ui";

import { useBreadcrumbStore } from "../../../../layers/base/stores/use-breadcrumb-store";

const { locale } = useI18n();
const route = useRoute();

const breadcrumbStore = useBreadcrumbStore();

watchEffect(() => {
  breadcrumbStore.addBreadcrumbs(route.meta?.breadcrumb as BreadcrumbItem[] || []);
});

useHead(() => ({
  htmlAttrs: {
    lang: locale.value,
  },
}));
</script>

<template>
  <div id="default-layout">
    <app-message />
    <app-header />
    <app-breadcrumb />

    <u-main>
      <slot />
    </u-main>

    <app-footer />
  </div>
</template>
