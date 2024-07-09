import { apiSlice } from "./api";

interface ProductQueryParams {
  url: string;
  category?: string;
  limit?: number;
}

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<any, ProductQueryParams>({
      query: ({ url, ...params }) => ({
        url: `products${url}`,
        params,
      }),
      providesTags: ["Products"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductsQuery } = extendedApi;
