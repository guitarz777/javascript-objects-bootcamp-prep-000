var playlist = {Seether : "Broken"}

function updatePlaylist (playlist, artist, song){
<<<<<<< HEAD
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist (playlist, artist){
  return delete playlist[artist];
=======
  playlist[artist] = song
}

function removeFromPlaylist (playlist, artist){
  delete playlist.artist;
>>>>>>> 3f74534d3206d2017e64aa9cc2b11be6a31415d9
}