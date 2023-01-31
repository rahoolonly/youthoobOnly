import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const particularVideoApi = createApi({
  reducerPath: "Live Video Api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://yt-api.p.rapidapi.com" }),
  endpoints: (builder) => ({
    playSearchVideo: builder.query({
      query: (id) => ({
        url: "/dl",
        method: "GET",
        params: { id: `${id}` },
        headers: {
          "X-RapidAPI-Key":
            "6f4cf2c761msh81ea4b8aeb26428p1938b7jsn7c1393e4927f",
          "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
        },
      }),
    }),
  }),
});

export const { usePlaySearchVideoQuery } = particularVideoApi;
