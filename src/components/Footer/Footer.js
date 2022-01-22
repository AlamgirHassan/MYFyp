import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import "./Footer.css"
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
                                    <li><a href="#" class="d-block">Company</a></li>
                                    <li><a href="#" class="d-block">Our Partners</a></li>
                                    <li><a href="#" class="d-block">Blog</a></li>
                                    <li><a href="#" class="d-block">Team</a></li>
                                    <li><a href="#" class="d-block">Contact Us</a></li>
                                </ul>
                            </div>
                            <div class="col-md-4 mb-md-0 mb-4">
                                <h2 class="sm-heading1">FOR CANDIDATES</h2>
                                <ul class="list-unstyled">
                                    <li><a href="#" class="d-block">Browse Jobs</a></li>
                                    <li><a href="#" class="d-block">Browse Categories</a></li>
                                    <li><a href="#" class="d-block">Submit Resumes</a></li>
                                    <li><a href="#" class="d-block">My Bookmark</a></li>
                                    <li><a href="#" class="d-block">Candidate Dashboard</a></li>
                                </ul>
                            </div>
                            <div class="col-md-4 mb-md-0 mb-4">
                                <h2 class="sm-heading1">FOR COMPANIES</h2>
                                <ul class="list-unstyled">
                                    <li><a href="#" class="d-block">Browse Candidates</a></li>
                                    <li><a href="#" class="d-block">Company Dashboard</a></li>
                                    <li><a href="#" class="d-block">Add Job</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 mb-md-0 mb-4">
                        <h2 class="sm-heading1">Follow Us</h2>
                        <div class="col-md-6 col-lg-4 text-md-right">
                            <ul class="ftco-footer-social p-0">
                                <li class="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span class="ion-logo-twitter"></span></a></li>
                                <li class="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span class="ion-logo-facebook"></span></a></li>
                                <li class="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span class="ion-logo-instagram"></span></a></li>
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
