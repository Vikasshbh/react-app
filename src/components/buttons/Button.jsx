const Button = (props) => {
  let {varient,gap}=props

  return (
    <>
        <a className={`btn btn-${varient ? varient : "primary"} py-md-3 px-md-5 d-none d-lg-block me-${gap ? gap : "0"}`} >{props.btnName}</a>
    </>
  )
}

export default Button