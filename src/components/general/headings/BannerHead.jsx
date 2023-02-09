import React from 'react'

const BannerHead = (props) => {
  return (
    <>
        <h1 className="display-2 text-uppercase text-white mb-md-4">{props.headText}</h1>
    </>
  )
}

export default BannerHead