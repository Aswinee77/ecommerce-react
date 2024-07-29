
import { Grid } from '@mui/material'
import React from 'react'
import OrderCard from './OrderCard'

const Order = () => {
   const orderStatus = [
    {label:'On The Way' , value:'on_the_way'},
    {label:'Deliveried' , value:'deliveried'},
    {label:'Cancelled' , value:'cancelled'},
    {label:'Returned' , value:'retuned'},

   ]
  return (
    <div className='px:5 lg:px-20 '>
        <Grid container sx={{justifyContents:"space-between"}}>
            <Grid item xs={2.5}>
                <div className='h-auto shadow-lg bg-white sticky p-5 top-5'>
                    <h1 className='font-bold text-lg'>Filter</h1>
                   <div className='space-y-4 mt-10'>
                    <h1 className='font-semibold '>Order Status</h1>
                       {orderStatus.map((item)=><div className='flex items-center'>
                       <input defaultValue={item.value} type='checkbox' className='h-4 w-4 border-grey-600 text-indigo-600 focus:ring-indigo-500'/>
                       <label className='ml-3 text-sm text-grey-600' htmlFor={item.value}>{item.label}</label>
                       </div>
                       )}
                   </div>
                </div>
            </Grid>
            <Grid  item xs={9.5}>
               <div className='space-y-5'>
                {[1,1,1,1,1,1].map((item)=><OrderCard/>)}
                </div>
            </Grid>
        </Grid>
    </div>)
}

export default Order