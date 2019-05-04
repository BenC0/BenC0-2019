import React from "react";
import './Themes.scss';
import { ReactComponent as MoonSvg } from "./MoonSvg.svg"
import { ReactComponent as SunsetSvg } from "./SunsetSvg.svg"

const w = window
const b = document.body

function ThemeClick(event) {
	event.preventDefault();
	/* Act on the event */
	document.querySelector('#menu .hamburger').classList.remove('active')
	b.classList.add('hideThemes')
	b.classList.remove('showMenu')

	let theme = event.currentTarget
	w.setTimeout(() => {
		w.location.hash = theme.getAttribute('data-theme')
		b.setAttribute('data-theme', theme.getAttribute('data-theme'))
	}, 1000)
}

function Themes() {
	return (
		<ul id="themes">
			<li className="title">Change Theme</li>
			<li className="theme" data-theme="1" onClick={ThemeClick}>
				<div className="miniBc theme1"></div>
				<span className="label">
					Day
					<SunsetSvg />
				</span>
			</li>
			<li className="theme" data-theme="2" onClick={ThemeClick}>
				<div className="miniBc theme2"></div>
				<span className="label">
					Night
					<MoonSvg />
				</span>
			</li>
		</ul>
	)
}

export default Themes;