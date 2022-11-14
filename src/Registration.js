import { Link } from 'react-router-dom';
import React, { useState } from 'react'

export default function Registration({setData}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const submitData = (e) => {
        e.preventDefault();
        // console.log(email,password);

        const name ={
            first : email,
            last : password,
        }
        setData(name);
    }
    const emailData = (e) => {
        setEmail(e.target.value);
    }
    const passwordData = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={submitData} ><br />
                <label>Email : </label>
                <input type="Text" placeholder="Enter Email" value={email} onChange={emailData} /><br /><br />
                <label>Password : </label>
                <input type="password" placeholder="Enter password" value={password} onChange={passwordData} /><br /><br />
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}
