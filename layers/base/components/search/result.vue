<script lang="ts" setup>
import type { TabsItem } from "@nuxt/ui";
import { useSearchStore } from "../../stores/use-search-store";

const store = useSearchStore();

const resultTabs = ref<TabsItem[]>([
  { label: "Products", slot: "products" },
  { label: "Categories", slot: "categories" },
  { label: "Orders", slot: "orders" },
]);
</script>

<template>
  <div v-show="store.searchTerm.length" class="flex flex-col gap-8 w-full items-start">
    <div class="flex flex-col gap-4">
      <u-tabs :items="resultTabs" :unmount-on-hide="false" size="xl" variant="link" class="w-full mx-auto">
        <template #products>
          <search-products-result />
        </template>

        <template #categories>
          <search-categories-result />
        </template>

        <template #orders>
          <search-orders-result />
        </template>
      </u-tabs>
    </div>

    <div class="flex items-center justify-center w-full">
      <u-button>
        View All Results
      </u-button>
    </div>
  </div>
</template>
