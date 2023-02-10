import React from 'react';
import TrainerSchedule from '../Trainers/TrainerSchedule';
import OrangeHead from '../general/headings/OrangeHead';
import BlackHeading from '../general/headings/BlackHeading';
const TrainerSection = () => {




    return (
        <>
            <div className="container-fluid p-5">
                <div className="mb-5 text-center">
                    <OrangeHead text="CLASS SCHEDULE"></OrangeHead>
                    <BlackHeading text="WORKING HOURS"></BlackHeading>
                </div>
                <div className="tab-className text-center">
                    <ul className="nav nav-pills d-inline-flex justify-content-center bg-dark text-uppercase rounded-pill mb-5">
                        <li className="nav-item">
                            <a className="nav-link rounded-pill text-white active">Monday</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link rounded-pill text-white">Tuesday</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link rounded-pill text-white">Wednesday</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link rounded-pill text-white">Thursday</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link rounded-pill text-white">Friday</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link rounded-pill text-white">Saturday</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link rounded-pill text-white">Sunday</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade show p-0 active">
                            <div className="row g-5">
                                <TrainerSchedule></TrainerSchedule>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrainerSection