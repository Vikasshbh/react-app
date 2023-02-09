import React from 'react'

const Paragraph = (props) => {
    const {varient,gapBottom} =  props;
  return (
    <>
        <p className={`text-${varient ? varient : "normal"}  mb-${gapBottom ? gapBottom : "0"}`}>{props.text}</p>
    </>
  )
}

export default Paragraph