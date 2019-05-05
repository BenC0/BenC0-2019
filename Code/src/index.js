import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './modules/App';
import * as serviceWorker from './serviceWorker';

const routing = (
	<Router>
		<div>
			<nav>
				<Link to="/" className={(window.location.pathname === "/") ? "active" : ""}>Home</Link>
			</nav>
			<Route path="/" component={App} />
		</div>
	</Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
