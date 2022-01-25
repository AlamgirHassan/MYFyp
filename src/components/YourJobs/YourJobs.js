import React, { useEffect, useState } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';
import img from "../../images/mercedescl600.jpg"
import img1 from "../../images/mercedess680.jpg"
import { NavLink,useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'
import "./YourJobs.css"
import android from "../../images/android.png"
const YourJobs = () => {
    const back=useNavigate();
    const clickjob=(id,email)=>{
        console.log('Jobs',id);
        console.log('Email ',email);
        const mydata={
            id:id,
            email:email
        }
        localStorage.setItem("jobdetail",JSON.stringify(mydata));
        back('/jobdetail');
    }
    const [title, settitle] = useState();
    const [data, setData] = useState([]);
    const [isdata, setisdata] = useState(false);
    const getdata = async () => {
        const data = localStorage.getItem("userData");
        const data1 = JSON.parse(data);

        console.log(data1);

        try {
            const res = await fetch("/recruiter/jobs/" + data1.email, {
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
                if (mydata.message.length > 0) {
                    setisdata(true);
                }
                setData(mydata.message);


                /*setname(mydata.message.name);
                 setemail(mydata.message.email);
                 setphonenumber(mydata.message.phone);
                 setcountry(mydata.message.country);
                 seturl(mydata.message.websiteurl);
                 setaddress(mydata.message.address);*/


            }


        }
        catch (error) {

        }

    }
    useEffect(() => {



        getdata();

    }, []);
    return (
        <>
            <NavigationBar />

            <div className='container'>
                <h4 className='joblistheading'>Your Jobs</h4>
                {isdata == true && <div className="row mt-2 ">
                    {data.map((item) => {
                        return (
                            <div className="col mt-3">
                                <div className="card mycard h-100" >

                                    <img className="my-card-img" src={img} alt="Card image cap" />
                                    <div className="card-body">

                                        <h5 className="card-title">{item.jobtitle}</h5>
                                        <div className="card-text"><p>{item.description}</p> </div>

                                        <div className="card-text-headings">
                                            <p div className="headings1">{item.jobtype}</p>
                                            <p className="headings1">{item.experience}</p>
                                            
                                        </div>
                                        <br></br>

                                        <button type="button" className="btn btn-secondary card-btn" onClick={() =>clickjob (item._id,item.recruiterEmail)}>Check info</button>
                                        <NavLink type='button' to="#" className="btn btn-success card-btn">Edit Job</NavLink>
                                        <NavLink type='button' to="#" className="btn btn-danger card-btn">Delete Job</NavLink>
                                    </div>
                                </div>
                            </div>

                        )
                    })}
                </div>}

                {isdata == false &&
                    <div className='notjobyet'>
                        <h4 className='text-center'>No Job posted by you yet</h4>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>

                }

                <br></br>
            </div>


            <Footer />
        </>
    );
};

export default YourJobs;