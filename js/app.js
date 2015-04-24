// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
// $(document).foundation();
$(document).ready(function() {
  $("#a_about").click(function( event ) {
    $('#about').ScrollTo();
  });

  $("#a_products").click(function( event ) {
    $('#products').ScrollTo();
  });

  $("#a_contact").click(function( event ) {
    $('#contact').ScrollTo();
  });

});
