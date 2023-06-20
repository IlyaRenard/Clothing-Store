import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IFavorite } from "../../types/Favorite"
import { IClothes } from './../../types/Clothes';

const initialState: IFavorite[] = []


export const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addToFavorite: (state, { payload: clothes }: PayloadAction<IClothes>) => {
            const isExist = state.some(r => r.productId === clothes.id);

            if (isExist) {
                const index = state.findIndex((item) => item.productId === clothes.id);
                if (index !== -1) {
                    state.splice(index, 1)
                }
            }
            else {
                state.push({
                    id: 1,
                    userId: 0,
                    productId: clothes.id
                })
            }

        }
    }
})

export const { actions, reducer } = favoriteSlice