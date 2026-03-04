import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const About8 = () => {
    return (
        <section className="tj-about-section-five h8-about section-space">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="about-wrapper-four h8-about-wrapper">
                            <div className="about-content-five h8-about-content col-12">
                                <div className="sec-heading h8-section-heading style-4">
                                    <span
                                        className="sub-title wow fadeInUp"
                                        data-wow-delay="0.3s"
                                    >
                                        Other Services
                                    </span>
                                    <h2 className="sec-title text-anim">
                                        Tailor your pricelist with our additional services
                                    </h2>
                                </div>
                                {/* <div className="desc wow fadeInUp" data-wow-delay="0.5s">
                                    <p>
                                        Our mission is to empower businesses of all sizes
                                        create products that are user-friendly and effective. The success of
                                        many businesses today depends on the usability and accessibility of their product. We ensure
                                        your product is designed with the user in mind, making it easy to use and navigate, leading to increased customer satisfaction and loyalty.
                                    </p>
                                </div> */}
                                <div
                                    className="check-list-one wow fadeInUp"
                                    data-wow-delay="0.7s"
                                >
                                    <ul>
                                        <li>
                                            <i className="tji-double-check"></i>Customized User Research
                                        </li>
                                        <li>
                                            <i className="tji-double-check"></i>Feature Mapping
                                        </li>
                                        <li>
                                            <i className="tji-double-check"></i>Team Training
                                        </li>
                                    </ul>
                                    <div className="vr-line"></div>
                                    <ul>
                                        <li>
                                            <i className="tji-double-check"></i>Product Usability Testing
                                        </li>
                                        <li>
                                            <i className="tji-double-check"></i>UX Design
                                        </li>
                                        <li>
                                            <i className="tji-double-check"></i>Consultation
                                        </li>
                                    </ul>
                                </div>
                                <div className="btn-area wow fadeInUp" data-wow-delay="0.9s">
                                    <ButtonPrimary text="Know more about us" url="/about" />
                                </div>
                            </div>
                            <div
                                className="about-images-group-three h8-about-banner hover:shine wow fadeInUp"
                                data-wow-delay="0.1s"
                            >
                                <img src="/images/about/h8-about-1.jpg" alt="Images" />
                                <div className="h8-about-float-area">
                                    <div className="client-experience h8-about-client-experience">
                                        <ul className="images-thumb">
                                            <li className="wow fadeInLeft" data-wow-delay="0.3s">
                                                <img src="/images/about/thumb-1.jpg" alt="Images" />
                                            </li>
                                            <li className="wow fadeInLeft" data-wow-delay="0.4s">
                                                <img src="/images/about/thumb-2.jpg" alt="Images" />
                                            </li>
                                            <li className="wow fadeInLeft" data-wow-delay="0.5s">
                                                <img src="/images/about/thumb-3.jpg" alt="Images" />
                                            </li>
                                            <li className="plus wow fadeInLeft" data-wow-delay="0.6s">
                                                <i className="fa-sharp fa-solid fa-plus"></i>
                                            </li>
                                        </ul>
                                    </div>
                                    <p className="h8-about-feedback-text">
                                        Happy clients all over the world.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About8;
