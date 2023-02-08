import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import { FaApple, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import Button from './components/buttons/button';
import './App.css';


import Social from './components/social';

const App = () => {
  return (
    <div className="App">
    <div className="container-fluid bg-dark px-0">
        <div className="row gx-0">
            <div className="col-lg-3 bg-dark d-none d-lg-block">
                <a className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                    <h1 className="m-0 display-4 color-primary text-uppercase">Gymster</h1>
                </a>
            </div>
            <div className="col-lg-9">
                <div className="row gx-0 bg-secondary d-none d-lg-flex">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                            <i><FaApple></FaApple></i>
                            <h6 className="mb-0">info@example.com</h6>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center py-2">
                        <i><FaApple></FaApple></i>
                            <h6 className="mb-0">+012 345 6789</h6>
                        </div>
                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        <Social icons={[<FaFacebookF/>,<FaTwitter/>,<FaLinkedin/>]} />
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0 px-lg-5">
                    <a href="index.html" className="navbar-brand d-block d-lg-none">
                        <h1 className="m-0 display-4 color-primary text-uppercase">Gymster</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <a href="index.html" className="nav-item nav-link">Home</a>
                            <a href="about.html" className="nav-item nav-link">About</a>
                            <a href="className.html" className="nav-item nav-link active">classes</a>
                            <a href="team.html" className="nav-item nav-link">Trainers</a>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                            <Button btnName="JOIN US"></Button>
                    </div>
                </nav>
            </div>
        </div>
    </div>


    {/* banner */}

    <div className="container-fluid bg-primary p-5 bg-hero mb-5">
        <div className="row py-5">
            <div className="col-12 text-center">
                <h1 className="display-2 text-uppercase text-white mb-md-4">classes</h1>
                <a href="" className="btn btn-primary py-md-3 px-md-5 me-3">Home</a>
                <a href="" className="btn btn-light py-md-3 px-md-5">classes</a>
            </div>
        </div>
    </div>


    {/* className timetable */}
    <div className="container-fluid p-5">
        <div className="mb-5 text-center">
            <h5 className="color-primary text-uppercase">className Schedule</h5>
            <h1 className="display-3 text-uppercase mb-0">Working Hours</h1>
        </div>
        <div className="tab-className text-center">
            <ul className="nav nav-pills d-inline-flex justify-content-center bg-dark text-uppercase rounded-pill mb-5">
                <li className="nav-item">
                    <a className="nav-link rounded-pill text-white active" data-bs-toggle="pill" href="#tab-1">Monday</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link rounded-pill text-white" data-bs-toggle="pill" href="#tab-2">Tuesday</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link rounded-pill text-white" data-bs-toggle="pill" href="#tab-3">Wednesday</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link rounded-pill text-white" data-bs-toggle="pill" href="#tab-4">Thursday</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link rounded-pill text-white" data-bs-toggle="pill" href="#tab-5">Friday</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link rounded-pill text-white" data-bs-toggle="pill" href="#tab-6">Saturday</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link rounded-pill text-white" data-bs-toggle="pill" href="#tab-7">Sunday</a>
                </li>
            </ul>
            <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">6.00am - 8.00am</h6>
                                <h5 className="text-uppercase color-primary">Power Lifting</h5>
                                <p className="text-uppercase text-secondary mb-0">John Deo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">8.00am - 10.00am</h6>
                                <h5 className="text-uppercase color-primary">Body Building</h5>
                                <p className="text-uppercase text-secondary mb-0">James Taylor</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">10.00am - 12.00pm</h6>
                                <h5 className="text-uppercase color-primary">Cardio Program</h5>
                                <p className="text-uppercase text-secondary mb-0">Jack Sparrow</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">12.00pm - 2.00pm</h6>
                                <h5 className="text-uppercase color-primary">Weight Loose</h5>
                                <p className="text-uppercase text-secondary mb-0">Robert Smith</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">2.00pm - 4.00pm</h6>
                                <h5 className="text-uppercase color-primary">Fitness Program</h5>
                                <p className="text-uppercase text-secondary mb-0">Adam Phillips</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">4.00pm - 6.00pm</h6>
                                <h5 className="text-uppercase color-primary">Crossfit className</h5>
                                <p className="text-uppercase text-secondary mb-0">James Alien</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">6.00pm - 8.00pm</h6>
                                <h5 className="text-uppercase color-primary">Muscle Building</h5>
                                <p className="text-uppercase text-secondary mb-0">Petter John</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">8.00pm - 10.00pm</h6>
                                <h5 className="text-uppercase color-primary">Yoga className</h5>
                                <p className="text-uppercase text-secondary mb-0">Jessy Reo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-2" className="tab-pane fade p-0">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">6.00am - 8.00am</h6>
                                <h5 className="text-uppercase color-primary">Power Lifting</h5>
                                <p className="text-uppercase text-secondary mb-0">John Deo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">8.00am - 10.00am</h6>
                                <h5 className="text-uppercase color-primary">Body Building</h5>
                                <p className="text-uppercase text-secondary mb-0">James Taylor</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">10.00am - 12.00pm</h6>
                                <h5 className="text-uppercase color-primary">Cardio Program</h5>
                                <p className="text-uppercase text-secondary mb-0">Jack Sparrow</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">12.00pm - 2.00pm</h6>
                                <h5 className="text-uppercase color-primary">Weight Loose</h5>
                                <p className="text-uppercase text-secondary mb-0">Robert Smith</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">2.00pm - 4.00pm</h6>
                                <h5 className="text-uppercase color-primary">Fitness Program</h5>
                                <p className="text-uppercase text-secondary mb-0">Adam Phillips</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">4.00pm - 6.00pm</h6>
                                <h5 className="text-uppercase color-primary">Crossfit className</h5>
                                <p className="text-uppercase text-secondary mb-0">James Alien</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">6.00pm - 8.00pm</h6>
                                <h5 className="text-uppercase color-primary">Muscle Building</h5>
                                <p className="text-uppercase text-secondary mb-0">Petter John</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">8.00pm - 10.00pm</h6>
                                <h5 className="text-uppercase color-primary">Yoga className</h5>
                                <p className="text-uppercase text-secondary mb-0">Jessy Reo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-3" className="tab-pane fade p-0">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">6.00am - 8.00am</h6>
                                <h5 className="text-uppercase color-primary">Power Lifting</h5>
                                <p className="text-uppercase text-secondary mb-0">John Deo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">8.00am - 10.00am</h6>
                                <h5 className="text-uppercase color-primary">Body Building</h5>
                                <p className="text-uppercase text-secondary mb-0">James Taylor</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">10.00am - 12.00pm</h6>
                                <h5 className="text-uppercase color-primary">Cardio Program</h5>
                                <p className="text-uppercase text-secondary mb-0">Jack Sparrow</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">12.00pm - 2.00pm</h6>
                                <h5 className="text-uppercase color-primary">Weight Loose</h5>
                                <p className="text-uppercase text-secondary mb-0">Robert Smith</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">2.00pm - 4.00pm</h6>
                                <h5 className="text-uppercase color-primary">Fitness Program</h5>
                                <p className="text-uppercase text-secondary mb-0">Adam Phillips</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">4.00pm - 6.00pm</h6>
                                <h5 className="text-uppercase color-primary">Crossfit className</h5>
                                <p className="text-uppercase text-secondary mb-0">James Alien</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">6.00pm - 8.00pm</h6>
                                <h5 className="text-uppercase color-primary">Muscle Building</h5>
                                <p className="text-uppercase text-secondary mb-0">Petter John</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">8.00pm - 10.00pm</h6>
                                <h5 className="text-uppercase color-primary">Yoga className</h5>
                                <p className="text-uppercase text-secondary mb-0">Jessy Reo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-4" className="tab-pane fade p-0">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">6.00am - 8.00am</h6>
                                <h5 className="text-uppercase color-primary">Power Lifting</h5>
                                <p className="text-uppercase text-secondary mb-0">John Deo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">8.00am - 10.00am</h6>
                                <h5 className="text-uppercase color-primary">Body Building</h5>
                                <p className="text-uppercase text-secondary mb-0">James Taylor</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">10.00am - 12.00pm</h6>
                                <h5 className="text-uppercase color-primary">Cardio Program</h5>
                                <p className="text-uppercase text-secondary mb-0">Jack Sparrow</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">12.00pm - 2.00pm</h6>
                                <h5 className="text-uppercase color-primary">Weight Loose</h5>
                                <p className="text-uppercase text-secondary mb-0">Robert Smith</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">2.00pm - 4.00pm</h6>
                                <h5 className="text-uppercase color-primary">Fitness Program</h5>
                                <p className="text-uppercase text-secondary mb-0">Adam Phillips</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">4.00pm - 6.00pm</h6>
                                <h5 className="text-uppercase color-primary">Crossfit className</h5>
                                <p className="text-uppercase text-secondary mb-0">James Alien</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">6.00pm - 8.00pm</h6>
                                <h5 className="text-uppercase color-primary">Muscle Building</h5>
                                <p className="text-uppercase text-secondary mb-0">Petter John</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">8.00pm - 10.00pm</h6>
                                <h5 className="text-uppercase color-primary">Yoga className</h5>
                                <p className="text-uppercase text-secondary mb-0">Jessy Reo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-5" className="tab-pane fade p-0">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">6.00am - 8.00am</h6>
                                <h5 className="text-uppercase color-primary">Power Lifting</h5>
                                <p className="text-uppercase text-secondary mb-0">John Deo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">8.00am - 10.00am</h6>
                                <h5 className="text-uppercase color-primary">Body Building</h5>
                                <p className="text-uppercase text-secondary mb-0">James Taylor</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">10.00am - 12.00pm</h6>
                                <h5 className="text-uppercase color-primary">Cardio Program</h5>
                                <p className="text-uppercase text-secondary mb-0">Jack Sparrow</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">12.00pm - 2.00pm</h6>
                                <h5 className="text-uppercase color-primary">Weight Loose</h5>
                                <p className="text-uppercase text-secondary mb-0">Robert Smith</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">2.00pm - 4.00pm</h6>
                                <h5 className="text-uppercase color-primary">Fitness Program</h5>
                                <p className="text-uppercase text-secondary mb-0">Adam Phillips</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">4.00pm - 6.00pm</h6>
                                <h5 className="text-uppercase color-primary">Crossfit className</h5>
                                <p className="text-uppercase text-secondary mb-0">James Alien</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">6.00pm - 8.00pm</h6>
                                <h5 className="text-uppercase color-primary">Muscle Building</h5>
                                <p className="text-uppercase text-secondary mb-0">Petter John</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">8.00pm - 10.00pm</h6>
                                <h5 className="text-uppercase color-primary">Yoga className</h5>
                                <p className="text-uppercase text-secondary mb-0">Jessy Reo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-6" className="tab-pane fade p-0">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">6.00am - 8.00am</h6>
                                <h5 className="text-uppercase color-primary">Power Lifting</h5>
                                <p className="text-uppercase text-secondary mb-0">John Deo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">8.00am - 10.00am</h6>
                                <h5 className="text-uppercase color-primary">Body Building</h5>
                                <p className="text-uppercase text-secondary mb-0">James Taylor</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">10.00am - 12.00pm</h6>
                                <h5 className="text-uppercase color-primary">Cardio Program</h5>
                                <p className="text-uppercase text-secondary mb-0">Jack Sparrow</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">12.00pm - 2.00pm</h6>
                                <h5 className="text-uppercase color-primary">Weight Loose</h5>
                                <p className="text-uppercase text-secondary mb-0">Robert Smith</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">2.00pm - 4.00pm</h6>
                                <h5 className="text-uppercase color-primary">Fitness Program</h5>
                                <p className="text-uppercase text-secondary mb-0">Adam Phillips</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">4.00pm - 6.00pm</h6>
                                <h5 className="text-uppercase color-primary">Crossfit className</h5>
                                <p className="text-uppercase text-secondary mb-0">James Alien</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">6.00pm - 8.00pm</h6>
                                <h5 className="text-uppercase color-primary">Muscle Building</h5>
                                <p className="text-uppercase text-secondary mb-0">Petter John</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">8.00pm - 10.00pm</h6>
                                <h5 className="text-uppercase color-primary">Yoga className</h5>
                                <p className="text-uppercase text-secondary mb-0">Jessy Reo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-7" className="tab-pane fade p-0">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">6.00am - 8.00am</h6>
                                <h5 className="text-uppercase color-primary">Power Lifting</h5>
                                <p className="text-uppercase text-secondary mb-0">John Deo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">8.00am - 10.00am</h6>
                                <h5 className="text-uppercase color-primary">Body Building</h5>
                                <p className="text-uppercase text-secondary mb-0">James Taylor</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">10.00am - 12.00pm</h6>
                                <h5 className="text-uppercase color-primary">Cardio Program</h5>
                                <p className="text-uppercase text-secondary mb-0">Jack Sparrow</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">12.00pm - 2.00pm</h6>
                                <h5 className="text-uppercase color-primary">Weight Loose</h5>
                                <p className="text-uppercase text-secondary mb-0">Robert Smith</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">2.00pm - 4.00pm</h6>
                                <h5 className="text-uppercase color-primary">Fitness Program</h5>
                                <p className="text-uppercase text-secondary mb-0">Adam Phillips</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">4.00pm - 6.00pm</h6>
                                <h5 className="text-uppercase color-primary">Crossfit className</h5>
                                <p className="text-uppercase text-secondary mb-0">James Alien</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">6.00pm - 8.00pm</h6>
                                <h5 className="text-uppercase color-primary">Muscle Building</h5>
                                <p className="text-uppercase text-secondary mb-0">Petter John</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="bg-dark rounded text-center py-5 px-3">
                                <h6 className="text-uppercase text-light mb-3">8.00pm - 10.00pm</h6>
                                <h5 className="text-uppercase color-primary">Yoga className</h5>
                                <p className="text-uppercase text-secondary mb-0">Jessy Reo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>




    {/* footer start */}

    
   
    </div>
  )
}

export default App
