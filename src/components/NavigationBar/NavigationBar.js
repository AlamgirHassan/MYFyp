import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './NavigationBar.css'



const NavigationBar = () => {
    const [usertype, setusertype] = useState("");
    const[username,setusername]=useState("");

    useEffect(()=>{
        const data=localStorage.getItem("userData");
        const data1=JSON.parse(data);
        //console.log(data1.email);
        //console.log(data1.type);
        setusertype(data1.type);
        setusername(data1. username);
    },[]);
   
    return (
        <>


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className='container-fluid'>
                    <NavLink className="navbar-brand" to="/home">HRAA<span className='navbar-brand-span'>Website</span></NavLink>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link navlink-active" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/jobslist">Jobs List</NavLink>
                            </li>
                            
                            {usertype==="Candidate" &&<li class="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {username}
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink class="dropdown-item text-center" to="/cprofile">Your Profile</NavLink></li>
                                    <li><NavLink class="dropdown-item text-center" to="/ceditform">Edit Profile</NavLink></li>
                                    <li><NavLink class="dropdown-item text-center" to="/cpass">Change Password</NavLink></li>
                                    <li><NavLink class="dropdown-item text-center" to="/logout">Logout</NavLink></li>
                                </ul>
                            </li>}
                            
                            {usertype==="Recruiter" && <li class="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {username}
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink class="dropdown-item text-center" to="/rprofile">Check Profile</NavLink></li>
                                    <li><NavLink class="dropdown-item text-center" to="/reditform">Edit Profile</NavLink></li>
                                    
                                    <li><NavLink class="dropdown-item text-center" to="/cpass">Change Password</NavLink></li>
                                    <li><NavLink class="dropdown-item text-center" to="/jform">Post Job</NavLink></li>
                                    <li><NavLink class="dropdown-item text-center" to="/yourjobs">Your Jobs</NavLink></li>
                                    <li><NavLink class="dropdown-item text-center" to="/candidatelist">Candidates List</NavLink></li>
                                    <li><NavLink class="dropdown-item text-center" to="/logout">Logout</NavLink></li>
                                </ul>
                            </li>}
                            
                           

                        </ul>
                    </div>
                </div>
            </nav>





        </>
    )
}

export default NavigationBar
