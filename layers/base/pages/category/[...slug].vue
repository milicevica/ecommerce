<script lang="ts" setup>
const route = useRoute();

const getCategoryName = computed(() => {
  const segments = route.params.slug as Array<string>;
  const category = segments[segments.length - 1];

  return category?.replace(/-/g, " ");
});
</script>

<template>
  <div class="w-full flex flex-col">
    <div class="flex items-center justify-center py-8">
      <h1 class="text-3xl font-bold uppercase">
        {{ getCategoryName }}
      </h1>
    </div>
    <div class="flex justify-between border">
      <div class="flex items-center gap-4 px-8 py-4" style="border-right: 1px solid;">
        <u-icon name="tabler:grid-dots" size="24" />
        <u-icon name="tabler:list" size="24" />
      </div>
      <div class="flex">
        <div class="px-8 py-4" style="border-left: 1px solid; border-right: 1px solid;">
          Sort By
        </div>
        <div class="px-8 py-4">
          Filter
        </div>
      </div>
    </div>
  </div>
</template>
