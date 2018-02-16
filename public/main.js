const video = document.querySelector('video');
// { 
// 									width: { min: 1024, ideal: 1280, max: 1920 },
// 								  height: { min: 776, ideal: 720, max: 1080 } 
// 								 } 
let constraints = {audio: false, video: {
																	width: {min: 1280},
																	height: {min: 720}
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

