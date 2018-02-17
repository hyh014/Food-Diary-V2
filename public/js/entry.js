$("label").click(function(){
  $(this).parent().find("label").css({"background-color": "blue"});
  $(this).css({"background-color": "blue"});
  $(this).nextAll().css({"background-color": "blue"});
});
