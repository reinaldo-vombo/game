import React from 'react'

const VideoShow = ({ videoUrl }: any) => {
   return (
      <video autoPlay={true} loop={false} controls={true} className='w-full h-full'>
         <source src={videoUrl} />
      </video>
   )
}

export default VideoShow