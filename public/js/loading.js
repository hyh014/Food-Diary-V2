let myVar;

function load() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  $(".loading").css("display","none");
  $(".main").css("display","block");
}