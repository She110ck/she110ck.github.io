$('#nav-toggle').on('click', function(){
$('#nav-toggle').toggleClass('is-active',300);
$('#nav').toggleClass('is-active', 300);
// $('#mobile-toggle').toggleClass('');
});
jQuery(document).ready(function($) {
// site preloader -- also uncomment the div in the header and the css style for #preloader
	$(window).load(function(){
		// $('section').fadeOut();
		$('#preloader').delay(000).fadeOut(600,function(){
		// $('section').fadeIn(400);
			// $(this).remove();
		});
	});
});

var hei = $(window).height();

// $(window).scroll(function() {
//     if ($(".nav").offset().top > 50) {
//         $(".nav-item").addClass("is-active");
//     } else {
//         $(".nav-item").removeClass("is-active");
//     }
// });

// //jQuery for page scrolling feature - requires jQuery Easing plugin
// $(function() {
//     $('a.nav-item').bind('click', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top
//         }, 1000, 'easeInOutExpo');
//         $('a.nav-item').removeClass('is-active');
//         $anchor.addClass('is-active');
//         console.log(event.preventDefault());
//     });
// });

$(document).ready(function() {
    $('#nav').onePageNav();
    console.log('rediii');
});