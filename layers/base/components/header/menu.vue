<script lang="ts" setup>
import type { NavigationMenuItem, TabsItem } from "@nuxt/ui";
import type { Product } from "../../shared/types/product";

const searchTerm = ref("");
const foundProducts = ref<Product[]>([]);

const actionMenu = computed<NavigationMenuItem[]>(() => [
  {
    label: "Search",
    icon: "tabler:search",
  },
  {
    label: "Wishlist",
    icon: "tabler:heart",
  },
  {
    label: "Cart",
    icon: "tabler:shopping-bag",
  },
]);

async function search() {
  if (searchTerm.value == "") {
    foundProducts.value = [];
    return;
  }

  const data = await $fetch<Product[]>("/api/ecommerce/products?name_like=" + encodeURIComponent(searchTerm.value));

  foundProducts.value = data || [];
}


const tabs = ref<TabsItem[]>([
  {
    label: "Products",
    slot: "products",
  },
  {
    label: "Categories",
    slot: "categories",
  },
  {
    label: "Orders",
    slot: "orders",
  }
]);
</script>

<template>
  <u-header title="" class="bg-accented border-b-0">
    <template #left>
      <header-store-menu />
    </template>

    <template #body>
      <u-navigation-menu :items="actionMenu">
        <template #item="{ item }">
          <u-tooltip :text="item.label">
            <u-button color="neutral" variant="ghost" to="/" :icon="item.icon" :aria-label="item.label" />
          </u-tooltip>
        </template>
      </u-navigation-menu>
    </template>

    <template #right>
      <client-only>
        <u-navigation-menu :items="actionMenu" class="hidden lg:flex">
          <template #item="{ item }">
            <template v-if="item.label === 'Cart'">
              <u-slideover title="My Cart">
                <u-tooltip :text="$t('cart')">
                  <u-button color="neutral" variant="ghost" to="/" :icon="item.icon" :aria-label="item.label" />
                </u-tooltip>

                <template #body>
                  <div class="h-full flex items-center justify-center font-bold uppercase">
                    {{ $t("cartEmpty") }}
                  </div>
                </template>
              </u-slideover>
            </template>
            <template v-else-if="item.label === 'Search'">
              <u-slideover side="top" title="Search">
                <u-tooltip :text="item.label">
                  <u-button color="neutral" variant="ghost" :icon="item.icon" :aria-label="item.label" />
                </u-tooltip>

                <template #body>
                  <div class="flex flex-col w-full p-6 gap-8">
                    <u-input v-model="searchTerm" placeholder="Search For" class="w-full" @update:model-value="search" />

                    <template v-if="searchTerm.length">
                      <div class="flex gap-8 w-full items-start">
                        <div class="flex w-full">
                          <u-tabs :items="tabs" :unmount-on-hide="false" size="xl" variant="link" class="w-full mx-autol">
                            <template #products>
                              <div v-if="foundProducts.length">
                                <template v-for="product in foundProducts" :key="product.id">
                                  <p>{{ product.name }}</p>
                                </template>
                              </div>
                              <div v-else>
                                <p>No results could be found. Please try again with a different query.</p>
                              </div>
                            </template>

                            <template #categories>
                              <p>No results could be found. Please try again with a different query.</p>
                            </template>

                            <template #orders>
                              <p>No results could be found. Please try again with a different query.</p>
                            </template>
                          </u-tabs>
                        </div>
                      </div>
                    </template>
                  </div>
                </template>
              </u-slideover>
            </template>
            <template v-else>
              <u-tooltip :text="item.label">
                <u-button color="neutral" variant="ghost" to="/" :icon="item.icon" :aria-label="item.label" />
              </u-tooltip>
            </template>
          </template>
        </u-navigation-menu>
      </client-only>
    </template>
  </u-header>
</template>
