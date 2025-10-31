export default defineNuxtPlugin(() => {
  const price = (value: number) => {
    const formatter = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });

    return formatter.format(value);
  };

  return {
    provide: {
      price,
    },
  };
});
