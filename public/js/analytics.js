'use strict';

$(document).ready(function(){
  initializePage();
});

function initializePage(){
  $('#logoff').click(clickLogoff);

}

function clickLogoff(){
  e.preventDefault();
  gtag('create','UA-114570926-2','auto');
  gtag('send','event','LogOff','click');
}
