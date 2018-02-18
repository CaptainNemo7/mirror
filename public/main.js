const video = document.querySelector('video');

let constraints = {audio: false, video: {
																	width: {ideal: 1280},
								  								height: {ideal: 720} 
																}
								};

navigator.mediaDevices.getUserMedia(constraints)
.then(function(mediaStream) {
	video.srcObject = mediaStream;
	video.onloadedmetadata = function(e) {
		video.play();
	}
})
.catch(function(err) {
	console.log(err.name + ": " + err.message);
})

