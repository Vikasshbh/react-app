import './social-item.css'

const SocialIcon = (props) => {



  return (
    <a className="btn btn-light btn-square rounded-circle me-2" href="">
        {props.children}
    </a>
  )
}

export default SocialIcon