<script lang="ts" setup>
const sortOptions = ref([
  { label: "Featured" },
  { label: "Best selling" },
  { label: "Alphabetically, A-Z" },
  { label: "Alphabetically, Z-A" },
  { label: "Price, low to high" },
  { label: "Price, high to low" },
  { label: "Date, old to new" },
  { label: "Date, new to old" },
]);
</script>

<template>
  <u-dropdown-menu :items="sortOptions">
    <u-button
      color="neutral"
      variant="ghost"
      trailing-icon="i-lucide-arrow-down"
      class="px-8 py-4 h-full rounded-none cursor-pointer"
    >
      Sort By
    </u-button>
  </u-dropdown-menu>
</template>
