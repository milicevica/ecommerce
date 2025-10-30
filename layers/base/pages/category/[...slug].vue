<script lang="ts" setup>
const route = useRoute();

const getCategoryName = computed(() => {
  const segments = route.params.slug as Array<string>;
  const category = segments[segments.length - 1];

  return category?.replace(/-/g, " ");
});
</script>

<template>
  <div class="flex flex-col">
    <div class="flex items-center justify-center p-6">
      <h2 class="text-3xl font-bold uppercase">
        {{ getCategoryName }}
      </h2>
    </div>
    <div class="flex gap-4 items-center justify-between p-6">
      <div class="flex gap-2">
        <u-icon name="tabler:grid-dots" size="32" />
        <u-icon name="tabler:list" size="32" />
        <u-icon name="tabler:list-check" size="32" />
      </div>
      <div class="flex gap-4 p-6">
        <u-button variant="ghost">
          Sort By
        </u-button>
        <u-button variant="ghost" leading-icon="tabler:filter">
          Filter
        </u-button>
      </div>
    </div>
    <div>
      <p>Proizvodi</p>
    </div>
  </div>
</template>
