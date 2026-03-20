import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FormSelect from "@/components/shared/Inputs/FormSelect";
import Link from "next/link";

const Contact1 = () => {
	return (
		<section
			className="tj-contact-section"
			style={{ backgroundColor: "var(--tj-color-theme-dark)" }}
		>
			<div className="container">
				<div className="row ">
					<div className="col-12 align-items-center justify-content-center">
						<div className="contact-wrapper">
							<div className="col-12 contact-left-content">
								<div className="sec-heading style-2">
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.1s"
									>
										// We will like to hear from you
									</span>
									<h2 className="sec-title text-anim">
									
									</h2>
									<div className="desc wow fadeInUp" data-wow-delay="0.3s">
										<p>
											Our mission is to empower businesses of all sizes create products that are user-friendly and effective. The success of many businesses today depends on the usability and accessibility of their product. We ensure your product is designed with the user in mind, making it easy to use and navigate, leading to increased customer satisfaction and loyalty.
										</p>
									</div>
									<div
										className="contact-button wow fadeInUp"
										data-wow-delay="0.5s"
									>
										<ButtonPrimary
											text={"Contact us"}
											url={"https://tr.ee/bBVLo3x2Xu"}
											className={"white-btn "}
											target={"_blank"}
											rel={"noopener noreferrer"}
										/>
									</div>
								</div>
							</div>
							{/* <div
								className="contact-form-one wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<h3 className="title">
									Feel free to get in touch.
								</h3>
								<div className="contact-item">
									<div className="contact-text">
										<i className="fa-solid fa-envelope"></i>
										<Link href="mailto:info@uxgeek.tech">
											info@uxgeek.tech
										</Link>
									</div>
									<div className="contact-text">
										<i className="fa-sharp fa-solid fa-phone"></i>
										+2348 087 709 274
									</div>
								</div>
								<form>
									<div className="row">
										<div className="col-sm-6">
											<div className="form-input">
												<input
													type="text"
													id="first"
													name="name"
													placeholder="Full name*"
													required=""
												/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-input">
												<input
													type="email"
													id="emailOne"
													name="email"
													placeholder="Email address*"
													required=""
												/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-input">
												<input
													type="tel"
													id="tel"
													name="tel"
													placeholder="Phone number*"
													required=""
												/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-input">
												<div className="tj-nice-select-box">
													<div className="tj-select">
														<FormSelect
															id={"contact"}
															className="nice-select"
															defaultValue={"Chose a option"}
															items={[
																{ value: "1", name: "UX Audit" },
																{ value: "2", name: "Usability Testing" },
																{ value: "3", name: "UX Maturity Assessment" },
																{ value: "4", name: "Customized User Research" },
																{ value: "5", name: "Product Feature Mapping" },
																{ value: "6", name: "UX Team Training" },
																// { value: "7", name: "Branding design" },
															]}
														/>
													</div>
												</div>
											</div>
										</div>
										<div className="col-12">
											<div className="form-input input-textarea">
												<textarea
													id="message"
													name="message"
													placeholder="Type message"
												/>
											</div>
										</div>
										<div className="submit-button">
											<ButtonPrimary
												text={"Send message"}
												type="submit"
												className={"white-btn"}
											/>
										</div>
									</div>
								</form>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact1;
