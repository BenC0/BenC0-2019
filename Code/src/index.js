import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './modules/App';
import * as serviceWorker from './serviceWorker';

function scroll_to(el) {
    el = document.querySelector(el)
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
    let hH = document.querySelector('header').clientHeight
    let tgt_pos = distanceToTop(el) - hH
	window.scrollBy({ top: tgt_pos, left: 0, behavior: "smooth" });
}

function build_link(link) {
	let name = link.getAttribute('id')
	let section_name = link.querySelector('h2').textContent
	return `<a link_name="${name}">${section_name}</a>`
}

function buildNav() {
	let section = document.querySelectorAll('section')
	let target = document.querySelector('nav')

	section.forEach(section => {
		let link = build_link(section)
		target.insertAdjacentHTML('beforeend', link)
		let link_selector = `[link_name="${section.getAttribute('id')}"]`
		let link_el = target.querySelector(link_selector)
		link_el.addEventListener('click', e => {
			e.preventDefault()
			scroll_to(`#${section.getAttribute('id')}`)
			document.querySelector('.hamburger').click()
		})
	})
}

const routing = (
	<Router>
		<div>
			<nav>
			</nav>
			<Route path="/" component={App} />
		</div>
	</Router>
)

ReactDOM.render(routing, document.getElementById('root'))
buildNav()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
