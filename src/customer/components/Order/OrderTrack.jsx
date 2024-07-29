import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
const  steps = [
  'Placed',
  'Order Conformed',
  'Shipped',
  'Out of Delivery',
  'Deliveried'
]
const OrderTrack = (activeStep) => {
  return (
  <div className="w-full">
    <Stepper activeStep={activeStep} alternativeLabel>
     {steps.map((label)=> <Step>
      <StepLabel sx={{color:"blueviolet",fontSize:"40px"}}>{label}</StepLabel>
     </Step>)}
    </Stepper>
  </div>
  )
}

export default OrderTrack