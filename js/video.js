var video;

function start() {
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
}

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	start();
});


document.addEventListener("DOMContentLoaded", function() {
	document.querySelector("#play").addEventListener("click", function() {
		video.play();
	});
	document.querySelector("#pause").addEventListener("click", function() {
		video.pause();
	});
	document.querySelector("#mute").addEventListener("click", function() {
		video.muted = !video.muted;
	});
});

