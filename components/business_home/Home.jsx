"use client";
import Image from "next/image";
import img from "../../public/img/carousel-1.jpg";
import img2 from "../../public/img/carousel-2.jpg";
import Link from 'next/link'
import About from "../business_about/About";
import Service from "../business_service/Service";
import Project from "../business_project/Project";
import Blog from "../business_blog/Blog";
import Testimonial from "../business_testimonial/Testimonial";
import Contact from "../business_contact/Contact";
import Team from "../business_team/Team";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home_page = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true, // For right-to-left directionality
        autoplay: true, // Auto play slides
        autoplaySpeed: 3000, // Change slides every 3 seconds
    };

    return (
        <div id="business_home">
            <main className="flex min-h-screen flex-col">

                {/* Carousel */}
                <div className="container-fluid px-0">
                    <Slider {...settings}>
                        <div className="carousel-item active">
                            <Image src={img} alt="Your Alt Text" className="img-fluid" priority />
                            <div className="carousel-caption">
                                <div className="container carousel-content">
                                    <h6 className="text-secondary h4 animated fadeInUp">Best IT Solutions</h6>
                                    <h1 className="text-white display-1 mb-4 animated fadeInRight">
                                        An Innovative IT Solutions Agency
                                    </h1>
                                    <p className="mb-4 text-white fs-5 animated fadeInDown">
                                        Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum.
                                        Pellentesque aliquam dolor eget urna ultricies tincidunt.
                                    </p>
                                    <a href="" className="me-2">
                                        <button
                                            type="button"
                                            className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft"
                                        >
                                            Read More
                                        </button>
                                    </a>
                                    <a href="" className="ms-2">
                                        <button
                                            type="button"
                                            className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight"
                                        >
                                            Contact Us
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <Image src={img2} className="img-fluid" alt="Second slide" />
                            <div className="carousel-caption">
                                <div className="container carousel-content">
                                    <h6 className="text-secondary h4 animated fadeInUp">Best IT Solutions</h6>
                                    <h1 className="text-white display-1 mb-4 animated fadeInLeft">
                                        Quality Digital Services You Really Need!
                                    </h1>
                                    <p className="mb-4 text-white fs-5 animated fadeInDown">
                                        Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum.
                                        Pellentesque aliquam dolor eget urna ultricies tincidunt.
                                    </p>
                                    <a href="" className="me-2">
                                        <button
                                            type="button"
                                            className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft"
                                        >
                                            Read More
                                        </button>
                                    </a>
                                    <a href="" className="ms-2">
                                        <button
                                            type="button"
                                            className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight"
                                        >
                                            Contact Us
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Slider>

                </div>


                {/* Other content */}
                <div className="container-fluid bg-secondary py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 wow fadeIn" data-wow-delay=".1s">
                                <div className="d-flex counter">
                                    <h1 className="me-3 text-primary counter-value">99</h1>
                                    <h5 className="text-white mt-1">
                                        Success in getting happy customer
                                    </h5>
                                </div>
                            </div>
                            <div className="col-lg-3 wow fadeIn" data-wow-delay=".3s">
                                <div className="d-flex counter">
                                    <h1 className="me-3 text-primary counter-value">25</h1>
                                    <h5 className="text-white mt-1">
                                        Thousands of successful business
                                    </h5>
                                </div>
                            </div>
                            <div className="col-lg-3 wow fadeIn" data-wow-delay=".5s">
                                <div className="d-flex counter">
                                    <h1 className="me-3 text-primary counter-value">120</h1>
                                    <h5 className="text-white mt-1">
                                        Total clients who love HighTech
                                    </h5>
                                </div>
                            </div>
                            <div className="col-lg-3 wow fadeIn" data-wow-delay=".7s">
                                <div className="d-flex counter">
                                    <h1 className="me-3 text-primary counter-value">5</h1>
                                    <h5 className="text-white mt-1">
                                        Stars reviews given by satisfied clients
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <About />
            <Service />
            <Project />
            <Blog />
            <Team />
            <Testimonial />

        </div>
    )
}

export default Home_page
