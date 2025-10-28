<script lang="ts" setup>
import type { Category } from "../../shared/types/category";

const { data: categories } = await useFetch<Category[]>("/api/ecommerce/categories");

const isStoreMenuOpen = ref(false);
</script>

<template>
  <u-dropdown-menu v-model:open="isStoreMenuOpen" :items="categories">
    <u-button color="neutral" variant="ghost">
      <template #leading>
        <u-icon name="tabler:building-store" />
      </template>

      <span>Store</span>

      <template #trailing>
        <u-icon :name="isStoreMenuOpen ? 'i-lucide-arrow-up' : 'i-lucide-arrow-down'" />
      </template>
    </u-button>
  </u-dropdown-menu>
</template>
