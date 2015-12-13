var Script = function () {


//    tool tips

    // $('.tooltips').tooltip();

//    popovers

    // $('.popovers').popover();

//    bxslider

    // $('.bxslider').show();
    // $('.bxslider').bxSlider({
    //     minSlides: 4,
    //     maxSlides: 4,
    //     slideWidth: 276,
    //     slideMargin: 20
    // });
new WOW().init();
}();

	(function() {

   		$('<i id="back-to-top"></i>').appendTo($('body'));

			$(window).scroll(function() {
				if($(this).scrollTop() != 0) {
					$('#back-to-top').fadeIn();
				} else {
					$('#back-to-top').fadeOut();
				}
			});
			$('#back-to-top').click(function() {
				$('body,html').animate({scrollTop:0},600);
			});
      /* Scroll navbar */
      $('.navbar ul li a').click(function(e) {
        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;
        // animate
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 600, function(){

        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
      });
});
      $('#kanzlei a').click(function(e) {
        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;
        // animate
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 600, function(){

        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
      });

});

	})();
