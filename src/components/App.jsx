class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: props.videos,
      currentVideo: props.videos[0]
    };
  }
  
  setCurrentVideo(video) {
    // console.log(event)
    // event.preventDefault();
    this.setState({
      currentVideo: video
    });
  }
  
  componentDidMount() {
  }
  
  handleSearch(event) {
    // console.log(event)
    // var options = {
    //   query: ,
    //   max: 5,
    //   key: 
    // };
    // searchYoutube(, this.setState(newState)
    // console.log(event)
    // this.setState({
    //   videoList: 
    //   currentVideo: 
    // });
  }
  
  render() {
    // console.log(this.setCurrentVideo)
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search search={this.handleSearch.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/> 
          </div>
          <div className="col-md-5">
            <VideoList setCurVid={this.setCurrentVideo.bind(this)} videos={this.state.videoList}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
