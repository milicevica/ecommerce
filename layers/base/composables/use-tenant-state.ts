export const useTenantState = () => useState<TenantConfig | undefined>("tenant", () => undefined);
