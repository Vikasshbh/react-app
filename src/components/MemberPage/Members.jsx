import React from 'react';
import { useRef, useState, useEffect } from 'react';

const Members = () => {
    const memberPass = useRef();
    const memberEmail = useRef();
    const API = 'https://classes-app-400de-default-rtdb.firebaseio.com/memberlist.json';

    const [memberData, setMemberData] = useState([]);
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

    const formDataLogin = (e) => {
        e.preventDefault();

        const emailValue = memberEmail.current.value;
        const passValue = memberPass.current.value;

        const data = {
            email: emailValue,
            password: passValue,
        }

        console.log(data);

        fetch(API,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        ).then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    const membersList = [];
    for (let member in memberData) {
        const currmember = {
            email: memberData[member].email,
        }
        // console.log('membersList',membersList);
        membersList.push(currmember);
    }

    return (
        <>
            <form onSubmit={formDataLogin}>
                <div className="text-center">
                    <div className="input-fields">
                        <input ref={memberEmail} type="email" name="email" placeholder="Email id" />
                    </div>
                    <div className="input-fields">
                        <input ref={memberPass} type="password" name="password" placeholder="Password" />
                    </div>
                </div>
                <div className="text-center mt-3">
                    <button>Log in</button>
                </div>
            </form>
        </>
    )
}

export default Members