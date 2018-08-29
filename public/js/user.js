$('#diary').click(function(){
  location.href="/diary/"+sessionStorage.name;
});
$('#entry').click(function(){
  location.href="/entry2/"+sessionStorage.name;
});
$('#stat').click(function(){
  location.href="/stat/"+sessionStorage.name;
});
$('#setting').click(function(){
  location.href="/setting/"+sessionStorage.name;
});
$('#news').click(function(){
  location.href="/news/"+sessionStorage.name;
});
function capture(video, canvas, image, snapshotButton) {

	var constraints = {
		video: true
	}

	var successCallback = function(mediaStream) {
		video.src = window.URL.createObjectURL(mediaStream);
		video.addEventListener("loadedmetadata", function(e) {
			snapshotButton.onclick = function() {
				takePhoto();
			}

		});
	};

	var errorCallback = function() {
		console.log('failure to get media');
	};

	var takePhoto = function () {
		var ctx = canvas.getContext('2d');
		ctx.drawImage(video,0,0);
		showImage();
	};

	var showImage = function () {
		image.src = canvas.toDataURL('image/webp');
	};

	navigator.getUserMedia(constraints, successCallback, errorCallback);

}
