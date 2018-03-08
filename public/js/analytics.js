'use strict';

$(document).ready(function(){
  initializePage();
});

function initializePage(){
  $("#back").click(clickBack);
  $('#help').click(clickHelp);
  $('#scroll').click(clickScroll);
  $('#logout1').click(logout1);
  $('#logout2').click(logout2);
}
function clickBack(){
  e.preventDefault();
  gtag('create','UA-114570926-2','auto');
  gtag('send','event','back','click');
}

function clickHelp(){
  e.preventDefault();
  gtag('create','UA-114570926-2','auto');
  gtag('send','event','help','click');
}

function clickScroll(){
  e.preventDefault();
  gtag('create','UA-114570926-2','auto');
  gtag('send','event','scroll','click');
}

function logout1(){
  e.preventDefault();
  gtag('create','UA-114570926-2','auto');
  gtag('send','event','logout1','click');
}

function logout2(){
  e.preventDefault();
  gtag('create','UA-114570926-2','auto');
  gtag('send','event','logout2','click');
}