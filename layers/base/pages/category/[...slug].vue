<script lang="ts" setup>
import { useAuthStore } from "../../../auth/stores/use-auth-store";
import { useCategoryGridStore } from "../../stores/use-category-grid-store";

const route = useRoute();
const gridStore = useCategoryGridStore();

const { data: products } = await useFetch<Product[]>("/api/ecommerce/products");

const getCategoryName = computed(() => {
  const segments = route.params.slug as Array<string>;
  const category = segments[segments.length - 1];

  return category?.replace(/-/g, " ");
});

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

        <category-grid-layout-btn />
        <category-list-layout-btn />

        <u-separator orientation="vertical" />
      </div>

      <div class="flex">
        <div class="flex items-center">
          <u-separator orientation="vertical" />

          <category-sort-btn />

          <u-separator orientation="vertical" />
        </div>
        <div>
          <category-filter-btn />
        </div>

        <u-separator orientation="vertical" />
      </div>
    </div>

    <u-separator />

    <category-grid>
      <div
        v-for="product in products"
        :key="product.id"
        class="cursor-pointer relative flex gap-4 shadow-sm"
        :class="{ 'flex-col': gridStore.isGridLayout }"
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

        <div class="flex flex-col gap-4 p-2 w-full" :class="{ 'justify-between': gridStore.isListLayout }">
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
    </category-grid>
  </div>
</template>
