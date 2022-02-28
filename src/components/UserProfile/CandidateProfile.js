import React, { useState, useEffect } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar'
import img1 from '../../images/cover_img.jpg'
import "./CandidateProfile.css"
import Footer from '../Footer/Footer';

const Userprofile = () => {
    document.body.style.backgroundColor = "#e6f2ff"
    const [userfname, setuserfname] = useState();
    const [userlname,setuserlname]=useState();
    const[useremail,setuseremail]=useState();
    const[userstatus,setuserstatus]=useState();
    const[userdob,setuserdob]=useState();
    const[usercountry,setusercountry]=useState();
    const[usergender,setusergender]=useState();
    const[useraddress,setuseraddress]=useState();
    const[userimage,setuserimage]=useState();
    const getdata = async () => {
        const data = localStorage.getItem("userData");
        const data1 = JSON.parse(data);
        
        console.log(data1);

        try {
            const res = await fetch("/candidate/info/" + data1.email, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"

            });
            const mydata = await res.json();
            console.log(mydata.message);
            
            if (res.status != 201) {
                const error = new Error(res.error);
                throw error;
            }
            else
            {
                setuserfname(mydata.message.firstname);
                setuserlname(mydata.message.lastname);
                setuseremail(mydata.message.email);
                setuserstatus(mydata.message.status);
                setuserdob(mydata.message.dob);
                setusercountry(mydata.message.country);
                setusergender(mydata.message.gender);
                setuseraddress(mydata.message.address);
                setuserimage(mydata.message.image);
                console.log("Image:",mydata.message.image)
                //setuserimage(mydata.message.image);
            }


        }
        catch (error) {

        }
    }
    useEffect(() => {
        getdata();
    }, []);

    return (<>
        <NavigationBar />
        <br></br>
        <h1 className='text-center'>User Profile</h1>
        <div className='container profilecontainer mt-5 border'>
            <div className='row s-2 g-3'>
                <div className='col-md-6'>
                    <img src={img1} className="rounded-circle float-left img1" alt="Logo" />
                </div>
                <div className='col-md-6'>
                </div>
                </div>
                <div className='row'>

                <div className='col-md-6'>
                    <table className='table'></table>
                    <label for="FName" className='form-label fw-bolder col-md-4'>First Name:</label>
                    <label className='form-label ps-5 col-md-8' id='Fname '>{userfname}</label>
                </div>
                <div className='col-md-6'>
                    <label for="LName" className='form-label fw-bolder col-md-4'>Last Name:</label>
                    <label className='form-label ps-5 col-md-8' id='Lname'>{userlname}</label>
                </div>
                </div>
                <div className='row'>
                <div className='col-md-6'>
                    <label for="Email Address" className='form-label fw-bolder col-md-4'>Email Address:</label>
                    <label className='form-label ps-5 col-md-8' id='email'>{useremail}</label>
                </div>
                <div className='col-md-6'>
                    <label for="status" className='form-label fw-bolder col-md-4'>Employment Status</label>
                    <label className='form-label ps-5 col-md-8' id='status'>{userstatus}</label>
                </div>
                </div>
                <div className='row'>
                <div className='col-md-6'>
                    <label for="Dbirth" className='form-label fw-bolder col-md-4'>Date Of Birth</label>
                    <label className='form-label ps-5 col-md-8' id='Dbirth'>{userdob}</label>
                </div>
                <div className='col-md-6'>
                    <label for="country" className='form-label fw-bolder col-md-4'>Country</label>
                    <label className='form-label ps-5 col-md-8' id='country'>{usercountry}</label>
                </div>
                </div>
                <div className='row'>
                <div className='col-md-6'>
                    <label for="gender" className='form-label fw-bolder col-md-4'>Gender</label>
                    <label className='form-label ps-5 col-md-8' id='gender'>{usergender}</label>
                </div>
                <div className='col-md-6'>
                    <label for="CAddress" className='form-label fw-bolder col-md-4'>Current Address</label>
                    <label className='form-label ps-5 col-md-8' id='Caddress'>{useraddress}</label>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>

        </div>
        <br></br>

        <Footer />
    </>);
};

export default Userprofile;