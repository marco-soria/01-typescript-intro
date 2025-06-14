interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 300,
  song: "Song Name",
  details: {
    author: "Author Name",
    year: 2021,
  },
};

const song = "New Song";
const {
  song: anotherSong,
  songDuration: duration,
  details: { author },
} = audioPlayer;

//const {author} = details

console.log("Song", anotherSong);
console.log("Duration", duration);
console.log("Author", author);
