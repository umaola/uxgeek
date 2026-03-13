import Link from "next/link";

const PricingPlanItems = ({ isYearlyPlan }) => {
	return (
		<>
			<div className="col-xl-4 col-md-6">
				<div className="pricing__box right-swipe">
					<div className="pricing__header">
						<h4 className="pricing__package-name">UX Foundation</h4>
						<div className="pricing__package-price">
							<span
								className="pricing__package-period period"
							>
								from
							</span>
							<span> </span>
							<span className="pricing__package-currency">$</span>
							<span className="price-number" style={{fontSize: '2rem'}}>
								1000
							</span>
							
						</div>
						<div className="pricing__package-desc">
							<p>
								Perfect for Startups
							</p>
						</div>
					</div>
					<div className="pricing__features-list">
						<ul>
							<li className="active">
								<i className="tji-double-check"></i> Product discovery session
							</li>
							<li className="active">
								<i className="tji-double-check"></i> 1-2 Stakeholder interviews
							</li>
							<li className="active">
								<i className="tji-double-check"></i> Heuristic UX audit (up to 20 key screens)
							</li>
							<li className="active">
								<i className="tji-double-check"></i> Full User Quantitative analysis
							</li>
							<li className="active">
								<i className="tji-double-check"></i> User flow audit (1 core flow)
							</li>
							<li className="active">
								<i className="tji-double-check"></i> Friction & usability report
							</li>
							<li className="active">
								<i className="tji-double-check"></i> 2 weeks post-delivery support
							</li>
							<li className="active">
								<i className="tji-double-check"></i> 24/7 dedicated business support
							</li>
						</ul>
					</div>
					<div className="pricing__btn">
						<Link href="/contact">
							<div className="btn-text">
								<span>Chose package</span>
							</div>
							<span className="btn-icon">
								<i className="tji-angle-right"></i>
								<i className="tji-angle-right"></i>
							</span>
						</Link>
					</div>
				</div>
			</div>
			<div className="col-xl-4 col-md-6">
				<div className="pricing__box active right-swipe">
					<div className="pricing__badge">
						<span>Recommended</span>
					</div>
					<div className="pricing__header">
						<h4 className="pricing__package-name">UX Growth</h4>
						<div className="pricing__package-price">
							<span
								className="pricing__package-period period"
							>
								from
							</span>
							<span className="pricing__package-currency">$</span>
							<span
								className="price-number"
								 style={{fontSize: '2rem'}}
							>
								3000
							</span>
						</div>
						<div className="pricing__package-desc">
							<p>
								Perfect for Small & Medium Products
							</p>
						</div>
					</div>
					<div className="pricing__features-list">
						<ul>
							<li className="active">
								<i className="tji-double-check"></i> UX audit (up to 40 screens)
							</li>
							<li className="active">
								<i className="tji-double-check"></i> Competitive UX benchmarking (2 competitors)
							</li>
							<li className="active">
								<i className="tji-double-check"></i> Conversion path analysis
							</li>
							<li className="active">
								<i className="tji-double-check"></i> Remote Usability testing by 5 participants
							</li>
							<li className="active">
								<i className="tji-double-check"></i> High-fidelity UI design (up to 10 screens)
							</li>
							<li className="active">
								<i className="tji-double-check"></i> Advanced UX strategy document
							</li>
							<li className="active">
								<i className="tji-double-check"></i> Personalized Executive UX presentation deck
							</li>
							<li className="active">
								<i className="tji-double-check"></i> 30 days advisory support
							</li>
						</ul>
					</div>
					<div className="pricing__btn active">
						<Link href="/contact">
							<div className="btn-text">
								<span>Chose package</span>
							</div>
							<span className="btn-icon">
								<i className="tji-angle-right"></i>
								<i className="tji-angle-right"></i>
							</span>
						</Link>
					</div>
				</div>
			</div>
			<div className="col-xl-4 col-md-6">
				<div className="pricing__box right-swipe">
					<div className="pricing__header">
						<h4 className="pricing__package-name">UX Scale</h4>
						<div className="pricing__package-price">
							<span
								className="pricing__package-period period"
							>
								from
							</span>
							<span className="pricing__package-currency">$</span>
							<span
								className="price-number"
								 style={{fontSize: '2rem'}}
							>
								5000
							</span>
						
						</div>
						<div className="pricing__package-desc">
							<p>
								Best for Large Scale Products
							</p>
						</div>
					</div>
					<div className="pricing__features-list">
						<ul>
							<li className="active">
								<i className="tji-double-check"></i> Full UX Audit sprint
							</li>
							<li className="active">
								<i className="tji-double-check"></i> Journey mapping
							</li>
							<li className="active">
								<i className="tji-double-check"></i> Advanced analytics behavior review
							</li>
							<li className="active">
								<i className="tji-double-check"></i> UX Maturity Assessment
							</li>
							<li className="active">
								<i className="tji-double-check"></i> End-to-end product flow redesign
							</li>
							<li className="active">
								<i className="tji-double-check"></i> High-fidelity UI design (up to 25 screens)
							</li>
							<li className="active">
								<i className="tji-double-check"></i> Design system foundation
							</li>
							<li className="active">
								<i className="tji-double-check"></i> Personalized Executive UX presentation deck
							</li>
							<li className="active">
								<i className="tji-double-check"></i> 60 days strategic advisory support
							</li>
						</ul>
					</div>
					<div className="pricing__btn">
						<Link href="/contact">
							<div className="btn-text">
								<span>Chose package</span>
							</div>
							<span className="btn-icon">
								<i className="tji-angle-right"></i>
								<i className="tji-angle-right"></i>
							</span>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default PricingPlanItems;
