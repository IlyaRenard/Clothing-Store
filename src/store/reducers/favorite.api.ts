import { IClothes } from "../../types/Clothes";
import { IFavorite } from "../../types/Favorite";
import { IUser } from "../../types/User";
import { commonApi } from "./common.api";

export const favoriteApi = commonApi.injectEndpoints({
    endpoints: (build) => ({
        getFavorite: build.query<IFavorite[], IUser>({
            query: (user: IUser) => ({
                url: `/favoirte`
            }),
            providesTags: ['Api']
        }),
        addFavorite: build.mutation<null, IFavorite>({
            query: (favorite) => ({
                url: '/favorite',
                method: "POST",
                body: favorite,
            }),
            invalidatesTags: ['Api']
        }),
        deleteFavorite: build.mutation<IFavorite, IClothes>({
            query: (clothes) => ({
                url: `/favorite/${clothes.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Api']

        }),

    }),
    overrideExisting: false,
})

const {} = favoriteApi

