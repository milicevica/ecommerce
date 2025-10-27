import { providers } from "../../utils/backend-providers";

export default defineCachedEventHandler(async (event) => {
  // Remove the `/ecommerce/api` prefix from the path
  const targetPath = event.path.replace(/^\/api\/ecommerce\//, "");
  const targetPathWithoutQueryParams = targetPath.split("?")[0];
  //const targetPathQueryParams = targetPath.split("?")[1] || "";

  // Backend provider based on the tenant's configuration
  const backendProvider = "default";

  if (!backendProvider || !providers[backendProvider]) {
    throw createError({ statusCode: 400, statusMessage: "Invalid backend provider for tenant" });
  }

  const provider = providers[backendProvider];

  const requestToExecute = (provider.requests as Record<string, typeof provider.requests[keyof typeof provider.requests]>)[targetPathWithoutQueryParams];

  if (!requestToExecute) {
    throw createError({ statusCode: 400, statusMessage: "Requested endpoint not found in backend provider" });
  }

  return requestToExecute.response;
});
