import { IClothes } from "../../types/Clothes";
import { commonApi } from "./common.api";


export const clothesApi = commonApi.injectEndpoints({
    endpoints: (build) => ({
        getClothes: build.query<IClothes[], null>({
            query: () => `/clothes`,
            providesTags: result => ['Clothes']
        }),
        addClothes: build.mutation<null, IClothes>({
            query: (clothes) => ({
                url: '/clothes',
                method: "POST",
                body: clothes,
            }),
            invalidatesTags: ['Clothes']
        }),
        getClotheById: build.mutation<IClothes, number>({
            query: (id) => ({
                url: `/clothes/${id}`,
                method: 'GET',
            }),
            invalidatesTags: ['Clothes']
        }),
        sortByASC: build.mutation<IClothes[], string>({
            query: (option) => ({
                url: `/clothes?_sort=${option}&_order=asc`,
                method: 'GET',
            }),
            invalidatesTags: ['Clothes']
        }),
        sortByDESC: build.mutation<IClothes[], string>({
            query: (option) => ({
                url: `/clothes?_sort=${option}&_order=desc`,
                method: 'GET',
            }),
            invalidatesTags: ['Clothes']
        })
    })
})

export const { useGetClothesQuery, useAddClothesMutation, useSortByASCMutation, useGetClotheByIdMutation, useSortByDESCMutation } = clothesApi