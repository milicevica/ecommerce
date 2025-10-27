export default defineCachedEventHandler(async (event) => {
  // Remove the `/ecommerce/api` prefix from the path
  const targetPath = event.path.replace(/^\/api\/ecommerce\//, "");

  console.log("Target Path: ", targetPath);

  if (targetPath === "header") {
    return {
      name: "Ecommerce",
      logo: "Ecommerce",
      categories: [
        { id: 1, name: "IT Shop" },
        { id: 2, name: "TV, Audio & Video" },
        { id: 3, name: "Gaming" },
      ],
    }
  }

  return event;
});
