import React from 'react'
import Components_body from '../components_body/page'
import Image from 'next/image'
import img from '../../public/img/project-1.jpg'
import img_2 from '../../public/img/project-2.jpg'
import img_3 from '../../public/img/project-3.jpg'
import img_4 from '../../public/img/project-4.jpg'
import img_6 from '../../public/img/project-6.jpg'
import img_5 from '../../public/img/project-5.jpg'
import '../business_project/project.scss'
const Project = () => {
    return (
        <div id="business_project">
            {/* <Components_body / > */}
            <div className="container-fluid project py-6 my-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '600px' }}>
                        <h5 className="text-primary">Our Project</h5>
                        <h1>Our Recently Completed Projects</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                            <div className="project-item">
                                <div className="project-img">
                                    <Image src={img} className="img-fluid w-100 rounded" alt="description" />
                                    <div className="project-content">
                                        <a href="#" className="text-center">
                                            <h4 className="text-secondary">Web design</h4>
                                            <p className="m-0 text-white">Web Analysis</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                            <div className="project-item">
                                <div className="project-img">
                                    <Image src={img_2} className="img-fluid w-100 rounded" alt="description" />
                                    <div className="project-content">
                                        <a href="#" className="text-center">
                                            <h4 className="text-secondary">Cyber Security</h4>
                                            <p className="m-0 text-white">Cyber Security Core</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                            <div className="project-item">
                                <div className="project-img">
                                    <Image src={img_3} className="img-fluid w-100 rounded" alt="description" />
                                    <div className="project-content">
                                        <a href="#" className="text-center">
                                            <h4 className="text-secondary">Mobile Info</h4>
                                            <p className="m-0 text-white">Upcomming Phone</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                            <div className="project-item">
                                <div className="project-img">
                                    <Image src={img_4} className="img-fluid w-100 rounded" alt="description" />
                                    <div className="project-content">
                                        <a href="#" className="text-center">
                                            <h4 className="text-secondary">Web Development</h4>
                                            <p className="m-0 text-white">Web Analysis</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                            <div className="project-item">
                                <div className="project-img">
                                    <Image src={img_5} className="img-fluid w-100 rounded" alt="description" />
                                    <div className="project-content">
                                        <a href="#" className="text-center">
                                            <h4 className="text-secondary">Digital Marketing</h4>
                                            <p className="m-0 text-white">Marketing Analysis</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                            <div className="project-item">
                                <div className="project-img">
                                    <Image src={img_6} className="img-fluid w-100 rounded" alt="description" />
                                    <div className="project-content">
                                        <a href="#" className="text-center">
                                            <h4 className="text-secondary">keyword Research</h4>
                                            <p className="m-0 text-white">keyword Analysis</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
