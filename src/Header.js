import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';



export default function Header() {
    const navigate = useNavigate();


    const logoutHandler =()=>{
        localStorage.setItem('login', 1);
        navigate("/Login");

        
    }
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
             
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"><NavLink className="nav-link" to="/Login" >Login</NavLink> <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><NavLink className="nav-link" to="/Dashbord" >Dashbord</NavLink></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><NavLink className="nav-link" to="/Blog" >Blog</NavLink></a>
                        </li>
                    </ul>
                    <button type="submit" onClick={logoutHandler} className="btn btn-primary ml-3 pl-3 pr-3 ">Logout</button>
                </div>
            </nav>
        </div>
    )
}
