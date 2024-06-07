import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = localStorage.getItem("accessToken")
console.log(token)
export const postApi = createApi({
  
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7199", token: localStorage.getItem("accessToken") }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => ({
        
        url: "/posts?page=6&quantity=5",
        headers: {
          Authorization: `Bearer ${token}`
      ,
      }
      }),
      providesTags: (result) => ["Post"],
    }),
    updatePost: build.mutation({
      query: ({ id, data }) => ({
        url: `posts/${id}/`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Post"],
    }),
    addUser: build.mutation({
      query: (data) => ({
        url: `api/users/register`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Post"],
    }),
    // addPost: build.mutation({
    //   query: ({ file }) => {
    //     // Ensure file is a FormData object
    //     if (!(file instanceof FormData)) {
    //       throw new Error("The file must be a FormData object.");
    //     }
    
    //     // Check if FormData contains 'file'
    //     console.log(file.has("file"));
    
    //     return {
    //       url: `/posts`,
    //       method: "POST",
    //       headers: {
    //         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJleHAiOjE3MTY2NDM2ODMsImlzcyI6IkFuYnVuZXQuQVBJIiwiYXVkIjoiQW5idW5ldC5DbGllbnQifQ.tG66sYVW_oa1vvqKiMaBqSt0KOEr0eXW0JenpkdI0PQ`,
    //       },
    //       body: file,
    //     };
    //   },
    //   invalidatesTags: ["Post"],
    // }),







    addPost: build.mutation({
      query: (formData) => {
          console.log(formData.has("file"));
          // const token = localStorage.getItem("accessToken")
          return {
              url: `/posts`,
              method: "POST",
              headers: {
                  Authorization: `Bearer ${token}`
              ,
              },
              body: formData,
          };
      },
      invalidatesTags: ["Post"],
  }),
  getPosts2: build.mutation({
    query: (data) => ({
      url: `/posts`,
      method: "GET",
      body: {

      },
    }),
    invalidatesTags: ["Post"],
  }),
  getPost: build.query({
    query: (id) => ({
      
      url: `/posts/${id}`,
      headers: {
        Authorization: `Bearer ${token}`
    ,
    }
    }),
    providesTags: (result) => ["Post"],
  }),
  getAi: build.query({
    query: (prompt) => ({
      url: `https://api.limewire.com/api/image/generation`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Version": "v1",
        "Accept": "application/json",
        "Authorization": `Bearer lmwr_sk_lhSUZ5NUf1_BGFFd3Z0Lj61IiBsUWeeXOixg1duVWeEO7aka`,
      },
      body: JSON.stringify({
        prompt: `${prompt}`,
        aspect_ratio: "1:1",
      }),
    }),
    providesTags: (result) => ["Post"],
  }),
  
}),
});

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const postApi = createApi({
//   reducerPath: 'postApi',
//   baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000'}),
//   tagTypes: ["Post"],
//   endpoints: (build) => ({
//     getPosts: build.query({
//       query: () => ({
//         url: '/posts',
//       }),providesTags: (result) => ["Post"],

//     }),
//     updatePost: build.mutation({
//       query: ({id, data}) => ({
//         url: `posts/${id}/`,
//         method: 'PUT',
//         body: data,
//       }), invalidatesTags: ["Post"]
//     }),
//     addUser: build.mutation({
//       query: (data) => ({
//         url: `/users`,
//         method: 'POST',
//         body: data,
//       }), invalidatesTags: ["Post"]
//     })
//   })
// })
