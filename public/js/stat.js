
$('a').click(function(){

  var selected = this.id;
  if(selected === 'taste')
  {
    $('img').attr('src','/images/taste1.png');
  }
  else if(selected === 'health')
  {
    $('img').attr('src','/images/health1.png');
  }
  else if(selected === 'mood')
  {
    $('img').attr('src','/images/mood1.png');
  }
  else {
    $('img').attr('src','/images/health1.png');
  }

});
