function changeMenu() {
	if (window.matchMedia("(max-width: 767px)").matches) {
		//mob
		$("#menu").removeClass('menu-left');

		$("#menu").attr('class', 'mob-menu');
	} else {
		//pc
		$("#menu").removeClass('mob-menu');

		$("#menu").attr('class', 'menu-left');
	}
}

window.addEventListener("resize", changeMenu, false);