import React from 'react';

function SideProjects() {
	return (
		<section id="sideprojects">
			<h2>Side Projects</h2>
			<p>I'm always looking for something new to work on, using my knowledge of Python and Web Development I've worked on a variety of side projects. I am currently, actively working on 2 side projects, these are:</p>
			<ul>
				<li>
					<h3>loCRO</h3>
					<h4>Local A/B Test Development Tool</h4>
					<br/>
					<p className="note">A tool to allow A/B tests to be developed on a local version of a clients website. Built with python, the tool will scrape the desired webpage, store all assets locally and integrate your development enviroment with it. In my case, it allowed me to make use of node modules such as browser-sync, sass and babel.</p>
					<p className="note">This tool not only speeds up development time by reducing time wasted on reloading the web page (which adds up to a suprising amount depending on the website) and also allows you to work offline, perfect for when travelling to meetings.</p>
				</li>
				<li>
					<h3>Alice</h3>
					<h4>SCSS Framework</h4>
					<br/>
					<p className="note">Born out of my frustration of the over reliance of pre-existing frameworks such as Bootstrap, I am working on my own lightweight and highly customisable framework.</p>
					<p className="note">Written in SCSS and reliant upon variables and modules, the developer is able to easily pick and choose what they need, whether it's a 8 or 12 column layout needed, flex or grid based, the developer can use as few modules as they need, reducing unnecessary markup which in turn reduces file sizes and improves site speed.</p>
				</li>
				<li>
					<h3>This Site!</h3>
					<br/>
					<p className="note">This site is always evolving, this design is actually the 7th since I started 5 years ago!</p>
					<p className="note">The current version is hosted on AWS and the code is freely available for critique on <a href="https://github.com/BenC0/BenCo">Github</a></p>
				</li>
			</ul>
			<p>In addition to the above projects, I have also created prototype versions of the below projects.</p>
			<ul>
				<li>
					<h3>Social Proof Messaging</h3>
					<h4>Project used in A/B tests whilst working for iProspect</h4>
					<br/>
					<p className="note">Built in PHP and JavaScript, this tool logs custom events to a database using a purpose built API and returns relevant information to be displayed back to the user.</p>
					<p className="note">The tool was used to display messaging such as "X people have bought this in the last Y hours"</p>
				</li>
				<li>
					<h3>enCapture</h3>
					<h4>Exit intent behaviour triggered popups</h4>
					<br/>
					<p className="note">Whilst at iProspect I aided in the development of a JavaScript function that detects exit intent behaviour and displays a popup modal to user, highlighting an offering or the website KSP's to retain the user's interest and aid them in progressing further down the funnel.</p>
					<p className="note"><small>PS - I also created a CSS only version that is limited in terms of interactivity with the modal but functionally similar. View it on <a href="https://codepen.io/Benco/pen/JpxXNo">CodePen</a></small></p>
				</li>
			</ul>
			<p>There are loads of small projects done for the purpose of curiosity and learning on my <a href="https://codepen.io/Benco/">Codepen</a>.</p>
		</section>
	);
}

export default SideProjects;
