const supported = 'mediaDevices' in navigator;
let canvas = document.getElementById('canvas');
let dataURL = document.getElementById('data');
let img = new Image();

function doSomethingWithFiles(fileList) {
let file = null;
for (let i = 0; i < fileList.length; i++) {
  if (fileList[i].type.match(/^image\//)) {
    file = fileList[i];
    break;
  }
}
if (file !== null) {
 img.src = URL.createObjectURL(file);

 console.log("Blob URL: "+ img.src);
 dataURL.value = canvas.toDataURL('image/jpeg',1.0);
 console.log("Data URL: "+ dataURL.value;
 }

}
img.onload= function(){
  canvas.getContext('2d').drawImage(img,0,0,img.width,    img.height
                                       ,0,0,canvas.width, canvas.height);

}

const fileInput = document.getElementById('file-input');
fileInput.addEventListener('change', (e) => doSomethingWithFiles(e.target.files));
