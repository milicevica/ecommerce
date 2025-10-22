<script lang="ts" setup>
import type { ModalElement } from "~/components/modal-demo.vue";

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

    <ModalDemo ref="modalEl" description="Demo Modal">
      <template #title>
        <h2>Modal Title</h2>
      </template>
      <template #body>
        <p>This is modal content</p>
      </template>
      <template #footer>
        <u-button @click="modalEl?.close()">Close</u-button>
      </template>
    </ModalDemo>
  </div>
</template>
