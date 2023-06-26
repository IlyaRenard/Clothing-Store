import { IClothes } from "../../types/Clothes";
import { IFavorite } from "../../types/Favorite";
import { IUser } from "../../types/User";
import { commonApi } from "./common.api";

export const favoriteApi = commonApi.injectEndpoints({
    endpoints: (build) => ({
        getFavorite: build.query<IFavorite[], IUser>({
            query: (user: IUser) => ({
                url: `/favorite?userId=${user.id}`,

            }),
            providesTags: ['Favorite']
        }),
        addFavorite: build.mutation<null, IFavorite>({
            query: (favorite) => ({
                url: '/favorite',
                method: "POST",
                body: favorite,
            }),
            invalidatesTags: ['Favorite']
        }),
        deleteFavorite: build.mutation<IFavorite, IFavorite>({
            query: (favorite) => ({
                url: `/favorite/${favorite.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Favorite']

        }),

    }),
    overrideExisting: false,
})


export const { useAddFavoriteMutation, useDeleteFavoriteMutation, useGetFavoriteQuery } = favoriteApi

