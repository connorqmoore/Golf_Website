// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
// $(document).foundation();
$(document).ready(function() {
  $("#a_about").click(function( event ) {
    $(window).scrollTo('#about', 800);
  });

  $("#a_products").click(function( event ) {
    $(window).scrollTo('#products', 800);
  });

  $("#a_contact").click(function( event ) {
    $(window).scrollTo('#contact', 800);
  });

});
