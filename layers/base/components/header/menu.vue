<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";
import type { Category } from "../../shared/types/category";
import type { Product } from "../../shared/types/product";

const { data } = await useFetch<Category[]>("/api/ecommerce/categories");

const isOpen = ref(false);
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
  const data = await $fetch<Product[]>("/api/ecommerce/products?keyword=" + encodeURIComponent(searchTerm.value));

  foundProducts.value = data || [];
}
</script>

<template>
  <u-header title="" class="bg-accented border-b-0">
    <template #left>
      <u-dropdown-menu v-model:open="isOpen" :items="data">
        <u-button color="neutral" variant="ghost">
          <template #leading>
            <u-icon name="tabler:building-store" />
          </template>
          Store
          <template #trailing>
            <u-icon :name="isOpen ? 'i-lucide-arrow-up' : 'i-lucide-arrow-down'" />
          </template>
        </u-button>
      </u-dropdown-menu>
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
                  <div class="flex flex-col w-full p-6 gap-12">
                    <u-input v-model="searchTerm" placeholder="Search For" class="w-full" @update:model-value="search" />

                    <div v-if="foundProducts.length">
                      <template v-for="product in foundProducts" :key="product.id">
                        <p>{{ product.name }}</p>
                      </template>
                    </div>
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
