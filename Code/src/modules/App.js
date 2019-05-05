import React from 'react';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Content from './Content/Content';
import DayNightSwitcher from './DayNightSwitcher/DayNightSwitcher';

function App() {
	const b = document.body
	const w = window

	b.classList.add('loaded')
	let icon = "sun"

	if (w.location.hash !== '') {
		let theme = w.location.hash.replace(/^#/g, '')
		b.setAttribute('data-theme', theme)
		icon = (theme === "1") ? "sun" : "moon"
	} else {
		b.setAttribute('data-theme', '1')
	}


	return (
		<div id="app">
			<Header />
			<Menu />
			<Content />
			<DayNightSwitcher icon={icon}/>
		</div>
	);
}

export default App;
