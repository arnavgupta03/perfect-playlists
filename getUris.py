import csv

playlists = []

with open("studyPlaylists.csv", newline="") as csvfile:
    reader = csv.reader(csvfile, delimiter=",")
    for row in reader:
        playlists.append(row)

for i, playlist in enumerate(playlists):
    playlists[i] = list(set(playlist))

for i, playlist in enumerate(playlists):
    for j, track in enumerate(playlist):
        playlists[i][j] = 'spotify:track:' + track

with open("studyPlaylistUris.csv", "w", newline="") as csvfile:
    writer = csv.writer(csvfile, delimiter=',')
    for playlist in playlists:
        writer.writerow(playlist)
