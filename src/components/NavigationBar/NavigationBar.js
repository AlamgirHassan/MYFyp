import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.min.js";
import './NavigationBar.css'


const NavigationBar = () => {
    return (
        <>


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className='container-fluid'>
                    <NavLink className="navbar-brand" to="#">HRAA<span className='navbar-brand-span'>Website</span></NavLink>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link navlink-active" aria-current="page" to="#">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Jobs List</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">My Profile</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Logout</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            




        </>
    )
}

export default NavigationBar
