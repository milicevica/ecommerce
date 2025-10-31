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

const products = [
  {
    id: 1,
    name: "Product 1",
    image: "https://placehold.co/600x400",
    price: 80.00,
    discount: "37%",
    discountedPrice: 50.40,
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://placehold.co/600x400",
    price: 77.00,
  },
  {
    id: 3,
    name: "Product 3",
    image: "https://placehold.co/600x400",
    price: 39.00,
  },
  {
    id: 4,
    name: "Product 4",
    image: "https://placehold.co/600x400",
    price: 95.00,
  },
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

    <div :class="`grid gap-8 w-full grid-cols-${grid} mt-6`">
      <div
        v-for="product in products"
        :key="product.id"
        class="cursor-pointer relative flex flex-col gap-4 shadow-sm"
      >
        <u-badge
          v-if="product.discount"
          size="xl"
          color="error"
          class="absolute top-0 left-0 rounded-none"
        >
          -{{ product.discount }}
        </u-badge>
        <u-badge
          size="xl"
          color="neutral"
          variant="outline"
          class="absolute top-0 right-0 p-0 rounded-none"
        >
          <u-button
            variant="ghost"
            color="neutral"
            icon="tabler:heart"
            size="sm"
          />
        </u-badge>

        <img
          :src="product.image"
          :alt="product.name"
          class="w-full object-cover"
        >

        <div class="flex flex-col gap-4 p-2">
          <h3 class="font-normal">
            {{ product.name }}
          </h3>
          <div class="flex items-end">
            <div class="flex flex-col w-full">
              <p class="font-normal text-sm line-through h-5">
                {{ product.discount ? `$${product.price}` : "" }}
              </p>
              <div class="flex justify-between w-full items-start">
                <p class="font-bold text-lg py-2" :class=" { 'text-error': product.discount }">
                  ${{ product.discount ? product.discountedPrice : product.price }}
                </p>

                <u-button
                  size="xl"
                  color="neutral"
                  variant="ghost"
                  icon="tabler:shopping-bag-plus"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
