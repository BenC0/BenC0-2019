const $b = $('body'),
	$menu = $('#menu'),
	$themes = $('#themes'),
	w = window

$(document).ready((e) => {
	$b.addClass('loaded')

	if (w.location.hash !== '') {
		$b.attr('data-theme', w.location.hash.replace(/^#/g, ''))
	} else {
		$b.attr('data-theme', '1')
	}

	$menu.click((e) => {
		if($b.hasClass('showMenu')) {
			$menu.find('.hamburger').removeClass('active')
			$b.addClass('hideThemes').removeClass('showMenu')
		} else {
			$b.removeClass('hideThemes')
			$menu.find('.hamburger').addClass('active')
			$b.addClass('showMenu')
		}
	})

	$themes.on('click', '.theme', function(event) {
		event.preventDefault();
		/* Act on the event */
		$menu.find('.hamburger').removeClass('active')
		$b.addClass('hideThemes').removeClass('showMenu')
		w.setTimeout(() => {
			w.location.hash = $(this).attr('data-theme')
			$b.attr('data-theme', $(this).attr('data-theme'))
		}, 1000)
	});
})