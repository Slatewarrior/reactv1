import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyBk2uu1qE6ZAdX8l1EkRZwgwtwImDo81i8";


class App extends Component {
  constructor(props){
    super(props);
    this.state = { videos: []};

    YTSearch({ key: API_KEY, term: "reactjs tutorial" },  videos => {
      this.setState( { videos });
      console.log(videos);
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
} 

ReactDOM.render(<App />, document.querySelector(".eliseo"));
//export default App;