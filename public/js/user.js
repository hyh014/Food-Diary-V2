var userID;
var password;
var email;
var phone

$('#login').click(function(){

  userID= document.getElementById('userid').value;
  password= document.getElementById('password').value;
  $.get("/user/"+userID,callBackFn);
});
function callBackFn(result){

  if(userID == result.id && password == result.password)
  {
    console.log("success");
    $('#login').attr('href','/index');
    location.replace("/index");

  }
  else {
    console.log("fail");
    $('#error').removeClass('hide');
    $('#error').show();
  }
}
$('#AddDiary').click(function(){
  var foodName = document.getElementById('foodName').value;
  var comments = document.getElementById('comments').value;
  var taste = $('#taste').rateit('value');
  var health = $('#health').rateit('value');
  var mood = $('#mood').rateit('value');
  var anxiety = $('#anxiety').rateit('value');
  $.getJSON('data.json',function(data){
    
  });
});

$('#register').click(function(){
  $.getJSON('data.json',function(data){
    userID = document.getElementById('userid').value;
    password = document.getElementById('password').value;
    email = document.getElementById('email').value;
    phone = document.getElementById('phone').value;
      var newObject = {
        "id":userID,
        "password":password,
        "email":email,
        "phone":phone,
        "camera":"N",
        "location":"N",
        "share":"N",
        "data":[]
    };
    var json = JSON.stringify(newObject);
    data.info.push(json);
   // data.info.push(JSON.stringify(newObject));
    console.log(data.info[0]);
    console.log(data.info[1]);
      });
  });

