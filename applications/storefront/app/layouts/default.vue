<template>
  <div>
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
