<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "All Clocks",
    to: "/products/allClocks",
    active: route.path.startsWith("/products/allClocks"),
  },
  {
    label: "Wall Clocks",
    to: "/products/wallClocks",
    active: route.path.startsWith("/products/wallClocks"),
  },
  {
    label: "Cuckoo Closk",
    to: "/products/cuckooClocks",
    active: route.path.startsWith("/products/cuckooClocks"),
  },
  {
    label: "Alarm Clocks",
    to: "/products/alarmClocks",
    active: route.path.startsWith("/products/alarmClocks"),
  },
  {
    label: "Sale",
    to: "/sale",
    active: route.path.startsWith("/sale"),
  },
]);
</script>

<template>
  <u-header>
    <template #title>
      ECOMMERCE
    </template>

    <u-navigation-menu :items="items" class="uppercase" />

    <template #right>
      <app-theme-toggle />
    </template>
  </u-header>
</template>
