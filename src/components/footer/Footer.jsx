import React from 'react'
import GetinTouch from './Links/GetinTouch';
import QuicKLinks from './Links/QuickLinks';
import PopularLink from './Links/PopularLink';
import Newsletter from './Links/Newsletter';
const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-dark text-secondary px-5 mt-5">
                <div className="row gx-5">
                    <div className="col-lg-8 col-md-6">
                        <div className="row gx-5">
                            <div className="col-lg-4 col-md-12 pt-5 mb-5">
                                <GetinTouch text="Get in touch"></GetinTouch>
                                <div className="d-flex mt-4">
                                    <a className="btn btn-primary btn-square rounded-circle me-2" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-primary btn-square rounded-circle me-2" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-primary btn-square rounded-circle me-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn btn-primary btn-square rounded-circle" href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                <QuicKLinks text="quick links"></QuicKLinks>
                            </div>
                            <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                <PopularLink text="Popular Links"></PopularLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <Newsletter head="NEWSLETTER" subead="SUBSCRIBE OUR NEWSLETTER" desc="Amet justo diam dolor rebum lorem sit stet sea justo kasd"></Newsletter>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-4 py-lg-0 px-5" style={{ backgroundColor: '#111111' }}>
                <div className="row gx-5">
                    <div className="col-lg-8">
                        <div className="py-lg-4 text-center">
                            <p className="text-secondary mb-0">&copy; <a className="text-light fw-bold" href="#">Your Site Name</a>. All Rights Reserved.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="py-lg-4 text-center credit">
                            <p className="text-light mb-0">Designed by <a className="text-light fw-bold" href="https://htmlcodex.com">HTML Codex</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer