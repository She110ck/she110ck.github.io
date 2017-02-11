$('#nav-toggle').on('click', function(){
$('#nav-toggle').toggleClass('is-active',300);
$('#nav').toggleClass('is-active', 300);
});
jQuery(document).ready(function($) {
// site preloader -- also uncomment the div in the header and the css style for #preloader
		$('section,footer').fadeOut();
	$(window).load(function(){
		$('#preloader').delay(2000).fadeOut(600,function(){
		$('section,footer').fadeIn(400);
			$(this).remove();
		});
	});
});

$(document).ready(function() {
    $('#nav').onePageNav();
});