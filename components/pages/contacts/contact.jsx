"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../common/scroll/scroll-to-top";
import FormArea from "./form";
import Link from "next/link";

const ContactUs = () => {
    return (
        <>
            <SEO pageTitle="Contact Us" />        
            <HeaderOne />
            <BreadCrumb title="Contact Us" innerTitle="Contact Us" />
            <div className="contact__two section-padding">
                <div className="container">
                    <div className="row gy-4 align-items-center">
                        <div className="col-xl-6">
                            <div className="contact__two-content">
                                <div className="contact__two-title">
                                    <span className="subtitle-one">Contact us</span>
                                    <h2>Do you have any question? </h2>
                                    <p>For your car we will do everything  advice, repairs and maintenance. We are the some preferred choice by many car owners because</p>
                                </div>
                                <div className="contact__two-form">
                                    <FormArea />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="contact__two-contact-info">
                                <div className="contact__two-single-info">
                                    <div className="contact__two-single-info-icon">
                                        <img src="assets/img/icon//service-1.png" alt="image" />
                                    </div>
                                    <div className="contact__two-single-info-content">
                                        <h4>Email</h4>
                                        <Link href="mailto:us61901@gmail.com"><span>us61901@gmail.com</span></Link>
                                        {/* <span>willie.jennings@example.com</span> */}
                                    </div>
                                </div>
                                <div className="contact__two-single-info">
                                    <div className="contact__two-single-info-icon">
                                        <img src="assets/img/icon//service-2.png" alt="image" />
                                    </div>
                                    <div className="contact__two-single-info-content">
                                        <h4>Contacts</h4>
                                        <Link href="tel:9680357978">+91 9680357978</Link>
                                        {/* <span>(704) 555-0127</span> */}
                                    </div>
                                </div>
                                <div className="contact__two-single-info">
                                    <div className="contact__two-single-info-icon">
                                        <img src="assets/img/icon//service-3.png" alt="image" />
                                    </div>
                                    <div className="contact__two-single-info-content">
                                        <h4>Date</h4>
                                        <span>Monday-Friday</span>
                                        <span>10AM To 7PM</span>
                                    </div>
                                </div>
                                {/* <div className="contact__two-single-info">
                                    <div className="contact__two-single-info-icon">
                                        <img src="assets/img/icon/service-4.png" alt="image" />
                                    </div>
                                    <div className="contact__two-single-info-content">
                                        <h4>Location</h4>
                                        <span>8502 Preston Rd. Inglewood, Maine 98380</span>
                                    </div>    
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default ContactUs;