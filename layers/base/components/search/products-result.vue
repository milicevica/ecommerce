<script lang="ts" setup>
import { useSearchStore } from "../../stores/use-search-store";

const store = useSearchStore();
</script>

<template>
  <div v-if="store.products.length" class="grid grid-cols-4 gap-4 w-full">
    <div
      v-for="product in store.getFoundProducts"
      :key="product.id"
      class="overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
    >
      <img
        src="https://placehold.co/600x400"
        :alt="product.name"
        class="w-full h-48 object-cover"
      >

      <div class="p-3 flex flex-col items-center">
        <h3 class="font-bold text-center truncate">
          {{ product.name }}
        </h3>

        <p class="text-sm text-gray-500">
          $42.00
        </p>
      </div>
    </div>
  </div>
  <div v-else>
    <p class="text-center text-gray-500">
      No results could be found. Please try again with a different query.
    </p>
  </div>
</template>
