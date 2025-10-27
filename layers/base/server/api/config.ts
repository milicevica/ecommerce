export default defineCachedEventHandler(async () => {
  const config = {
    name: "Ecommerce"
  }

  return config;
}, {
  getKey: () => `tenant-config`,
  swr: true,
  maxAge: 60 * 60,
  varies: ["host", "x-forwarded-host"]
});
