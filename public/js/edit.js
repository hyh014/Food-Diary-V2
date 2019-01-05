$(".edit").click(function(){
  sessionStorage.setItem('edit',true);
  var image = $(this).siblings('#image-container').children('img')[0].src;;
  var comments = $(this).siblings('#input').children('#comments').text();
  var health = $(this).siblings('#ratings').children('#health').text();
  var taste = $(this).siblings('#ratings').children('#taste').text();
  var mood = $(this).siblings('#ratings').children('#mood').text();
  var anxiety = $(this).siblings('#ratings').children('#anxiety').text();

  var date = $(this).siblings('#date').text();
  var time = date.substring(11);
  var date = date.substring(0,10);
  anxiety = anxiety.substring(9,10);
  health = health.substring(8,9);
  taste = taste.substring(7,8);
  mood = mood.substring(6,7);

  sessionStorage.setItem('image',image);
  sessionStorage.setItem('comments',comments);
  sessionStorage.setItem('health',health);
  sessionStorage.setItem('taste',taste);
  sessionStorage.setItem('mood',mood);
  sessionStorage.setItem('anxiety',anxiety);
  sessionStorage.setItem('time',time);
  sessionStorage.setItem('date',date);
  location.replace("/entry");
});
