import React from 'react'
import VideoCard from './VideoCard'
import '../styles/Videos.css'

function Videos({videos}) {
  return (
    <div className='videos'>
      {videos.map((item,index)=>(
        <VideoCard index={index} key={item.image} name={item.name} image={item.image} />
      ))}
    </div>
  )
}

export default Videos