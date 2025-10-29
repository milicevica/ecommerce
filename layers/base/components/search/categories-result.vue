<script lang="ts" setup>
import { useSearchStore } from '../../stores/use-search-store';

const store = useSearchStore();
</script>

<template>
  <div v-if="store.categories.length" class="grid grid-cols-4 gap-4 w-full">
    <div
      v-for="category in store.categories"
      :key="category.id"
      class="overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
    >
      <img
        src="https://placehold.co/600x400"
        :alt="category.name"
        class="w-full h-48 object-cover"
      >

      <div class="p-3 flex flex-col items-center">
        <h3 class="font-bold text-center truncate">
          {{ category.name }}
        </h3>
      </div>
    </div>
  </div>
  <div v-else>
    <p class="text-center text-gray-500">
      No results could be found. Please try again with a different query.
    </p>
  </div>
</template>
