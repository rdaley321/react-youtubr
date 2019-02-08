import React, { Component } from "react";
import keys from "./keys";
import Search from './Search'
import CardList from './CardList'
import VideoPlayer from './VideoPlayer'

class App extends Component {

  state = {
    search: '',
    videos: [],
    currentlyPlaying: null
  }

  changeSearch = (searchValue) => {
    this.setState({
      search: searchValue
    }, () => this.sendReq())
  }

  changeCurrentlyPlaying = (video) => {
    this.setState({
      currentlyPlaying: video
    })
  }

  sendReq = () => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.state.search}&key=${keys.API_KEY}`)
    .then(res => res.json())
    .then(videos => this.setState({
      videos: videos.items
    }))
  }

  render() {
    return (
      <div>
        <Search changeSearch={this.changeSearch} search={this.state.search} />
        <div className="maindiv">
          <VideoPlayer video={this.state.currentlyPlaying} />
          <CardList videos={this.state.videos} changeCurrentlyPlaying={this.changeCurrentlyPlaying}/>
        </div>
      </div>
    )
  }
}

export default App;
