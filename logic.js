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

jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 1200) {
		$('#list').removeClass('row');
		$('#list-child').removeClass('col','s1','m3');
		$('#card,#card2,#card3,#card4').addClass('container');
		$('#title').addClass('phone-title-smol');
		$('#title-icon').addClass('phone-title-label-smol');
		document.getElementById("title-icon").style.fontSize = "x-large";
    } else if (ww >= 1201) {
		$('#list').addClass('row');
		$('#list-child').addClass('col','s1','m3');
		$('#card,#card2,#card3,#card4').removeClass('container');
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
