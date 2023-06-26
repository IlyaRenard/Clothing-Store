import { IClothes } from "../../types/Clothes";
import { commonApi } from "./common.api";


export const clothesApi = commonApi.injectEndpoints({
    endpoints: (build) => ({
        getClothes: build.query<IClothes[], null>({
            query: () => '/clothes',
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


    })
})

export const { useGetClothesQuery, useAddClothesMutation } = clothesApi