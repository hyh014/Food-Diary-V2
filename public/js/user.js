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
    sessionStorage.userID=userID;
    location.replace("/checkLogin/"+sessionStorage.getItem('name'));

  }
  else {
    $('#error').removeClass('hide');
    $('#error').show();
  }
}

$('#register').click(function(){
  userID = document.getElementById('userid').value;
  sessionStorage.setItem('name',userID);
});

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

$('#edit').click(function(){
  sessionStorage.setItem('edit',true);
  sessionStorage.setItem('editDate',true);
  sessionStorage.setItem('name','tester1');
  var foodName = $('#foodName').text();
  var comments = $('#comments').text();
  var health = $('#health').text();
  var taste = $('#taste').text();
  var mood = $('#mood').text();
  var anxiety = $('#anxiety').text();
  var date = $('#date').text();

  var time = date.substring(9);
  var date = date.substring(0,8);
  health = health.substring(7,8);
  taste = taste.substring(6,7);
  mood = mood.substring(5,6);
  anxiety = anxiety.substring(8,9);

  sessionStorage.setItem('foodName',foodName);
  sessionStorage.setItem('comments',comments);
  sessionStorage.setItem('health',health);
  sessionStorage.setItem('taste',taste);
  sessionStorage.setItem('mood',mood);
  sessionStorage.setItem('anxiety',anxiety);
  sessionStorage.setItem('time',time);
  sessionStorage.setItem('date',date);

  console.log()

  location.replace("/entry/"+sessionStorage.getItem('name'));
});
