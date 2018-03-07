var userID;
var password;
var email;
var phone;
$('#login').click(function(){
  userID= document.getElementById('userid').value;
  password= document.getElementById('password').value;
  sessionStorage.setItem('name',userID);
  $.get("/user/"+sessionStorage.getItem('name'),callBackFn);
});

function callBackFn(result){
  if(userID == result.id && password == result.password)
  {
    $('#login').attr('href','/index/'+userID);
    sessionStorage.setItem('name',userID);
    location.replace("/checkLogin/"+sessionStorage.getItem('name'));
  }
  else {
    $('#error').removeClass('hide');
    $('#error').show();
  }
}

$('#register').submit(function(){
  userID = document.getElementById('userid').value;
  password = document.getElementById('password').value;
  sessionStorage.setItem('name',userID);
  var bool=$.get("/user/"+sessionStorage.name,callBack);
  if(bool==true){
    return false;
  }
  else{
    $("form").action="/register";
    alert("existing userid");
    location.reload();
  }
});
function callBack(result){
  console.log("in callback");
  if(result.id == sessionStorage.name){
    return true;
  }
  else{
    return false;
  }
}

$('#addEntry').click(function(){
  sessionStorage.edit=false;


  var date = $('#clock').text();
  var time = date.substring(9);
  var date = date.substring(0,8);

  document.getElementById('taste').value= $('#tasteRate').rateit('value');
  document.getElementById('health').value=$('#healthRate').rateit('value');
  document.getElementById('mood').value=$('#moodRate').rateit('value');
  document.getElementById('anxiety').value=$('#anxietyRate').rateit('value');
  document.getElementById('date').value=date
  document.getElementById('time').value=time;
  document.getElementById('userid').value=sessionStorage.name;
});


$('#diary').click(function(){
  location.href="/diary/tester1";
});
$('#entry').click(function(){
  location.href="/entry2/tester1";
});
$('#stat').click(function(){
  location.href="/stat/tester1";
});
$('#setting').click(function(){
  location.href="/setting/tester1";
});
$('#next').click(function(){
  sessionStorage.setItem('image',document.getElementById('output').src);
});

$('#entry2rating').click(function(){

  var food=document.getElementById('foodName').value;
    sessionStorage.setItem('foodName',food);
  var comment = document.getElementById('comments').value;
  sessionStorage.setItem('comments',comment);
});

$('#addEntry2').click(function(){
  sessionStorage.edit=false;
  var date = $('#clock').text();
  var time = date.substring(9);
  var date = date.substring(0,8);
  sessionStorage.setItem('name','tester1');
  document.getElementById('taste').value= $('#tasteRate').rateit('value');
  document.getElementById('health').value=$('#healthRate').rateit('value');
  document.getElementById('mood').value=$('#moodRate').rateit('value');
  document.getElementById('anxiety').value=$('#anxietyRate').rateit('value');
  document.getElementById('date').value=date
  document.getElementById('time').value=time;
  document.getElementById('userid').value=sessionStorage.name;
  document.getElementById('foodName').value = sessionStorage.foodName;
  document.getElementById('comments').value = sessionStorage.comments;
});
