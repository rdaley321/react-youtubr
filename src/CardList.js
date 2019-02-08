import React from 'react'
import Card from './Card'

const CardList = (props) => {
  return (
    <div className="cardlist">
      {props.videos !== undefined ?
        props.videos.map(video => {
        return <Card key={video.id.videoId} {...video} changeCurrentlyPlaying={props.changeCurrentlyPlaying}/>
        })
        : null
      }
    </div>
  )
}

export default CardList
