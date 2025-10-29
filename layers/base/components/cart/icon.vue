<script lang="ts" setup>
import { useCartStore } from '../../stores/use-cart-store';

const store = useCartStore();
</script>

<template>
  <u-slideover title="My Cart">
    <u-tooltip :text="$t('cart')">
      <u-chip
        color="info"
        size="3xl"
        :show="store.numberOfItemsInCart > 0"
        :text="store.numberOfItemsInCart"
        inset
      >
        <u-button color="neutral" variant="ghost" to="/" icon="tabler:shopping-bag" :aria-label="$t('cart')" />
      </u-chip>
    </u-tooltip>
  </u-slideover>
</template>
