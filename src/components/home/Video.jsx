import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video className='h-full w-full object-cover' muted loop autoPlay src='../../../public/video.mp4' />
    </div>
  )
}

export default Video
