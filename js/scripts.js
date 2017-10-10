function changeMenu() {
	if (window.matchMedia("(max-width: 767px)").matches) {
		//mob
		$("#menu").removeClass('menu-left');

		$("#menu").attr('class', 'mob-menu');

		//alert(window.screen.availWidth + " " + window.screen.availHeight);

		if (window.screen.availWidth > window.screen.availHeight) {
			$('#menu').css('display', 'none');
			$('#navbarTop').css('display', 'none');
			$('body').css('padding-top', '0px');
		} else {
			$("#menu").css('display', 'block');
			$("#navbarTop").css('display', 'block');
			$('body').css('padding-top', '50px');
		}
	} else {
		//pc
		$("#menu").removeClass('mob-menu');

		$("#menu").attr('class', 'menu-left');
	}
}

window.addEventListener("resize", changeMenu, false);