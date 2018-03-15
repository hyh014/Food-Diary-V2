var userID;
var password;
var email;
var phone;
$('#login').click(function(){

  userID= document.getElementById('userid').value;
  password= document.getElementById('password').value;

  $.get("/user/"+userID,callBackFn);
});

function callBackFn(result){
  if(userID == result.id && password == result.password)
  {
    sessionStorage.setItem('name',userID);
    console.log(sessionStorage.name);
    $('#login').attr('href','/index/'+sessionStorage.name);
    location.replace("/checkLogin/"+sessionStorage.name);

  }
  else {
    $('#error').removeClass('hide');
    $('#error').show();
  }
}

$('#register').click(function(){
  userID = document.getElementById('userid').value;
  sessionStorage.setItem('name',userID);
  $.get("/user/"+sessionStorage.name,callBack);
});


$('#addEntry').click(function(){
  sessionStorage.edit=false;


  var date = $('#clock').text();
  var time = date.substring(9);
  var date = date.substring(0,8);

  document.getElementById('image').value= sessionStorage.image;
  document.getElementById('taste').value= $('#tasteRate').rateit('value');
  document.getElementById('health').value=$('#healthRate').rateit('value');
  document.getElementById('mood').value=$('#moodRate').rateit('value');
  document.getElementById('anxiety').value=$('#anxietyRate').rateit('value');
  document.getElementById('date').value=date
  document.getElementById('time').value=time;
  document.getElementById('userid').value=sessionStorage.name;
});


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
})

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

  document.getElementById('image').value= sessionStorage.image;
  document.getElementById('taste').value= $('#tasteRate').rateit('value');
  document.getElementById('health').value=$('#healthRate').rateit('value');
  document.getElementById('mood').value=$('#moodRate').rateit('value');
  document.getElementById('anxiety').value=$('#anxietyRate').rateit('value');
  document.getElementById('date').value=date
  document.getElementById('time').value=time;
  document.getElementById('userid').value=sessionStorage.name;
});
