import React from 'react';
import { useState } from 'react';
import BlackHeading from '../general/headings/BlackHeading';
import OrangeHead from '../general/headings/OrangeHead';

const MemberPage = ({ membersData }) => {

    // membersData.forEach(element => {
    //     console.log('data',element.exercise)
    // });
    
    const [memberExercise, setMemberExercise] = useState(membersData);
    const filterType = (exerciseFilter) => {
        const exerciseResult = membersData.filter((element) => {
            return element.exercise === exerciseFilter;
            // return  console.log('filter',element.exercise);
        })
        setMemberExercise([...exerciseResult]);
    }


    return (
        <>
            <div className="container-fluid p-5">
                <div className="mb-5 text-center">
                    <OrangeHead text="members list"></OrangeHead>
                    <BlackHeading text="Timing"></BlackHeading>
                </div>
                <div className="tab-className text-center">
                    <ul className="nav nav-pills d-inline-flex justify-content-center bg-dark text-uppercase rounded-pill mb-5">
                    {/* <li className="nav-item">
                            <button className="nav-link rounded-pill text-white" onClick={() => { filterType('') }}>All</button>
                        </li> */}
                        <li className="nav-item">
                            <button className="nav-link rounded-pill text-white" onClick={() => { filterType('weight-lifting') }}>Weight Lifting</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link rounded-pill text-white" onClick={() => { filterType('jumba') }}>Jumba</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link rounded-pill text-white" onClick={() => { filterType('cardio') }}>Cardio</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link rounded-pill text-white" onClick={() => { filterType('bhangra') }}>Bhangra</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link rounded-pill text-white" onClick={() => { filterType('swimming') }}>Swimming</button>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade show p-0 active">
                            <div className="row g-5">
                                {
                                    memberExercise.map((item) =>
                                        <div key={item.id} className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="bg-dark rounded text-center py-5 px-3" >
                                                <h6 className="text-uppercase text-light mb-3">{item.firstname}</h6>
                                                <h5 className="text-uppercase color-primary">{item.exercise}</h5>
                                                <p className="text-uppercase text-secondary mb-0">{item.time}</p>
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

export default MemberPage