import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from '../AddressCard/AddressCard'

const DeliveryAddressForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const Data = {
      fname: data.get('fname'),
      lname: data.get('lname'),
      address: data.get('address'),
      state: data.get('state'),
      city: data.get('city'),
      zip: data.get('zip'),
      phone: data.get('phone')
    }
    console.log('Data',Data);
  }
  return (
    <div>
      <Grid container spacing={4} >
        <Grid xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
          <div className='p-5 py-7 border-b cursor-pointer'>
            <AddressCard />
            <Button sx={{ mt: 2, bgcolor: 'blueviolet' }} size='large' variant='contained'>Delivery Here</Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className='border rounded-s-md shadow-md p-5'>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField required id='fname' name='Fname' label='Enter First Your Name' fullWidth autoComplete='given name' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id='lname' name='lname' label='Enter Last Your Name' fullWidth autoComplete='given name' />
                </Grid>
                <Grid item xs={12} >
                  <TextField required id='address' name='address' label='Enter Your Address' fullWidth autoComplete='given address' multiline rows={4} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id='state' name='state' label='Enter state' fullWidth autoComplete='given state' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id='city' name='city' label='Enter city' fullWidth autoComplete='given city' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id='zip' name='zip' label='Enter  Your Zip Code' fullWidth autoComplete='given zip' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id='phone' name='phone' label='Enter Your Phone' fullWidth autoComplete='given phone' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button sx={{ mt: 2, bgcolor: 'blueviolet' }} type='submit' size='large' variant='contained'>Delivery Here</Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default DeliveryAddressForm