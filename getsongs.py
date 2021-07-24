import requests
import os
import csv
from dotenv import load_dotenv

load_dotenv()

SPOTIFY_CLIENT_ID = os.getenv('SPOTIFY_CLIENT_ID')
SPOTIFY_CLIENT_SECRET = os.getenv('SPOTIFY_CLIENT_SECRET')
BASE_URL = 'https://api.spotify.com/v1/'
AUTH_URL = 'https://accounts.spotify.com/api/token'

auth_response = requests.post(AUTH_URL, {
    'grant_type': 'client_credentials',
    'client_id': SPOTIFY_CLIENT_ID,
    'client_secret': SPOTIFY_CLIENT_SECRET,
})

access_token = auth_response.json()['access_token']

headers = {
    'Authorization': 'Bearer {token}'.format(token=access_token)
}

playlist_ids = []
track_ids = []

for page in range(20):
    playlist_data = requests.get(
        BASE_URL + 'search?q=study&type=playlist&limit=50&offset=' + str((page*50)), headers=headers)
    playlists_json = playlist_data.json()
    playlists = playlists_json['playlists']['items']
    for playlist in playlists:
        playlist_ids.append(playlist['id'])

for playlist_id in playlist_ids:
    tracks_data = requests.get(
        BASE_URL + 'playlists/' + playlist_id + '?fields=tracks.items(track(id))', headers=headers)
    tracks_json = tracks_data.json()
    tracks = tracks_json['tracks']['items']
    for track in tracks:
        if track['track']:
            track_ids.append(track['track']['id'])

with open('tracks.csv', 'w', newline='') as csvfile:
    writer = csv.writer(csvfile, delimiter=',')
    for track_id in track_ids:
        writer.writerow([track_id])
