<script lang="ts" setup>
import * as z from "zod";
import type { FormSubmitEvent } from '@nuxt/ui'
import { useAuthStore } from "../stores/use-auth-store";

const emits = defineEmits<{
  (e: 'log-in-success'): void
}>();

const store = useAuthStore();

const schema = z.object({
  email: z.email("Invalid email"),
  password: z.string("Password is required").min(8, "Must be at least 8 characters")
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  await store.logIn(event.data.email, event.data.password);

  emits('log-in-success');
}
</script>

<template>
  <u-form :schema="schema" :state="state" class="space-y-4 w-full" @submit="onSubmit">
    <u-form-field label="Email" name="email">
      <u-input v-model="state.email" class="w-full" />
    </u-form-field>

    <u-form-field label="Password" name="password">
      <u-input v-model="state.password" type="password" class="w-full" />
    </u-form-field>

    <div class="flex gap-4 items-center justify-end">
      <u-button variant="outline">Sign Up</u-button>
      <u-button type="submit">Log In</u-button>
    </div>
  </u-form>
</template>
