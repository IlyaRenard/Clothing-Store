import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

const BASE_URL = "http://localhost:4000/";

export const commonApi = createApi({
    reducerPath: 'api',
    tagTypes: ['Api'],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),

    endpoints: _ => ({}),
});
