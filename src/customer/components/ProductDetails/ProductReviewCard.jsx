import React from 'react'
import { Grid,Avatar, Box, Rating } from "@mui/material";
const ProductReviewCard =()=>{

  return(
    <div>
        <Grid container spacing={2} gap={3}>
          <Grid item xs={1}>
               <Box>
                <Avatar className='text-white' sx={{width:56,height:56,bgcolor:"#9155fd"}}>R</Avatar>
                
               </Box>
          </Grid>
          <Grid item xs={9}>
              <div className='space-y-2'>
                  <div>
                      <p className='semi-bold text-lg'>Ram</p>
                      <p className='opacity-60'>June 29 ,2024</p>
                  </div>
              </div>
              <Rating value={4.5} name='half-rating' readOnly></Rating>
              <p>nice product, i love this </p>
          </Grid>
        </Grid>
    </div>
  )
}
export default ProductReviewCard;