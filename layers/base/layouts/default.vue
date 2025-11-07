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

    <div class="w-full bg-elevated">
      <u-container>
        <app-breadcrumb />
      </u-container>
    </div>

    <u-container>
      <u-main>
        <slot />
      </u-main>
    </u-container>

    <app-footer />
  </div>
</template>
