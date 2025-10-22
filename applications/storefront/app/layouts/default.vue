<template>
  <div id="default-layout">
    <app-message />
    <app-header />

    <u-main>
      <u-container>
        <slot />
      </u-container>
    </u-main>

    <app-footer class="mt-8" />
  </div>
</template>
