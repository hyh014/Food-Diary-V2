// $(".edit").click(function(){
//   sessionStorage.setItem('edit',true);
//   var image = $(this).siblings('#image-container').children('img')[0].src;;
//   var comments = $(this).siblings('#input').children('#comments').text();
//   var health = $(this).siblings('#ratings').children('#health').text();
//   var taste = $(this).siblings('#ratings').children('#taste').text();
//   var mood = $(this).siblings('#ratings').children('#mood').text();
//   var anxiety = $(this).siblings('#ratings').children('#anxiety').text();
//   let key = $(this).siblings('#ratings').children('#key').val();
//   var date = $(this).siblings('#date').text();
//   var time = date.substring(11);
//   var date = date.substring(0,10);
//   anxiety = anxiety.substring(9,10);
//   health = health.substring(8,9);
//   taste = taste.substring(7,8);
//   mood = mood.substring(6,7);

//   sessionStorage.setItem('image',image);
//   sessionStorage.setItem('comments',comments);
//   sessionStorage.setItem('health',health);
//   sessionStorage.setItem('taste',taste);
//   sessionStorage.setItem('mood',mood);
//   sessionStorage.setItem('anxiety',anxiety);
//   sessionStorage.setItem('time',time);
//   sessionStorage.setItem('date',date);
//   sessionStorage.setItem('key',key);

//   location.replace("/entry");
// });

$(document).ready(function(){
  let list = document.getElementById('list');
  list.addEventListener('click',function(event){
    
    if(event.target.classList[0] === 'remove' || event.target.classList[0] === 'fa-trash-alt'){
      let target = event.target;
      if(target.classList[0] === 'fa-trash-alt')
      {
        target = target.parentElement;
      }
        
      // let key = $(target).parent().data('key');
      // let UUID = firebase.auth().currentUser.uid;
      $(target).parent().remove();
      // let ref = firebase.database().ref('users/'+UUID+'/'+key);
      // ref.remove();
    }else if(event.target.classList[0] === 'edit' || event.target.classList[0] === 'fa-edit'){
      let target = event.target;
      if(target.classList[0] === 'fa-edit')
      {
        target = target.parentElement;
      }
        
      let textarea = $(target).siblings("diary-comment").children()[0] ;
      textarea.readOnly = false;
      $(textarea).attr('style','background-color:white');
      let rating = $(target).siblings('.diary-rating')[0];
      $(rating).children('text.health').html("<input name='health' type='number' min='1' max='5' step='0.5'>");
      $(rating).children('text.taste').html("<input name='taste' type='number' min='1' max='5' step='0.5'>");
      $(rating).children('text.mood').html("<input name='mood' type='number' min='1' max='5' step='0.5'>");
      $(rating).children('text.anxiety').html("<input name='anxiety' type='number' min='1' max='5' step='0.5'>");

      
    }
  },false);
  });
