import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';




export const serverApi = createApi({
    reducerPath: 'serverApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
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
  
    }),
  })


  export const { useGetUsersQuery } = serverApi;