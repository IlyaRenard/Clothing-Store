import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IClothes } from "../../types/Clothes";

const API_URL = "http://localhost:4000/clothes";

export const clothesApi = createApi({
    reducerPath: 'clothesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    tagTypes: ['Clothes'],
    endpoints: (build) => ({
        getClothes: build.query<IClothes[], null>({
            query: () => '/',
            providesTags: result => ['Clothes']
        }),
        addClothes: build.mutation<IClothes, IClothes>({
            query: (clothes) => ({
                url: '/',
                method: "POST",
                body: clothes,
            }),
            invalidatesTags: ['Clothes']
        }),


    })
})

export const { useGetClothesQuery, useAddClothesMutation } = clothesApi