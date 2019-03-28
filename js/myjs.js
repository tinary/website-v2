

//use this for bootstrap v4 navbar
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});



//use this for boostrap v3 navbar
// $(function() {
//     $('.nav a').on('click', function(){
//         if($('.navbar-toggle').css('display') !='none'){
//             $('.navbar-toggle').trigger( "click" );
//         }
//     });
// });


// animation for css fly in
(function() {
  'use strict';
  var items = document.querySelectorAll(".timeline");
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }
  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();
