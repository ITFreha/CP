function changeMenu() {
	if (window.matchMedia("(max-width: 767px)").matches) {
		//mob
		$("#menu").removeClass('menu-left');
		$("#menu").attr('class', 'mob-menu');

		if (window.innerWidth > window.innerHeight) {
			//horizontal
			$('#menu').css('display', 'none');
			$('#navbarTop').css('display', 'none');
			$('body').css('padding-top', '0px');
		} else {
			//vertical
			$("#menu").css('display', 'block');
			$("#navbarTop").css('display', 'block');
			$('body').css('padding-top', '50px');
		}
	} else {
		//pc
		$("#menu").removeClass('mob-menu');
		$("#menu").attr('class', 'menu-left');

		$("#menu").css('display', 'block');
		$("#navbarTop").css('display', 'block');
	}
}

window.addEventListener("resize", changeMenu, false);

/*function changeMenu() {
	if (window.matchMedia("(max-width: 767px)").matches) {
		//mob
		$("#menu").removeClass('menu-left');

		$("#menu").attr('class', 'mob-menu');

		if ((x = window.innerWidth) > (y = window.innerHeight)) {
			$('#menu').css('display', 'none');
			$('#navbarTop').css('display', 'none');
			$('body').css('padding-top', '0px');

			$('#test').replaceWith(x + ' ' + y);
		} else {
			$("#menu").css('display', 'block');
			$("#navbarTop").css('display', 'block');
			$('body').css('padding-top', '50px');

			$('#test').replaceWith(x + ' ' + y);
		}
	} else {
		//pc
		$("#menu").removeClass('mob-menu');

		$("#menu").attr('class', 'menu-left');

		$('#test').replaceWith(window.innerWidth + ' ' + window.innerHeight);
	}
}

window.addEventListener("resize", changeMenu, false);*/