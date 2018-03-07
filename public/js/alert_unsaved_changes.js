$(document).ready(function () {
  
  $(window).bind('beforeunload', function() {
    if(unsaved){
        return "You have unsaved changes on this page. Do you want to leave this page and discard your changes or stay on this page?";
    }
});

// Monitor dynamic inputs
$(document).on('change', ':input', function(){ //triggers change in all input fields including text type
    unsaved = true;
});


















});

$('#save').click(function() {
    unsaved = false;
});