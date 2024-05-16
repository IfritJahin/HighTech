import React from 'react'
import '../business_header/header.scss'
import Link from 'next/link'
const Header = () => {
    return (
        <div >
            <div id='business_header'>
                <div className="container-fluid bg-dark py-2 d-none d-md-flex">
                    <div className="container">
                        <div className="d-flex justify-content-between topbar">
                            <div className="top-info">
                                <small className="me-3 text-white-50"><a href="#"><i className="fas fa-map-marker-alt me-2 text-secondary"></i></a>23 Ranking Street, New York</small>
                                <small className="me-3 text-white-50"><a href="#"><i className="fas fa-envelope me-2 text-secondary"></i></a>Email@Example.com</small>
                            </div>
                            <div id="note" className="text-secondary d-none d-xl-flex"><small>Note : We help you to Grow your Business</small></div>
                            <div className="top-link">
                                <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-facebook-f text-primary"></i></a>
                                <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-twitter text-primary"></i></a>
                                <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-instagram text-primary"></i></a>
                                <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle me-0"><i className="fab fa-linkedin-in text-primary"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id='business_header_nav'>
                <div className="container-fluid bg-primary">
                    <div className="container">
                        <nav className="navbar navbar-dark navbar-expand-lg py-0">
                            <Link href="/" className="navbar-brand">
                                <h1 className="text-white fw-bold d-block">High<span className="text-secondary">Tech</span> </h1>
                            </Link>
                            <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse bg-transparent" id="navbarCollapse">
                                <div className="navbar-nav ms-auto mx-xl-auto p-0">
                                    <Link href="/" className="nav-item nav-link active text-secondary">Home</Link>
                                    <Link href="/about" className="nav-item nav-link ">About</Link>
                                    <Link href="/service" className="nav-item nav-link">Services</Link>
                                    <Link href="/project" className="nav-item nav-link">Projects</Link>
                                    <div className="nav-item dropdown">
                                        <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                                        <div className="dropdown-menu rounded">
                                            <Link href="/blog" className="dropdown-item">Our Blog</Link>
                                            <Link href="/team" className="dropdown-item">Our Team</Link>
                                            <Link href="/testimonial" className="dropdown-item">Testimonial</Link>
                                            <Link href="/error" className="dropdown-item">404 Page</Link>
                                        </div>
                                    </div>
                                    <Link href="/contact" className="nav-item nav-link">Contact</Link>
                                </div>
                            </div>
                            <div className="d-none d-xl-flex flex-shirink-0">
                                <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
                                    <Link href="" className="position-relative animated tada infinite">
                                        <i className="fa fa-phone-alt text-white fa-2x"></i>
                                        <div className="position-absolute" style={{ top: '-7px', left: '20px' }}>
                                            <span><i className="fa fa-comment-dots text-secondary"></i></span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="d-flex flex-column pe-4 border-end">
                                    <span className="text-white-50">Have any questions?</span>
                                    <span className="text-secondary">Call: + 0123 456 7890</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-center ms-4 ">
                                    <Link href="#"><i className="bi bi-search text-white fa-2x"></i> </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
