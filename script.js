let songIdx = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.querySelector("#masterPlay");
let progressBar = document.querySelector(".range");
let songlist = Array.from(document.querySelectorAll(".songlist"));
let songsPlay = document.querySelectorAll(".songsplay");
let prvbtn = document.querySelector("#prvbtn");
let nxtbtn = document.querySelector("#nxtbtn");

let songs = [
  {
    songName: "let_me_love_you",
    filePath: "songs/1.mp3",
    coverPath: "coverimg/1.jpg",
  },
  {
    songName: "cheap_thrills",
    filePath: "songs/2.mp3",
    coverPath: "coverimg/2.jpg",
  },
  {
    songName: "my_heart_stereo",
    filePath: "songs/3.mp3",
    coverPath: "coverimg/3.jpg",
  },
  {
    songName: "no_lie_audio_edit",
    filePath: "songs/4.mp3",
    coverPath: "coverimg/4.jpg",
  },
  {
    songName: "senorita",
    filePath: "songs/5.mp3",
    coverPath: "coverimg/5.jpg",
  },
  {
    songName: "__my__heart_stereo",
    filePath: "songs/6.mp3",
    coverPath: "coverimg/6.jpg",
  },
  {
    songName: "__no_lie_audio_edit",
    filePath: "songs/7.mp3",
    coverPath: "coverimg/7.jpg",
  },
];

// playsong
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
  }
});

// update progressbar
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log(progress);
  progressBar.value = progress;
});

progressBar.addEventListener("change", () => {
  audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
});

songlist.forEach((element, i) => {
  element.querySelectorAll("img")[0].src = songs[i].coverPath;
  element.querySelectorAll(".songname")[0].innerText = songs[i].songName;
});

// const makeAllPlay = () => {
//   songsPlay.forEach((element) => {
//     element.classList.add("fa-circle-play");
//     element.classList.remove("fa-circle-pause");
//   });
// };

songsPlay.forEach((elements) => {
  elements.addEventListener("click", (element) => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play();
      element.classList.add ("fa-circle-pause");
      element.classList.remove ("fa-circle-play");

    } else {
      audioElement.pause();
      element.classList.add ("fa-circle-play");
      element.classList.remove ("fa-circle-pause");

    }
    // makeAllPlay();
 
  
    songIdx = parseInt(element.id);

    // audioElement.src = `songs/${songIdx + 1}.mp3`;
    // or
    audioElement.src = songs[songIdx].filePath;

    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
  });
});

// privious btn
prvbtn.addEventListener("click", () => {
  if (songIdx < 1) {
    songIdx = 6;
  } else {
    songIdx -= 1;
  }

  // audioElement.src = `songs/${songIdx + 1}.mp3`;
  // or
  audioElement.src = songs[songIdx].filePath;

  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

// nxt btn

nxtbtn.addEventListener("click", () => {
  console.log("hello");
  if (songIdx > 6) {
    songIdx = 0;
  } else {
    songIdx += 1;
  }

  // audioElement.src = `songs/${songIdx + 1}.mp3`;
  // or
  audioElement.src = songs[songIdx].filePath;

  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
