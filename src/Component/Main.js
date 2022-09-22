import React from 'react'


import image1 from "./undraw_gifts_0ceh.svg"
import image2 from "./undraw_engineering_team_a7n2.svg"
import image3 from "./undraw_projections_re_ulc6.svg"
import image4 from "./undraw_good_team_re_hrvm.svg"
import image5 from "./undraw_online_test_re_kyfx.svg"
import image6 from "./undraw_multitasking_re_ffpb.svg"

const Main = () => {
  return (
    <div>
      <div className='container'>
      <div className='wrapper-1'>
        <div className='one-1'>
        <img src={image1} alt="" className='image' />
        <div className='column'>
          <div className='text'> Using Abstract </div>
  <div> Abstract lets you manage, <br /> version, and document your <br /> designs in one place. </div>
<div className='learn-more'> <a href="">Learn More </a> </div>
</div>
</div>

<div className='two-2'>
<img src={image2} alt="" className='image' />
<div className='column'>
 <div className='text'> Manage your account </div>
 <div> Configure your account settings, <br /> such as your email, profile <br /> details, and password.</div>
<div className='learn-more'> <a href="">Learn more </a> </div>
</div>
</div>
 
 </div>
 </div>
      {/* second flex */}
       <div className='container'>
      <div className='wrapper-1'>
      <div className='one-1'>
        <img src={image3} alt="" className='image' />
        <div className='column'>
          <div className='text'> Using Abstract </div>
  <div> Abstract lets you manage, <br /> version, and document your <br /> designs in one place. </div>
<div className='learn-more'> <a href="" className='learn-more'>Learn More</a> </div>

</div>
</div>

<div className='two-2'>
<img src={image4} alt="" className='image' />
<div className='column'>
 <div className='text'> Manage your account </div>
 <div> Configure your account settings, <br /> such as your email, profile <br /> details, and password.</div>
<div className='learn-more'> <a href="" className='learn-more'>Learn more</a> </div>
</div>
</div>
 
 </div>
 </div> 
 {/* third flex */}
  <div className='container'>
      <div className='wrapper-1'>
      <div className='one-1'>
        <img src={image5} alt="" className='image' />
        <div className='column'>
          <div className='text'> Using Abstract </div>
  <div> Abstract lets you manage, <br /> version, and document your <br /> designs in one place. </div>
<div className='learn-more'> <a href="">Learn More</a> </div>
</div>
</div>

<div className='two-2'>
<img src={image6} alt="" className='image' />
<div className='column'>
 <div className='text'> Manage your account </div>
 <div> Configure your account settings, <br /> such as your email, profile <br /> details, and password.</div>
<div className='learn-more'> <a href="">Learn more</a> </div>
</div>
 </div>
 </div>
 </div> 
    </div>
  )
}

export default Main













































