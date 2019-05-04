import React from 'react';
import './Menu.scss';
import Themes from "../Themes/Themes"

function Hamburger() {
	return (
		<div className="hamburger">
				<span className="line tLine"></span>
				<span className="line mLine"></span>
				<span className="line bLine"></span>
		</div>
	)
}

function Menu() {
	return (
		<div id="menu">
			<Hamburger />
			<Themes />
		</div>
	);
}

export default Menu;
