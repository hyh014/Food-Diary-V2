window.onload = function(){
  console.log(sessionStorage);
 if(sessionStorage.getItem('edit')){

   //document.getElementById('output').src = sessionStorage.image;
   $('#comments').html(sessionStorage.getItem('comments'));
   console.log(sessionStorage.getItem('comments'));
   console.log(sessionStorage.getItem('health'));
   $('div#tasteRate').rateit('value',sessionStorage.getItem('taste'));
   $('div#healthRate').rateit('value',sessionStorage.getItem('health'));
   $('div#moodRate').rateit('value',sessionStorage.getItem('mood'));
   $('div#anxietyRate').rateit('value',sessionStorage.getItem('anxiety'));
   $('#clock').text(sessionStorage.getItem('date')+" "+sessionStorage.getItem('time'));
   $('#back').attr('href','/diary');
   document.getElementById('addDiary').action= '/addDiary/e';
   sessionStorage.clear();
 }
 else{
   //document.getElementById('foodName').value = "";
   document.getElementById('comments').value = "";
   $('#tasteRate').rateit('value',0);
   $('#healthRate').rateit('value',0);
   $('moodRate').rateit('value',0);
   $('#anxietyRate').rateit('value',0);
   document.getElementById('addDiary').action = '/addDiary';
 }
}
