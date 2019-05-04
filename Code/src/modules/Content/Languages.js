import React from 'react';

function Languages() {
	return (
		<section id="languages">
			<h2>Languages</h2>
			<ul id="skills">
				<li data-label="js">
					<h3>JavaScript (and jQuery)</h3>
					<span className="notes">use it daily</span>	
				</li>
				<li data-label="html">
					<h3>HTML5</h3>
					<span className="notes">work with it daily</span>
				</li>
				<li data-label="css">
					<h3>CSS3</h3>
					<span className="notes">love it</span>
				</li>
				<li data-label="sass">
					<h3>Sass</h3>
					<span className="notes">it just makes sense.</span>
				</li>
				<li data-label="python">
					<h3>Python</h3>
					<span className="notes">bit rusty</span>
				</li>
			</ul>
		</section>
	);
}

export default Languages;
