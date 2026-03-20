"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Link from "next/link";
import { useState } from "react";

const PricingPlan3 = () => {
	const [isYearlyPlan, setIsYearlyPlan] = useState(false);
	return (
		<section className="h8-price-section section-space">
			<BootstrapWrapper>
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="h8-price-header">
								<div className="sec-heading">
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.2s"
									>
										PRICING PLAN
									</span>
									<h2 className="sec-title text-anim">
										Flexible pricing, powerful tangible results
									</h2>
								</div>

								{/* <div className="pricing-tab wow fadeInUp" data-wow-delay="0.4s">
									<ul>
										<li>
											<button
												className={`nav-link monthly ${
													isYearlyPlan ? "" : "active"
												}`}
												onClick={() => setIsYearlyPlan(false)}
											>
												monthly
											</button>
										</li>
										<li>
											<button
												className={`nav-link yearly ${
													isYearlyPlan ? "active" : ""
												}`}
												onClick={() => setIsYearlyPlan(true)}
											>
												yearly
											</button>
										</li>
									</ul>
								</div> */}
							</div>

							<div className="h8-price-wrapper d-none d-lg-flex">
								<div
									className="price_tabs flex-column nav-pills wow fadeInLeft"
									data-wow-delay="0.3s"
									role="tablist"
									aria-orientation="vertical"
								>
									<div
										className="tab_item active"
										data-bs-toggle="pill"
										data-bs-target="#priceTab-1"
										role="tab"
										aria-selected="true"
									>
										<span className="checkbox"></span>

										<div className="content">
											<h4 className="title">
												UX Foundation
											</h4>
											<div className="desc">Perfect for startups</div>
										</div>
										<div className="price">
											<span className="period">
											from
											</span>
											<span className="dollar">$</span>
											<span className="price-number">
												1000
											</span>
											
										</div>
									</div>

									<div
										className="tab_item"
										data-bs-toggle="pill"
										data-bs-target="#priceTab-2"
										role="tab"
										aria-selected="false"
									>
										<span className="checkbox"></span>

										<div className="content">
											<h4 className="title">
												UX Growth <span>Recommended</span>
											</h4>
											<div className="desc">Medium size product</div>
										</div>
										<div className="price">
											<span className="period">
											from
											</span>
											<span className="dollar">$</span>
											<span className="price-number">
												3000
											</span>
											
										</div>
									</div>

									<div
										className="tab_item"
										data-bs-toggle="pill"
										data-bs-target="#priceTab-3"
										role="tab"
										aria-selected="false"
									>
										<span className="checkbox"></span>

										<div className="content">
											<h4 className="title">
												UX Scale 
											</h4>
											<div className="desc">Perfect for Large scale</div>
										</div>
										<div className="price">
											<span className="period">
											from
											</span>
											<span className="dollar">$</span>
											<span className="price-number">
												5000
											</span>
											
										</div>
									</div>
								</div>

								<div
									className="price_tab_contents tab-content wow fadeInRight"
									data-wow-delay="0.4s"
								>
									<div
										className="tab_content tab-pane show active"
										id="priceTab-1"
										role="tabpanel"
									>
										{/* <div className="pricing-badge">Recommended</div> */}

										<ul className="features">
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
												<i className="tji-double-check"></i> 24/7 dedicated
												business support
											</li>
										</ul>

										<div className="buttons">
											<ButtonPrimary text={"Choose package"} url={"https://tr.ee/bBVLo3x2Xu"} target={"_blank"} rel={"noopener noreferrer"}/>
											<Link className=" text-btn" href="/pricing-plan">
												Price comparison <i className="tji-angle-right"></i>
											</Link>
										</div>
									</div>

									<div
										className="tab_content tab-pane "
										id="priceTab-2"
										role="tabpanel"
									>
										<div className="pricing-badge">Recommended</div>

										<ul className="features">
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

										<div className="buttons">
											<ButtonPrimary text={"Choose package"} url={"https://tr.ee/bBVLo3x2Xu"} target={"_blank"} rel={"noopener noreferrer"}/>

											<Link className=" text-btn" href="/pricing-plan">
												Price comparison <i className="tji-angle-right"></i>
											</Link>
										</div>
									</div>

									<div
										className="tab_content tab-pane "
										id="priceTab-3"
										role="tabpanel"
									>
										{/* <div className="pricing-badge">Recommended</div> */}

										<ul className="features">
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

										<div className="buttons">
											<ButtonPrimary text={"Choose package"} url={"https://tr.ee/bBVLo3x2Xu"} target={"_blank"} rel={"noopener noreferrer"}/>

											<Link className=" text-btn" href="/pricing-plan">
												Price comparison <i className="tji-angle-right"></i>
											</Link>
										</div>
									</div>
								</div>
							</div>

							<div
								className="h8-price-mobile-wrapper d-lg-none"
								id="pricingAccordion"
							>
								<div className="pricing_a_item">
									<div
										className="tab_item"
										data-bs-toggle="collapse"
										data-bs-target="#priceA-1"
										aria-expanded="true"
										role="tablist"
									>
										<div className="check_wrap">
											<span className="checkbox"></span>
										</div>

										<div className="content">
											<h4 className="title">
												UX Foundation
											</h4>
											<div className="desc">Perfect Startups</div>
										</div>
										<div className="price">
											<span className="period">
												from
											</span>
											<div>
												<span className="dollar">$</span>
												<span className="price-number">
													1000
												</span>
											</div>
											
										</div>
									</div>

									<div
										id="priceA-1"
										className="pricing_a_content collapse show"
										data-bs-parent="#pricingAccordion"
									>
										<div className="tab_content accordion-body">
											{/* <div className="pricing-badge">Recommended</div> */}

											<ul className="features">
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
												<i className="tji-double-check"></i> 24/7 dedicated
												business support
											</li>
										</ul>

											<div className="buttons">
												<ButtonPrimary
													text={"Choose package"}
													url={"https://tr.ee/bBVLo3x2Xu"}
													target={"_blank"}
													rel={"noopener noreferrer"}
												/>

												<Link className=" text-btn" href="/pricing-plan">
													Price comparison <i className="tji-angle-right"></i>
												</Link>
											</div>
										</div>
									</div>
								</div>

								<div className="pricing_a_item">
									<div
										className="tab_item collapsed"
										data-bs-toggle="collapse"
										data-bs-target="#priceA-2"
										aria-expanded="false"
										role="tablist"
									>
										<div className="check_wrap">
											<span className="checkbox"></span>
										</div>

										<div className="content">
											<h4 className="title">
												UX Growth
											</h4>
											<div className="desc">For small & medium products</div>
										</div>
										<div className="price">
											<span className="period">
												from
											</span>
											<div>
												<span className="dollar">$</span>
												<span className="price-number">
													3000
												</span>
											</div>
											
										</div>
									</div>

									<div
										id="priceA-2"
										className="pricing_a_content collapse"
										data-bs-parent="#pricingAccordion"
									>
										<div className="tab_content accordion-body">
											<div className="pricing-badge">Recommended</div>

											<ul className="features">
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

											<div className="buttons">
												<ButtonPrimary
													text={"Choose package"}
													url={"https://tr.ee/bBVLo3x2Xu"}
													target={"_blank"}
													rel={"noopener noreferrer"}
												/>

												<Link className=" text-btn" href="/pricing-plan">
													Price comparison <i className="tji-angle-right"></i>
												</Link>
											</div>
										</div>
									</div>
								</div>

								<div className="pricing_a_item">
									<div
										className="tab_item collapsed"
										data-bs-toggle="collapse"
										data-bs-target="#priceA-3"
										aria-expanded="false"
										role="tablist"
									>
										<div className="check_wrap">
											<span className="checkbox"></span>
										</div>

										<div className="content">
											<h4 className="title">
												UX Scale
											</h4>
											<div className="desc">Best for Large Scale Products</div>
										</div>
										<div className="price">
											<span className="period">
												from
											</span>
											<div>
												<span className="dollar">$</span>
												<span className="price-number">
													5000
												</span>
											</div>
											
										</div>
									</div>

									<div
										id="priceA-3"
										className="pricing_a_content collapse"
										data-bs-parent="#pricingAccordion"
									>
										<div className="tab_content accordion-body">
											{/* <div className="pricing-badge">Recommended</div> */}

										<ul className="features">
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
											<div className="buttons">
												<ButtonPrimary
													text={"Choose package"}
													url={"https://tr.ee/bBVLo3x2Xu"}
													target={"_blank"}
													rel={"noopener noreferrer"}
												/>

												<Link className=" text-btn" href="/pricing-plan">
													Price comparison <i className="tji-angle-right"></i>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</BootstrapWrapper>
		</section>
	);
};

export default PricingPlan3;
