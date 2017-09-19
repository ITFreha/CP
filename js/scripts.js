function changeMenu() {
	if (window.matchMedia("(max-width: 767px)").matches) {
		//mob
		$("#menu").removeClass('col-sm-2 col-sm-offset-1 menu-left');
		$("#menu ul").removeClass('nav nav-stacked');

		$("#menu").attr('class', 'mob-menu');
	} else {
		//pc
		$("#menu").removeClass('mob-menu');

		$("#menu").attr('class', 'col-sm-2 col-sm-offset-1 menu-left');
		$("#menu ul").attr('class', 'nav nav-stacked');
	}
}

window.addEventListener("orientationchange", changeMenu, false);