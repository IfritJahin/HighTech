import React from 'react'
import Components_body from '../components_body/page'
import '../business_404/error.scss'
const Error_page = () => {
    return (
        <div>
            <Components_body />
            <div>

            </div>
            <div className="container-fluid py-5 my-5 wow fadeIn" data-wow-delay="0.3s">
                <div className="container text-center py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                            <h1 className="display-1">404</h1>
                            <h1 className="mb-4">Page Not Found</h1>
                            <p class="mb-4">We’re sorry, the page you have looked htmlFor does not exist in our website! Maybe go to our home page or try to use a search?</p>
                            <a class="btn btn-primary rounded-pill py-3 px-5" href="">Go Back To Home</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error_page
