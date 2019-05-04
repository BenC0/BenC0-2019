import React from 'react';

function Testing() {
	return (
		<section id="ab_testing">
			<h2>A/B Testing</h2>
			<p>Testing small to large scale changes to the front end, analysing results and providing implementation guides</p>
			<ul className="secondary_list">
				<li data-label>
					<h3>Tools Used</h3>
				</li>
				<li>
					<h3>VWO</h3>
					<span className="notes">Used daily for the last ~3 years</span>
				</li>
				<li>
					<h3>Qubit</h3>
					<span className="notes">Completed training day conducted by Qubit and passed exam afterwards</span>
				</li>
				<li>
					<h3>Google Optimize 360</h3>
					<span className="notes">Used for both A/B testing and Personalisation since the beta was released</span>
				</li>
				<li>
					<h3>Sentient Ascend</h3>
					<span className="notes">AI powered MVT tool, perfect for testing a large range of small scale changes both individually and combined</span>
				</li>
			</ul>
			<ul className="secondary_list">
				<li data-label>
					<h3>Examples of Tests Built</h3>
					<span className="note">(All tests built using JavaScript and CSS)</span>
				</li>
				<li>
					<h3>Exit Intent Popups</h3>
					<span className="note">Displaying a modal on the screen when a user displays exit intent behaviour.</span>
				</li>
				<li>
					<h3>Site Search Engine</h3>
					<span className="note">A bespoke search engine was developed entirely in JavaScript, using a function to calculate the levenshtein distance and return suggested search results. Though development was completed, this unfortunately never went live.</span>
				</li>
				<li>
					<h3>Full Page Reskin</h3>
					<span className="note">Often we would come across a webpage that needed a heavy duty make over in order to address a wide array of usability failings.</span>
				</li>
				<li>
					<h3>Copy Alterations</h3>
					<span className="note">Testing differences in the text on page to determine what level of information users required and how best to convey that information.</span>
				</li>
				<li>
					<h3>Small, Miscellaneous Design Tweaks</h3>
					<span className="note">Font size changes, background colours and other small, basic improvements.</span>
				</li>
			</ul>
		</section>
	);
}

export default Testing;
