import Accordion from "@/components/shared/accordion/Accordion";

const Faq3 = () => {
	return (
		<section className="tj-faq-area section-space">
			<div className="container">
				<div className="row rg-50 justify-content-between">
					<div className="col-xl-5 col-lg-5">
						<div className="sec-heading mb-0 tj-sticky-top">
							<h2 className="sec-title text-anim">
								No matter the UX challenge, we got you covered.
							</h2>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6">
						<Accordion>
							<div className="tj-faq">
								<div
									className="accordion tj-faq-style style-2"
									id="accordionExample"
								>
									<div
										className="accordion-item wow fadeInUp"
										data-wow-delay="0.1s"
									>
										<h2 className="accordion-header active">
											{/* <!-- button --> */}
											<button
												className="accordion-button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne-1"
												aria-expanded="false"
											>
												What exactly does UX Geek do?
											</button>
										</h2>
										{/* <!-- content --> */}
										<div
											id="collapseOne-1"
											className="accordion-collapse collapse show"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													UX Geek helps businesses improve how their digital products feel and function. 
													We identify where users struggle, why they drop off, and how to fix those issues 
													strategically. Our focus is not just aesthetics, it’s clarity, usability, and
													 measurable business growth.
												</p>
											</div>
										</div>
									</div>
									<div
										className="accordion-item wow fadeInUp"
										data-wow-delay="0.3s"
									>
										<h2 className="accordion-header ">
											{/* <!-- button --> */}
											<button
												className="accordion-button collapsed"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne-2"
												aria-expanded="false"
											>
												How do I know if my product needs a UX Audit?
											</button>
										</h2>
										{/* <!-- content --> */}
										<div
											id="collapseOne-2"
											className="accordion-collapse collapse"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													If you’re experiencing low conversions, high bounce rates, user complaints, 
													or confusion around navigation, it’s a strong sign. Even if things seem “fine,” 
													a UX Audit can uncover hidden friction that may be quietly affecting performance. If you want to scale higher or enter new markets, a UX Audit provides the insights needed to ensure your product can meet those demands.
												</p>
											</div>
										</div>
									</div>
									<div
										className="accordion-item wow fadeInUp"
										data-wow-delay="0.5s"
									>
										<h2 className="accordion-header ">
											{/* <!-- button --> */}
											<button
												className="accordion-button collapsed"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne-3"
												aria-expanded="false"
											>
												Is UX different from UI design?
											</button>
										</h2>
										{/* <!-- content --> */}
										<div
											id="collapseOne-3"
											className="accordion-collapse collapse"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													Yes. UI focuses on visual appearance : colors, typography, layout. UX focuses on 
													how the product works and how users experience it. At UX Geek, we prioritize 
													structure, clarity, and behavior before aesthetics.
												</p>
											</div>
										</div>
									</div>
									<div
										className="accordion-item wow fadeInUp"
										data-wow-delay="0.7s"
									>
										<h2 className="accordion-header ">
											{/* <!-- button --> */}
											<button
												className="accordion-button collapsed"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne-4"
												aria-expanded="false"
											>
												I’m not a technical person. Can I still work with you?
											</button>
										</h2>
										{/* <!-- content --> */}
										<div
											id="collapseOne-4"
											className="accordion-collapse collapse"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													Absolutely. Many of our clients are founders or business owners without technical
													 backgrounds. This is what our Stakeholder Workshops are designed for,to bridge 
													 the gap between our technical team and business leaders.We communicate in clear,
													  practical language and guide you through every step without jargon.
												</p>
											</div>
										</div>
									</div>
									<div
										className="accordion-item wow fadeInUp"
										data-wow-delay="0.9s"
									>
										<h2 className="accordion-header ">
											{/* <!-- button --> */}
											<button
												className="accordion-button collapsed"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne-5"
												aria-expanded="false"
											>
												What’s the difference between a UX Audit and Usability Testing?
											</button>
										</h2>
										{/* <!-- content --> */}
										<div
											id="collapseOne-5"
											className="accordion-collapse collapse"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													A UX Audit is an expert evaluation of your product (applications and websites). 
													Usability Testing involves observing real users interacting with it. One provides
													 professional analysis; the other provides behavioral evidence. We combine both 
													 to give you a comprehensive understanding of your product’s strengths and weaknesses, 
													 ensuring you have both expert insights and real user feedback to guide improvements.
												</p>
											</div>
										</div>
									</div>
									<div
										className="accordion-item wow fadeInUp"
										data-wow-delay="0.9s"
									>
										<h2 className="accordion-header ">
											{/* <!-- button --> */}
											<button
												className="accordion-button collapsed"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne-5"
												aria-expanded="false"
											>
												How long does a typical UX project take?
											</button>
										</h2>
										{/* <!-- content --> */}
										<div
											id="collapseOne-5"
											className="accordion-collapse collapse"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													Timelines depend on the scope, product complexity, and users. A UX Audit may take a few weeks, 
													while research can take longer. Physical testing workshops may also require more time for 
													recruitment and scheduling. Before starting, we provide a clear timeline so expectations are 
													aligned.
												</p>
											</div>
										</div>
									</div>
									<div
										className="accordion-item wow fadeInUp"
										data-wow-delay="0.9s"
									>
										<h2 className="accordion-header ">
											{/* <!-- button --> */}
											<button
												className="accordion-button collapsed"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne-5"
												aria-expanded="false"
											>
												Will improving UX really increase my revenue?
											</button>
										</h2>
										{/* <!-- content --> */}
										<div
											id="collapseOne-5"
											className="accordion-collapse collapse"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													In many cases, yes. Poor user experience leads to drop-offs, abandoned carts, 
													and lost trust. When users can navigate easily and complete tasks without 
													frustration, conversions naturally improve.
												</p>
											</div>
										</div>
									</div>
									<div
										className="accordion-item wow fadeInUp"
										data-wow-delay="0.9s"
									>
										<h2 className="accordion-header ">
											{/* <!-- button --> */}
											<button
												className="accordion-button collapsed"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne-5"
												aria-expanded="false"
											>
												What is a UX Maturity Assessment, and why does it matter?
											</button>
										</h2>
										{/* <!-- content --> */}
										<div
											id="collapseOne-5"
											className="accordion-collapse collapse"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													It evaluates how structured and strategic your UX processes are as an organization. 
													If UX decisions are reactive or inconsistent, growth becomes difficult. This assessment 
													provides a roadmap for building a stronger UX foundation.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Accordion>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq3;
