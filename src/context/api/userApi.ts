import { apiSlice } from "./api";

interface ProductQueryParams {
  category?: string;
  limit?: number;
}

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getUsersAll: build.query<any, ProductQueryParams>({
      query: (params) => ({
        url: `users`,
        params,
      }),
      providesTags: ["Users"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetUsersAllQuery } = extendedApi;
