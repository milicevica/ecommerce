<script lang="ts" setup>
const route = useRoute();

const grid = ref(4);

function changeGridToFourGrid() {
  grid.value = 4;
}

function changeGridToListView() {
  grid.value = 1;
}

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

    <u-separator />

    <div class="flex justify-between">
      <div class="flex items-center">
        <u-separator orientation="vertical" />

        <u-button
          icon="tabler:grid-dots"
          color="neutral"
          variant="ghost"
          class="px-8 py-4 cursor-pointer"
          @click="changeGridToFourGrid"
        />

        <u-button
          icon="tabler:list"
          color="neutral"
          variant="ghost"
          class="px-8 py-4 cursor-pointer"
          @click="changeGridToListView"
        />

        <u-separator orientation="vertical" />
      </div>

      <div class="flex">
        <div class="flex items-center">
          <u-separator orientation="vertical" />

          <u-dropdown-menu :items="sorts">
            <u-button
              color="neutral"
              variant="ghost"
              class="px-8 py-4 h-full cursor-pointer"
            >
              Sort By

              <template #trailing>
                <u-icon name="i-lucide-arrow-down" />
              </template>
            </u-button>
          </u-dropdown-menu>

          <u-separator orientation="vertical" />
        </div>
        <div>
          <u-slideover title="Filters">
            <u-button
              color="neutral"
              variant="ghost"
              class="px-8 py-4 h-full cursor-pointer"
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

        <u-separator orientation="vertical" />
      </div>
    </div>

    <u-separator />

    <div :class="`grid gap-4 w-full grid-cols-${grid} mt-6`">
      <div class="overflow-hidden">
        Product 1
      </div>
      <div class="overflow-hidden">
        Product 2
      </div>
      <div class="overflow-hidden">
        Product 3
      </div>
      <div class="overflow-hidden">
        Product 4
      </div>
    </div>
  </div>
</template>
