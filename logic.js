document.addEventListener("DOMContentLoaded", function(){
	$("#load-wrapper").delay(700).fadeOut('slow');
	
	$("#loader")
		.delay(300)
		.fadeOut();
});
AOS.init()
$(function() {
    var a = $("#title, #title-icon");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 40) {
			a.addClass("gone");
			i.addClass("gone");
			 
        } else {
            a.removeClass("gone");
			i.removeClass("gone");
        }
    });
});    
