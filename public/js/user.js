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
$('#register').click(function(){
  var data=require("../data.json");
  userID = document.getElementById('userid').value;
  password = document.getElementById('password').value;
  email = document.getElementById('email').value;
  phone = document.getElementById('phone').value;
  var newObject ={
    "info":[
      {
        "id":userID,
        "password":password,
        "email":email,
        "phone":phone,
        "camera":"N",
        "location":"N",
        "share":"N",
        "data":[]
      }
    ]
  }

  data.push(JSON.stringify(newObject));
});

function callback(result){
  console.log(result);
}
