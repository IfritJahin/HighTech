import React from 'react'
import Components_body from '../components_body/page'
import Image from 'next/image'
import img from '../../public/img/testimonial-1.jpg'
import img2 from '../../public/img/testimonial-2.jpg'
import img3 from '../../public/img/testimonial-3.jpg'
import img4 from '../../public/img/testimonial-4.jpg'
import '../business_testimonial/testimonial.scss'
const Testimonial = () => {
    return (
        <div id="business_testimonial">
            {/* <Components_body / > */}
            <div className="container-fluid testimonial py-5 my-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '600px', }}>
                        <h5 className="text-primary">Our Testimonial</h5>
                        <h1>Our Client Saying!</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel wow fadeIn" data-wow-delay=".5s">
                        <div className="testimonial-item border p-4">
                            <div className="d-flex align-items-center">
                                <div className="">
                                    <Image src={img} alt="description" />
                                </div>
                                <div className="ms-4">
                                    <h4 className="text-secondary">Client Name</h4>
                                    <p className="m-0 pb-3">Profession</p>
                                    <div className="d-flex pe-5">
                                        <i className="fas fa-star me-1 text-primary"></i>
                                        <i className="fas fa-star me-1 text-primary"></i>
                                        <i className="fas fa-star me-1 text-primary"></i>
                                        <i className="fas fa-star me-1 text-primary"></i>
                                        <i className="fas fa-star me-1 text-primary"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="border-top mt-4 pt-3">
                                <p className="mb-0">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.</p>
                            </div>
                        </div>
                        <div className="testimonial-item border p-4">
                            <div className=" d-flex align-items-center">
                                <div className="">
                                    <Image src={img2} alt="description" />
                                </div>
                                <div className="ms-4">
                                    <h4 className="text-secondary">Client Name</h4>
                                    <p className="m-0 pb-3">Profession</p>
                                    <div className="d-flex pe-5">
                                        <i className="fas fa-star me-1 text-primary"></i>
                                        <i className="fas fa-star me-1 text-primary"></i>
                                        <i className="fas fa-star me-1 text-primary"></i>
                                        <i className="fas fa-star me-1 text-primary"></i>
                                        <i className="fas fa-star me-1 text-primary"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="border-top mt-4 pt-3">
                                <p className="mb-0">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.</p>
                            </div>
                        </div>
                        <div className="testimonial-item border p-4">
                            <div className=" d-flex align-items-center">
                                <div className="">
                                    <Image src={img3} alt="description" />
                                </div>
                                <div className="ms-4">
                                    <h4 className="text-secondary">Client Name</h4>
                                    <p className="m-0 pb-3">Profession</p>
                                    <div className="d-flex pe-5">
                                        <i className="fas fa-star me-1 text-primary"></i>
                                        <i className="fas fa-star me-1 text-primary"></i>
                                        <i className="fas fa-star me-1 text-primary"></i>
                                        <i className="fas fa-star me-1 text-primary"></i>
                                        <i className="fas fa-star me-1 text-primary"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="border-top mt-4 pt-3">
                                <p className="mb-0">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.</p>
                            </div>
                        </div>
                        <div className="testimonial-item border p-4">
                            <div className=" d-flex align-items-center">
                                <div className="">
                                    <Image src={img4} alt="description" />
                                </div>
                                <div className="ms-4">
                                    <h4 className="text-secondary">Client Name</h4>
                                    <p className="m-0 pb-3">Profession</p>
                                    <div className="d-flex pe-5">
                                        <i className="fas fa-star me-1 text-primary"></i>
                                        <i className="fas fa-star me-1 text-primary"></i>
                                        <i className="fas fa-star me-1 text-primary"></i>
                                        <i className="fas fa-star me-1 text-primary"></i>
                                        <i className="fas fa-star me-1 text-primary"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="border-top mt-4 pt-3">
                                <p className="mb-0">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testimonial
