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
        params: { q: "Punjabi Song", hl: "en", gl: "US" },
        headers: {
          "X-RapidAPI-Key":
            "caf305bc57msh1878be33356a135p1a5e0bjsn3feca92a37bb",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
      }),
    }),

    getVideosBySearch: builder.query({
      query: (keyword) => ({
        url: 'search/',
        params: { q: `${keyword}`, hl: "en", gl: "US" },
        headers: {
          "X-RapidAPI-Key":
            "caf305bc57msh1878be33356a135p1a5e0bjsn3feca92a37bb",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
      }),
    }),

    getParticularVideoDetails: builder.query({
      query: (id) => ({
        method: "GET",
        url: 'video/details/',
        params: {id: `${id}`, hl: 'en', gl: 'US'},
        headers: {
          'X-RapidAPI-Key': 'caf305bc57msh1878be33356a135p1a5e0bjsn3feca92a37bb',
          'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        },
      }),
    }),
  }),
});

export const {
  useGetSuggestedVideosQuery,
  useGetVideosBySearchQuery,
  useGetParticularVideoDetailsQuery,
  usePlayParticularVideoQuery,
} = youthoobApi;
