var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

var video = document.getElementById("player1");
video.autoplay = false;
video.loop = false;

var playButton = document.getElementById("play");
playButton.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    console.log("Video is playing");
  }
  if (video.muted) {
    volumeDisplay.textContent = "0%";
  } else {
    volumeDisplay.textContent = Math.round(video.volume * 100) + "%";
  }
});

var pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click", function () {
  video.pause();
  console.log("Video is paused");
  updateVolumeDisplay();
});

var slowButton = document.getElementById("slower");
slowButton.addEventListener("click", function () {
  video.playbackRate -= 0.1;
  console.log("Video speed slowed to: " + video.playbackRate);
});

var speedButton = document.getElementById("faster");
speedButton.addEventListener("click", function () {
  video.playbackRate += 0.1;
  console.log("Video speed increased to: " + video.playbackRate);
});

var skipButton = document.getElementById("skip");
skipButton.addEventListener("click", function () {
  video.currentTime += 10;
  if (video.currentTime > video.duration) {
    video.currentTime = 0;
  }
  console.log("Skipped to: " + video.currentTime + " seconds");
});

var muteButton = document.getElementById("mute");
muteButton.addEventListener("click", function () {
  if (video.muted) {
    video.muted = false;
    muteButton.textContent = "Mute";
  } else {
    video.muted = true;
    muteButton.textContent = "Unmute";
  }
  updateVolumeDisplay();
});

var volumeSlider = document.getElementById("slider");
var volumeDisplay = document.getElementById("volume");

volumeSlider.addEventListener("input", function () {
	var volumeValue = volumeSlider.value;
	video.volume = volumeValue / 100;
	volumeDisplay.textContent = volumeValue + "%";
  });
  

function updateVolumeDisplay() {
	if (video.muted) {
	  volumeDisplay.textContent = "0%";
	} else {
	  volumeDisplay.textContent = Math.round(video.volume * 100) + "%";
	}
  }
  


  

var addOldSchoolButton = document.getElementById("vintage");
addOldSchoolButton.addEventListener("click", function () {
  video.classList.add("oldSchool");
});

var removeOldSchoolButton = document.getElementById("orig");
removeOldSchoolButton.addEventListener("click", function () {
  video.classList.remove("oldSchool");
});
