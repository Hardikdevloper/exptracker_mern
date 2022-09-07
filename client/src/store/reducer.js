import {createSlice} from "@reduxjs/toolkit"

const initialSate={
  categories:[],
  transaction:[]
}

export const expenseSlice=createSlice({
  name:'expanse',
  initialSate,
  reducers:{
    getTransaction:(state)=>{
      //get trasnaction code
    }
  }

})

export const {getTransaction}=expenseSlice.actions;
export default expenseSlice; 