<template>
  <div id="default-layout">
    <app-message />
    <app-header />

    <u-main>
      <slot />
    </u-main>

    <app-footer class="mt-8" />
  </div>
</template>
