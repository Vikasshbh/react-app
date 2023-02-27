// import React from 'react';
// import { useEffect,useState} from 'react';
// import { getAuth, onAuthStateChanged,signOut } from 'firebase/auth';
// // import {getDatabase,ref,set} from 'firebase/database';
// import app from '../../firebase.js';
// import Signin from './Signin.jsx';
// import { useNavigate } from 'react-router-dom';

import { Component } from "react";

// const auth = getAuth(app);


// const Shopping = () => {

//     const navigate = useNavigate();
//     const[user,setuser] = useState(null);


// useEffect(()=>{
// onAuthStateChanged(auth, user =>{
//     if(user){
//         console.log(user);
//         setuser(user);
//     }else{
//     console.log("you are logged out")
//     setuser();
//     navigate("/react-app/signin")
//     }
// })
// },[])


// console.log(user)
//    if(user == null){
//     return (
//         <>
//  sign in Component here 
//         </>
//       )
//    } 
//    else{
//     return (
//         <>
//             <h2>Hello {user.email}</h2>
//             <button onClick={()=>signOut(auth)}>Log Out</button>
//         </>
//       )
//    }
  
// }

// export default Shopping