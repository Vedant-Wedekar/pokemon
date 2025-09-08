import React from 'react'
import video from '../../assets/VD.mp4'
const Video = () => {
  return (
    <div className='w-full h-full '>
      <video className='w-full h-full object-cover '  src={video} autoPlay muted loop />
    </div>
  )
}

export default Video
