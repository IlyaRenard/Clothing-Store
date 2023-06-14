import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IClothes } from "../../types/Clothes";

const API_URL = "https://fakestoreapi.com/products";

export const clothesApi = createApi({
    reducerPath: 'clothesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    endpoints: (builder) => ({
        getClothes: builder.query<IClothes[], null>({
            query: () => '/'
        })
    })
})

export const { useGetClothesQuery } = clothesApi