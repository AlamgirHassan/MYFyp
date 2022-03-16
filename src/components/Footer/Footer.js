import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import "./Footer.css"
import {NavLink} from "react-router-dom"
const Footer = () => {


    return (

        <>
            <div className='container-fluid my-footer'>
                <br>
                </br>
                <br>
                </br>
                <div class="row">
                    <div class="col-md-7">
                        <div class="row">
                            <div class="col-md-4 mb-md-0 mb-4">
                                <h2 class="sm-heading1">ABOUT</h2>
                                <ul class="list-unstyled">
                                    <li><NavLink to="#" class="d-block">Company</NavLink></li>
                                    <li><NavLink to="#" class="d-block">Our Partners</NavLink></li>
                                    <li><NavLink to="#" class="d-block">Blog</NavLink></li>
                                    <li><NavLink to="#" class="d-block">Team</NavLink></li>
                                    <li><NavLink to="#" class="d-block">Contact Us</NavLink></li>
                                </ul>
                            </div>
                            <div class="col-md-4 mb-md-0 mb-4">
                                <h2 class="sm-heading1">FOR CANDIDATES</h2>
                                <ul class="list-unstyled">
                                    <li><NavLink to="#" class="d-block">Browse Jobs</NavLink></li>
                                    <li><NavLink to="#" class="d-block">Browse Categories</NavLink></li>
                                    <li><NavLink to="#" class="d-block">Submit Resumes</NavLink></li>
                                    <li><NavLink to="#" class="d-block">My Bookmark</NavLink></li>
                                    <li><NavLink to="#" class="d-block">Candidate Dashboard</NavLink></li>
                                </ul>
                            </div>
                            <div class="col-md-4 mb-md-0 mb-4">
                                <h2 class="sm-heading1">FOR COMPANIES</h2>
                                <ul class="list-unstyled">
                                    <li><NavLink to="#" class="d-block">Browse Candidates</NavLink></li>
                                    <li><NavLink to="#" class="d-block">Company Dashboard</NavLink></li>
                                    <li><NavLink to="#" class="d-block">Add Job</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 mb-md-0 mb-4">
                        <h2 class="sm-heading1">Follow Us</h2>
                        <div class="col-md-6 col-lg-4 text-md-right">
                            <ul class="ftco-footer-social p-0">
                                <li class="ftco-animate"><NavLink to="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span class="ion-logo-twitter"></span></NavLink></li>
                                <li class="ftco-animate"><NavLink to="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span class="ion-logo-facebook"></span></NavLink></li>
                                <li class="ftco-animate"><NavLink to="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span class="ion-logo-instagram"></span></NavLink></li>
                            </ul>
                        </div>
                    </div>

                    <div class="row mt-5 pt-4 border-top">
                        <div class="col-md-6 col-lg-8 mb-md-0 mb-4">
                            <p class="copyright mb-0">
                                Copyright &copy; All rights reserved 2022-2023.
                            </p>
                        </div>
                    </div>

                    
                </div>
                <br></br>
                    <br></br>
                    <br></br>
            </div>



        </>

    )
};

export default Footer;
