import React, { useState } from 'react';
import OrangeHead from '../general/headings/OrangeHead';
import BlackHeading from '../general/headings/BlackHeading';
import { Trainers } from './trainers';

const TrainerSchedule = (props) => {
        const[trainerData, setTrainerData]=useState(Trainers);
        const filterSchedule = (dayFilter)=>{
           const filterResult = Trainers.filter((element)=>{
                return element.day === dayFilter;
            })
           setTrainerData([...filterResult]);        
        }

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
                            <button className="nav-link rounded-pill text-white" onClick={()=>{filterSchedule('monday')}}>Monday</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link rounded-pill text-white" onClick={()=>{filterSchedule('tuesday')}}>Tuesday</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link rounded-pill text-white" onClick={()=>{filterSchedule('wednesday')}}>Wednesday</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link rounded-pill text-white" onClick={()=>{filterSchedule('thursday')}}>Thursday</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link rounded-pill text-white" onClick={()=>{filterSchedule('friday')}}>Friday</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link rounded-pill text-white" onClick={()=>{filterSchedule('saturday')}}>Saturday</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link rounded-pill text-white" onClick={()=>{filterSchedule('sunday')}}>Sunday</button>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade show p-0 active">
                            <div className="row g-5">
                                {
                                    trainerData.map((item) =>
                                        <div key={item.id} className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="bg-dark rounded text-center py-5 px-3" >
                                                <h6 className="text-uppercase text-light mb-3">{item.timing}</h6>
                                                <h5 className="text-uppercase color-primary">{item.exercise}</h5>
                                                <p className="text-uppercase text-secondary mb-0">{item.name}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrainerSchedule