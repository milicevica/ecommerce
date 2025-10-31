<script lang="ts" setup>
import { useCategoryGridStore } from "../../stores/use-category-grid-store";

const store = useCategoryGridStore();
</script>

<template>
  <u-button
    icon="tabler:grid-dots"
    color="neutral"
    variant="ghost"
    class="px-8 py-4 cursor-pointer rounded-none"
    @click="store.changeToGridLayout"
  />
</template>
