import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getAi: builder.query({
      query: (prompt) => ({
        url: 'https://api.limewire.com/api/image/generation',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Version': 'v1',
          'Accept': 'application/json',
          'Authorization': `Bearer lmwr_sk_lhSUZ5NUf1_BGFFd3Z0Lj61IiBsUWeeXOixg1duVWeEO7aka`,
        },
        body: JSON.stringify({
          prompt: prompt,
          aspect_ratio: '1:1',
        }),
      }),
    }),
  }),
});

export const { useGetAiQuery } = postApi;

export const uploadPost = (data) => {
  return instance.post('/posts', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};
