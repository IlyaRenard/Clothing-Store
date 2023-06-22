import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IFavorite } from "../../types/Favorite"
import { IClothes } from './../../types/Clothes';

const initialState: IFavorite[] = []
const LS_FAV_KEY = 'rfk'
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
                    localStorage.setItem(LS_FAV_KEY, JSON.stringify(state))
                }
            }
            else {
                state.push({
                    userId: 0,
                    productId: clothes.id
                })
                localStorage.setItem(LS_FAV_KEY, JSON.stringify(state))
            }

        }
    }
})

export const { actions, reducer } = favoriteSlice 