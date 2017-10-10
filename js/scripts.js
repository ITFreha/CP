function changeMenu() {
	if (window.matchMedia("(max-width: 767px)").matches) {
		//mob
		$("#menu").removeClass('menu-left');
		$("#menu").attr('class', 'mob-menu');

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
			$('body').css('padding-top', '79px');
		}
	} else {
		//pc
		$("#menu").removeClass('mob-menu');
		$("#menu").attr('class', 'menu-left');

		$("#menu").css('display', 'block');
		$("#navbarTop").css('display', 'block');
		$('body').css('padding-top', '50px');
	}
}

window.addEventListener("resize", changeMenu, false);