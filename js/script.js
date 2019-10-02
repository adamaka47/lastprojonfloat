$(document).ready(function() {
	$('.blog-slider').slick({
		arrows: true,
		prevArrow: $('.btn-prev'),
		nextArrow: $('.btn-next')
	});

	$(window).scroll(function(event) {
		if ($(this).scrollTop() > 100) {
			$(".scroll-home").fadeIn(500)
		} else {
			$(".scroll-home").fadeOut(800)
		}
	});

	$('.scroll-home').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, 200)
	});

	$('#btn-join').on('click', function(event) {
		event.preventDefault();
		$('.modal').addClass('modal-active')

	});

	$('.modal-close').on('click', function(event) {
		event.preventDefault();
		$('.modal').removeClass('modal-active')
	});

	$('.header-list__link').on('click', function(event) {
		event.preventDefault();
		var hrefs = $(this).attr('href');
		var offTop = $(hrefs).offset().top;
		$('html, body').animate({scrollTop: offTop}, 500)
	});


});