import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import android from "../../images/android.png"
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';
import "./JobDetail.css"
const JobDetail = () => {


    document.body.style.backgroundColor = "#e6f2ff"
    const [jobtype, setjobtype] = useState();
    const [title, setjobtitle] = useState();
    const [description, setdescription] = useState();
    const [skills, setskills] = useState();
    const [positions, setpositions] = useState();
    const [qualification, setqualification] = useState();
    const [experience, setexperience] = useState();
    const [createdon, setcreatedon] = useState();
    const [useremail, setuseremail] = useState();
    const [recruitername, setrecruitername] = useState();
    const [recruiteraddress, setrecruiteraddress] = useState();
    const [recruitercountry, setrecruitercountry] = useState();
    const [recruiterurl, setrecruiterurl] = useState();
    const [recruiterphonenumber, setrecruiterphonenumber] = useState();
    // let location = useLocation();
    //console.log("product props is", this.props.location.productdetailProps);
    const getuserdata = async () => {
        const data1 = localStorage.getItem("jobdetail");
        const data2 = JSON.parse(data1);
        const id = data2.id;
        const email = data2.email;
        try {
            const res = await fetch("/recruiter/info/" + email, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"

            });
            const mydata = await res.json();
            console.log(mydata);

            if (res.status === 422) {
                const error = new Error(res.error);
                throw error;
            }
            else {
                /*setname(mydata.message.name);
                setemail(mydata.message.email);
                setphonenumber(mydata.message.phone);
                setcountry(mydata.message.country);
                seturl(mydata.message.websiteurl);
                setaddress(mydata.message.address);*/
                setrecruitername(mydata.message.name);
                setrecruiteraddress(mydata.message.address);
                setrecruitercountry(mydata.message.country);
                setrecruiterurl(mydata.message.websiteurl);
                setrecruiterphonenumber(mydata.message.phone);


            }


        }
        catch (error) {

        }
    }
    const getdata = async () => {
        const data1 = localStorage.getItem("jobdetail");
        const data2 = JSON.parse(data1);
        const id = data2.id;
        const email = data2.email;
        setuseremail(email);
        console.log("JOB ID : ", id);
        //console.log("EMAIL :",email);
        try {
            const res = await fetch("/recruiter/detail/" + id, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"

            });
            const mydata = await res.json();
            console.log(mydata.message[0]);
            console.log(mydata.message[0].jobtitle);

            if (res.status === 422) {
                const error = new Error(res.error);
                throw error;
            }
            else {
                setjobtitle(mydata.message[0].jobtitle);
                setjobtype(mydata.message[0].jobtype);
                setdescription(mydata.message[0].description);
                setskills(mydata.message[0].skills);
                setpositions(mydata.message[0].positions);
                setqualification(mydata.message[0].qualification);
                setexperience(mydata.message[0].experience);
                setcreatedon(mydata.message[0].createdAt);
                getuserdata();
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


                <div className='row justify-content-md-center'>
                    <div className='col col-lg-8 col-sm-6  '>
                        <div className="mycontainer">
                            <div class="aligned">
                                <img src={android} className='myimage' alt="Logo" />
                                <div className='mytext'>
                                    <p className='jobtitle'>{title}</p>
                                    <p>{recruitername}</p>
                                    <p className='companyaddress'>{recruiteraddress}</p>
                                    <p className='divider'>.</p>
                                    <p className='jobtype'>{jobtype}</p>
                                </div>

                            </div>

                            <hr></hr>

                            <h5 className='jobdetailheading'>Job Description</h5>

                            <p>{description}</p>


                            <div className='positions-heading'>
                                <h5>Skills Required</h5> <p>{skills}</p>
                            </div>

                            <div className='positions-heading'>
                                <h5>Number of positions</h5> <p>{positions}</p>
                            </div>


                            <div className='positions-heading'>
                                <h5>Minimum Qualification</h5> <p>{qualification}</p>
                            </div>


                            <div className='positions-heading'>
                                <h5>Experience Required</h5> <p>{experience}</p>
                            </div>

                            <div className='positions-heading'>
                                <h5>Job Created On</h5> <p>{createdon}</p>
                            </div>



                        </div>
                    </div>

                    <div className='col col-lg-4 col-sm-6  '>
                        <div className="mycontainer1">
                            <div className='positions-heading'>
                                <p>BANANA INC</p>
                            </div>
                            <div className='positions-heading'>
                                <p> <i class='fas fa-map-marker-alt'></i>  {recruiteraddress}</p>
                            </div>
                            <div className='positions-heading'>
                                <p> <i class='fas fa-phone'></i>  {recruiterphonenumber}</p>
                            </div>
                            <div className='positions-heading'>
                                <i class='far fa-envelope'></i>  <NavLink to="#">{useremail}</NavLink>
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
