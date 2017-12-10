function changeMenu() {
	if (window.matchMedia("(max-width: 767px)").matches) {
		//mob
		$("#menu").removeClass('menu-left');
		$("#menu").attr('class', 'mob-menu');

		//rm modal
		$("#modal-menu-left").removeAttr("class").removeAttr("style");
		$("#modal-menu-left div").removeAttr("class");
		$("#modal-menu-left div div").removeAttr("class");

		//if (window.innerWidth > window.innerHeight) {
		if (window.matchMedia("(orientation: landscape").matches) {
			//horizontal
			$('#menu').css('display', 'none');
			$('#navbarTop').css('display', 'none');
			$('body').css('padding-top', '0px');
		} else {
			//vertical
			$("#menu").css('display', 'block');
			$("#navbarTop").css('display', 'block');
			$('body').css('padding-top', '80px');
		}
	} else {
		//pc
		$("#menu").removeClass('mob-menu');
		$("#menu").attr('class', 'menu-left');
		//modal
		$("#modal-menu-left").attr('class', 'modal fade');
		$("#modal-menu-left div").attr('class', 'modal-dialog');
		$("#modal-menu-left div div").attr('class', 'modal-body');

		$("#menu").css('display', 'block');
		$("#navbarTop").css('display', 'block');
		$('body').css('padding-top', '50px');
	}
}

window.addEventListener("resize", changeMenu, false);

$(document).ready(function(){
  
    $(window).scroll(function(){
        if ($(this).scrollTop() > 150) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
        });
          
        $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
  
});