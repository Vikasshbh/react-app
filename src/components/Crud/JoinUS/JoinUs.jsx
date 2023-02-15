import { useEffect, useRef, useState } from 'react';

function JoinUs() {

  const [userData,setUserData] = useState([]);

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(()=>{
    fetch('https://react-app-868b8-default-rtdb.firebaseio.com/users.json',
  ).then((response) => response.json())
  .then((data) => {
    setUserData(data)
    console.log('data',data)
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  },[userData])

  const handleForm = (e) => {
    e.preventDefault();

    const nameValue = nameRef.current.value;
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    

    const data = {
      name: nameValue,
      email: emailValue,
      password: passwordValue
    }



    fetch('https://react-app-868b8-default-rtdb.firebaseio.com/users.json',
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

  }
  const usersList = [];
  for(let user in userData){
    const currUser = {
      id: user,
      name: userData[user].name,
      email: userData[user].email,
    }
    usersList.push(currUser)
  }

  const usersHtml = usersList.map(user=>{
    return <div key={user.id}>
      <h5>{user.name}</h5>
      <p>{user.email}</p>
    </div>
  })

  console.log(typeof(usersHtml));

  return (
    <>
      <h2>join us</h2>
      <form onSubmit={handleForm}>
        <input ref={nameRef} type="text" name='fullname' />
        <input ref={emailRef} type="email" name='email' />
        <input ref={passwordRef} type="password" name='password' />
        <button type='submit'>Add User</button>
      </form>
      <div>{usersHtml}</div>
    </>
  );
}

export default JoinUs