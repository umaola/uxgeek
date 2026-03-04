"use client";
import Accordion from "@/components/shared/accordion/Accordion";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Image from "next/image";
import Link from "next/link";
import CtaSidebar from "../cta/CtaSidebar";

const ServicesDetailsPrimary = ({ option }) => {
	const { currentItem, items, currentId } = option || {};
	const { title, titleLarge, id, iconName, img, desc1, desc2, overview1, overview2, overview3, overview4 } = currentItem || {};

	return (
		<section className="tj-service-area section-space">
			<div className="container">
				<div className="row rg-50">
					<div className="col-lg-8">
						<div className="tj-post-wrapper">
							<div className="tj-post-single-post mb-0">
								<div
									className="tj-post-thumb hover:shine wow fadeInUp"
									data-wow-delay="0.1s"
								>
									<Image
										src="/images/service/tj-service-1.jpg"
										alt="post-image"
										width={870}
										height={498}
										style={{ height: "auto" }}
									/>
								</div>
								<h3 className="tj-post-title text-anim">{titleLarge}</h3>
								<div className="tj-entry-content">
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										{desc1}
									</p>
									<p className="wow fadeInUp" data-wow-delay="0.3s">
										{desc2}
									</p>
									<div className="tj-check-list">
										<h4 className="text-anim">Service overview</h4>
										{/* <p className="wow fadeInUp" data-wow-delay="0.1s">
											Our mission is to empowers businesses size to thrive in an
											businesses ever changing marketplace. We are committed to
											the delivering exceptionals the value through strategic
											inset.
										</p> */}
									</div>
									<div
										className="service-check-list mt-4 wow fadeInUp"
										data-wow-delay="0.3s"
									>
										<ul>
											<li>
												<i className="tji-double-check"></i>
												<span>
													{overview1}
												</span>
											</li>
											<li>
												<i className="tji-double-check"></i>
												<span>
													{overview2}
												</span>
											</li>
											<li>
												<i className="tji-double-check"></i>
												<span>
													{overview3}
												</span>
											</li>
											<li>
												<i className="tji-double-check"></i>
												<span>
													{overview4}
												</span>
											</li>
										</ul>
									</div>
									<div className="service-images-wrap">
										<div className="row">
											<div className="col-sm-6">
												<div
													className="image-wrap hover:shine wow fadeInUp"
													data-wow-delay="0.5s"
												>
													<Image
														src="/images/service/tj-service-3.webp"
														alt="service-image"
														width={420}
														height={395}
														style={{ height: "auto" }}
													/>
												</div>
											</div>
											<div className="col-sm-6">
												<div
													className="image-wrap hover:shine wow fadeInUp"
													data-wow-delay="0.7s"
												>
													<Image
														src="/images/service/tj-service-4.webp"
														alt="service-image"
														width={420}
														height={395}
														style={{ height: "auto" }}
													/>
												</div>
											</div>
										</div>
									</div>
									{/* <div className="check-list mb-40">
										<h4 className="text-anim">Kye features</h4>
										<p className="wow fadeInUp" data-wow-delay="0.1s">
											Our service guides you through the entire strategic
											planning process, from initial goal formulation to precise
											execution. Start with a thorough assessment of your
											current position and market landscape, then help you
											define clear, actionable objectives aligned with your
											vision. Our approach includes developing detailed action
											plans.
										</p>
										<p className="wow fadeInUp" data-wow-delay="0.3s">
											Formulating and implementing business goals. We begin with
											an in-depth analysis of your business and market to
											identify opportunities and challenges. From there, we work
											with you to define clear, actionable.
										</p>
									</div>
									<div className="row rg-30 justify-content-center">
										<div className="col-md-4 col-sm-6">
											<div
												className="tj-feature wow fadeInUp"
												data-wow-delay="0.5s"
											>
												<div className="tj-feature-icon">
													<i className="tji-quick"></i>
												</div>
												<h5 className="tj-feature-title">Quick solutions</h5>
												<div className="desc">
													<p>
														Provide hands-on guidance and support during the
														execution strategic
													</p>
												</div>
											</div>
										</div>
										<div className="col-md-4 col-sm-6">
											<div
												className="tj-feature wow fadeInUp"
												data-wow-delay="0.7s"
											>
												<div className="tj-feature-icon">
													<i className="tji-results"></i>
												</div>
												<h5 className="tj-feature-title">Proven Results</h5>
												<div className="desc">
													<p>
														Benefit from the expertise of seasoned consultants
														who offer strategic
													</p>
												</div>
											</div>
										</div>
										<div className="col-md-4 col-sm-6">
											<div
												className="tj-feature wow fadeInUp"
												data-wow-delay="0.9s"
											>
												<div className="tj-feature-icon">
													<i className="tji-personalization"></i>
												</div>
												<h5 className="tj-feature-title">Personalization</h5>
												<div className="desc">
													<p>
														Ensure that strategies are effectively implemented
														and objectives
													</p>
												</div>
											</div>
										</div>
									</div> */}

									<div
										className="tj-post-thumb mt-30 mb-0 hover:shine wow fadeInUp"
										data-wow-delay="0.1s"
									>
										<Image
											src="/images/service/tj-service-2.webp"
											alt="post-image"
											width={870}
											height={498}
											style={{ height: "auto" }}
										/>
										{/* <PopupVideo>
											<Link
												className="play-btn glightbox video-popup"
												href="https://www.youtube.com/watch?v=eEzD-Y97ges"
											>
												<i className="fa-sharp fa-solid fa-play"></i>
											</Link>
										</PopupVideo> */}
									</div>
									<h4 className="text-anim">FAQs</h4>
									<Accordion>
										<div className="tj-faq mt-30">
											<div
												className="accordion tj-faq-style"
												id="accordionExample"
											>
												<div
													className="accordion-item wow fadeInUp"
													data-wow-delay="0.1s"
												>
													<h2 className="accordion-header active">
														{/* <!-- button --> */}
														<button
															className="accordion-button collapsed"
															data-bs-toggle="collapse"
															data-bs-target="#collapseOne-1"
															aria-expanded="false"
														>
															How do I know if my product needs a UX Audit?
														</button>
													</h2>
													{/* <!-- content --> */}
													<div
														id="collapseOne-1"
														className="accordion-collapse collapse"
														data-bs-parent="#accordionExample"
													>
														<div className="accordion-body">
															<p>
																If you’re experiencing low conversions, high bounce rates, 
																user complaints, or confusion around navigation, 
																it’s a strong sign. Even if things seem “fine,” 
																a UX Audit can uncover hidden friction that may be quietly affecting 
																performance. If you want to scale higher or enter new markets, 
																a UX Audit provides the insights needed to ensure your product can meet those 
																demands.
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
															I’m not a technical person. Can I still work with you?
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
																Absolutely. Many of our clients are founders or business owners without technical backgrounds. 
																This is what our Stakeholder Workshops are designed for,to bridge the gap between our technical 
																team and business leaders.We communicate in clear, practical language and guide you through every step without jargon.
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
															What is the difference between a UX Audit and Usability Testing?
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
																A UX Audit is an expert evaluation of your product (applications and websites). 
																Usability Testing involves observing real users interacting with it. 
																One provides professional analysis; the other provides behavioral evidence. 
																We combine both to give you a comprehensive understanding of your product’s 
																strengths and weaknesses, ensuring you have both expert insights and real user 
																feedback to guide improvements.
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
															How long does a typical UX project take?
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
																Timelines depend on the scope, product complexity, and users. A UX Audit may take a few weeks, 
																while research can take longer. Physical testing workshops may also require more time for recruitment and scheduling. 
																Before starting, we provide a clear timeline so expectations are aligned.
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
																In many cases, yes. Poor user experience leads to drop-offs, abandoned carts, and lost trust. 
																When users can navigate easily and complete tasks without frustration, conversions naturally improve.
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
					</div>
					<div className="col-lg-4">
						<aside className="tj-service-sidebar">
							{/* <!-- Service List --> */}
							<div
								className="tj-sidebar-widget wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<h5 className="tj-sidebar-widget-title">Related service</h5>
								<div className="service-category">
									<ul>
										{items?.length
											? items?.map(({ title, id }, idx) => (
													<li key={idx}>
														<Link
															className={`${currentId === id ? "active" : ""}`}
															href={`/services/${id}`}
														>
															{title}
															<i className="tji-angle-right"></i>
														</Link>
													</li>
											  ))
											: ""}
									</ul>
								</div>
							</div>
							{/* <!-- cta --> */}
							{/* <div
								className="tj-sidebar-widget wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<CtaSidebar />
							</div> */}
						</aside>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesDetailsPrimary;
