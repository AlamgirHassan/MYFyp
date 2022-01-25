import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import "./JobDetail.css"
import 'bootstrap/dist/css/bootstrap.css'
import android from "../../images/android.png"
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';
const JobDetail1 = () => {
    const [jobtype, setjobtype] = useState();
    const [title, setjobtitle] = useState();
    const [description, setdescription] = useState();
    const [skills, setskills] = useState();
    const [positions, setpositions] = useState();
    const [qualification, setqualification] = useState();
    const [experience, setexperience] = useState();
    const [createdon, setcreatedon] = useState();
    const [email, setemail] = useState();
    const [recruitername, setrecruitername] = useState();
    const [recruiteraddress, setrecruiteraddress] = useState();
    const [checkuser, setcheckuser] = useState(false);
    const [recruiterurl, setrecruiterurl] = useState();
    const [recruiterphonenumber, setrecruiterphonenumber] = useState();
    document.body.style.backgroundColor = "#e6f2ff"
    const getuserdata = async (user1) => {
        try {
            const res = await fetch("/recruiter/info/" + user1, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"

            });
            const mydata = await res.json();
            console.log('User', mydata);

            if (res.status === 422) {
                const error = new Error(res.error);
                throw error;
            }
            else {

                setrecruitername(mydata.message.name);
                setrecruiteraddress(mydata.message.address);
                //setrecruitercountry(mydata.message.country);
                setrecruiterphonenumber(mydata.message.phone);
                setrecruiterurl(mydata.message.websiteurl);
                //console.log("URL ",mydata.message.lur);

            }


        }
        catch (error) {

        }
    }
    const getdata = async () => {
        const data1 = localStorage.getItem("jobsdetail");
        const data2 = JSON.parse(data1);
        const id = data2.id;
        const data3 = localStorage.getItem("userData");
        const data4 = JSON.parse(data3);
        if (data4.type === "Candidate") {
            setcheckuser(true);
        }
        else {
            setcheckuser(false);
        }

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
                setemail(mydata.message[0].recruiterEmail);
                getuserdata(mydata.message[0].recruiterEmail);
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
            <div className='container-fluid'>


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
                                <h5>Category</h5> <p>{skills}</p>
                            </div>

                            <div className='positions-heading'>
                                <h5>Number of positions</h5> {positions} <p></p>
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
                                <p>{recruitername}</p>
                            </div>
                            <div className='positions-heading'>
                                <p> <i class='fas fa-map-marker-alt'></i> {recruiteraddress}</p>
                            </div>
                            <div className='positions-heading'>
                                <p> <i class='fas fa-phone'></i>  {recruiterphonenumber}</p>
                            </div>
                            <div className='positions-heading'>
                                <i class='far fa-envelope'></i>  <NavLink to="#">{email}</NavLink>
                            </div>
                            <div className='positions-heading'>
                                <i class='fa fa-globe'></i>  <NavLink to="#">{recruiterurl}</NavLink>
                            </div>
                            {checkuser === true &&
                                <div>
                                    <hr></hr>
                                    <div class="d-grid gap-2">
                                        <button class="btn btn-primary" type="button">Submit Your Resume</button>

                                    </div>
                                </div>}



                            <br></br>
                        </div>
                    </div>
                </div>
                <br></br>
            </div>

            <Footer />
        </>


    );
};

export default JobDetail1;
