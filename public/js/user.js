

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
