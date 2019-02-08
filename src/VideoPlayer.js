import React from 'react'

const VideoPlayer = (props) => {
  console.log(props)
  let embedUrl
  let details
  if(props.video !== null) {
    embedUrl = `https://www.youtube.com/embed/${props.video.id.videoId}`
    details = (
      <div className="details">
        <p className="mainvideotitle">{props.video.snippet.title}</p>
        <p className="mainvideodes">{props.video.snippet.description}</p>
      </div>
    )
  }

  return (
    <div className="mainvideo">
      <div className="iframe-container">
        <iframe frameBorder="0" allowFullScreen title='youtubeVideo' src={embedUrl} />
      </div>
      {details}
    </div>
  )
}

export default VideoPlayer
