import React from "react";
import './DayNightSwitcher.scss';

const w = window
const b = document.body

function DayNightSwitcherClick(event) {
	event.preventDefault();
	let dayNightSwitcher = event.currentTarget
	let icon = dayNightSwitcher.getAttribute('icon')
	let new_icon = (icon === "sun") ? "moon" : "sun"
	let theme = (icon === "sun") ? "2" : "1"
	dayNightSwitcher.setAttribute('icon', new_icon)
	w.location.hash = theme
	b.setAttribute('data-theme', theme)
}

function DayNightSwitcher(props) {
	return (
		<div id="dayNightSwitcher" icon={props.icon} onClick={DayNightSwitcherClick}>
			<div className="container">
				<div className="icon">
					<span className="circle"></span>
				</div>
			</div>
		</div>
	)
}

export default DayNightSwitcher;