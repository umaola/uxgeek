"use client";
import React from "react";

const ProductCategories8 = () => {
	const column1 = [
		"Retail banking",
		"Corporate banking",
		"SME banking",
		"Core banking",
		"Islamic banking",
		"Kids and family banking",
		"AI and Conversational",
		"Spatial banking",
		"VR/AR banking",
		"ATM's solutions"
	];

	const column2 = [
		"Credit Unions",
		"Trade finance",
		"Financial advisory",
		"Remittance",
		"Super Apps",
		"Wealth management",
		"Payment processing",
		"Savings",
		"Investing"
	];

	const column3 = [
		"Trading",
		"Insurance",
		"Lending",
		"Tax automation",
		"PFM",
		"Crypto",
		"Credit scoring",
		"Sustainable finance",
		"White-label solutions"
	];

	return (
		<section className="tj-product-categories-section section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading h8-section-heading style-4 text-center categories-section-heading">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.3s" style={{ color: "var(--tj-color-theme-primary)" }}>
								Fintech Products
							</span>
							<h2 className="sec-title text-anim wow fadeInUp categories-heading-title" data-wow-delay="0.4s">
								Strategic FinTech UX audit and strategy across 28 financial categories.
							</h2>
						</div>
					</div>
				</div>
				<div className="row rg-30 justify-content-center">
					<div className="col-lg-4 col-md-6">
						<div className="category-column-card">
							<ul className="category-list">
								{column1.map((item, idx) => (
									<li key={idx} className="wow fadeInUp" data-wow-delay={`0.${idx + 1}s`}>
										<i className="tji-double-check"></i>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="category-column-card">
							<ul className="category-list">
								{column2.map((item, idx) => (
									<li key={idx} className="wow fadeInUp" data-wow-delay={`0.${idx + 1}s`}>
										<i className="tji-double-check"></i>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="category-column-card">
							<ul className="category-list">
								{column3.map((item, idx) => (
									<li key={idx} className="wow fadeInUp" data-wow-delay={`0.${idx + 1}s`}>
										<i className="tji-double-check"></i>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductCategories8;
