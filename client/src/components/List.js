import React from 'react'
import 'boxicons';
import { default as apiSlice } from '../store/apiSlice'
import { useDispatch } from 'react-redux';



const List = () => {
  const dispatch=useDispatch();
  const {data,isFetching,isSuccess,isError}=apiSlice.useGetLabelsQuery();  
  const [deleteTransaction]=apiSlice.useDeleteTransactionMutation();
  let Transaction;
  if(isFetching){
    Transaction=<div>Fetching</div>
  }else if(isSuccess){
    console.log(data)
    Transaction=data?.map((v,i)=>{return(<Transactions key={i} category={v}/>)})
  }else if(isError){
    Transaction=<div>ERROR OCCURE</div>
  }
  function Transactions({category}){
    if(!category) return null;

    const handleClick=()=>{
      dispatch(apiSlice.endpoints.deleteTransaction.initiate({
        id:category?._id
      }))
    }

    return(
      <div className='item flex border justify-center bg-gray-50 py-2 rounded-r' style={{borderRight:`8px solid ${category?.color?? "#FCBE44"}`}}>
        <button className='px-3'>
          <box-icon name='trash' color={category?.color?? "#FCBE44"} onClick={handleClick}  />
        </button>
        <span className='block w-full'>
          {category?.name ?? ""}
        </span>
      </div>
    )
  }

  return (
    <div className='flex flex-col py-6gap-3'>
        <h1 className='py-4 text-md font-bold text-xl'>History</h1>
       {Transaction}
    </div>
  )
}

export default List