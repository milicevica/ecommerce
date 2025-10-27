<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";
import type { Category } from "../../shared/types/responses/category";

const { data } = await useFetch<Category[]>("/api/ecommerce/categories");

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

const items = ref([
  {
    label: "Store",
    icon: "tabler:building-store",
    children: data,
  },
])
</script>

<template>
  <u-header title="" class="bg-accented border-b-0">
    <template #left>
      <u-navigation-menu :items="items" content-orientation="vertical" class="w-full" />
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
                  <div class="flex w-full p-6">
                    <u-input placeholder="Search For" class="w-full" />
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
