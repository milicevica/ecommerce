import type { Category } from "../../shared/types/category";

type Transformer<T> = (raw: unknown) => T;

type Endpoint<T = unknown> = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  responseTransformer?: Transformer<T>;
  requestTransformer?: Transformer<T>;
}

type Provider<C extends Category, P extends Product> = {
  baseUrl: string;
  requests: {
    categories: Endpoint<C>;
    products: Endpoint<P>;
  };
};

const defaultProvider: Provider<Category, Product> = {
  baseUrl: "http://localhost:4000",
  requests: {
    categories: {
      method: "GET",
      path: "/categories",
    },
    products: {
      method: "GET",
      path: "/products",
    }
  }
}

export const providers = {
  default: defaultProvider
}
