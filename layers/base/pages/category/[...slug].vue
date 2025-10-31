<script lang="ts" setup>
import { useAuthStore } from "../../../auth/stores/use-auth-store";

const route = useRoute();

const { data: products } = await useFetch<Product[]>("/api/ecommerce/products");

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

const toast = useToast();
const authStore = useAuthStore();

function addToWishlist(productName: string): void {
  if (authStore.isAuthenticated) {
    toast.add({
      title: "Success",
      description: `${productName} added to your wishlist.`,
      color: "success",
    });
  }
  else {
    toast.add({
      title: "",
      description: "You need to be logged in to add items to your wishlist.",
      color: "neutral",
    });
  }
}

const filters = [
  {
    label: "Color",
    slot: "color",
    values: ["Blue", "Rosy Brown", "Hot Pink", "Light Sky Blue", "Coral", "Dark Violet", "Light Green"],
  },
  {
    label: "Size",
    slot: "size",
    values: ["S", "M", "L", "XL"],
  },
  {
    label: "Price",
    slot: "price",
  },
];

const price = ref([0, 95]);
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
              <div class="h-full flex justify-center font-bold uppercase">
                <u-accordion :items="filters" type="multiple">
                  <template #color="{ item }">
                    <div class="flex gap-2 mb-4">
                      <u-avatar
                        v-for="color in item.values"
                        :key="color"
                        size="md"
                        style="background-color: blue;"
                        class="cursor-pointer"
                      />
                    </div>
                  </template>

                  <template #size>
                    <div class="flex gap-2 mb-4">
                      <u-badge>38</u-badge>
                      <u-badge>39</u-badge>
                      <u-badge>40</u-badge>
                      <u-badge>41</u-badge>
                      <u-badge>42</u-badge>
                      <u-badge>43</u-badge>
                    </div>
                  </template>

                  <template #price>
                    <u-slider
                      v-model="price"
                      color="neutral"
                      size="xl"
                      :min="0"
                      :max="95"
                      tooltip
                    />
                  </template>
                </u-accordion>
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
        class="cursor-pointer relative flex gap-4 shadow-sm"
        :class="{ 'flex-col': grid === 4 }"
      >
        <u-badge
          v-if="product.sale"
          size="xl"
          color="error"
          class="absolute top-0 left-0 rounded-none"
        >
          -{{ product.sale }}
        </u-badge>
        <u-badge
          size="xl"
          color="neutral"
          variant="outline"
          class="absolute top-0 right-0 p-0 rounded-none"
          @click="addToWishlist(product.name)"
        >
          <u-button
            variant="ghost"
            color="neutral"
            :icon="product.favorite ? 'tabler:heart-filled' : 'tabler:heart'"
            size="sm"
            class="rounded-none"
          />
        </u-badge>

        <div class="h-48">
          <img
            :src="product.thumbnail"
            :alt="product.name"
            class="w-full object-cover h-48"
          >
        </div>

        <div class="flex flex-col gap-4 p-2 w-full" :class="{ 'justify-between': grid === 1 }">
          <h3 class="font-normal">
            {{ product.name }}
          </h3>
          <div class="flex items-end">
            <div class="flex flex-col w-full">
              <p class="font-normal text-sm line-through h-5">
                {{ product.sale ? `${$price(product.price)}` : "" }}
              </p>
              <div class="flex justify-between w-full items-start">
                <p class="font-bold text-lg py-2" :class=" { 'text-error': product.sale }">
                  {{ product.sale ? $price(product.salePrice) : $price(product.price) }}
                </p>

                <u-slideover title="Add to Cart">
                  <u-button
                    size="xl"
                    color="neutral"
                    variant="ghost"
                    icon="tabler:shopping-bag-plus"
                  />

                  <template #body>
                    Add To Cart functionality goes here
                  </template>
                </u-slideover>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
