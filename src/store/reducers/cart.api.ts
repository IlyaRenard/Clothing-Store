import { ICart } from "../../types/Cart";
import { IUser } from "../../types/User";
import { commonApi } from "./common.api";

export const cartApi = commonApi.injectEndpoints({
    endpoints: build => ({
        getCart: build.query<ICart[], IUser>({
            query: (user: IUser) => `/cart/?userId=${user.id}`,
            providesTags: ["Cart"]
        }),
        addToCart: build.mutation<null, ICart>({
            query: (cart) => ({
                url: '/cart',
                method: "POST",
                body: cart,
            }),
            invalidatesTags: ['Cart']
        }),
    })
})


export const { useGetCartQuery, useAddToCartMutation } = cartApi
