var slide_hero = new Swiper('.slide-principal', {
	effect: 'fade',
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
});

var slide_plans = new Swiper('.slide-plans', {
	// Default parameters
	slidesPerView: 4,
	spaceBetween: 30,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	grabCursor: true,
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 4,
			spaceBetween: 10,
		},
	},
});
