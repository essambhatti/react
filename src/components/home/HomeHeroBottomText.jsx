import React from 'react'
import { Link } from 'react-router-dom'

const HomeHeroBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2'>
      <Link className='border-3 text-[6vw] hover:border-[#d3f350] hover:text-[#d3f350] leading-[5vw] rounded-full border-white px-4  pt-3 uppercase' to = "/projects">Projects</Link>
      <Link className='border-3 text-[6vw] hover:border-[#d3f350] hover:text-[#d3f350] leading-[5vw] rounded-full border-white px-4  pt-3 uppercase'to="/agence">Agence</Link>
    </div>
  )
}

export default HomeHeroBottomText
