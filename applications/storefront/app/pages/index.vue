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
    <button @click="task">
      Open Modal
    </button>

    <ModalDemo ref="modalEl">
      <template #title>
        <h2>Modal Title</h2>
      </template>
      <template #body>
        <p>This is modal content</p>
      </template>
    </ModalDemo>
  </div>
</template>
