'use client'
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import img from '../../public/img/about-1.jpg'
import img_2 from '../../public/img/about-2.jpg'
import p_1 from '../../public/img/team-1.jpg'
import p_2 from '../../public/img/team-2.jpg'
import p_3 from '../../public/img/team-3.jpg'
import p_4 from '../../public/img/team-4.jpg'
import '../business_about/about.scss'
import Components_body from '../components_body/page';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const About = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: <div className="slick-arrow slick-prev"></div>,
        nextArrow: <div className="slick-arrow slick-next"></div>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div id="business_about">
            {/* <Components_body / > */}
            <div className="container-fluid py-5 my-5">
                <div className="container py-5">
                    <div className="row g-5">

                        <div className="col-lg-5 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".3s">
                            <div className="h-100 position-relative">
                                <Image src={img} className="img-fluid w-75 rounded4" alt="description" />
                                <div className="position-absolute w-75" style={{ top: '25%', left: '25%' }}>
                                    <Image src={img_2} className="img-fluid w-100 rounded" alt="description" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".5s">
                            <h5 className="text-primary">About Us</h5>
                            <h1 className="mb-4">About HighTech Agency And It's Innovative IT Solutions</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus. Etiam gravida justo nec erat vestibulum, et malesuada augue laoreet.</p>
                            <p className="mb-4">Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus.</p>
                            <a href="" className="btn btn-secondary rounded-pill px-5 py-3 text-white">More Details</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid pb-5 mb-5  team">
                <div className="team-slider-wrapper m-5 gap-2">
                    <Slider {...settings} className='m-5 gap-2'>
                        <div className="rounded team-item d-flex gap-2 mx-5">
                            <div className="team-content">
                                <div className="team-img-icon">
                                    <div className="team-img rounded-circle">
                                        <Image src={p_1} className="img-fluid w-100 rounded-circle" alt="description" />
                                    </div>
                                    <div className="team-name text-center py-3">
                                        <h4 className="">Full Name</h4>
                                        <p className="m-0">Designation</p>
                                    </div>
                                    <div className="team-icon d-flex justify-content-center pb-4">
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-instagram"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded team-item mx-3">
                            <div className="team-content">
                                <div className="team-img-icon">
                                    <div className="team-img rounded-circle">
                                        <Image src={p_2} className="img-fluid w-100 rounded-circle" alt="description" />
                                    </div>
                                    <div className="team-name text-center py-3">
                                        <h4 className="">Full Name</h4>
                                        <p className="m-0">Designation</p>
                                    </div>
                                    <div className="team-icon d-flex justify-content-center pb-4">
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-instagram"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded team-item mx-3">
                            <div className="team-content">
                                <div className="team-img-icon">
                                    <div className="team-img rounded-circle">
                                        <Image src={p_3} className="img-fluid w-100 rounded-circle" alt="description" />
                                    </div>
                                    <div className="team-name text-center py-3">
                                        <h4 className="">Full Name</h4>
                                        <p className="m-0">Designation</p>
                                    </div>
                                    <div className="team-icon d-flex justify-content-center pb-4">
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-instagram"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded team-item mx-3">
                            <div className="team-content">
                                <div className="team-img-icon">
                                    <div className="team-img rounded-circle">
                                        <Image src={p_4} className="img-fluid w-100 rounded-circle" alt="description" />
                                    </div>
                                    <div className="team-name text-center py-3">
                                        <h4 className="">Full Name</h4>
                                        <p className="m-0">Designation</p>
                                    </div>
                                    <div className="team-icon d-flex justify-content-center pb-4">
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-instagram"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>

        </div>
    )
}

export default About
