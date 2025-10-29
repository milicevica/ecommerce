<script lang="ts" setup>
import type { Category } from "../../shared/types/category";

type CategoryItem = {
  label: string,
  to: string,
  icon: string,
  parentCategoryId: number | null,
  children: CategoryItem[]
}

const { data: categories } = await useFetch<Category[]>("/api/ecommerce/categories");

const categoriesAsDropdownItems = computed(() => {
  const map: Record<number, CategoryItem> = {};
  const roots: CategoryItem[] = [];

  categories.value?.forEach(category => {
    map[category.id] = {
      label: category.name,
      to: category.slug,
      icon: category.icon,
      parentCategoryId: category.parentCategoryId,
      children: []
    }
  });

  categories.value?.forEach(category => {
    if (category.parentCategoryId) {
      const categoryItem = map[category.id];

      if (categoryItem) {
        map[category.parentCategoryId]?.children.push(categoryItem)
      }
    } else {
      const categoryItem = map[category.id];
      if (categoryItem) {
        roots.push(categoryItem);
      }
    }
  });

  return roots;
});
const isStoreMenuOpen = ref(false);
</script>

<template>
  <u-dropdown-menu v-model:open="isStoreMenuOpen" :items="categoriesAsDropdownItems">
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
