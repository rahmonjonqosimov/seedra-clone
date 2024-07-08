import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ProductsSchema {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  brand: string;
  images: string[];
}

export interface Result {
  limit: number;
  products: ProductsSchema[] | undefined;
  skip: number;
  total: number;
}

export interface ProductQueryParams {
  url: string;
  category?: string;
  limit?: number;
}

export interface getProductCategories {
  data: string[];
}
export interface getProductByIdSchema {
  id: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query<any, ProductQueryParams>({
      query: ({ url, ...params }) => ({
        url: `products${url}`,
        params,
      }),
      providesTags: ["Products"],
    }),
    getProductById: builder.query<ProductsSchema, getProductByIdSchema>({
      query: (id) => ({
        url: `products/${id}`,
      }),
      providesTags: ["Products"],
    }),
    getProductCategories: builder.query<string[], void>({
      query: () => ({
        url: `products/category-list`,
      }),
      providesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductCategoriesQuery,
  useGetProductByIdQuery,
} = apiSlice;
