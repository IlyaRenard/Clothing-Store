import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { clothesApi } from "./reducers/clothes.api"
import { reducer as cartReducer } from "./reducers/cart.slice"
//import { reducer as favoriteReducer } from "./reducers/favorite.slice"
import { commonApi } from "./reducers/common.api"


export const reducers = combineReducers({
  [commonApi.reducerPath]: commonApi.reducer,
  [clothesApi.reducerPath]: clothesApi.reducer,
  cart: cartReducer,
  //favorite: favoriteReducer
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(clothesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch