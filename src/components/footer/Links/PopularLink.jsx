import React from 'react';

const PopularLink = (props) => {
    const links = [{id: 1,label: "Home", url: "/home"},
    {id: 2,label: "About Us", url: "/about-us"},
    {id: 3,label: "Class Schedule", url: "/class-schedule"},
    {id: 4,label: "Our Trainers", url: "/our-trainer"},
    {id: 5,label: "Latest Blog", url: "/latest-blog"},
    {id: 6,label: "Contact Us", url: "/contact-us"}
    ];
    return (
        <>
            <h4 className="text-uppercase text-light mb-4">{props.text}</h4>
            <div className="d-flex flex-column justify-content-start">
                {
                links.map((item) =>
                    <a key={item.id} className="text-secondary mb-2" href={item.url}><i className="bi bi-arrow-right text-primary me-2"></i>{item.label}</a>
                )
                }
            </div>
        </>
    )
}

export default PopularLink