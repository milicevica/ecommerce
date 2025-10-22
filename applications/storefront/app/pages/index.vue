<script lang="ts" setup>
async function expand() {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <h1>Storefront</h1>

    <app-prompt-dialog title="Prompt Question" question="Are you sure you want to proceed?" />

    <app-async-button :promise="expand">
      Expand
    </app-async-button>
  </div>
</template>
