<script lang="ts" setup>
const modalEl = useTemplateRef("modalEl");

function openLogInModal() {
  modalEl.value?.open();
}
</script>

<template>
  <u-tooltip text="Log In">
    <u-button color="neutral" variant="ghost" icon="tabler:user" aria-label="Log In" @click="openLogInModal" />

    <app-modal id="log-in-modal" ref="modalEl">
      <template #title>
        <h3>Log In</h3>
      </template>

      <template #body>
        <log-in-form />
      </template>

      <template #footer>
        <u-button variant="outline">Sign Up</u-button>
        <u-button>Log In</u-button>
      </template>
    </app-modal>
  </u-tooltip>
</template>
