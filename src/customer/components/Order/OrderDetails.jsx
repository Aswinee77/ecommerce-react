import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTrack from './OrderTrack'
import { Box, Grid } from '@mui/material'

import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
const OrderDetails = () => {

  return (
    <div className='lg:px-20 px-5'>
      <div>
      <h1 className='font-bold text-xl py-7'>Delivery Address </h1>
      <AddressCard/>
      </div>
      <div className='py-20'>
        <OrderTrack activeStep={3}/>
      </div>
      <Grid className='space-y-5' container>
        {[1,1,1,1,1].map((item)=> <Grid item container className='shadow-xl rounded-md p-5 border' sx={{
           alignItems:'center',justifyContent:'space-between'}}>
            <Grid item sx={6}>
                <div className='flex items-center space-x-4'>
                   <img src='https://www.powerlook.in/_next/image?url=https%3A%2F%2Fcdn-media.powerlook.in%2Fcatalog%2Fproduct%2Fd%2Fp%2Fdp02-925721_3_.jpg&w=384&q=75' alt=''
                    className='w-[7rem] h-[7rem] object-cover object-top '></img>
                    <div className='space-y-2 ml-5'>
                      <p className='font-semibold'>Mens Over Size Shirt</p>
                      <p className='space-x-5 font-semibold text-xs opacity-50'><span>Color:Grey</span><span>Size:M</span></p>
                      <p>$2900</p>
                    </div>
                </div>
            </Grid>
            <Grid item >
                <Box sx={{color:'purple'}}>
                     <StarBorderPurple500Icon sx={{fontSize:'2rem'}} className='px-2' fontSize={"2px"}/> 
                     <span>Rate and Review Product </span>          
                </Box>
            </Grid>
         </Grid>)}
      </Grid>
    </div>
  )
}

export default OrderDetails