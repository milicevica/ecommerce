<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";
import { useCartStore } from "../../stores/use-cart-store";

const cartStore = useCartStore();

const actionMenu = computed<NavigationMenuItem[]>(() => [
  {
    label: "Wishlist",
    icon: "tabler:heart",
  },
  {
    label: "Cart",
    icon: "tabler:shopping-bag",
  },
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
        <search-btn />
        <u-navigation-menu :items="actionMenu" class="hidden lg:flex">
          <template #item="{ item }">
            <template v-if="item.label === 'Cart'">
              <u-slideover title="My Cart">
                <u-tooltip :text="$t('cart')">
                  <u-chip color="info" :show="cartStore.numberOfItemsInCart > 0" :text="cartStore.numberOfItemsInCart" size="3xl" inset>
                    <u-button color="neutral" variant="ghost" to="/" :icon="item.icon" :aria-label="item.label" />
                  </u-chip>
                </u-tooltip>

                <template #body>
                  <div class="h-full flex items-center justify-center font-bold uppercase">
                    {{ $t("cartEmpty") }}
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
