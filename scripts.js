//to make logo buttons fade in

$(document).ready(function(){
  $('#brand-logo').fadeTo(1500, 1);
  $('.title-opaque').fadeTo(3000, 1);

  $(window).scroll(function(){
    $('.transparent').each(function(){
      let middleOfElement = $(this).position().top + ($(this).height() / 2);
      let bottomOfWindow = $(window).scrollTop() + $(window).height();
      if(bottomOfWindow > middleOfElement) {
        $(this).fadeTo(1500, 1);
      };
    });
  });
});


//button function

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}
