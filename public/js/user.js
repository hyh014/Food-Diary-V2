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
/*
$('#register').click(function(e){
  e.preventDefault();
  sessionStorage.setItem('name',document.getElementById('userid').value);
  console.log("going to index");
  location.replace("/index");
});*/
/*$('#addEntry').click(function(){
  
  var foodName = document.getElementById('foodName').value;
  var comments = document.getElementById('comments').value;
  var taste = $('#taste').rateit('value');
  var health = $('#health').rateit('value');
  var mood = $('#mood').rateit('value');
  var anxiety = $('#anxiety').rateit('value');
  var date = document.getElementById('clock').value;
  var newObject = {
      "foodName":foodName,
      "image":"/images/L5.jpeg",
      "comments":comments,
      "date":date,
      "taste":taste,
      "health":health,
      "mood":mood,
      "anxiety":anxiety
    };
    sessionStorage.setItem('userID','tester1');
    $.post("/user/tester1",newObject,function(data){
        console.log(data);
        console.log(newObject);
    });
   // data.info[1].datas.push(newObject);
  });
*/
$('#edit').click(function(){

});
