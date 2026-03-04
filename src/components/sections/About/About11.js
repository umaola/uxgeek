import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const About11 = () => {
	return (
		<section className="tj-about-info section-space">
			<div className="container">
				<div className="row rg-30 justify-content-between">
					<div className="col-lg-6 col-md-12">
						<div className="pricing-left-content">
							<div className="sec-heading mb-0">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
									About UX Geek
								</span>
								<h2 className="sec-title text-anim">
									Enabling stakeholders see their product through the eyes of their clients.
								</h2>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="desc mb-30 wow fadeInUp" data-wow-delay="0.3s">
							<p>
								Founded in wisdom, established in understanding, and through wisdom,
								UX Geek synthesizes evidence and makes informed UX recommendations.
								Reducing jargon and demystifying, we treat UX as strategic problem solving, rather than focusing on producing deliverables. 
								We help stakeholders think clearly, prioritize effectively, and make informed evidence-baseddecisions that lead to better user experiences and business outcomes.
							</p>
							<p>
								UX Geek is committed to delivering exceptional value through our
								strategic insights, innovative approaches, and deep understanding of user needs.
							</p>
						</div>
						<div className="about-btn wow fadeInUp" data-wow-delay="0.5s">
							<ButtonPrimary text={"Learn more"} url={"/contact"} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About11;
