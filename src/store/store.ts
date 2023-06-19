import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { clothesApi } from "./reducers/clothes.api"
import { reducer as cartReduceer } from "./reducers/cart.slice"


export const reducers = combineReducers({
  [clothesApi.reducerPath]: clothesApi.reducer,
  cart: cartReduceer,
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(clothesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch