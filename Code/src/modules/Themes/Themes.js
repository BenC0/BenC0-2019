import React from "react";
import './Themes.scss';
import { ReactComponent as MoonSvg } from "./MoonSvg.svg"
import { ReactComponent as SunsetSvg } from "./SunsetSvg.svg"

function Themes() {
	return (
		<ul id="themes">
			<li className="title">Change Theme</li>
			<li className="theme" dataTheme="1">
				<div className="miniBc theme1"></div>
				<span className="label">
					Day
					<SunsetSvg />
				</span>
			</li>
			<li className="theme" dataTheme="2">
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