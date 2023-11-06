var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

video = document.getElementById("player1");


document.getElementById("play").addEventListener("click", function() {
	video.play();
	console.log("Playing Video");
});

});
