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
									Empowering FinTech founders to see their product through the eyes of the their consumers
								</h2>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="desc mb-30 wow fadeInUp" data-wow-delay="0.3s">
							<p>
								Founded in wisdom, established in understanding, and through wisdom, UX Geek cuts through the product jargon to treat FinTech UX as a strategic business growth engine. We engineer Trust Architecture and stop the leaks in your product. By translating localized user research into structural UX blueprints, we help African FinTech leaders fix drop-offs, navigate complex regulatory compliance, and make evidence-based decisions that protect Customer Acquisition Cost (CAC) and maximize Lifetime Value (LTV).
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
