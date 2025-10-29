<script lang="ts" setup>
import { useSearchStore } from '../../stores/use-search-store';

const inputRef = useTemplateRef("inputRef");
const store = useSearchStore();

onMounted(() => {
  store.searchTerm = "";
  store.products = [];

  setTimeout(() => {
    inputRef.value?.inputRef?.focus();
  }, 250)
});
</script>

<template>
  <u-input ref="inputRef" v-model="store.searchTerm" placeholder="Search For" class="w-full" @update:model-value="store.search" />
</template>
