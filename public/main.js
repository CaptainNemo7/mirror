const video = document.querySelector('video');

// navigator.mediaDevices.getUserMedia({audio: false, video: true})
// .then((mediaStream) => {
// 	// console.log(mediaStream)
// 	video.src = mediaStream;
// 	video.onloadedmetadata = e => {
// 		console.log(e)
// 		video.play();
// 	};
// })
// .catch((error) => {
// 	console.log('error getting access: ' + error.name + ' : ' + error.message);
// })

// being deprecated, need to update

navigator.getMedia = (	navigator.getUserMedia || 
												navigator.webkitGetUserMedia ||
												navigator.mozGetUserMedia ||
												navigator.msGetUserMedia
											);
window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

if ( navigator.getMedia ) {
	navigator.getMedia (
		{
			video: true,
			audio: false
		},

		function(videoStream) {
			video.src = ( window.URL && window.URL.createObjectURL(videoStream)) || videoStream;
			video.play();
		},


		function(err) {
			console.log('getUserMedia error: ' + err.code);
		}

	);
} else {
	console.log('getUserMedia not supported');
}


