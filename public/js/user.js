var userID;
var password;
var email;
var phone;
$(document).ready(function(){
  initializePage();
})
function initializePage(){
  console.log("Connected");
}
$('#login').click(function(){
  userID= document.getElementById('userid').value;
  sessionStorage.setItem('name',userID);
  password= document.getElementById('password').value;
  $.get("/user/"+sessionStorage.getItem('name'),callBackFn);

});
function callBackFn(result){

  if(userID == result.id && password == result.password)
  {
    $('#login').attr('href','/index');
    sessionStorage.userID=userID;
    location.replace("/index");

  }
  else {
    $('#error').removeClass('hide');
    $('#error').show();
  }
}
$('#register').click(function(){
  userID = document.getElementById('userid').value;
  sessionStorage.setItem('name',userID);
  console.log("USERID is "+userID);
})
$('#addEntry').click(function(){
  sessionStorage.edit=false;
var d = new Date();
    var a_p ="";
    var curr_hour = d.getHours();
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
  document.getElementById('taste').value= $('#tasteRate').rateit('value');
  document.getElementById('health').value=$('#healthRate').rateit('value');
  document.getElementById('mood').value=$('#moodRate').rateit('value');
  document.getElementById('anxiety').value=$('#anxietyRate').rateit('value');
  document.getElementById('date').value=(d.getMonth()+1)+"/"+d.getDate()+"/"+d.getFullYear();
  document.getElementById('time').value=curr_hour+":"+curr_min+a_p;
  document.getElementById('userid').value=sessionStorage.getItem('userID');
  console.log(document.getElementById('userid').value);
});
$('#edit').click(function(){

});
