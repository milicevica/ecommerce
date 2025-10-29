import type { Category } from "../../shared/types/category";

type Transformer<T> = (raw: unknown) => T;

type Endpoint<T = unknown> = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  responseTransformer?: Transformer<T>;
  requestTransformer?: Transformer<T>;
}

type Provider<C extends Category, P extends Product, O extends Order> = {
  baseUrl: string;
  requests: {
    categories: Endpoint<C>;
    products: Endpoint<P>;
    orders: Endpoint<O>;
  };
};

const defaultProvider: Provider<Category, Product, Order> = {
  baseUrl: "http://localhost:4000",
  requests: {
    categories: {
      method: "GET",
      path: "/categories",
    },
    products: {
      method: "GET",
      path: "/products",
    },
    orders: {
      method: "GET",
      path: "/orders"
    }
  }
}

export const providers = {
  default: defaultProvider
}
