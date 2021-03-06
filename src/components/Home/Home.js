
import NavigationBar from '../NavigationBar/NavigationBar'
import Footer from '../Footer/Footer'
import React, { useEffect, useState } from 'react'
import { NavLink,Link,useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import img from "../../images/verizon-logo.png"
import img1 from "../../images/692487.jpg"
import android from "../../images/android.png"
import ios from "../../images/ios.png"
import webdevelopment from "../../images/web_development.png"
import datascience from "../../images/data_science.png"
import ai from "../../images/artificial_intelligence.png"
import sd from "../../images/software_development.png"
import csecurity from "../../images/cyber_security.png"
import networking from "../../images/networking.png"
import JobDetail1 from "../JobDetail/JobDetail1"

import './Home.css'
const Home = () => {
    document.body.style.backgroundColor = "#e6f2ff"
    const back=useNavigate();
    const [data, setData] = useState([]);
    const[counter,setcounter]=useState(1);


    /*const clickjob=(id,email)=>{
        console.log('Jobs',id);
        const mydata={
            id:id
        }
        localStorage.setItem("jobsdetail",JSON.stringify(mydata));//
        back('/jobsdetail');
    }*/
    /*
    const clickjob=(id)=>{
        console.log("ID : ",id);
        <JobDetail1 info={id}/>
        back('/jobsdetail');
    }*/
    
    /*const checkUser=async()=>{
        try
        {
            const res=await fetch('/candidate/getcookie',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });
            const data=await res.json();
            //console.log("Data:",data);
            if(res.status!==200)
            {
                const error=new Error(res.error);
                throw error;
            }
        }
        catch(err)
        {
            console.log(err);
            back('/');
        }
    }*/
    const getdata = async () => {
        try {
            const res = await fetch("/recruiter/alljobs", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"

            });
            const mydata = await res.json();
            console.log(mydata.message);
            console.log(mydata.message.length)
            if (res.status != 201) {
                const error = new Error(res.error);
                throw error;
            }
            else {
                
                console.log(mydata.message);
                console.log(mydata.message.length);

                setData(mydata.message);





            }


        }
        catch (error) {
            console.log(error);
            back('/')
        }
    }
    useEffect(() => {


        //checkUser();
        getdata();

    }, []);

    

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
                 
                <div className="row mt-2 ">
                    {data.slice(0,6).map((item) => {
                        return (

                            <div className="col col-lg-4 mt-4">
                                <div className="card mycard h-100" >

                                    <img className="my-card-img" src={img1} alt="Card image cap" />
                                    <div className="card-body">

                                        <h5 className="card-title">{item.jobtitle}</h5>
                                        <div className="card-text"><p>{item.description}</p> </div>

                                        <div className="card-text-headings">
                                            <p div className="headings1">{item.jobtype}</p>
                                            <p className="headings1">{item.experience}</p>

                                        </div>
                                        <br></br>
                                    

                                        {/*<button type="button" className="btn btn-secondary card-btn" onClick={() =>clickjob (item._id)} >Check info</button>*/}

                                        {/*<button type="button" className="btn btn-secondary card-btn" onClick={() =>clickjob (item._id)} {<JobDetail1 info={id}/>} >Check info</button>*/}
                                        <Link to="/jobsdetail" state={{ id: item._id }} type="button" className='btn btn-secondary card-btn'>Check Info</Link>
                                        
                                       
                                        

                                    </div>
                                </div>
                            </div>

                        )
                    })}
                </div>
                <br></br>
                    





                 
                    <NavLink to="/jobslist" className="btn btn-primary btn-lg-primary jobsbutton">Check All Listed Jobs</NavLink>
                    
                    <br></br>

                    <br></br>

                  {/*  <Link to="/example1" state={{ from: "Hello World" }}>Click Me</Link>*/}

                </div>



                <br></br>
                <br></br>
            </div>
            <div className='container-flex categories'>

                <br></br>
                <h1 className="jobsheading1">Categories </h1>
                <div className="container">
                    <div className="row">
                        <div className='col-lg-3 col-md-6 col-sm-6'>

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
                        <div className='col-lg-3 col-md-6 col-sm-6'>
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
                        <div className='col-lg-3 col-md-6 col-sm-6'>
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
                        <div className='col-lg-3 col-md-6 col-sm-6'>
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
                        <div className='col-lg-3 col-md-6 col-sm-6'>

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
                        <div className='col-lg-3 col-md-6 col-sm-6'>
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
                        <div className='col-lg-3 col-md-6 col-sm-6'>
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
                        <div className='col-lg-3 col-md-6 col-sm-6'>
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
