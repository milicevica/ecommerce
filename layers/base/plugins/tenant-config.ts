export default defineNuxtPlugin({
  name: "tenant-config",
  async setup() {
    const { data: tenantconfig } = useFetch<TenantConfig>("/api/config");

    useTenantState().value = tenantconfig.value;
  },
});
