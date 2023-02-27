// import React from 'react';
// import { useRef} from 'react';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// // import {getDatabase,ref,set} from 'firebase/database';
// import app from '../../firebase.js';
// import { useNavigate } from 'react-router-dom';

// const auth = getAuth(app);

// const Signin = () => {

//     const navigate = useNavigate();
//     const memberEmail = useRef();
//     const memberPass = useRef();

//     const signinUser = (e) => {
//         e.preventDefault();
//         const emailValue = memberEmail.current.value;
//         const passValue = memberPass.current.value;
    
//         const data = {
//           email: emailValue,
//           password: passValue,
//         }
    
//         console.log(data);

//         signInWithEmailAndPassword(auth,emailValue,passValue)
//             .then((value) => console.log("sign in success"))
//             .catch((err) => console.log(err));

//         navigate("/react-app/shopping");

//       }
//   return (
//     <>
//          <form onSubmit={signinUser}>
//                 <div className="text-center">
//                     <div className="input-fields">
//                         <input ref={memberEmail} type="email" name="email" placeholder="Email id" />
//                     </div>
//                     <div className="input-fields">
//                         <input ref={memberPass} type="password" name="password" placeholder="Password" />
//                     </div>
//                 </div>
//                 <div className="text-center mt-3">
//                     <button>Log in</button>
//                 </div>
//             </form>
//     </>
//   )
// }

// export default Signin