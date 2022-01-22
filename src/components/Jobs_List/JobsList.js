import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import "./JobsList.css"
import img from "../../images/mercedescl600.jpg"
import img1 from "../../images/mercedess680.jpg"
import android from "../../images/android.png"
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';
const JobsList = () => {
    return (
        <>

            <NavigationBar/>
            <div className='container'>
                <h4 className='joblistheading'>All Jobs List</h4>
                <div className="row">
                    <div className="col ">


                        <div className="card " >
                            <img className="my-card-img" src={img} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">UI/UX designer needed</h5>
                                <div className="card-text"><p>TERMS OF REFERENCE Post Title: Provincial Coordinator Division: LEAD for SDGs Programme, Pakistan Duty Station: Quetta Duration: One-year contract and extendable Date Posted: 15 January 2022 Cl</p> </div>

                                <div className="card-text-headings">
                                    <p div className="headings1">Full Time</p>
                                    <p className="headings1">1 Year Experience</p>
                                </div>
                                <br></br>

                                <button type='button' className="btn btn-primary card-btn">Apply Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card " >
                            <img className="my-card-img" src={img1} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">User Experience Designer</h5>
                                <div className="card-text"><p>Organization Civil Society Human and Institutional Development Programme (CHIP) is a registered not-for-profit organization working out of Islamabad in the less-developed, marginalised and remote are </p> </div>

                                <div className="card-text-headings">
                                    <p div className="headings1">Full Time</p>
                                    <p className="headings1">1 Year Experience</p>
                                </div>
                                <br></br>

                                <button type='button' className="btn btn-primary card-btn">Apply Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card " >
                            <img className="my-card-img" src={android} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">UX designer needed</h5>
                                <div className="card-text"><p>National Disaster Risk Management Fund (NDRMF) is a government-owned not-for-profit company, established under Section 42 of the Companies Act 2017. It provides grant financing for projects that contr ....</p> </div>

                                <div className="card-text-headings">
                                    <p div className="headings1">Full Time</p>
                                    <p className="headings1">1 Year Experience</p>
                                </div>
                                <br></br>

                                <button type='button' className="btn btn-primary card-btn">Apply Now</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col ">


                        <div className="card " >
                            <img className="my-card-img" src={img} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">UI/UX designer needed</h5>
                                <div className="card-text"><p>TERMS OF REFERENCE Post Title: Provincial Coordinator Division: LEAD for SDGs Programme, Pakistan Duty Station: Quetta Duration: One-year contract and extendable Date Posted: 15 January 2022 Cl</p> </div>

                                <div className="card-text-headings">
                                    <p div className="headings1">Full Time</p>
                                    <p className="headings1">1 Year Experience</p>
                                </div>
                                <br></br>

                                <button type='button' className="btn btn-primary card-btn">Apply Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card " >
                            <img className="my-card-img" src={img1} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">User Experience Designer</h5>
                                <div className="card-text"><p>Organization Civil Society Human and Institutional Development Programme (CHIP) is a registered not-for-profit organization working out of Islamabad in the less-developed, marginalised and remote are </p> </div>

                                <div className="card-text-headings">
                                    <p div className="headings1">Full Time</p>
                                    <p className="headings1">1 Year Experience</p>
                                </div>
                                <br></br>

                                <button type='button' className="btn btn-primary card-btn">Apply Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card " >
                            <img className="my-card-img" src={android} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">UX designer needed</h5>
                                <div className="card-text"><p>National Disaster Risk Management Fund (NDRMF) is a government-owned not-for-profit company, established under Section 42 of the Companies Act 2017. It provides grant financing for projects that contr ....</p> </div>

                                <div className="card-text-headings">
                                    <p div className="headings1">Full Time</p>
                                    <p className="headings1">1 Year Experience</p>
                                </div>
                                <br></br>

                                <button type='button' className="btn btn-primary card-btn">Apply Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
            </div>


        <Footer/>

        </>



    );
};

export default JobsList;
