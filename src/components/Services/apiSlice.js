import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const youthoobApi = createApi({
  reducerPath: "Youthoob Api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://youtube-v31.p.rapidapi.com/",
  }),

  endpoints: (builder) => ({
    getSuggestedVideos: builder.query({
      query: () => ({
        url: "search?part=snippet&maxResults=50&q=Punjabisong",
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "6f4cf2c761msh81ea4b8aeb26428p1938b7jsn7c1393e4927f",
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      }),
    }),

    getVideosBySearch: builder.query({
      query: (keyword) => ({
        url: `search?part=snippet&q=${keyword}`,
        method: "GET",
        params: {
          regionCode: "IN",
          maxResults: "70",
        },
        headers: {
          "X-RapidAPI-Key":
            "6f4cf2c761msh81ea4b8aeb26428p1938b7jsn7c1393e4927f",
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      }),
    }),

    getParticularVideoDetails: builder.query({
      query: (id) => ({
        method: "GET",
        url: "videos",
        params: {
          part: "contentDetails,snippet,statistics",
          id: `${id}`,
        },
        headers: {
          "X-RapidAPI-Key":
            "6f4cf2c761msh81ea4b8aeb26428p1938b7jsn7c1393e4927f",
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
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
