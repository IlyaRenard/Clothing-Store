import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICart } from "../../types/Cart";
import { IClothes } from "../../types/Clothes";

const initialState: ICart[] = []


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, { payload: clothes }: PayloadAction<IClothes>) => {
            const isExist = state.find(r => r.productId === clothes.id)

            if (isExist) {
                let existClothes = state.find(r => r.productId === isExist.productId);
                existClothes!.quantity += 1
            }
            else {
                state.push({
                    userId: 0,
                    id: 1,
                    productId: clothes.id,
                    quantity: 1
                })
            }

        }
    }
})

export const { actions, reducer } = cartSlice

export const {addItemToCart} = cartSlice.actions

export default cartSlice.reducer