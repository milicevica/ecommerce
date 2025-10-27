export default defineCachedEventHandler(async (event) => {
  const config = {
    name: "Ecommerce"
  }

  return config;
}, {
  getKey: event => `tenant-config`,
  swr: true,
  maxAge: 60 * 60,
  varies: ["host", "x-forwarded-host"]
});
