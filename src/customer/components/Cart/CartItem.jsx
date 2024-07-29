import { Button, IconButton } from '@mui/material';
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const CartItem = () => {
  return (
    <div className='p-5 border rounded-md shadow-lg'>
      <div className='flex items-center'>
        <div className='w-[5rem] h-[5rem]  lg:w-[9rem] lg:h-[9rem]  '>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQio4q0dKqI8OyVtNQvSGjHvru66OTq4We7FA&s'
            alt='mens jeans' className='w-full h-full object-cover object-top'></img>
        </div>
        <div className='space-y-1 ml-5'>
          <p className='font-semibold'>Mens slim blue jeans </p>
          <p className='opacity-70'>Size: M ,white </p>
          <p className='opacity-70 mt-2'>Seller: WaGonr</p>
          <div className='flex space-x-5 items-center text-grey-900 pt-4'>
            <p className="font-semibold">199</p>
            <p className="opacity-50 line-through">211</p>
            <p className=" font-semibold text-green-600">5% off</p>
          </div>
        </div>
      </div>
      <div className='lg:flex items-center lg:space-x-10 pt-4'>
        <div className='flex items-center space-x-2'>
          <IconButton sx={{color:'black'}}>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className='py-1 px-7 border rounded-sm'>
           3
          </span>
          <IconButton sx={{color:'black'}}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button sx={{color:'red'}}>Remove</Button>
        </div>
      </div>
    </div>
  )
}

export default CartItem;