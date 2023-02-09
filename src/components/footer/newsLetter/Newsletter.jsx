import React from 'react';
import EmailForm from './EmailForm';

const Newsletter = (props) => {
    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-5">
                <h4 className="text-uppercase text-white mb-4">{props.head}</h4>
                <h6 className="text-uppercase text-white">{props.subhead}</h6>
                <p className="text-light">{props.desc}</p>
                <EmailForm text="Sign In"></EmailForm>
            </div>
        </>
    )
}

export default Newsletter