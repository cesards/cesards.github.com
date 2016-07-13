$(document).ready(function(){
  $(window).resize();
});

$(window).resize(function(){
    $("header").css({
        position:'absolute',
        left: ($(window).width() - $("header").outerWidth())/2,
        top: ($(window).height() - $("header").outerHeight())/2
    });
});

// It does the same as above, but using jQuery
// $(document).ready(function(){
//   $("header").center();
// });
// jQuery.fn.center = function () {
//   this.css("position","absolute");
//   this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
//   this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
//   return this;
// }
