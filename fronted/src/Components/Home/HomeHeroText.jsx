import React from 'react'
import video from '../../assets/VD.mp4'
const HomeHeroText = () => {
  return (
    <div className='font-[Font1] text-center text-white'>
        <div className="text-[7vw] uppercase leading-[6vw]">The Simplest Way to </div>
        {/* <div className=""> And</div> */}
      <div className="flex justify-center items-center"> <div className="text-[7vw] uppercase leading-[6vw]">Launch</div> <video className='w-[30vw] h-[10vw] object-cover rounded-[100px] border-2 border-white' src={video} autoPlay muted loop /></div>
        <div className="text-[7vw] uppercase leading-[6vw]"> Grow Your Online Presence.</div>
        
      
    </div>
  )
}   

export default HomeHeroText
