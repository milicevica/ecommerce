<script lang="ts" setup>
import { useCategoryGridStore } from "../../stores/use-category-grid-store";

const store = useCategoryGridStore();
</script>

<template>
  <div class="grid gap-8 w-full mt-6" :class="store.getLayoutClass">
    <slot />
  </div>
</template>
