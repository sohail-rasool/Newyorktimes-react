import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_KEY = process.env.REACT_APP_API_KEY;

// Define your API service
const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.nytimes.com/svc/mostpopular/v2/viewed/",
  }),
  endpoints: (builder) => ({
    getPastDayArticles: builder.query({
      query: () => `1.json?api-key=${API_KEY}`,
    }),
    getPastWeekArticles: builder.query({
      query: () => `7.json?api-key=${API_KEY}`,
    }),
    getPastMonthArticles: builder.query({
      query: () => `30.json?api-key=${API_KEY}`,
    }),
  }),
});

export const {
  useGetPastDayArticlesQuery,
  useGetPastWeekArticlesQuery,
  useGetPastMonthArticlesQuery,
} = apiSlice;
export default apiSlice;
