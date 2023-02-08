import React from 'react';

const Button = (props) => {
  return (
    <>
        <a className="btn btn-primary py-md-3 px-md-5 d-none d-lg-block">{props.btnName}</a>
    </>
  )
}

export default Button