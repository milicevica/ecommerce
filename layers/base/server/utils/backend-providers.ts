import type { Category } from "../../shared/types/responses/category";
import categories from "../mocks/categories.json";

type Transformer<T> = (raw: unknown) => T;

type Endpoint<T = unknown> = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  responseTransformer?: Transformer<T>;
  requestTransformer?: Transformer<T>;
  response?: unknown;
}

type Provider<C extends Category> = {
  baseUrl: string;
  requests: {
    categories: Endpoint<C>;
  };
};

const defaultProvider: Provider<Category> = {
  baseUrl: "",
  requests: {
    categories: {
      method: "GET",
      path: "/categories",
      response: categories
    }
  }
}

export const providers = {
  default: defaultProvider
}
