import React from 'react';
import Social from '../social';
import { FaApple, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import Button from '../Buttons/Button';
import { useNavigate } from 'react-router-dom';
 



const Header = (props) => {
    // const navigate = useNavigate();
    // navigate("/react-app/register");

  return (
    <>
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
                                    <NavLink to="react-app" className="nav-item nav-link" replace>Home</NavLink>
                                    <NavLink to="react-app/about" className="nav-item nav-link" replace>About</NavLink>
                                    <NavLink to="react-app/classes" className="nav-item nav-link" >classes</NavLink>
                                    <NavLink to="react-app/trainer" className="nav-item nav-link">Trainers</NavLink>
                                    <NavLink to="react-app/members" className="nav-item nav-link">Members</NavLink>
                                </div>
                                <Button btnName="JOIN US"></Button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Header