<script lang="ts" setup>
import type { ModalElement } from "../../../../layers/ui/components/app/modal.vue";

const modalEl = useTemplateRef<ModalElement>("modalEl");

async function task() {
  modalEl.value?.open();
}
</script>

<template>
  <div>
    <h1>Storefront</h1>
    <u-button @click="task">
      Open Modal
    </u-button>

    <AppModal ref="modalEl" description="Demo Modal">
      <template #title>
        <h2>Modal Title</h2>
      </template>
      <template #body>
        <p>This is modal content</p>
      </template>
      <template #footer>
        <u-button @click="modalEl?.close()">
          Close
        </u-button>
      </template>
    </AppModal>
  </div>
</template>
