<script lang="ts" setup>
import { useAuthStore } from '../stores/use-auth-store';

const authStore = useAuthStore();
const modalEl = useTemplateRef("modalEl");

function openLogInModal() {
  modalEl.value?.open();
}

const accountMenu = [
  [{ label: "Profile", icon: "tabler:user-cog" }],
  [{ label: "Log Out", icon: "tabler:logout", onSelect: () => authStore.logOut() }]
]
</script>

<template>
  <u-tooltip v-if="!authStore.isAuthenticated" text="Log In">
    <u-button color="neutral" variant="ghost" icon="tabler:user" aria-label="Log In" @click="openLogInModal" />

    <app-modal id="log-in-modal" ref="modalEl">
      <template #title>
        <h3>Log In</h3>
      </template>

      <template #body>
        <log-in-form @log-in-success="() => modalEl?.close()" />
      </template>
    </app-modal>
  </u-tooltip>

  <u-dropdown-menu v-else :items="accountMenu">
    <u-button color="neutral" variant="ghost" aria-label="Settings Menu">
      <u-avatar src="https://avatars.githubusercontent.com/u/105207977" size="xs" />
    </u-button>
  </u-dropdown-menu>
</template>
