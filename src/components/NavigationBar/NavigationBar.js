import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './NavigationBar.css'



const NavigationBar = () => {
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
                         
                            <li class="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Candidate Profile
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item text-center" href="/cprofile">Check Profile</a></li>
                                    <li><a class="dropdown-item text-center" href="/ceditform">Edit Profile</a></li>
                                    
                                    <li><a class="dropdown-item text-center" href="/cpass">Change Password</a></li>
                                    <li><a class="dropdown-item text-center" href="#">Logout</a></li>
                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Recruiter Profile
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item text-center" href="/rprofile">Check Profile</a></li>
                                    <li><a class="dropdown-item text-center" href="/reditform">Edit Profile</a></li>
                                    
                                    <li><a class="dropdown-item text-center" href="/cpass">Change Password</a></li>
                                    <li><a class="dropdown-item text-center" href="#">Logout</a></li>
                                </ul>
                            </li>
                           

                        </ul>
                    </div>
                </div>
            </nav>





        </>
    )
}

export default NavigationBar
