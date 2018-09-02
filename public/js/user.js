const supported = 'mediaDevices' in navigator;
let canvas = document.getElementById('canvas');
let dataURL = document.getElementById('dataURL');
let ctx = canvas.getContext('2d');
ctx.fillStyle = '#fff';  /// set white fill style
ctx.fillRect(0, 0, canvas.width, canvas.height);
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
 }

}
img.onload= function(){
  ctx.drawImage(img,0,0,img.width,    img.height
                                       ,0,0,canvas.width, canvas.height);
  dataURL.value = canvas.toDataURL('image/jpeg',1.0);
  console.log("Data URL: "+ dataURL.value);
}

const fileInput = document.getElementById('file-input');
fileInput.addEventListener('change', (e) => doSomethingWithFiles(e.target.files));
