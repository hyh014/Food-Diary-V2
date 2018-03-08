
'use strict';

$(document).ready(function(){
  initializePage();
});

function initializePage(){
  $('#button').click(clickScroll);

}

function clickScroll(e){
  e.preventDefault();
  gtag('create','UA-114570926-2','auto');
  gtag('send','event','scroll','click');
}
