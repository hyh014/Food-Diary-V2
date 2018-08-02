var userID;
var password;
var email;
var phone;
$('#login').click(function(){

  userID= document.getElementById('userid').value;
  password= document.getElementById('password').value;
  
});

function callBackFn(result){
  if(userID == result.id && password == result.password)
  {
    sessionStorage.setItem('name',userID);
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
});
