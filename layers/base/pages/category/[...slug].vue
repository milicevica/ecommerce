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
    <div class="flex justify-between border">
      <div class="flex items-center gap-4 px-8 py-4" style="border-right: 1px solid;">
        <u-icon
          name="tabler:grid-dots"
          size="24"
          @click="changeGridToFourGrid"
        />
        <u-icon
          name="tabler:list"
          size="24"
          @click="changeGridToListView"
        />
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
