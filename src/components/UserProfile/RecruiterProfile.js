import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar'
import img1 from '../../images/cover_img.jpg'
import "./CandidateProfile.css"
import Footer from '../Footer/Footer';
const Recruiterprofile = () => {
  return <>
  <NavigationBar/>
  <h1 className='text-center'>Recruiter Profile</h1>
    <div className='container mt-5 border'>
        <div className='row s-2 g-3'>
            <div className='col-md-6'>
            <img src={img1} className="rounded-circle float-left img1" alt="..."/>
            </div>
            <div className='col-md-6'>
            </div>
            <div className='col-md-6'>
                <table className='table'></table>
                <label for="CName" className='form-label fw-bolder col-md-4'>Company Name:</label>
                <label className='form-label ps-5 col-md-8' id='Cname '>CName here</label>
            </div>
            <div className='col-md-6'>
                <label for="Cemail" className='form-label fw-bolder col-md-4'>Company Email:</label>
                <label className='form-label ps-5 col-md-8' id='Cemail'>CEmail here</label>
            </div>
            <div className='col-md-6'>
                <label for="Contact Number" className='form-label fw-bolder col-md-4'>Contact Number:</label>
                <label className='form-label ps-5 col-md-8' id='Cnumber'>Cnumber here</label>
            </div>
            <div className='col-md-6'>
                <label for="Ccountry" className='form-label fw-bolder col-md-4'>Country</label>
                <label className='form-label ps-5 col-md-8' id='Ccountry'>Country here</label>
            </div>
            <div className='col-md-6'>
                <label for="Csite" className='form-label fw-bolder col-md-4'>Website</label>
                <label className='form-label ps-5 col-md-8' id='Csite'>Site here</label>
            </div>
            <div className='col-md-6'>
                <label for="cAddress" className='form-label fw-bolder col-md-4'>Address</label>
                <label className='form-label ps-5 col-md-8' id='Caddress'>Country here</label>
            </div>
        </div>
        
    </div>
    <br></br>
    <Footer/>
  </>;
};

export default Recruiterprofile;