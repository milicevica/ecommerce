<template>
  <u-header title="" class="bg-accented border-b-0">
    <template #left>
      <header-store-menu />
    </template>

    <template #toggle>
      <span />
    </template>

    <template #right>
      <client-only>
        <search-btn />
        <whishlist-icon />
        <cart-icon />
      </client-only>
    </template>
  </u-header>
</template>
