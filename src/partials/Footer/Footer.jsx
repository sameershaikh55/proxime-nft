import React from "react";
import { Link } from "react-router-dom";

import Section from "../../components/Section/Section";
import GridContainer from "../../components/GridContainer/GridContainer";

const Footer = () => {
	return (
		<>
			<Section id="footer">
				<GridContainer rowClassName="main-row gy-5 justify-content-center">
					<div className="col-md-12 col-lg-3">
						<img
							className="logo"
							src="/assets/vectors/logo-footer.svg"
							alt="logo"
						/>

						<p className="py-5">
							Proin ornare auctor lectus sit am et rhoncus. Donec dolor magna,
							vene natis ut posuere vel, porta quis sap ien contect
						</p>

						<div className="social d-flex gap-2">
							<img src="/assets/imgs/social-footer-fb.png" alt="social-fb" />
							<img
								src="/assets/imgs/social-footer-google.png"
								alt="social-google"
							/>
							<img
								src="/assets/imgs/social-footer-instagram.png"
								alt="social-instagram"
							/>
							<img
								src="/assets/imgs/social-footer-linkedin.png"
								alt="social-linkedin"
							/>
							<img
								src="/assets/imgs/social-footer-twitter.png"
								alt="social-twitter"
							/>
						</div>
					</div>
					<div className="col-md-4 col-sm-6 col-lg-3">
						<p className="lg">QUICK LINKS</p>

						<div className="links">
							<Link to="/">About</Link>
							<Link to="/">Explore</Link>
							<Link to="/">Leader Board</Link>
							<Link to="/">Resources</Link>
						</div>
					</div>

					<div className="col-md-4 col-sm-6 col-lg-3">
						<p className="lg">FEATURED</p>

						<div className="links">
							<Link to="/">Featured Drops</Link>
							<Link to="/">Featured Edition</Link>
							<Link to="/">Featured NFTs</Link>
						</div>
					</div>

					<div className="contact-us-wrap col-md-4 col-sm-6 col-lg-3">
						<p className="lg">CONTACT US</p>

						<div className="links">
							<Link to="/">
								<img
									src="/assets/imgs/contact-footer-phone.png"
									alt="contact"
								/>
								+000-000-000
							</Link>
							<Link to="/">
								<img
									src="/assets/imgs/contact-footer-email.png"
									alt="contact"
								/>
								demo@example.com
							</Link>
							<Link to="/">
								<img
									src="/assets/imgs/contact-footer-location.png"
									alt="contact"
								/>
								Lorem ipsum dolor, sit Amet, Contect Etur.
							</Link>
						</div>
					</div>
				</GridContainer>
			</Section>
			<Section id="copyright">
				<div className="d-flex justify-content-between align-items-center flex-md-row flex-column">
					<p className="text-center text-sm-left">
						© Copyright 2022 Company Domain - All rights reserved.
					</p>
					<div className="mt-md-0 mt-2">
						<a href="#0">Terms &amp; Conditions</a>{" "}
						<a href="#0">| Privacy Policy</a>
					</div>
				</div>
			</Section>
		</>
	);
};

export default Footer;
