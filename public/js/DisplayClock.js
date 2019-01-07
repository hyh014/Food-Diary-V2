document.getElementById("clock").innerHTML = formatAMPM();
let date = document.getElementById("date");
date.value= formatAMPM();

function formatAMPM() {
var d = new Date();
    var a_p ="";
    var curr_hour = d.getHours();
    var year = d.getFullYear();
    if(curr_hour <12)
    {
      a_p="AM";
    }
    else {
      a_p="PM";
    }
    if(curr_hour==0)
    {
      curr_hour=12;
    }
    if(curr_hour>12)
    {
      curr_hour-=12;
    }
var curr_min = d.getMinutes();
curr_min=curr_min+"";
if (curr_min.length == 1)
   {
   curr_min = "0" + curr_min;
   }
   var month = (d.getMonth()+1).toString();
   if(month.length==1){
    month = "0" + month;
   }
   var date = d.getDate().toString();
   if(date.length==1){
    date = "0" + date;
   }
return (month+"/"+date+"/"+year+" "+curr_hour+":"+curr_min+a_p);
}

$('#addEntry').click( function(){

  document.getElementById('taste').value= $('#tasteRate').rateit('value');
  document.getElementById('health').value=$('#healthRate').rateit('value');
  document.getElementById('mood').value=$('#moodRate').rateit('value');
  document.getElementById('anxiety').value=$('#anxietyRate').rateit('value');
 });
