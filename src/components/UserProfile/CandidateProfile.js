import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar'
import img1 from '../../images/cover_img.jpg'
import "./CandidateProfile.css"
import Footer from '../Footer/Footer';
const Userprofile = () => {
  return <>
  <NavigationBar/>
  <br></br>
  <h1 className='text-center'>User Profile</h1>
    <div className='container mt-5 border'>
        <div className='row s-2 g-3'>
            <div className='col-md-6'>
            <img src={img1} className="rounded-circle float-left img1" alt="..."/>
            </div>
            <div className='col-md-6'>
            </div>
            <div className='col-md-6'>
                <table className='table'></table>
                <label for="FName" className='form-label fw-bolder col-md-4'>First Name:</label>
                <label className='form-label ps-5 col-md-8' id='Fname '>FName here</label>
            </div>
            <div className='col-md-6'>
                <label for="LName" className='form-label fw-bolder col-md-4'>Last Name:</label>
                <label className='form-label ps-5 col-md-8' id='Lname'>LName here</label>
            </div>
            <div className='col-md-6'>
                <label for="Email Address" className='form-label fw-bolder col-md-4'>Email Address:</label>
                <label className='form-label ps-5 col-md-8' id='email'>Email here</label>
            </div>
            <div className='col-md-6'>
                <label for="status" className='form-label fw-bolder col-md-4'>Exployment Status</label>
                <label className='form-label ps-5 col-md-8' id='status'>Status here</label>
            </div>
            <div className='col-md-6'>
                <label for="Dbirth" className='form-label fw-bolder col-md-4'>Date Of Birth</label>
                <label className='form-label ps-5 col-md-8' id='Dbirth'>Birth here</label>
            </div>
            <div className='col-md-6'>
                <label for="country" className='form-label fw-bolder col-md-4'>Country</label>
                <label className='form-label ps-5 col-md-8' id='country'>Country here</label>
            </div>
            <div className='col-md-6'>
                <label for="gender" className='form-label fw-bolder col-md-4'>Gender</label>
                <label className='form-label ps-5 col-md-8' id='gender'>Gender here</label>
            </div>
            <div className='col-md-6'>
                <label for="CAddress" className='form-label fw-bolder col-md-4'>Current Address</label>
                <label className='form-label ps-5 col-md-8' id='Caddress'>Address here</label>
            </div>
        </div>
        <br></br>
    </div>

    <Footer/>
  </>;
};

export default Userprofile;