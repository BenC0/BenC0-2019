const b = document.body
const menu = document.querySelector('#menu')
const themes = document.querySelector('#themes')
const w = window

function handle_menu(show = true) {
	if (show) {
		menu.children[0].classList.add('active')
		b.classList.remove('hideThemes')
		b.classList.add('showMenu')
	} else {
		menu.children[0].classList.remove('active')
		b.classList.add('hideThemes')
		b.classList.remove('showMenu')
	}
}

function init() {
	b.classList.add('loaded')

	if (w.location.hash !== '') {
		b.setAttribute('data-theme', w.location.hash.replace(/^#/g, ''))
	} else {
		b.setAttribute('data-theme', '1')
	}

	menu.addEventListener("click", (e) => {
		handle_menu(!b.classList.contains('showMenu'))
	})

	themes.querySelectorAll('.theme').forEach((theme) => {
		theme.addEventListener("click", (event) => {
			event.preventDefault();
			/* Act on the event */
			handle_menu(false)
			
			let theme = event.currentTarget
			w.setTimeout(() => {
				w.location.hash = theme.getAttribute('data-theme')
				b.setAttribute('data-theme', theme.getAttribute('data-theme'))
			}, 1000)
		});
	})
}

window.onload=init