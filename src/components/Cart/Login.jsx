import React from 'react';
import { useState } from 'react';
import "./Register.css";
import formimage from '../../assets/images/form.png';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

  

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const [error,setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault();
   signInWithEmailAndPassword(auth, email, password)
   .then((value) => {
    console.log("log in success")
    navigate("/react-app/products")
  })
    .catch((err) => {
      navigate("/react-app/login")
      setError('Something went wrong '+ err.message)
    }
    
    );
   
  }





  return (
  <section className='formContainer'>
    <div className="row">
      <div className="col-md-6">
        <div className="position-relative h-100">
          <img src={formimage} className="position-absolute w-100 h-100 rounded" alt="About" style={{ objectFit: 'cover' }} />
        </div>
      </div>
      <div className="col-md-6">
        <div className='box'>
          <form className="formbox" onSubmit={(handleLogin)}>
            <div className="form">
              <h2>LOG IN</h2>
              <div className="inputBox">
                <input type="email" onChange={(e) => setEmail(e.target.value)} required />
                <span>Email Id</span>
                <i></i>
              </div>
              <div className="inputBox">
                <input type="password" onChange={(e) => setPassword(e.target.value)} required />
                <span>Password</span>
                <i></i>
              </div>
              <div className="links">
                <Link to="/react-app/register">Don't Have a Account</Link>
                <Link to="/react-app/register">Sign up</Link>
              </div>
              <input type="submit" value="Login"/>
              <p className='text-danger'>{error}</p>
            </div>
            
          </form>
          
        </div>
      </div>
    </div>
  </section>
  )
}

export default Login