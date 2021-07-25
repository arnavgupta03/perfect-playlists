import * as React from "react";
{/* Add imports from README Next steps here */}


/*
The About function defines the component that makes up the About page
- This component is attached to the /about path in router.jsx
*/

export default function About() {
  {/* Declare style and trigger for wiggle effect from README here */}
  
  return (
    <div className="page">
      {/* Extend h1 tag from README here */}
      <h1 className="title">
        About Perfect Playlists
      </h1>
      {/* Extend p tag from README here */}
      <p>
        Welcome to Perfect Playlists!
      </p>
      <p>
        This page contains playlists created in by an AI-model in MATLAB by studing the top 250 playlists in each genre. How does the AI work?
      </p>
      <ul>
        <li>
          First, we took over 20 000 tracks from Spotify's top 250 playlists as data for the AI.
        </li>
        <li>
          Using MATLAB, an LSTM RNN was trained on these tracks in order to learn to create playlists based on the tracks that should be added as well as sequencing.
        </li>
        <li>
          The generated playlists were created in Spotify and are here for you to enjoy!
        </li>
      </ul>

      <p>
        This site was built with <a href="https://reactjs.org/">React</a> and{" "}
        <a href="https://vitejs.dev/">Vite</a> on{" "}
        <a href="https://glitch.com/">Glitch</a>.
      </p>
    </div>
  );
}
