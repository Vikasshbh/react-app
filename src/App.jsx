import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './App.css';
import aboutImg from './assets/images/about.jpg';
import { FaApple, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import Button from './components/Buttons/Button';
import BannerHead from './components/general/headings/BannerHead';
import TrainerSchedule from './components/Trainers/TrainerSchedule';
import Footer from './components/footer/Footer';
import Social from './components/social';
import About from './components/About/About';
import { Routes, Route } from 'react-router-dom';
import JoinUs from './components/Crud/JoinUS/JoinUs';

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path='/react-app/join-us' replace element={<JoinUs />} />
            </Routes>
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

            <About></About>

            {/* className timetable */}
            <TrainerSchedule></TrainerSchedule>
            {/* footer start */}
            <Footer></Footer>
        </div>
    )
}

export default App
