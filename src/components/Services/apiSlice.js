import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const youthoobApi = createApi({
  reducerPath: "Youthoob Api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://youtube138.p.rapidapi.com/",
  }),

  endpoints: (builder) => ({
    getSuggestedVideos: builder.query({
      query: () => ({
        url: "search/",
        params: { q: "New Punjabi Song"},
        headers: {
          'X-RapidAPI-Key' :"33d3f0c581mshba2205c82a8e26dp19d624jsnb7d60f553a88",
          'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        },
      }),
    }),

    getVideosBySearch: builder.query({
      query: (keyword) => ({
        url: 'search/',
        params: { q: `${keyword}`},
        headers: {
          'X-RapidAPI-Key': '33d3f0c581mshba2205c82a8e26dp19d624jsnb7d60f553a88',
          'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        },
      }),
    }),

    getParticularVideoDetails: builder.query({
      query: (id) => ({
        method: "GET",
        url: 'video/details/',
        params: {id: `${id}`,},
        headers: {
          'X-RapidAPI-Key': '33d3f0c581mshba2205c82a8e26dp19d624jsnb7d60f553a88',
          'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        },
      }),
    }),

    getRelatedVideo : builder.query({
      query:(keyword)=>({
        url: 'video/related-contents/',
        params: {id: `${keyword}`,},
        headers: {
          'X-RapidAPI-Key': '33d3f0c581mshba2205c82a8e26dp19d624jsnb7d60f553a88',
          'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
      })
    })
  }),
});

export const {
  useGetSuggestedVideosQuery,
  useGetVideosBySearchQuery,
  useGetParticularVideoDetailsQuery,
  useGetRelatedVideoQuery
} = youthoobApi;
