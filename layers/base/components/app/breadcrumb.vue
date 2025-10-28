<script lang="ts" setup>
import type { BreadcrumbItem } from "@nuxt/ui";

const items: BreadcrumbItem[] = [
  {
    label: "",
    icon: "tabler:home",
    to: "/",
  },
  {
    label: "Store",
    to: "/products"
  }
];
</script>

<template>
  <u-breadcrumb :items="items" class="mt-2 px-4 sm:px-6 lg:px-8">
    <template #separator>
      <span class="mx-2 text-muted">/</span>
    </template>
  </u-breadcrumb>
</template>
