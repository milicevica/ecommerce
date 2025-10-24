<script lang="ts" setup>
const { locale } = useI18n();

useHead(() => ({
  htmlAttrs: {
    lang: locale.value,
  },
}));
</script>

<template>
  <div id="default-layout">
    <app-message />
    <app-header />

    <u-main>
      <slot />
    </u-main>

    <app-footer />
  </div>
</template>
