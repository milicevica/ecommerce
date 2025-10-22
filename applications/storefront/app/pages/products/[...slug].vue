<script lang="ts" setup>
const route = useRoute();

const slug = route.params.slug ? route.params.slug[0] : "";
</script>

<template>
  <p>Products: {{ slug }}</p>
</template>
