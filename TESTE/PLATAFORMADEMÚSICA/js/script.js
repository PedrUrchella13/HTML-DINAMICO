const songs = [
    { title: "Música 1", artist: "Artista 1", url: "song1.mp3" },
    { title: "Música 2", artist: "Artista 2", url: "song2.mp3" },
    { title: "Música 3", artist: "Artista 3", url: "song3.mp3" }
];

let currentSongIndex = 0;
const audioElement = document.getElementById("audio");
const audioSource = document.getElementById("audio-source");
const songTitle = document.getElementById("song-title");
const songArtist = document.getElementById("song-artist");
const playPauseButton = document.getElementById("play-pause");
const playlist = document.getElementById("playlist");

function loadSong(index) {
    const song = songs[index];
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    audioSource.src = song.url;
    audioElement.load();
}

function togglePlayPause() {
    if (audioElement.paused) {
        audioElement.play();
        playPauseButton.textContent = "Pausar";
    } else {
        audioElement.pause();
        playPauseButton.textContent = "Tocar";
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audioElement.play();
    playPauseButton.textContent = "Pausar";
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audioElement.play();
    playPauseButton.textContent = "Pausar";
}

function selectSong(index) {
    currentSongIndex = index;
    loadSong(currentSongIndex);
    audioElement.play();
    playPauseButton.textContent = "Pausar";
}

function createPlaylist() {
    songs.forEach((song, index) => {
        const li = document.createElement("li");
        li.textContent = `${song.title} - ${song.artist}`;
        li.onclick = () => selectSong(index);
        playlist.appendChild(li);
    });
}

// Inicializa a playlist e carrega a primeira música
createPlaylist();
loadSong(currentSongIndex);