import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[Font1] flex justify-center items-center gap-2'>
      <Link className='text-[6vw] hover:border-green-400 hover:text-green-400 border-5 border-white rounded-full  px-10 py-5 ' to='/projects' >Projects</Link>
      <Link className='text-[6vw] hover:border-green-400 hover:text-green-400 border-5 border-white rounded-full  px-10 py-5 '  to='/agency' >Agency</Link>

    </div>
  )
}

export default HomeBottomText
