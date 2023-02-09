import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './App.css';
import aboutImg from './assets/images/about.jpg';
import { FaApple, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import Button from './components/buttons/Button';
import BannerHead from './components/general/headings/BannerHead';
import OrangeHead from './components/general/headings/OrangeHead';
import BlackHeading from './components/general/headings/BlackHeading';
import TrainerSchedule from './components/TrainerSchedule/TrainerSchedule';

import Paragraph from './components/general/paragraphs/Paragraph';
import TabButton from './components/buttons/TabButton';
import Footer from './components/footer/Footer';
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
                                <Social icons={[<FaFacebookF />, <FaTwitter />, <FaLinkedin />]} />
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
                        <BannerHead headText="Classes"></BannerHead>
                        <div className="d-flex justify-content-center">
                            <Button gap="2" btnName="JOIN US"></Button>
                            <Button gap="0" varient="light" btnName="CONTACT US"></Button>
                        </div>
                    </div>
                </div>
            </div>


            {/* about start */}

            <div className="container-fluid p-5">
                <div className="row gx-5">
                    <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: '500px' }}>
                        <div className="position-relative h-100">
                            <img src={aboutImg} className="position-absolute w-100 h-100 rounded" alt="laptop" style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="mb-4">
                            <OrangeHead text="About Us"></OrangeHead>
                            <BlackHeading text="Welcome to Gymster"></BlackHeading>
                        </div>
                        <h4 className="text-body mb-4">Diam dolor diam ipsum tempor sit. Clita erat ipsum et lorem stet no labore lorem sit clita duo justo magna dolore</h4>
                        <Paragraph gapBottom="4" text="Nonumy erat diam duo labore clita. Sit magna ipsum dolor sed ea duo at ut. Tempor sit lorem sit magna ipsum duo. Sit eos dolor ut sea rebum, diam sea rebum lorem kasd ut ipsum dolor est ipsum. Et stet amet justo amet clita erat, ipsum sed at ipsum eirmod labore lorem."></Paragraph>
                        <div className="rounded bg-dark p-5">
                            <ul className="nav nav-pills justify-content-between mb-3">
                                <li className="nav-item w-50">
                                    <TabButton btnState="active" btnText="ABOUT US"></TabButton>
                                </li>
                                <li className="nav-item w-50">
                                    <TabButton btnText="WHY CHOOSE US"></TabButton>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade show active">
                                    <Paragraph varient="secondary" gapBottom="0" text="About us elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna"></Paragraph>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* className timetable */}
            <div className="container-fluid p-5">
                <div className="mb-5 text-center">
                    <OrangeHead text="CLASS SCHEDULE"></OrangeHead>
                    <BlackHeading text="WORKING HOURS"></BlackHeading>
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
                                <TrainerSchedule></TrainerSchedule>
                            </div>
                        </div>
                        <div id="tab-2" className="tab-pane fade p-0">
                            <div className="row g-5">
                                <TrainerSchedule></TrainerSchedule>
                            </div>
                        </div>
                        <div id="tab-3" className="tab-pane fade p-0">
                            <div className="row g-5">
                                <TrainerSchedule></TrainerSchedule>
                            </div>
                        </div>
                        <div id="tab-4" className="tab-pane fade p-0">
                            <div className="row g-5">
                                <TrainerSchedule></TrainerSchedule>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer start */}
            <Footer></Footer>
        </div>
    )
}

export default App
