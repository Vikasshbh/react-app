import React, { useState } from 'react';
import "./Register.css";
import formimage from '../../assets/images/formtest.png';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { auth, db } from './firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Register() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredantials) => {
        const user = userCredantials.user;
        const initialCartValue = 0;
        console.log(user);
        addDoc(collection(db, "users"), {
          username: username,
          email: email,
          contact: contact,
          password: password,
          uid: user.uid
        }).then(
          console.log("success"),
          navigate("/react-app/login")
        )
      })
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
            <form className="formbox" onSubmit={(handleForm)}>
              <div className="form">
                <h2>SIGN UP</h2>
                <div className="inputBox">
                  <input type="text" value={username} required onChange={(e) => setUsername(e.target.value)} />
                  <span>Username</span>
                  <i></i>
                </div>
                <div className="inputBox">
                  <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                  <span>Email Id</span>
                  <i></i>
                </div>
                <div className="inputBox">
                  <input type="tel" value={contact} minLength="10"
                    maxLength="13" size="13" required onChange={(e) => setContact(e.target.value)} />
                  <span>Contact No.</span>
                  <i></i>
                </div>
                <div className="inputBox">
                  <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                  <span>Password</span>
                  <i></i>
                </div>
                <div className="links">
                  <Link to="/react-app/login">Already Our Member</Link>
                  <Link to="/react-app/login">Sign in</Link>
                </div>
                <input type="submit" value="Register" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register