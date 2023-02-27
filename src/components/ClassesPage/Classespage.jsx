import { useRef, useEffect, useState } from "react";
import '../ClassesPage/ClassPage.css';
import MemberPage from "../MemberPage/MemberPage";
// import {useHistory} from "react-router-dom";


// const history = useHistory();
const Classespage = () => {

  const memberFirstName = useRef();
  const memberLastName = useRef();
  const memberEmail = useRef();
  const memberAge = useRef();
  const memberPass = useRef();
  const memberTime = useRef();

  const API = 'https://classes-app-400de-default-rtdb.firebaseio.com/memberlist.json';

  const [memberData, setMemberData] = useState([]);
  const [exercise,setExercise] = useState(null)
  useEffect(() => {
    fetch(API,
    ).then((response) => response.json())
      .then((data) => {
        setMemberData(data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [memberData])
  const fetchRadio = (e) => {
    setExercise(e.target.value)
  }


  const formDataSubmit = (e) => {
    e.preventDefault();

    const firstNameValue = memberFirstName.current.value;
    const lastNameValue = memberLastName.current.value;
    const emailValue = memberEmail.current.value;
    const ageValue = memberAge.current.value;
    const passValue = memberPass.current.value;
    const timingvalue = memberTime.current.value

    const data = {
      firstname: firstNameValue,
      lastname: lastNameValue,
      email: emailValue,
      age: ageValue,
      password: passValue,
      exercise: exercise,
      time: timingvalue,
    }

    console.log(data);

  const result =  fetch(API,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    ).then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

      

      // history.push("/");
  }


  // console.log('memberData',memberData)

  const membersList = [];
  for (let member in memberData) {
    const currmember = {
      id: member,
      firstname: memberData[member].firstname,
      lastname: memberData[member].lastname,
      age: memberData[member].age,
      email: memberData[member].email,
      exercise: memberData[member].exercise || 'test',
      time: memberData[member].time,
    }
    // console.log('membersList',membersList);
    membersList.push(currmember)

  }




  return (
    <>
      <form onSubmit={formDataSubmit}>
        <div className="text-center">
          <div className="input-fields">
            <input ref={memberFirstName} type="text" name="fname" placeholder="First Name" />
          </div>
          <div className="input-fields">
            <input ref={memberLastName} type="text" name="lname" placeholder="Last Name" />
          </div>
          <div className="input-fields">
            <input ref={memberAge} type="number" name="age" min="12" max="60" placeholder="Your age" />
          </div>
          <div className="input-fields">
            <input ref={memberEmail} type="email" name="email" placeholder="Email id" />
          </div>
          <div className="exerciseType">
            <input onChange={fetchRadio} type="radio" value="weight-lifting" name="exercise" /> Weight Lifting
            <input onChange={fetchRadio} type="radio" value="jumba" name="exercise" /> Jumba
            <input onChange={fetchRadio} type="radio" value="cardio" name="exercise" /> Cardio
            <input onChange={fetchRadio} type="radio" value="bhangra" name="exercise" /> Bhangra
            <input onChange={fetchRadio} type="radio" value="swimming" name="exercise" /> swimming
          </div>
          <div>
            <label htmlFor="timing">Choose Your Timing:</label>
            <select ref={memberTime} id="timing" name="timing">
              <option  value="6:00 AM - 8:00 AM">6:00 AM - 8:00 AM</option>
              <option  value="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</option>
              <option  value="6:00 PM - 8:00 PM">6:00 PM - 8:00 PM</option>
              <option value="8:00 PM - 10:00 PM">8:00 PM - 10:00 PM</option>
            </select>
          </div>

          <div className="input-fields">
            <input ref={memberPass} type="password" name="password" placeholder="Password" />
          </div>
        </div>
        <div className="text-center mt-3">
          <button>Register</button>
        </div>
      </form>

      {/* <div>
        {membersHtml}
      </div> */}
      <MemberPage membersData={membersList} />
    </>
  )
}

export default Classespage;
