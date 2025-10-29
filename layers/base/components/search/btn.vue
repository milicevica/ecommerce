<script lang="ts" setup></script>

<template>
  <u-slideover side="top" title="Search">
    <u-tooltip text="Search">
      <u-button color="neutral" variant="ghost" icon="tabler:search" aria-label="Search" />
    </u-tooltip>

    <template #body>
      <div class="flex flex-col w-full p-6 gap-8">
        <search-input />
        <search-result />
      </div>
    </template>
  </u-slideover>
</template>
