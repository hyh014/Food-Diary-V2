var userID;
var password;
var email;
var phone;
$('#login').click(function(){
  console.log("clicked");
  userID= document.getElementById('userid').value;
  password= document.getElementById('password').value;
  sessionStorage.setItem('name',userID);
  $.get("/user/"+sessionStorage.getItem('name'),callBackFn);
});

function callBackFn(result){
  if(userID == result.id && password == result.password)
  {
    $('#login').attr('href','/index/'+userID);
    sessionStorage.userID=userID;
    console.log("checklogin");
    location.replace("/checkLogin/"+sessionStorage.getItem('name'));

  }
  else {
    $('#error').removeClass('hide');
    $('#error').show();
  }
}

$('#register').click(function(){
  userID = document.getElementById('userid').value;
  sessionStorage.userID=userID;
});

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
  document.getElementById('userid').value=sessionStorage.userID;
  console.log(document.getElementById('userid').value);
});

$('#edit').click(function(){
  sessionStorage.setItem('edit',true);
  sessionStorage.setItem('name','tester1');
  location.replace("/entry/"+sessionStorage.getItem('name'));
  $.get("/user/"+sessionStorage.getItem('name'),callBackEdit);
});

function callBackEdit(result){
  var date = $('#date').text();
  sessionStorage.setItem('date',date);
  var time = date.substring(9);
  var date = date.substring(0,9);
  for(var i =0; i<result.datas.length;i++){
    if(result.datas[i].time == time && result.datas[i].date==date)
    {
      $('#foodName').value = result.datas[i].foodName;
      $('#comments').value = result.datas[i].comments;
      $('#tasteRate').rateit('value',result.datas[i].taste);
      $('#healthRate').rateit('value',result.datas[i].health);
      $('#moodRate').rateit('value',result.datas[i].mood);
      $('#anxietyRate').rateit('value',result.datas[i].anxiety);
    }
  }
}
