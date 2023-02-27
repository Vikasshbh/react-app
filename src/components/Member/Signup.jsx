// import React from 'react';
// import { useRef,useState} from 'react';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// // import {getDatabase,ref,set} from 'firebase/database';
// import app from '../../firebase.js';
// import { useNavigate } from 'react-router-dom';

// const auth = getAuth(app);
// // const db = getDatabase(app);
// const Signup = () => {

//     const navigate = useNavigate();
 
//     const memberFirstName = useRef();
//     const memberLastName = useRef();
//     const memberEmail = useRef();
//     const memberAge = useRef();
//     const memberPass = useRef();
//     const memberTime = useRef();

//     // const putData = () => {
//     //   set(ref(db, "users/Vikas"),{
//     //     id: 1,
//     //     name: "Vikas",
//     //     age:24
//     //   });
//     // }

//     // const signupUser = () => {
//     //     createUserWithEmailAndPassword(auth, 'vikashbh@gmail.com', 'vikas@123')
//     //         .then((value) => console.log(value));
//     // }

//     const [memberData, setMemberData] = useState([]);
//     const [exercise,setExercise] = useState(null);
//     const fetchRadio = (e) => {
//       setExercise(e.target.value)
//     }


//     const signupUser = (e) => {
//         e.preventDefault();
//         const firstNameValue = memberFirstName.current.value;
//         const lastNameValue = memberLastName.current.value;
//         const emailValue = memberEmail.current.value;
//         const ageValue = memberAge.current.value;
//         const passValue = memberPass.current.value;
//         const timingvalue = memberTime.current.value
    
//         const data = {
//           displayName: firstNameValue + ' ' + lastNameValue,
//           email: emailValue,
//           age: ageValue,
//           password: passValue,
//           exercise: exercise,
//           time: timingvalue,
//         }
    
//         console.log(data);

//         createUserWithEmailAndPassword(auth,emailValue,passValue,displayName,ageValue,timingvalue)
//             .then((value) => console.log(value));


//         navigate("/react-app/signin")
          
//       }




//     return (
//         <>
//             <form onSubmit={signupUser}>
//                 <div className="text-center">
//                     <div className="input-fields">
//                         <input ref={memberFirstName} type="text" name="fname" placeholder="First Name" />
//                     </div>
//                     <div className="input-fields">
//                         <input ref={memberLastName} type="text" name="lname" placeholder="Last Name" />
//                     </div>
//                     <div className="input-fields">
//                         <input ref={memberAge} type="number" name="age" min="12" max="60" placeholder="Your age" />
//                     </div>
//                     <div className="input-fields">
//                         <input ref={memberEmail} type="email" name="email" placeholder="Email id" />
//                     </div>
//                     <div className="exerciseType">
//                         <input onChange={fetchRadio} type="radio" value="weight-lifting" name="exercise" /> Weight Lifting
//                         <input onChange={fetchRadio} type="radio" value="jumba" name="exercise" /> Jumba
//                         <input onChange={fetchRadio} type="radio" value="cardio" name="exercise" /> Cardio
//                         <input onChange={fetchRadio} type="radio" value="bhangra" name="exercise" /> Bhangra
//                         <input onChange={fetchRadio} type="radio" value="swimming" name="exercise" /> swimming
//                     </div>
//                     <div>
//                         <label htmlFor="timing">Choose Your Timing:</label>
//                         <select ref={memberTime} id="timing" name="timing">
//                             <option value="6:00 AM - 8:00 AM">6:00 AM - 8:00 AM</option>
//                             <option value="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</option>
//                             <option value="6:00 PM - 8:00 PM">6:00 PM - 8:00 PM</option>
//                             <option value="8:00 PM - 10:00 PM">8:00 PM - 10:00 PM</option>
//                         </select>
//                     </div>

//                     <div className="input-fields">
//                         <input ref={memberPass} type="password" name="password" placeholder="Password" />
//                     </div>
//                 </div>
//                 <div className="text-center mt-3">
//                     <button>Register</button>
//                 </div>
//             </form>
//         </>
//     )
// }

// export default Signup