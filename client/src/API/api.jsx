import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';




export const serverApi = createApi({
    reducerPath: 'serverApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://redux-user-server.vercel.app' }),
    tagTypes: ['users'],
    endpoints: (builder) => ({
      getUsers: builder.query({
        query: () => `users`,
        onSuccess: (data) => {
            // Store the fetched data in Redux
            store.dispatch(getData(data));
          },
        providesTags: ['users']
      }),

      createUser: builder.mutation({
        query: (value) => ({
          url: `users`,
          method: 'POST',
          body: { value },
        }),
        onfulfilled: (result) => {
            console.log(result.data); // logs the data returned from the server
          },
        invalidatesTags: ['users'],
      }),

      updateUser: builder.mutation({
        query: ({id, value}) => ({
          url: `/user/${id}`,
          method: 'PUT',
          body: value,
        }),
        invalidatesTags: ['users'],
      }),
      DeleteUser: builder.mutation({
        query: (id) => ({
          url: `/user/${id}`,
          method: 'Delete',
        }),
        invalidatesTags: ['users'],
      })
  
    }),
  })



  export const { useGetUsersQuery, useCreateUserMutation , useUpdateUserMutation, useDeleteUserMutation} = serverApi;