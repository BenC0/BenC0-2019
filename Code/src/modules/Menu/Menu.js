import React from 'react';
import './Menu.scss';

const b = document.body

function Hamburger() {
	return (
		<div className="hamburger" onClick={MenuClick}>
			<span className="line tLine"></span>
			<span className="line mLine"></span>
			<span className="line bLine"></span>
		</div>
	)
}

export function MenuClick(event) {
	let show = !b.classList.contains('showMenu')
	let menu = event.currentTarget

	if (show) {
		menu.classList.add('active')
		b.classList.remove('hideThemes')
		b.classList.add('showMenu')
	} else {
		menu.classList.remove('active')
		b.classList.add('hideThemes')
		b.classList.remove('showMenu')
	}
}

function Menu() {
	return (
		<div id="menu">
			<Hamburger />
		</div>
	);
}

export default Menu;
