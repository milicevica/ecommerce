import { useBreadcrumbStore } from "../stores/use-breadcrumb-store";

export default function () {
  const route = useRoute();
  const breadcrumbStore = useBreadcrumbStore();

  // Compute breadcrumbs whenever route changes
  watchEffect(() => {
    const segments = route.params.slug as Array<string>;

    const breadcrumbs = segments?.map((segment: string, index: number) => {
      const to = `/${segments.slice(0, index + 1).join("/")}`;
      const label = decodeURIComponent(segment)
        .replace(/-/g, " ")
        .replace(/\b\w/g, c => c.toUpperCase()); // capitalize words

      return { label, to };
    });

    if (breadcrumbs) {
      breadcrumbStore.set([
        { label: "", to: "/", icon: "tabler:home" },
        ...breadcrumbs,
      ]);
    }
    else {
      breadcrumbStore.set([{ label: "Home", to: "/" }]);
    }
  });
}
