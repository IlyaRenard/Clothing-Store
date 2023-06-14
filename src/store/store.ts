import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { clothesApi } from "./reducers/clothes.api"


export const reducers = combineReducers({
  [clothesApi.reducerPath]: clothesApi.reducer,
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(clothesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch