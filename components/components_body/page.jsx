
'use client'
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLink } from 'react-bootstrap';
import '../components_body/style.scss'
const Components_body = () => {
    const pathname = usePathname();
    const links = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/service' },
        { name: 'Projects', href: '/project' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Our Blog', href: '/blog' },
        { name: '404 Error', href: '/error' },
        { name: 'Our Team', href: '/team' },
        { name: 'Testimonial', href: '/testimonial' },
    ];

    const currentLink = links.find(link => link.href === pathname);
    const pageName = currentLink ? currentLink.name : 'Page';
    return (
        <div>
            <div className="container-fluid page-header py-5">
                <div className="container text-center py-5">
                    <h1 className="display-2 text-white mb-4 animated slideInDown">{pageName}</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <p className="breadcrumb-item">{pathname}</p>
                        </ol>
                    </nav>
                </div>
            </div>
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
        </div>


    )
}

export default Components_body
