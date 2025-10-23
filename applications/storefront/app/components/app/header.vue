<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";

import { en, fr } from "@nuxt/ui/locale";

const route = useRoute();
const { locale } = useI18n();

useHead({
  title: "Ecommerce",
  meta: [
    { name: "description", content: "Ecommerce" },
  ],
});

const categories = computed<NavigationMenuItem[]>(() => [
  {
    label: "All Clocks",
    to: "/products/allClocks",
    active: route.path.startsWith("/products/allClocks"),
  },
  {
    label: "Wall Clocks",
    to: "/products/wallClocks",
    active: route.path.startsWith("/products/wallClocks"),
  },
  {
    label: "Cuckoo Closk",
    to: "/products/cuckooClocks",
    active: route.path.startsWith("/products/cuckooClocks"),
  },
  {
    label: "Alarm Clocks",
    to: "/products/alarmClocks",
    active: route.path.startsWith("/products/alarmClocks"),
  },
  {
    label: "Sale",
    to: "/sale",
    active: route.path.startsWith("/sale"),
  },
]);

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
</script>

<template>
  <div>
    <u-header :toggle="null">
      <template #title>
        ECOMMERCE
      </template>

      <template #right>
        <u-locale-select v-model="locale" :locales="[en, fr]" />

        <app-theme-toggle />

        <u-tooltip text="Log In">
          <u-button
            color="neutral"
            variant="ghost"
            icon="tabler:user"
            aria-label="Log In"
          />
        </u-tooltip>
      </template>
    </u-header>
    <u-header title="">
      <u-navigation-menu :items="categories" class="uppercase" />

      <template #body>
        <u-navigation-menu
          :items="categories"
          class="uppercase"
          orientation="vertical"
        />

        <u-navigation-menu :items="actionMenu">
          <template #item="{ item }">
            <u-tooltip :text="item.label">
              <u-button
                color="neutral"
                variant="ghost"
                to="/"
                :icon="item.icon"
                :aria-label="item.label"
              />
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
                    <u-button
                      color="neutral"
                      variant="ghost"
                      to="/"
                      :icon="item.icon"
                      :aria-label="item.label"
                    />
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
                    <u-button
                      color="neutral"
                      variant="ghost"
                      :icon="item.icon"
                      :aria-label="item.label"
                    />
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
                  <u-button
                    color="neutral"
                    variant="ghost"
                    to="/"
                    :icon="item.icon"
                    :aria-label="item.label"
                  />
                </u-tooltip>
              </template>
            </template>
          </u-navigation-menu>
        </client-only>
      </template>
    </u-header>
  </div>
</template>
