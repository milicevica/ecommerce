import categories from "../../mocks/categories.json";

export default defineCachedEventHandler(async (event) => {
  // Remove the `/ecommerce/api` prefix from the path
  const targetPath = event.path.replace(/^\/api\/ecommerce\//, "");

  if (targetPath === "categories") {
    return categories;
  }

  return event;
});
