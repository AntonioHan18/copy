 const playListContainerTag = document.getElementsByClassName("playListContainer")[0];

  const audioTag = document.getElementsByClassName("audioTag")[0]; 
 
  const playButtonTag = document.getElementsByClassName("playButton")[0];
  const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
  const nextButtonTag = document.getElementsByClassName("nextButton")[0];
  const previousButtonTag = document.getElementsByClassName("previousButton")[0];
  const currentAndTotalTimeTag = document.getElementsByClassName("CurrentAndTotalTime")[0];

  const currentProgressTag = document.getElementById("currentProgress");


const tracks = [
  {trackId: "music/Childish_Gambino_-_This_Is_America_(Official_Video)(256k).mp3", title: "this is America"},
  {trackId: "music/Drake_-_God's_Plan(256k).mp3", title: "god's plan"},
  {trackId: "music/Katy_Perry_-_Last_Friday_Night_(T.G.I.F.)_(Official_Music_Video)(256k).mp3", title: "Last Friady Night"},
  {trackId: "music/Marwa_Loud_-_Bad_Boy_(Clip_Officiel)(256k).mp3", title: "bad boy"}
];

for (let i = 0; i < tracks.length; i++) {
  const trackTag = document.createElement("div");
  trackTag.addEventListener("click", () => {
     
    currentPlayingIndex = i; 
    playSong();
  });
  trackTag.classList.add("trackItem");
  const title =(i + 1).toString() + ". " + tracks[i].title;
  trackTag.textContent = title;
  playListContainerTag.append(trackTag);
};
let duration = 0;
let durationTag = "00:00";

audioTag.addEventListener("loadeddata", ()=> {
  duration = Math.floor(audioTag.duration);
  durationTag = durationAndCurrentTimeText(duration);
 
});


audioTag.addEventListener("timeupdate", ()=> {
  const currentTime = Math.floor(audioTag.currentTime);
  const currentTimeText = durationAndCurrentTimeText(currentTime);
  const currentTimeTextAndDurationText = currentTimeText + " / " + durationTag;
   console.log("Playing",currentTimeTextAndDurationText);
  currentAndTotalTimeTag.textContent = currentTimeTextAndDurationText;
  updateCurrentProgress(currentTime);
});

const durationAndCurrentTimeText = (totalTime)=> {
 const minute = Math.floor(totalTime/60);
 const second = totalTime % 60;
 
  const minuteText = minute <10 ?  + "0" + minute.toString() : minute;
  const secondText = second < 10 ? "0" + second.toString() : second;
  return (minuteText + " : " + secondText);
};


const updateCurrentProgress = (currentTime) => {
  const currentProgressWidth =Math.floor((500 / duration) * currentTime);
  currentProgressTag.style.width = currentProgressWidth.toString() + "px";
}

let currentPlayingIndex = 0;
let isPlaying = false;
playButtonTag.addEventListener("click", () => {
  const currentTime = Math.floor(audioTag.currentTime)
  isPlaying = true;
  if(currentTime === 0) {
  playSong();
  }else {
    audioTag.play();
    updatePlayAndPauseButton();
  }
});

pauseButtonTag.addEventListener("click", () => {
  isPlaying = false;
  audioTag.pause();
  updatePlayAndPauseButton();
});

nextButtonTag.addEventListener("click", ()=> {
  if(currentPlayingIndex === tracks.length-1){
    return;
  }
    currentPlayingIndex += 1;
    playSong();
    console.log("next",currentPlayingIndex)  
  
});

previousButtonTag.addEventListener("click", ()=> {
 if(currentPlayingIndex === 0) {
  return;
 }

 currentPlayingIndex -= 1;
 playSong();
 console.log("previous",currentPlayingIndex)
})

const playSong = () => {
  const songIdToPlay = tracks[currentPlayingIndex].trackId;
audioTag.src = songIdToPlay; 
 audioTag.play();
 isPlaying = true;
updatePlayAndPauseButton();
};

const updatePlayAndPauseButton = () => {
  if(isPlaying) {
    playButtonTag.style.display = 'none';
    pauseButtonTag.style.display = "inline";
  }else{
    playButtonTag.style.display = 'inline';
    pauseButtonTag.style.display = "none";

    }
  }


