import React from 'react'

const Card = (props) => {
  const info = props.snippet
  return (
    <div className="card" onClick={e => props.changeCurrentlyPlaying(props)}>
      <div className="cardtopdiv">
        <img className="cardimage" src={info.thumbnails.default.url} alt="video" />
        <p className="cardtitle">{info.title}</p>
      </div>
      <p className="carddes">{info.description}</p>
    </div>
  )
}

export default Card
