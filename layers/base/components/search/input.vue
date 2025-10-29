<script lang="ts" setup>
import { useSearchStore } from '../../stores/use-search-store';

const inputRef = useTemplateRef("inputRef");
const store = useSearchStore();

onMounted(() => {
  store.searchTerm = "";
  store.products = [];

  inputRef.value?.inputRef?.focus();
})
</script>

<template>
  <u-input ref="inputRef" v-model="store.searchTerm" placeholder="Search For" class="w-full" @update:model-value="store.searchProducts" />
</template>
