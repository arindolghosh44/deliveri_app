import React from 'react'
import { Grid } from '@mui/material'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
const OrderCard = () => {
  return (
    <div className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>

<Grid item xs={6}>

<div className='flex cursor-pointer'>

<img   className ='w-[5rem] h-[5rem] object-cover object-top'  src='https://wickedweasel.b-cdn.net/cmsstorage/wickedweasel/media/wickedweasel/models%202024/heather/heather-main-image.jpg?ext=.jpg' alt=''/>
<div className='ml-5 space-y-2'>

<p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eaque </p>
<p className='opacity-50 text-xs font-semibold text-left'>size:xl</p>
<p className='opacity-50 text-xs font-semibold text-left'>Color:hot</p>
</div>


</div>


</Grid>

<Grid item xs={2}>
<p>RS.1899</p>


</Grid>


<Grid item xs={4}>
{ true && <p>
<AddLocationAltIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2 text-sm'/>
<span>
    Delivered On March 10
</span>
<br/>
<span className='text-xs'>
  Lorem ipsum dolor sit amet
</span>

</p>}
{ false && <p>

<span>

    Expected delivery on March 5
</span>

</p>
}


</Grid>






      </Grid>






    </div>
  )
}

export default OrderCard
