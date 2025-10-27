import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://backend-ad-s-blog-app-1.onrender.com/api/user",
    credentials: "include",
  }),
  tagTypes: ["User"], // Tag type used for invalidation and refetching
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (newUser) => ({
        url: "/reg",
        method: "POST",
        body: newUser,
      }),
    }),
    loginUser: builder.mutation({
      query: (loginUser) => ({
        url: "/login",
        method: "POST",
        body: loginUser,
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["User"], // Used to manage caching and refetching
    }),
    deleteUser: builder.mutation({
      query: ({ userId }) => ({
        url: `/deluser/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"], // Invalidates the User tag to trigger a refetch of user data
    }),
    updateUserRole: builder.mutation({
      query: ({ userId, role }) => ({
        url: `/userupd/${userId}`,
        method: "PUT",
        body: { role },
      }),
      invalidatesTags: ["User"], // Invalidates the User tag to trigger a refetch of user data
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetUserQuery,
  useDeleteUserMutation,
  useUpdateUserRoleMutation,
} = authApi;

export default authApi;
