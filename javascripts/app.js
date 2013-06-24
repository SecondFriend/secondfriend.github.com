;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;


  $.fn.foundationButtons          ? $doc.foundationButtons() : null;


  $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;


  $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;

  $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;


  $.fn.foundationTabs             ? $doc.foundationTabs() : null;



  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
  // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
  // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
  // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

  // Hide address bar on mobile devices
  if (Modernizr.touch) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }

})(jQuery, this);

// Smooth Scroll //

jQuery(document).ready(function($) {

	$(".scroll").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
	});
});
