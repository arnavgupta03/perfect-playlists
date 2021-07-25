import * as React from "react"
import { Link } from "wouter";

/*
The Home function defines the content that makes up the main content of the Home page
- This component is attached to the /about path in router.jsx
- The function in app.jsx defines the page wrapper that this appears in along with the footer
*/


function Playlist(props) {
  return (
    <iframe
      src={"https://open.spotify.com/embed/playlist/" + props.URI + "?theme=0"}
      width="100%"
      height="380"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media">
    </iframe>
  );
}

class PlaylistGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {chosen: "pop"};
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    if (this.state.chosen == "pop"){
      this.setState({chosen: "study"});
    } else {
      this.setState({chosen: "pop"});
    }
  }
  
  render() {
      if (this.state.chosen == "pop") {
        var chosenDiv = <div className="container my-4" name="pop"><div className="row"><div className="col"><Playlist URI="0P1lEc5otG7qrQg2YAHfQU"/></div><div className="col"><Playlist URI="7MiA2DIG3ksEfq58EuqoDN"/></div></div><div className="row"><div className="col"><Playlist URI="6ckDBLWg8a2LYfSzPLFvx4"/></div><div className="col"><Playlist URI="4M0ThhDAAhVZNnNJbpiWWF"/></div></div></div>;
      } else {
        var chosenDiv = <div className="container my-4" name="study"><div className="row"><div className="col"><Playlist URI="1vBvCyJuHa5hPxvEUwzexF"/></div><div className="col"><Playlist URI="3zFmcBMGVnrd7AkGOOfe43"/></div></div><div className="row"><div className="col"><Playlist URI="72Mxk3nyp7fexOdVCa0HoM"/></div><div className="col"><Playlist URI="1BSl97knCGe5Du8RcTXRRU"/></div></div></div>;
      }
      return (<div className="container-fluid">
          <button type="button" class="btn btn-primary" onClick={this.handleClick}>Switch Genre</button>
          {chosenDiv}
        </div>);
  }
}

export default function Home() { 
  return (
    <>
      <h1 className="display-1">Perfect Playlists</h1>
      <p className="lead">AI-generated playlists from the top 250 human-created playlists.</p>
      <PlaylistGroup />
    </>
  );
}
