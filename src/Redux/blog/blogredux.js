import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://backend-ad-s-blog-app-1.onrender.com/api/",
  }),
  endpoints: (builder) => ({
    fetchBlogs: builder.query({
      query: ({ search = "", category = "", location = "" }) =>
        `/posts?search=${search}`,
    }),
  }),
});

export const { useFetchBlogsQuery } = blogApi;
