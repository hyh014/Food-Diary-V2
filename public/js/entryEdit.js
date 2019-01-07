window.onload = function(){
  console.log(sessionStorage);
 if(sessionStorage.getItem('edit')){
   let canvas = document.getElementById('canvas');
   let img = new Image();
   img.src = sessionStorage.getItem('image');
   let ctx = canvas.getContext('2d');
   let dataURL = document.getElementById('dataURL');
   dataURL.value = img.src;
   ctx.drawImage(img , 0 , 0);
   $('#comments').html(sessionStorage.getItem('comments'));
   console.log(sessionStorage.getItem('comments'));
   console.log(sessionStorage.getItem('health'));
   $('div#tasteRate').rateit('value',sessionStorage.getItem('taste'));
   $('div#healthRate').rateit('value',sessionStorage.getItem('health'));
   $('div#moodRate').rateit('value',sessionStorage.getItem('mood'));
   $('div#anxietyRate').rateit('value',sessionStorage.getItem('anxiety'));
   $('#clock').text(sessionStorage.getItem('date')+" "+sessionStorage.getItem('time'));
   $('#back').attr('href','/diary');
   $('#key').val(sessionStorage.getItem('key'));
   $('#date').val(sessionStorage.getItem('date')+' '+sessionStorage.getItem('time'));
   document.getElementById('addDiary').action= '/addDiary/e';
   sessionStorage.clear();
 }
 else{
   document.getElementById('comments').value = "";
   $('#tasteRate').rateit('value',0);
   $('#healthRate').rateit('value',0);
   $('moodRate').rateit('value',0);
   $('#anxietyRate').rateit('value',0);
   document.getElementById('addDiary').action = '/addDiary';
 }
}
