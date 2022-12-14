// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUri='http://localhost:8080';

export const apiSlice=createApi({
  baseQuery:fetchBaseQuery({baseUrl:baseUri}),
  endpoints:builder=>({
    //get categories
    getCategories:builder.query({
      //get:http://localhost:8080/api/categories
      query:()=>'/api/categories',
      providesTags:['categories']
    }),
    //get labels
    getLabels:builder.query({
       //get:http://localhost:8080/api/labels
      query:()=>'/api/labels',
      providesTags:['transaction']
    }),
    //add new transaction
    addTransaction:builder.mutation({
      //post:http://localhost:8080/api/transaction
      query:(initialTransaction)=>({
        url:'/api/transaction',
        method:'POST',
        body:initialTransaction,
      }),
      invalidatesTags: () =>  ['transaction']
    }),

    //delete record
    deleteTransaction:builder.mutation({
      //delete:http://localhost:8080/api/transaction
      query:(recordId)=>({
        url:'/api/transaction',
        method:'DELETE',
        body:recordId
      }),
      invalidatesTags: () => ['transaction']
    })

  })

})

export default  apiSlice;