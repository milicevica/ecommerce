<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";

const actionMenu = computed<NavigationMenuItem[]>(() => [
  {
    label: "Wishlist",
    icon: "tabler:heart",
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
        <cart-icon />
        <u-navigation-menu :items="actionMenu" class="hidden lg:flex">
          <template #item="{ item }">

              <u-tooltip :text="item.label">
                <u-button color="neutral" variant="ghost" to="/" :icon="item.icon" :aria-label="item.label" />
              </u-tooltip>

          </template>
        </u-navigation-menu>
      </client-only>
    </template>
  </u-header>
</template>
