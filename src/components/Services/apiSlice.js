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
        params: { q: "sidhu moose wala"},
        headers: {
          'X-RapidAPI-Key': '09d1d5114dmshdfaf0502591926cp115370jsneca12e1bd387',
          'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        },
      }),
    }),

    getVideosBySearch: builder.query({
      query: (keyword) => ({
        url: 'search/',
        params: { q: `${keyword}`},
        headers: {
          'X-RapidAPI-Key': '09d1d5114dmshdfaf0502591926cp115370jsneca12e1bd387',
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
          'X-RapidAPI-Key': '09d1d5114dmshdfaf0502591926cp115370jsneca12e1bd387',
          'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        },
      }),
    }),

    getRelatedVideo : builder.query({
      query:(keyword)=>({
        url: 'video/related-contents/',
        params: {id: `${keyword}`,},
        headers: {
          'X-RapidAPI-Key': '09d1d5114dmshdfaf0502591926cp115370jsneca12e1bd387',
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
