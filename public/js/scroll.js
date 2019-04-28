window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    let top = document.getElementById("top");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        top.style.display = "block";
    } else {
        top.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
