import React from 'react';

const EmailForm = (props) => {
  return (
    <>
      <form action="">
        <div className="input-group">
          <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
          <button className="btn btn-dark">{props.text}</button>
        </div>
      </form>
    </>
  )
}

export default EmailForm