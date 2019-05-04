import './Content.scss';
import React from 'react';
import About from './About';
import Languages from './Languages';
import Design from './Design';
import Testing from './Testing';
import UserBehaviour from './UserBehaviour';
import Disciplines from './Disciplines';
import Clients from './Clients';
import SideProjects from './SideProjects';

function Content() {
	return (
		<div className="content">
			<About />
			<Languages />
			<Design />
			<Testing />
			<UserBehaviour />
			<Disciplines />
			<Clients />
			<SideProjects />
		</div>
	);
}

export default Content;
