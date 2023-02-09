import React from 'react';

const GetinTouch = (props) => {
    const links = {id:1, address: "123 Street, New York, USA", email: "info@example.com", contact: " \+012 345 67890" }
    return (
        <>
            <h4 className="text-uppercase text-light mb-4">{props.text}</h4>
            <div className="d-flex flex-column justify-content-start">
                {
                    
                        <>
                            <div className="d-flex mb-2">
                                <p className="mb-0">{links.address}</p>
                            </div>
                            <div className="d-flex mb-2">
                                <p className="mb-0">{links.email}</p>
                            </div>
                            <div className="d-flex mb-2">
                                <p className="mb-0">{links.contact}</p>
                            </div>
                        </>
                    
                }
            </div>
        </>
    )
}

export default GetinTouch