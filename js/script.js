 $(document).ready(function () {
	 // $('#slider').slick({
		//  autoplay:true,
		//  arrows:false,
		//  infinite:true
	 // });

	 var isotope = $('.images').isotope({
	 	itemSelector: '.image',
	 	// percentPosition: true,

	 	// layoutMode: 'masonry'
	 	masonry:{
	 		gutter: '.gutter-sizer',
	 		columnWidth: '.image-sizer'
	 	}
	 });
	});
