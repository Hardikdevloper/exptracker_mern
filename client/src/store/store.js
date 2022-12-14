import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import { expenseSlice } from './reducer'
import {apiSlice} from './apiSlice'
export const store=configureStore({
  reducer:{
    expanse:expenseSlice,
    [apiSlice.reducerPath]:apiSlice.reducer
  },
  middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(apiSlice.middleware)
})
