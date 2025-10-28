<script lang="ts" setup>
import { useBreadcrumbStore } from "../../stores/use-breadcrumb-store";

const store = useBreadcrumbStore();
</script>

<template>
  <u-breadcrumb :items="store.getBreadcrumbs" class="mt-2">
    <template #separator>
      <span class="mx-2 text-muted">/</span>
    </template>
  </u-breadcrumb>
</template>
