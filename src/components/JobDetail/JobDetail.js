import React from 'react';
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import android from "../../images/android.png"
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';
import "./JobDetail.css"
const JobDetail = () => {

    document.body.style.backgroundColor = "#e6f2ff"
    return (

        <>

            <NavigationBar />

            <div className='container'>


                <div className='row justify-content-md-center'>
                    <div className='col col-lg-8 col-sm-6  '>
                        <div className="mycontainer">
                            <div class="aligned">
                                <img src={android} className='myimage' alt="" />
                                <div className='mytext'>
                                    <p className='jobtitle'>FRONT-END DEVELOPER NEEDED</p>
                                    <p>BANANA INC</p>
                                    <p className='companyaddress'>PARK AVE,NYC, USA</p>
                                    <p className='divider'>.</p>
                                    <p className='jobtype'>FULL TIME</p>
                                </div>

                            </div>

                            <hr></hr>

                            <h5 className='jobdetailheading'>Job Description</h5>

                            <p>Etiam quis interdum felis, at pellentesque metus. Morbi eget congue lectus. Donec eleifend ultricies urna et euismod. Sed consectetur tellus eget odio aliquet, vel vestibulum tellus sollicitudin. Morbi maximus metus eu eros tincidunt, vitae mollis ante imperdiet. Nulla imperdiet at mauris ut posuere.

                                Nullam tempor, ipsum eget egestas viverra, velit augue fringilla arcu, et sollicitudin enim eros nec est. Suspendisse volutpat velit non porttitor placerat. Mauris porttitor aliquam bibendum. Nam at ultrices justo. Mauris eget urna magna.</p>


                            <div className='positions-heading'>
                                <h5>Skills Required</h5> <p>Skill</p>
                            </div>

                            <div className='positions-heading'>
                                <h5>Number of positions</h5> <p>Seat Number</p>
                            </div>


                            <div className='positions-heading'>
                                <h5>Minimum Qualification</h5> <p>Qualification</p>
                            </div>


                            <div className='positions-heading'>
                                <h5>Experience Required</h5> <p>Experience</p>
                            </div>

                            <div className='positions-heading'>
                                <h5>Job Created On</h5> <p>21-01-2022</p>
                            </div>



                        </div>
                    </div>

                    <div className='col col-lg-4 col-sm-6  '>
                        <div className="mycontainer1">
                            <div className='positions-heading'>
                                <p>BANANA INC</p>
                            </div>
                            <div className='positions-heading'>
                                <p> <i class='fas fa-map-marker-alt'></i>  56/23 Park Ave, Manhattan NYC 10001, USA</p>
                            </div>
                            <div className='positions-heading'>
                                <p> <i class='fas fa-phone'></i>  +92-300-1234567</p>
                            </div>
                            <div className='positions-heading'>
                                <i class='far fa-envelope'></i>  <a href="#">hr@banana.inc</a>
                            </div>

                            <div className='positions-heading'>
                                <i class='fas fa-globe-africa'></i>  <a href="#"> https://banana.inc</a>
                            </div>

                            <hr></hr>
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary" type="button">Submit Your Resume</button>

                            </div>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <Footer />
        </>


    )
};

export default JobDetail;
