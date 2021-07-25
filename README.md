# Perfect Playlists
### _Only The Best AI Generated Playlists_

[Perfect Playlists](https://perfectplaylists.glitch.me/) is a website that contains AI-generated playlists, based on the top 250 user-generated playlists in Spotify for that genre. The playlists were made using the MATLAB Deep Learning Toolbox.

#### What I used to make it (and what you'll need to make your own)
- MATLAB - to prepare the data for the model, create and train the model, and generate new playlists
- Python - to gather playlist and track data, clean data for the model, and to generate usable track URIs
- React - to create the web app that displays all the playlists
- Spotify API and Web Console - to get the playlist and track data and to make the playlists

#### How does it work?
By modifying an character-based LSTM RNN to run on Spotify track ids, I created a MATLAB model that learns the most common tracks as well as the sequencing of playlists to generate new playlists that have the best parts of all user-generated ones.

#### How I generated the playlists and how you can make your own playlists
1. Start by downloading all the requirements. Preferably, do this in a virtual env.
`pip install -r requirements.txt`
2. [Create an account to access the Spotify API](https://developer.spotify.com). You'll also need to create an app and put the Client ID and Client Secret in a .env file.
3. Change the query on line 30 of `getsongs.py` to whatever type of playlist you want to generate. Also, change line 28 to be however many playlists you want data from (times 50). Run the file with `python getsongs.py`.
4. Open `main_lstm_model.mlx` in MATLAB. Make sure that MATLAB is in the same folder as the `tracks.csv` file. Change the file extension on `tracks.csv` to `tracks.txt`. Run the MATLAB script, training for as long as you feel necessary.
5. Open `getUris.py`. Change lines 5 and 17 to the file names that are appropriate for your playlists.
6. On Spotify, create a playlist and get the playlist ID.
7. Open the file with the track URIs. Also, open the Spotify Web Console for _Add Items to a Playlist_. Generate a token and paste the playlist URI as well as the track URIs into the console. Run the console.
8. Listen and enjoy your AI-generated playlist.

Note: the app folder contains the code for the web app only.
