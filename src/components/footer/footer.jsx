import React from 'react';
import Logo from '../../assets/logo-original.jpg';
import './footer.css';

function footer() {
	return (
		<>
			<section id="footer">
				<div className="footer-wrapper">
					<div className="footer-main">
						<div className="footer-logo">
							<img src={Logo} alt="" />
						</div>
						<div className="footer-link-section">
							<ul>
								<li>
									<a href="#">Home</a>
								</li>
								<li>
									<a href="#">About</a>
								</li>
								<li>
									<a href="#">Dash</a>
								</li>
							</ul>
						</div>
						<div className="footer-link-section">
							<ul>
								<li>
									<a href="#">Careers</a>
								</li>
								<li>
									<a href="#">Community</a>
								</li>
								<li>
									<a href="#">Privacy Policy</a>
								</li>
							</ul>
						</div>

						<div className="footer-search-section">
							<div className="footer-search">
								<input
									className="footer-search-input"
									type="text"
									placeholder="Updated in your box"
								/>
								<button className="footer-btn">Go</button>
							</div>
							<div>
								<p>Copyright © 2023, All Rights Reserved</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default footer;
