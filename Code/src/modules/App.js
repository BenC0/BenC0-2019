import React from 'react';
import Header from './Header/Header';
import Menu from './Menu/Menu';

function App() {
	const b = document.body
	const w = window

	b.classList.add('loaded')

	if (w.location.hash !== '') {
		b.setAttribute('data-theme', w.location.hash.replace(/^#/g, ''))
	} else {
		b.setAttribute('data-theme', '1')
	}
	
	return (
		<div id="app">
			<Header />
			<Menu />
		</div>
	);
}

export default App;
