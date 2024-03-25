import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTraker from './OrderTraker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20'>

        <div>
<h1 className='font-bold text-xl py-10'>Delivery Address</h1>
        <AddressCard/>
        </div>
        <div className='py-20'>
            <OrderTraker activeStep={3}/>
        </div>

<Grid className='space-y-5' container>

    {[1,1,1,1,1,1].map((item)=><Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center",justifyContent:"space-between"}}>

<Grid item xs={6}>

<div className='flex items-center space-x-4'>
<img className='w-[5rem] h-[5rem] object-cover object-top' src='https://wickedweasel.b-cdn.net/cmsstorage/wickedweasel/media/wickedweasel/models%202020/melissa%204/melissa-main-image.jpg?ext=.jpg' alt=''/>

<div className='space-y-2 ml-5 text-left'>
<p className='font-semibold'>Women slip hot nauty Girl</p>
<p className='space-x-5 opacity-50 text-xs font-semibold'> <span>Color  :  pink</span><span>Size  : M</span></p>
<p>Seller : linaria</p>
<p>RS.353535</p>
</div>



</div>

</Grid>

<Grid item>
<Box sx={{color:deepPurple[500]}}>


<StarBorderPurple500Icon sx={{fontSize:"2rem"}} className='px-2 '/>
<span>Rate & Review Product</span>
</Box>

</Grid>


</Grid>)}



</Grid>


      
    </div>
  )
}

export default OrderDetails
