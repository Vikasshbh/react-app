// import React from 'react';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// // import {getDatabase,ref,set} from 'firebase/database';
// import app from '../../firebase.js';

// const auth = getAuth(app);

// // const db = getDatabase(app);

// const TrainerPage = () => {

//   // const putData = () => {
//   //   set(ref(db, "users/Vikas"),{
//   //     id: 1,
//   //     name: "Vikas",
//   //     age:24
//   //   });
//   // }

//   const signupUser=()=>{
//     createUserWithEmailAndPassword(auth,'vikas456@gmail.com','123456')
//     .then((value)=>console.log(value));
//   }



  
//   return (
//     <>
//       <h1>React firbase</h1>
//       <button onClick={signupUser} >Register</button>
//     </>
//   )
// }

// export default TrainerPage