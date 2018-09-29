
$('.slider-for').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	var i = (currentSlide ? currentSlide : 0) + 1;	
	if(i==1){
		j=i;
	}
	else{
		j = slick.slideCount - i + 2;
	}
	
	$('.current').text(j);
	$('.total').text(slick.slideCount);
});

$(document).ready(function(){

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav',
		swipe: false
	});
	$('.slider-nav').slick({
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 7,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		prevArrow: $('.next-button'),
		focusOnSelect: true,
		swipe: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					swipe: true
				}
			}
		]
	});

	$('.slider-nav').on('init', function(event, slick){
		$('.current').addClass('activate flipInX');
	});

	$('.slider-nav').on('afterChange', function(event, slick, currentSlide) {
		$('.current').removeClass('off');
		$('.current').addClass('activate flipInX');
	});

	$('.slider-nav').on('beforeChange', function(event, slick, currentSlide) {
		$('.current').removeClass('activate flipInX');
		$('.current').addClass('off');
	});
});
