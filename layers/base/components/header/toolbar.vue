<script lang="ts" setup>
import { en, fr } from "@nuxt/ui/locale";

const { locale, setLocale } = useI18n();
</script>

<template>
  <u-header class="border-b-0">
    <template #title>
      ECOMMERCE
    </template>

    <template #toggle>
      <span />
    </template>

    <template #right>
      <u-locale-select
        v-model="locale"
        :locales="[en, fr]"
        @update:model-value="$event === 'en' || $event == 'fr' ? setLocale($event) : setLocale('en')"
      />

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
</template>
