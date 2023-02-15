import React from 'react';
import aboutImg from '../../assets/images/about.jpg';
import OrangeHead from '../general/headings/OrangeHead';
import BlackHeading from '../general/headings/BlackHeading';
import Paragraph from '../general/paragraphs/Paragraph';
import TabButton from '../Buttons/TabButton';


const About = () => {
    return (
        <>
            <div className="container-fluid p-5">
            <div className="row gx-5">
                <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: '500px' }}>
                    <div className="position-relative h-100">
                        <img src={aboutImg} className="position-absolute w-100 h-100 rounded" alt="About" style={{ objectFit: 'cover' }} />
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
        </>
        
    )
}

export default About