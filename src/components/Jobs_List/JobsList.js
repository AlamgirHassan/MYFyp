import React, { useEffect, useState } from 'react';
import { NavLink,useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'
import "./JobsList.css"

import img from "../../images/verizon-logo.png"
import img1 from "../../images/692487.jpg"
import android from "../../images/intel-logo.png"
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';
const JobsList = () => {
    const back=useNavigate();
    document.body.style.backgroundColor = "#e6f2ff"
    const [data, setData] = useState([]);


    const clickjob=(id,email)=>{
        console.log('Jobs',id);
        const mydata={
            id:id
        }
        localStorage.setItem("jobsdetail",JSON.stringify(mydata));
        back('/jobsdetail');
    }
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
                //settitle(mydata.message.jobtitle);
                console.log(mydata.message);
                console.log(mydata.message.length);

                setData(mydata.message);





            }


        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {



        getdata();

    }, []);

    return (
        <>

            <NavigationBar />
            <div className='container'>
                <h4 className='joblistheading'>All Jobs List</h4>
                <div className="row mt-2 ">
                    {data.map((item) => {
                        return (
                            <div className="col mt-3">
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

                                        <button type="button" className="btn btn-secondary card-btn" onClick={() =>clickjob (item._id)} >Check info</button>

                                    </div>
                                </div>
                            </div>

                        )
                    })}
                </div>
                <br></br>
                <br></br>
            </div>


            <Footer />

        </>



    );
};

export default JobsList;
