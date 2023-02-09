import React from 'react'

const TabButton = (props) => {
    const {btnState} = props
  return (
    <>
        <a className={`nav-link text-uppercase text-center w-100 ${btnState ? btnState : ""}`}>{props.btnText}</a>
    </>
  )
}

export default TabButton