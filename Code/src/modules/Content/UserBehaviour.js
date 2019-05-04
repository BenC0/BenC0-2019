import React from 'react';

function UserBehaviour() {
	return (
		<section id="user_behaviour">
			<h2>UX Research</h2>
			<p>Monitoring user behaviour and using findings to identify friction points within the user journey and improve usability and accessibility.</p>
			<ul className="secondary_list">
				<li data-label>
					<h3>Tools Used</h3>
				</li>
				<li>
					<h3>Hotjar</h3>
					<span className="notes">Great tool for monitoring behaviour and gathering feedback, perfect for most websites</span>
				</li>
				<li>
					<h3>SessionCam</h3>
					<span className="notes">More advanced user behaviour recording tool, perfect for enterprise use</span>
				</li>
			</ul>
		</section>
	);
}

export default UserBehaviour;
