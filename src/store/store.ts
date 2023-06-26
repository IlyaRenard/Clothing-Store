import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { commonApi } from "./reducers/common.api"


export const reducers = combineReducers({
  [commonApi.reducerPath]: commonApi.reducer,
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(commonApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch