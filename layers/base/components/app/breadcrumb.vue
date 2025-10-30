<script lang="ts" setup>
import { useBreadcrumbStore } from "../../stores/use-breadcrumb-store";

const breadcrumbStore = useBreadcrumbStore();
</script>

<template>
  <u-breadcrumb :items="breadcrumbStore.items" class="py-3">
    <template #separator>
      <span class="mx-2 text-muted">/</span>
    </template>
  </u-breadcrumb>
</template>
