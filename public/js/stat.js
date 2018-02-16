
$('a.selection').click(function(){

  var selected = this.id;
  var time = $('option').get(0).id;
  console.log(time);
  if(selected === 'taste')
  {
    if(time === 'week'){
      $('img').attr('src','/images/taste1.png');
    }
    else{
      $('img').attr('src','/images/taste2.png');
    }
  }
  else if(selected === 'health')
  {
      if(time === 'week'){
      $('img').attr('src','/images/health1.png');
    }
    else{
      $('img').attr('src','/images/health2.png');
    }
  }
  else if(selected === 'mood')
  {
      if(time === 'week'){
      $('img').attr('src','/images/mood1.png');
    }
    else{
      $('img').attr('src','/images/mood2.png');
    }
  }
  else {
      if(time === 'week'){
      $('img').attr('src','/images/taste1.png');
    }
    else{
      $('img').attr('src','/images/taste2.png');
    }
  }

});
