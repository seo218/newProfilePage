import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import searchYouTube from '../lib/searchYouTube.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0],
      userInput: ''
    };
    this.videoEntryClick  = this.videoEntryClick.bind(this)

  }

  onChangeHandler(event) {
    this.setState({
      userInput: event.target.value
    })
  }

  videoEntryClick(video) {
    this.setState({
      currentVideo: video
    })
  }

  componentDidMount(){  // lifeCycle method. Search for videos when an application loads. 
    var options = {key: YOUTUBE_API_KEY, query: 'javascript', max: 5 }
    var context = this;
    searchYouTube(options, data => {
      context.setState({
        allVideos: data
      })
    })
  }

  render() {
    return (
      <div>
        <nav className="navbar" >
          <div className="col-md-6 offset-md-3">
            <div><h5> <Search userText = {this.state.onChangeHandler}/> </h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><VideoPlayer video={this.state.currentVideo} /> </h5></div>
          </div>
          <div className="col-md-5">
            <div><h5> 
            <VideoList videos={this.state.videos} 
                       onClickEvent  = {this.videoEntryClick}/> 
            </h5></div>
          </div>
        </div>
      </div>
    );
  }

}
export default App;

ReactDOM.render(<App/>, document.getElementById('app'))


// // In the ES6 spec, files are "modules" and do not share a top-level scope
// // `var` declarations will only exist globally where explicitly defined
