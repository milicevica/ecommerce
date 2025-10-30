<script lang="ts" setup>
const route = useRoute();

const getCategoryName = computed(() => {
  const segments = route.params.slug as Array<string>;
  const category = segments[segments.length - 1];

  return category?.replace(/-/g, " ");
});

const sorts = [
  { label: "Featured" },
  { label: "Best selling" },
  { label: "Alphabetically, A-Z" },
  { label: "Alphabetically, Z-A" },
  { label: "Price, low to high" },
  { label: "Price, high to low" },
  { label: "Date, old to new" },
  { label: "Date, new to old" },
];
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
        <div class="flex items-center" style="border-left: 1px solid; border-right: 1px solid;">
          <u-dropdown-menu :items="sorts">
            <u-button
              color="neutral"
              variant="ghost"
              class="px-8 py-4 h-full"
            >
              Sort By

              <template #trailing>
                <u-icon name="i-lucide-arrow-down" />
              </template>
            </u-button>
          </u-dropdown-menu>
        </div>
        <div>
          <u-slideover title="Filters">
            <u-button
              color="neutral"
              variant="ghost"
              class="px-8 py-4 h-full"
            >
              Filter
            </u-button>

            <template #body>
              <div class="h-full flex items-center justify-center font-bold uppercase">
                Filters go here
              </div>
            </template>
          </u-slideover>
        </div>
      </div>
    </div>
  </div>
</template>
