
import NavigationBar from '../NavigationBar/NavigationBar'
import Footer from '../Footer/Footer'
import React, { useEffect, useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import img from "../../images/mercedescl600.jpg"
import img1 from "../../images/mercedess680.jpg"
import android from "../../images/android.png"
import ios from "../../images/ios.png"
import webdevelopment from "../../images/web_development.png"
import datascience from "../../images/data_science.png"
import ai from "../../images/artificial_intelligence.png"
import sd from "../../images/software_development.png"
import csecurity from "../../images/cyber_security.png"
import networking from "../../images/networking.png"

import './Home.css'
const Home = () => {
    const back=useNavigate();
    /*const callHomePage=async()=>{
        try{
            const res=await fetch("/home",{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });
          
            const data= await res.json();
            console.log(data);
            if(res.status!==200)
            {
                const error=new Error(res.error);
                throw error;
            }

       }catch(err)
        {
            console.log(err);
            back('/');
        }
    }
    useEffect(()=>{
        callHomePage();
    },[]);*/

    

    return (
        <>
            <NavigationBar />
            <div className="container-fluid container1">

                <h1 className='picheading1'>Over 100,000+jobs are waiting for you</h1>

                <div className="input-group">

                    <form >
                        <div className='row'>
                            <div className='col'>
                                <div id="search-autocomplete" className="form-outline">
                                    <input type="search" id="form1" className="form-control" placeholder='Search Job' />

                                </div>
                            </div>
                            <div className='col'>
                                <button type="button" className="btn btn-primary">Search</button>
                            </div>
                        </div>




                    </form>
                </div>



            </div>

            <div className='container'>

                <div className="components">
                    <div className="listed-components">
                        <h1 className="jobsheading">Latest Jobs</h1>
                        <div className="vertical"></div>
                        <NavLink to="/jobslist" className='anchortag'>VIEW ALL JOBS &#8594;</NavLink>

                    </div>


                   


                </div>

                <div className="container jobs_container">
                    <div className="row">
                        <div className="col">
                            <div className="card " >
                                <img className="card-img-top card-img" src={img} alt="Card image cap"  />
                                <div className="card-body">
                                    <h5 className="card-title">QUICK STUDIO</h5>
                                    <p className="card-text"><bold>Web designer Needed</bold></p>
                                    <p className="card-text">Location: Cupertino, CA, USA</p>
                                    <p className="card-text">Type: Full time</p>
                                    <NavLink type='button' to="#" className="btn btn-secondary card-btn">Check Info</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img className="card-img-top card-img" src={img1} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">QUICK STUDIO</h5>
                                    <p className="card-text"><bold>Web designer Needed</bold></p>
                                    <p className="card-text">Location: Cupertino, CA, USA</p>
                                    <p className="card-text">Type: Full time</p>
                                    <NavLink type='button' to="#" className="btn btn-secondary card-btn">Check Info</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card " >
                                <img className="card-img-top card-img" src={img} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">QUICK STUDIO</h5>
                                    <p className="card-text"><bold>Web designer Needed</bold></p>
                                    <p className="card-text">Location: Cupertino, CA, USA</p>
                                    <p className="card-text">Type: Full time</p>
                                    <NavLink type='button' to="#" className="btn btn-secondary card-btn">Check Info</NavLink>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="card " >
                                <img className="card-img-top card-img" src={img} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">QUICK STUDIO</h5>
                                    <p className="card-text"><bold>Web designer Needed</bold></p>
                                    <p className="card-text">Location: Cupertino, CA, USA</p>
                                    <p className="card-text">Type: Full time</p>
                                    <NavLink type='button' to="#" className="btn btn-secondary card-btn">Check Info</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img className="card-img-top card-img" src={img1} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">QUICK STUDIO</h5>
                                    <p className="card-text"><bold>Web designer Needed</bold></p>
                                    <p className="card-text">Location: Cupertino, CA, USA</p>
                                    <p className="card-text">Type: Full time</p>
                                    <NavLink type='button' to="#" className="btn btn-secondary card-btn">Check Info</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card " >
                                <img className="card-img-top card-img" src={img} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">QUICK STUDIO</h5>
                                    <p className="card-text"><bold>Web designer Needed</bold></p>
                                    <p className="card-text">Location: Cupertino, CA, USA</p>
                                    <p className="card-text">Type: Full time</p>
                                    <NavLink type='button' to="#" className="btn btn-secondary card-btn">Check Info</NavLink>
                                </div>
                            </div>
                        </div>



                    </div>






                 
                    <NavLink to="/jobslist" className="btn btn-primary btn-lg-primary jobsbutton">Check All Listed Jobs</NavLink>
                    <br></br>

                    <br></br>

                </div>



                <br></br>
                <br></br>
            </div>
            <div className='container-flex categories'>

                <br></br>
                <h1 className="jobsheading1">Categories</h1>
                <div className="container">
                    <div className="row">
                        <div className='col'>

                            <p>
                                <NavLink to="#">
                                    <div className="image">
                                        <img src={android} className="categories_images" alt="Logo" />
                                        <div className="overlay">
                                            <div className="text">Android Development</div>
                                        </div>
                                    </div>


                                </NavLink>
                            </p>
                        </div>
                        <div className='col'>
                            <p>
                                <NavLink to="#">

                                    <div className="image">
                                        <img src={ios} className="categories_images" alt="Logo" />
                                        <div className="overlay">
                                            <div className="text">iOS Development</div>
                                        </div>
                                    </div>

                                </NavLink>
                            </p>
                        </div>
                        <div className='col'>
                            <p>
                                <NavLink to="#">

                                    <div className="image">
                                        <img src={webdevelopment} className="categories_images" alt="Logo" />
                                        <div className="overlay">
                                            <div className="text">Web Development</div>
                                        </div>
                                    </div>
                                </NavLink>
                            </p>
                        </div>
                        <div className='col'>
                            <p>
                                <NavLink to="#">

                                    <div className="image">
                                        <img src={datascience} className="categories_images" alt="Logo" />
                                        <div className="overlay">
                                            <div className="text">Data Science</div>
                                        </div>
                                    </div>
                                </NavLink>
                            </p>
                        </div>
                    </div>
                    <hr className="row-divider"></hr>
                    <div className="row">
                        <div className='col'>

                            <p>
                                <NavLink to="#">

                                    <div className="image">
                                        <img src={ai} className="categories_images" alt="Logo" />
                                        <div className="overlay">
                                            <div className="text">Artificial Intelligence</div>
                                        </div>
                                    </div>
                                </NavLink>
                            </p>
                        </div>
                        <div className='col'>
                            <p>
                                <NavLink to="#">

                                    <div className="image">
                                        <img src={sd} className="categories_images"  alt="Logo"/>
                                        <div className="overlay">
                                            <div className="text">Software Development</div>
                                        </div>
                                    </div>
                                </NavLink>
                            </p>
                        </div>
                        <div className='col'>
                            <p>
                                <NavLink to="#">

                                    <div className="image">
                                        <img src={csecurity} className="categories_images" alt="Logo" />
                                        <div className="overlay">
                                            <div className="text">Cyber Security</div>
                                        </div>
                                    </div>
                                </NavLink>
                            </p>
                        </div>
                        <div className='col'>
                            <p>
                                <NavLink to="#">

                                    <div className="image">
                                        <img src={networking} className="categories_images" alt="Logo"/>
                                        <div className="overlay">
                                            <div className="text">Networking</div>
                                        </div>
                                    </div>
                                </NavLink>
                            </p>
                        </div>
                    </div>
                </div>
                <br></br>
            </div>
            
            <div className='container-flex eg1'>
                <br></br>
                <h2 className="heading1">Your Dreams Jobs Are Waiting </h2>



                <h6 className='heading2'>Over one million interactions, 50,000 success stories Make yours now.</h6>



                <div className="text-center">
                    <button type="button" className="btn btn-lg btn-warning " >Search Job</button>
                    <button type="button" className="btn btn-lg btn-light">Apply Job Now</button>
                </div>
                <br></br>
            </div>

            <Footer />
        </>
    )
}

export default Home
