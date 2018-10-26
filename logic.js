document.addEventListener("DOMContentLoaded", function(){
	$("#load-wrapper").delay(700).fadeOut('slow');
	
	$("#loader")
		.delay(300)
		.fadeOut();
});
AOS.init()
$(function() {
    var nav = $("#nav");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 60) {
			nav.removeClass("z-depth-0");
			nav.addClass("z-depth-1");
			 
        } else {
            nav.removeClass("z-depth-1");
			nav.addClass("z-depth-0");
        }
    });
});    
$(window).on('resize', function() {
    if($(window).height() > 200) {
        $('#list').removeClass('row');
        $('#list-child').removeClass('col','s1','m3');
    }else{
        $('#list').addClass('row');
        $('#list-child').removeClass('col','s1','m3');
    }
})