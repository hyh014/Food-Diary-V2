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
  localStorage.setItem('name',userID);
  password= document.getElementById('password').value;
  $.get("/user/"+userID,callBackFn);
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
$('#register').click(function(e){
  e.preventDefault();
  sessionStorage.id=document.getElementById('userid').value;
  console.log("going to index");
  location.replace("/index");

});

$('#AddDiary').click(function(){
  $.getJSON('../data.json',function(data){
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
>>>>>>> 11cfab31e3367d97a637fd1f116bbef2440ac815
    };
    console.log(data);
    console.log(sessionStorage.newObject);
    data.info[1].datas.push(newObject);
    console.log(data.info[1]);
  });
});

$('#edit').click(function(){

});
