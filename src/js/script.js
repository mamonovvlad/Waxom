$('.single-item').slick({
	dots: true,
    fade: true,
		infinite: true,
  	slidesToShow: 1,
  	autoplay: true,
  	autoplaySpeed: 5000,
  	responsive: [
  	  {
  	    breakpoint: 769,
  	    settings: {
		  arrows: false,  	     
  	    }
  	  }
  	]
});

$('.autoplay').slick({
  slidesToShow: 3,
	slidesToScroll: 1,
	dots: false,
	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
      }
    }
	]
});
$('.slider-two').slick({
	dots: true,
	fade: true,
	infinite: true,
	arrows: false,
});
///////
$('.burger').on('click', function(e){
  e.preventDefault;
	$(this).toggleClass('burger-activ');
	$('.side-bar').toggleClass('show');
	$("#close").toggleClass('side-bar__shadow');
	$('.side-bar__shadow').fadeIn(400);
});

$('#up').on('click', function(e){
  e.preventDefault;
	$('.blocks-projects').removeClass('dn');
	$("#delit").toggleClass('dn');
	$('.blocks-projects').fadeIn(400);
});

//////////