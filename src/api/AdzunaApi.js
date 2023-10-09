import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const adzunaApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  keepUnusedDataFor: 3600 * 24,
  endpoints: (builder) => ({
    getAdzunaJobs: builder.query({
      query: (params) => {
        const { page, what, where, sort_by, contract } = params;
        let url = `https://api.adzuna.com/v1/api/jobs/it/search/${page}?app_id=bf28faaa&app_key=01c1ff0ee28a24a814eacddee49cc720&what=${what}&where=${where}&max_days_old=14&results_per_page=50`;
        if (sort_by) {
          url = url + `&sort_by=${sort_by}`;
        }
        if (contract === true) {
          url = url + `&full_time=1`;
        }

        return url;
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAdzunaJobsQuery } = adzunaApi;
