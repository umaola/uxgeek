import Link from "next/link";

const Footer8 = () => {
	return (
		<footer className="tj-footer-area footer-2 style-2 h8-footer">
			<div className="footer-top-area fix">
				<div className="container">
					<div className="row line rg-50">
						<div className="col-xl-6 col-lg-4 col-md-6 col-sm-6">
							<div className="footer-widget footer-newsletter-form h8-footer-newsletter-form">
								<div className="newsletter-title">
									<h3 className="title">Subscribe to our newsletter</h3>
								</div>
								<div className="newsletter-form">
									<form>
										<div className="form-input">
											<input
												type="email"
												id="email"
												name="email"
												placeholder="Enter email"
												required=""
											/>
											<button className="tj-footer-input-btn">
												<i className="fa-solid fa-paper-plane"></i>
											</button>
										</div>
									</form>
								</div>
								<div className="footer-social">
									<h5 className="title">Follow Us:</h5>
									<ul>
										{/* <li>
											<Link href="https://www.facebook.com/">
												<i className="fa-brands fa-facebook-f"></i>
											</Link>
										</li> */}
										<li>
											<Link target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/uxgeek.tech/">
												<i className="fa-brands fa-instagram"></i>
											</Link>
										</li>
										<li>
											<Link target="_blank" rel="noopener noreferrer" href="https://x.com/">
												<i className="fa-brands fa-tiktok"></i>
											</Link>
										</li>
										<li>
											<Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/">
												<i className="fa-brands fa-linkedin-in"></i>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-3 col-md-6 col-sm-6">
							<div className="footer-widget footer4-col-2 widget_nav_menu">
								<div className="footer-title">
									<h4 className="title">Services</h4>
								</div>
								<div className="widget-menu">
									<ul>
										<li>
											<Link href="/services/1">UX Audit and Consultation</Link>
										</li>
										<li>
											<Link href="/services/2">Usability Testing</Link>
										</li>
										<li>
											<Link href="/services/3">UX Maturity Assessment</Link>
										</li>
										<li>
											<Link href="/services/4">Customized User Research</Link>
										</li>
										<li>
											<Link href="/services/5">Product Feature Mapping</Link>
										</li>
										<li>
											<Link href="/services/6">UX Team Training</Link>
										</li>
										{/* <li>
											<Link href="/services/1">Leadership </Link>
										</li> */}
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
							<div className="footer-widget footer2-col-3 widget_nav_menu">
								<div className="footer-title">
									<h4 className="title">Resourses</h4>
								</div>
								<div className="widget-menu">
									<ul>
										<li>
											<Link href="/contact">Contact us</Link>
										</li>
										{/* <li>
											<Link href="/contact">Privacy policy</Link>
										</li>
										<li>
											<Link href="/about">Recognitions</Link>
										</li> */}
										<li>
											<Link href="#">
												Careers 
											</Link>
										</li>
										<li>
											<Link href="/faq">FAQs</Link>
										</li>
										<li>
											<Link href="/pricing-plan">Pricing</Link>
										</li>
										{/* <li>
											<Link href="/team">Feedback</Link>
										</li>
										<li>
											<Link href="/contact">Error 404</Link>
										</li> */}
									</ul>
								</div>
							</div>
						</div>
						{/* <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
							<div className="footer-widget footer-contact-infos">
								<div className="footer-title">
									<h4 className="title">Our offices</h4>
								</div>
								<div className="infos-item">
									<span>Headquarters - USA</span>
									<p>993 Renner Burg, West Rond, MT 94251-030</p>
									<Link href="tel:1009544-7818">+1 (009) 544-7818</Link>
								</div>
								<div className="infos-item">
									<span>Operations - Canada</span>
									<p>Suite 452 8082 Boner Parge, Elviraton, CA 48998</p>
								</div>
							</div>
						</div> */}
					</div>
				</div>
				<Link className="backtop" href="#">
					<i className="tji-arrow-up"></i>
				</Link>
			</div>
			<div className="footer-copyright-area">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								
								<div className="copyright-text">
									<p>
										© 2026 <Link href="/"> UX Geek </Link> All right reserved.
									</p>
								</div>
								<div className="copyright-text">
									<p>
										<i className="fa-solid fa-shield-check"></i> Trusted UX Auditor and Consultant
									</p>
								</div>
								{/* <div className="copyright-menu">
									<ul>
										<li>
											<Link href="/contact">Contact</Link>
										</li>
										<li>
											<Link href="/contact">Terms & conditions</Link>
										</li>
									</ul>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer8;
