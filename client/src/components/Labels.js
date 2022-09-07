import React from 'react'
import { default as apiSlice } from '../store/apiSlice'
import { getLabels } from '../helper/helper';

const Labels = () => { 
  const {data,isFetching,isSuccess,isError}=apiSlice.useGetLabelsQuery(); 
  
  let Transaction;
  if(isFetching){
    Transaction=<div>Fetching</div>
  }else if(isSuccess){    
    Transaction=getLabels(data,'type').map((v,i)=>{return(<LabelComponent key={i} data={v}/>)})
  }else if(isError){
    Transaction=<div>ERROR OCCURE</div>
  }
  function LabelComponent({data}){     
     if(!data) return <></>
     console.log(data?.color,"datacolor")
    return(
      <div className='labels flex justify-between'>
        <div className='flex gap-2'>
          <div className='w-2 h-2 rounded py-3' style={{background:data.color ?? '#5083FA'}}></div>
          <h3 className='text-md'>{data.type ?? ""}</h3>
        </div>
        <h3 className='font-bold'>{Math.round(data.percent) ?? 0}%</h3>
      </div>
    )
  }
  return (
    <>
    {
     Transaction
    }
    </>
  )
}

export default Labels