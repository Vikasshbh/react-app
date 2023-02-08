import React from 'react'
import SocialIcon from './social-item'
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
const Social = ({icons}) => {

    console.log(icons)
    return (
        <div className="d-inline-flex align-items-center py-2">
            {icons.map(item=>{
                <SocialIcon>
                    {item}
                 </SocialIcon>
            })}
        </div>
    )
}

export default Social