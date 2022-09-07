import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart ,ArcElement} from 'chart.js'
import Labels from "./Labels"
import {chartData,getTotal} from '../helper/helper'
import { default as apiSlice } from '../store/apiSlice'

Chart.register(ArcElement);
const Graph = () => {
  const {data,isFetching,isSuccess,isError}=apiSlice.useGetLabelsQuery(); 
  
  let graphData;
  if(isFetching){
    graphData=<div>Fetching</div>
  }else if(isSuccess){ 
    graphData=<Doughnut {...chartData(data)}/>
  }else if(isError){
    graphData=<div>ERROR OCCURE</div>
  }
  return (
    <div className='flex justify-content max-w-xs mx-auto'>
      <div className='item'>
        <div className='chart'>
          <div className='chart-relative'>
            {graphData}
            <h3 className='mb-4 font-bold title'>
              <span className='block text-3xl text-emerald-400'>
                ${getTotal(data)??0}
              </span>
            </h3>
          </div>
          <div className='flex flex-col py-10 gap-4'>
            {/* lables */}
            <Labels/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Graph