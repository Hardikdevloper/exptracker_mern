import React from 'react'
import 'boxicons';

const obj=[
  {
  name:"Savings",
  color:'#f9c74f',
  },
   {
  name:"Investment",
  color:'#f9c74f',
  },
   {
  name:"Expance",
  color:'rgb(54,162,235)',
  }
]
const List = () => {

  function Transactions({category}){
    if(!category) return null;
    return(
      <div className='item flex border justify-center bg-gray-50 py-2 rounded-r' style={{borderRight:`8px solid ${category.color?? "#e5e5e5"}`}}>
        <button className='px-3'>
          <box-icon name='trash' color={category.color?? "#e5e5e5"}/>
        </button>
        <span className='block w-full'>
          {category.name ?? ""}
        </span>
      </div>
    )
  }

  return (
    <div className='flex flex-col py-6gap-3'>
        <h1 className='py-4 text-md font-bold text-xl'>History</h1>
       {obj.map((v,i)=>
        <Transactions key={i}category={v}/>
       )}
    </div>
  )
}

export default List