import React from 'react';

const Button = (props) => {
  const {varient,gap}=props
  return (
    <>
        <a className={`btn btn-${varient ? varient : "primary"} py-md-3 px-md-5 d-none d-lg-block me-${gap ? gap : "0"}`} >{props.btnName}</a>
    </>
  )
}

export default Button