
$( document ).ready(function() {

	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: true,
	  centerMode: true,
	  focusOnSelect: true
	});
	var s = skrollr.init();

	//Page Fade In
	$(".container").delay(350).animate(
		{opacity:'1'},
		1000
	);
	$("svg").delay(1100).animate(
		{opacity:'1'},
		500
	);
	$(".fade-in").delay(350).animate(
		{opacity:'1'},
		1000
	);
	$(".hi-icon").delay(800).animate(
		{opacity:'1'},
		1000
	);
	$("#mission p").delay(800).animate(
		{opacity:'1'},
		1000
	);

	var rem = function rem() {
			 var html = document.getElementsByTagName('html')[0];

			 return function () {
					 return parseInt(window.getComputedStyle(html)['fontSize']);
			 }
	 }();

	 // This function will convert pixel to rem
	 var remPx = rem();
	 remPx*= 6.5;
	 console.log(remPx);
	//  var '100%' = '+=' + remPx;
	//  var '-100%' = '-=' + remPx;

	//Hover Animations
	$('.mission_icon').hover(
		function() {
			// $('.mission_icon_text').show();
			$('.mission_icon_text').animate(
				{left: '100%'},
				250
			);
		},
		function() {
			$('.mission_icon_text').animate(
				{left: '-100%'},
				250
			);
		}
	);
	$('.history_icon').hover(
		function() {
			$('.history_icon_text').animate(
				{left: '100%'},
				250
			);
		},
		function() {
			$('.history_icon_text').animate(
				{left: '-100%'},
				250
			);
		}
	);
	$('.outcomes_icon').hover(
		function() {
			$('.outcomes_icon_text').animate(
				{left:'100%'},
				250
			);
		},
		function() {
			$('.outcomes_icon_text').animate(
				{left:'-100%'},
				250
			);
		}
	);
	$('.articles_icon').hover(
		function() {
			$('.articles_icon_text').animate(
				{left:'100%'},
				250
			);
		},
		function() {
			$('.articles_icon_text').animate(
				{left:'-100%'},
				250
			);
		}
	);
	$('.plan_icon').hover(
		function() {
			$('.long_icon_text').animate(
				{left:'100%'},
				250
			);
		},
		function() {
			$('.long_icon_text').animate(
				{left:'-100%'},
				250
			);
		}
	);
	$('.videos_icon').hover(
		function() {
			$('.videos_icon_text').animate(
				{left:'100%'},
				250
			);
		},
		function() {
			$('.videos_icon_text').animate(
				{left:'-100%'},
				250
			);
		}
	);
	$('.facilities_icon').hover(
		function() {
			$('.facilities_icon_text').animate(
				{left:'100%'},
				250
			);
		},
		function() {
			$('.facilities_icon_text').animate(
				{left:'-100%'},
				250
			);
		}
	);
	$('.board_icon').hover(
		function() {
			$('.board_icon_text').animate(
				{left:'100%'},
				250
			);
		},
		function() {
			$('.board_icon_text').animate(
				{left:'-100%'},
				250
			);
		}
	);
	$('.contact_icon').hover(
		function() {
			$('.contact_icon_text').animate(
				{left:'100%'},
				250
			);
		},
		function() {
			$('.contact_icon_text').animate(
				{left:'-100%'},
				250
			);
		}
	);


	//Scroll Animation
	$('.mission_icon').click( function() {
		$('html, body').animate({
			scrollTop: $(".mission").offset().top
		}, 500);
	});
	$('.outcomes_icon').click( function() {
		$('html, body').animate({
			scrollTop: $(".outcomes").offset().top
		}, 500);
	});
	$('.history_icon').click( function() {
		$('html, body').animate({
			scrollTop: $(".history").offset().top
		}, 500);
	});
	$('.articles_icon').click( function() {
		$('html, body').animate({
			scrollTop: $(".articles").offset().top
		}, 500);
	});
	$('.plan_icon').click( function() {
		$('html, body').animate({
			scrollTop: $(".long_term").offset().top
		}, 500);
	});
	$('.videos_icon').click( function() {
		$('html, body').animate({
			scrollTop: $(".videos").offset().top
		}, 500);
	});
	$('.facilities_icon').click( function() {
		$('html, body').animate({
			scrollTop: $(".facilities").offset().top
		}, 500);
	});
	$('.board_icon').click( function() {
		$('html, body').animate({
			scrollTop: $(".board").offset().top
		}, 500);
	});
	$('.contact_icon').click( function() {
		$('html, body').animate({
			scrollTop: $(".contact").offset().top
		}, 500);
	});

});
