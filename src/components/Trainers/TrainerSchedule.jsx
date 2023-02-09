import React from 'react'

const TrainerSchedule = (props) => {
    const trainer =
        [
            {id:1, timing: "6:00AM-8:00AM", exercise: "POWER LIFTING", name: "Braun strawman" },
            {id:2,  timing: "8:00AM-10:00AM", exercise: "POWER LIFTING", name: "Braun strawman" },
            {id:3,  timing: "10:00AM-12:00AM", exercise: "POWER LIFTING", name: "Braun strawman" },
            {id:4,  timing: "12:00PM-2:00PM", exercise: "POWER LIFTING", name: "Braun strawman" },
            {id:5,  timing: "2:00PM-4:00PM", exercise: "POWER LIFTING", name: "Braun strawman" },
            {id:6,  timing: "4:00PM-6:00PM", exercise: "POWER LIFTING", name: "Braun strawman" },
            {id:7,  timing: "6:00PM-8:00PM", exercise: "POWER LIFTING", name: "Braun strawman" },
            {id:8,  timing: "8:00PM-10:00PM", exercise: "POWER LIFTING", name: "Braun strawman" }
        ];


    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            {
                trainer.map((item) =>
                    <div key={item.id} className="bg-dark rounded text-center py-5 px-3" >
                        <h6 className="text-uppercase text-light mb-3">{item.timing}</h6>
                        <h5 className="text-uppercase color-primary">{item.exercise}</h5>
                        <p className="text-uppercase text-secondary mb-0">{item.name}</p>
                    </div>
                )
            }
        </div>
    )
}

export default TrainerSchedule