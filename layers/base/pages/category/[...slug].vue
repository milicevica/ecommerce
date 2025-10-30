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
          class="px-8 py-4 cursor-pointer rounded-none"
          @click="changeGridToFourGrid"
        />

        <u-button
          icon="tabler:list"
          color="neutral"
          variant="ghost"
          class="px-8 py-4 cursor-pointer rounded-none"
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
              class="px-8 py-4 h-full cursor-pointer rounded-none"
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
              leading-icon="tabler:filter"
              class="px-8 py-4 h-full cursor-pointer rounded-none"
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

    <div :class="`grid gap-12 w-full grid-cols-${grid} mt-6`">
      <div class="cursor-pointer">
        <img
          src="https://placehold.co/600x400"
          alt="Product 1"
          class="w-full object-cover"
        >

        <h3 class="font-normal text-center">
          Product 1
        </h3>

        <p class="font-bold text-lg text-center">
          $80.00
        </p>
      </div>
      <div class="cursor-pointer">
        <img
          src="https://placehold.co/600x400"
          alt="Product 2"
          class="w-full object-cover"
        >

        <h3 class="font-normal text-center">
          Product 2
        </h3>

        <p class="font-bold text-lg text-center">
          $77.00
        </p>
      </div>
      <div class="cursor-pointer">
        <img
          src="https://placehold.co/600x400"
          alt="Product 3"
          class="w-full object-cover"
        >

        <h3 class="font-normal text-center">
          Product 3
        </h3>

        <p class="font-bold text-lg text-center">
          $39.00
        </p>
      </div>
      <div class="cursor-pointer">
        <img
          src="https://placehold.co/600x400"
          alt="Product 4"
          class="w-full object-cover"
        >

        <h3 class="font-normal text-center">
          Product 4
        </h3>

        <p class="font-bold text-lg text-center">
          $95.00
        </p>
      </div>
    </div>
  </div>
</template>
