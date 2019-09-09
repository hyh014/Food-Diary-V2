
$(document).ready(function(){
  $.ajax({url:'/user/env',success:function(result){
		firebase.initializeApp({
		  apiKey: result.apiKey,
		  authDomain: result.authDomain,
		  databaseURL: result.databaseURL,
		  storageBucket: result.storageBucket,
		  messagingSenderId: result.messagingSenderId
    });
  }

  });

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
      editForm(target);
    }
  },false);
  });

  let editForm = (target) =>{
    console.log($(target).parent()[0].dataset.key);
    $('#editModal').show();
  }
// When the user clicks on <span> (x), close the modal
$("span.close")[0].onclick = function() {
  $('#editModal').css('display','none');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  var modal = document.getElementById("editModal");
  if (event.target == modal) {
    $('#editModal').css('display','none');
  }
}

$("#modal-form-button").submit(function(e){

});
//   let cancel = (target) =>{
//     let textarea = $(target).siblings("diary-comment").children()[0] ;
//       textarea.readOnly = false;
//       let previous = textarea.value;
//       $(textarea).attr('style','background-color:white');
//       let rating = $(target).siblings('.diary-rating')[0];

//       let ratingArr = {
//         health:$(rating).children('text.health').text(),
//         taste:$(rating).children('text.taste').text(),
//         mood:$(rating).children('text.mood').text(),
//         anxiety:$(rating).children('text.anxiety').text()
//       }
//       $(rating).children('text.health').html("<input id='health' name='health' type='number' min='1' max='5' step='0.5'>");
//       $(rating).children('text.taste').html("<input id='taste' name='taste' type='number' min='1' max='5' step='0.5'>");
//       $(rating).children('text.mood').html("<input id='mood' name='mood' type='number' min='1' max='5' step='0.5'>");
//       $(rating).children('text.anxiety').html("<input id='anxiety' name='anxiety' type='number' min='1' max='5' step='0.5'>");

//       $(target).hide();
//       $(target).siblings('.cancel').show();
//       $(target).siblings('.change').show();
      
//     $(target).siblings('.cancel').on('click',function(){
//       $(rating).children('text.health').html(ratingArr.health);
//       $(rating).children('text.taste').html(ratingArr.taste);
//       $(rating).children('text.mood').html(ratingArr.mood);
//       $(rating).children('text.anxiety').html(ratingArr.anxiety);

//       $(target).siblings("diary-comment").children()[0].readOnly = true;
//       $(target).siblings("diary-comment").children()[0].value = previous;
//       $(target).siblings("diary-comment").children().attr('style','background-color:transparent');

//       $(target).siblings('.cancel').hide();
//       $(target).siblings('.change').hide();

//       $(target).show();
//   });
//   }

//   let change = (target) =>{
//     let textarea = $(target).siblings("diary-comment").children()[0];
//     textarea.readOnly = false;
//     $(textarea).attr('style','background-color:white');
//       let rating = $(target).siblings('.diary-rating')[0];


//       $(rating).children('text.health').html("<input id='health' name='health' type='number' min='1' max='5' step='0.5'>");
//       $(rating).children('text.taste').html("<input id='taste' name='taste' type='number' min='1' max='5' step='0.5'>");
//       $(rating).children('text.mood').html("<input id='mood' name='mood' type='number' min='1' max='5' step='0.5'>");
//       $(rating).children('text.anxiety').html("<input id='anxiety' name='anxiety' type='number' min='1' max='5' step='0.5'>");

//       $(target).hide();
//       $(target).siblings('.cancel').show();
//       $(target).siblings('.change').show();
      
//     $(target).siblings('.change').on('click',function(){
//       let newRatingArr = {
//         health:$('#health').val(),
//         taste:$('#taste').val(),
//         mood:$('#mood').val(),
//         anxiety:$('#anxiety').val()
//       }

//       $(rating).children('text.health').html(newRatingArr.health + "&#9734;");
//       $(rating).children('text.taste').html(newRatingArr.taste + "&#9734;");
//       $(rating).children('text.mood').html(newRatingArr.mood + "&#9734;");
//       $(rating).children('text.anxiety').html(newRatingArr.anxiety + "&#9734;");

//       $(target).siblings("diary-comment").children()[0].readOnly = true;
//       $(target).siblings("diary-comment").children().attr('style','background-color:transparent');

//       $(target).siblings('.cancel').hide();
//       $(target).siblings('.change').hide();

//       $(target).show();
//   });

// }  
