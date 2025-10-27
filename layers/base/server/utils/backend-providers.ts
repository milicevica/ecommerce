import type { Category } from "../../shared/types/category";
import categories from "../mocks/categories.json";
import products from "../mocks/products.json";

type Transformer<T> = (raw: unknown) => T;

type Endpoint<T = unknown> = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  responseTransformer?: Transformer<T>;
  requestTransformer?: Transformer<T>;
  response?: (queryParams: string) => T[];
}

type Provider<C extends Category, P extends Product> = {
  baseUrl: string;
  requests: {
    categories: Endpoint<C>;
    products: Endpoint<P>;
  };
};

const defaultProvider: Provider<Category, Product> = {
  baseUrl: "",
  requests: {
    categories: {
      method: "GET",
      path: "/categories",
      response: () => categories,
    },
    products: {
      method: "GET",
      path: "/products",
      response: (queryParams) => {
        const params = new URLSearchParams(queryParams);

        console.log("Params: ", params);

        if (params.get("keyword") == "") return [];

        return products.filter((product) => product.name.includes(params.get("keyword") || ""));
      }
    }
  }
}

export const providers = {
  default: defaultProvider
}
