import { IClothes } from "../../types/Clothes";
import { commonApi } from "./common.api";


export const clothesApi = commonApi.injectEndpoints({
    endpoints: (build) => ({
        getClothes: build.query<IClothes[], {}>({
            query: (args: { limit: number, page: number }) => ({
                url: `/clothes`,
                params: {
                    _limit: args.limit,
                    _page: args.page
                }
            }),
            providesTags: ['Clothes']
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
        }),
        searchByTitle: build.mutation<IClothes[], string>({
            query: (query) => ({
                url: `/clothes?title_like=${query}`,
                method: "GET"
            }),
            invalidatesTags: ['Clothes']
        })
    })
})

export const { useGetClothesQuery, useAddClothesMutation, useSortByASCMutation, useGetClotheByIdMutation, useSortByDESCMutation, useSearchByTitleMutation } = clothesApi