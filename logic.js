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

jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 1200) {
		$('#list').removeClass('row','container');
		$('#list-child').removeClass('col','s1','m3');
		$('#title').addClass('phone-title-smol');
		$('#title-icon').addClass('phone-title-label-smol');
		document.getElementById("title-icon").style.fontSize = "x-large";
    } else if (ww >= 1201) {
		$('#list').addClass('row','container');
		$('#list-child').addClass('col','s1','m3');
		$('#title').removeClass('phone-title-smol');
		$('#title-icon').removeClass('phone-title-label-smol');
		document.getElementById("title-icon").style.fontSize= "xx-large";
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});
