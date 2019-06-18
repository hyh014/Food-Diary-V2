


let timer =setInterval(function(){
  document.getElementById("clock").innerHTML = formatAMPM();
},1000);

function formatAMPM() {
var d = new Date();

     var year = d.getFullYear();
   var month = (d.getMonth()+1).toString();
   if(month.length==1){
    month = "0" + month;
   }
   var date = d.getDate().toString();
   if(date.length==1){
    date = "0" + date;
   }
return (month+"/"+date+"/"+year+" "+d.toLocaleTimeString());
}

$('#addEntry').click( function(){
  let date = document.getElementById("date");
  date.value= formatAMPM();
  document.getElementById('taste').value= $('#tasteRate').rateit('value');
  document.getElementById('health').value=$('#healthRate').rateit('value');
  document.getElementById('mood').value=$('#moodRate').rateit('value');
  document.getElementById('anxiety').value=$('#anxietyRate').rateit('value');
  clearInterval(timer);
 });
