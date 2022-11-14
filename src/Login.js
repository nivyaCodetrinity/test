import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
// import { useHistory } from "react-router-dom";


export default function Login({ setData }) {
    const navigate = useNavigate();




    const [femail, setEmail] = useState("");
    const [fpassword, setPassword] = useState("");

    const [show, setShow] = useState(false);


    const submitData = (e) => {
        e.preventDefault();


        const localData = localStorage.getItem("email");
        const localPass = localStorage.getItem("password");

        if ((localData != femail && localPass != fpassword) || localData != femail) {
            alert("not Valid");
        } else if (localData == femail && localPass != fpassword) {
            alert("Password incorrect");
        } else {
            localStorage.setItem('login', true);
            setShow(true);
            setData(show);
            navigate("/Dashbord");
        }


        console.log(femail, fpassword);

        const name = {
            first: femail,
            last: fpassword,
        }
    }
    const emailData = (e) => {
        setEmail(e.target.value);
    }
    const passwordData = (e) => {
        setPassword(e.target.value);
    }
    let data = localStorage.getItem('login');

    useEffect(() => {
        if (data == true) {
            navigate("/Dashbord");
        }
    }, [])

    return (
        <div>
            <form onSubmit={submitData}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address : </label>
                    <input type="text" className="form-control" value={femail} onChange={emailData} placeholder="Enter email" />

                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password : </label>
                    <input type="password" className="form-control" value={fpassword} onChange={passwordData} placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-primary pl-5 pr-5 ">Login</button>

            </form>
        </div>
    )
}
