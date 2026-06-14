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
								799
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
								<i className="tji-double-check"></i> Onboarding & KYC flow review
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
						<Link href="https://tr.ee/bBVLo3x2Xu" target="_blank" rel="noopener noreferrer">
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
								2,199
							</span>
						</div>
						<div className="pricing__package-desc">
							<p>
								Medium size product
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
								<i className="tji-double-check"></i> Onboarding & retention analysis
							</li>
							<li className="active">
								<i className="tji-double-check"></i> Remote Usability testing by 5 real users
							</li>
							<li className="active">
								<i className="tji-double-check"></i> Trust & drop-off diagnosis
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
						<Link href="https://tr.ee/bBVLo3x2Xu" target="_blank" rel="noopener noreferrer">
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
								4,499
							</span>
						
						</div>
						<div className="pricing__package-desc">
							<p>
								Perfect for Large scale
							</p>
						</div>
					</div>
					<div className="pricing__features-list">
						<ul>
							<li className="active">
								<i className="tji-double-check"></i> Full UX Audit sprint
							</li>
							<li className="active">
								<i className="tji-double-check"></i> Complete CX audit with real user sessions
							</li>
							<li className="active">
								<i className="tji-double-check"></i> 12-month UX roadmap
							</li>
							<li className="active">
								<i className="tji-double-check"></i> UX Maturity Assessment
							</li>
							<li className="active">
								<i className="tji-double-check"></i> African market user persona development
							</li>
							<li className="active">
								<i className="tji-double-check"></i> Design system foundation
							</li>
							<li className="active">
								<i className="tji-double-check"></i> Investor-ready UX narrative
							</li>
							<li className="active">
								<i className="tji-double-check"></i> 60 days strategic advisory support
							</li>
						</ul>
					</div>
					<div className="pricing__btn">
						<Link href="https://tr.ee/bBVLo3x2Xu" target="_blank" rel="noopener noreferrer">
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
