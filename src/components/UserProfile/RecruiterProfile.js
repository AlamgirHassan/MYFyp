import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar'
import img1 from '../../images/cover_img.jpg'
import "./CandidateProfile.css"
import Footer from '../Footer/Footer';
const Recruiterprofile = () => {
    const back=useNavigate();
    document.body.style.backgroundColor = "#e6f2ff"
    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [phonenumber, setphonenumber] = useState();
    const [country, setcountry] = useState();
    const [url, seturl] = useState();
    const [address, setaddress] = useState();
    const[image,setimage]=useState();
    const getdata = async () => {
        
        const data = localStorage.getItem("userData");
        const data1 = JSON.parse(data);

        console.log(data1);

        try {
            const res = await fetch("/recruiter/info/" + data1.email, {
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
            else {

                setname(mydata.message.name);
                setemail(mydata.message.email);
                setphonenumber(mydata.message.phone);
                setcountry(mydata.message.country);
                seturl(mydata.message.websiteurl);
                setaddress(mydata.message.address);
                setimage(mydata.message.image);
                console.log(mydata.message.image);
                

            }


        }
        catch (error) {
            console.log("Error : ",error);
            back('/');

        }
    }
    useEffect(() => {
       


        
        getdata();
        


    }, []);

    return (
        <>
            <NavigationBar />
            <br></br>
            <br></br>
            <h1 className='text-center'>Recruiter Profile</h1>
            <div className='container profilecontainer mt-5 border'>
                <div className='row'>
                    <div className='col'>
                        <img src={`http://localhost:8000/recruiter_img/${image}`} className=" img1 myimg " alt="Logo" />
                    </div>
                    
                    </div>
                    <div className='row'>
                    <div className='col-md-6'>
                        <table className='table'></table>
                        <label for="CName" className='form-label font-weight-bold mx-2'>Company Name: </label>
                        <label className='form-label ' id='Cname '>{name}</label>
                    </div>
                    <div className='col-md-6'>
                        <label for="Cemail" className='form-label font-weight-bold mx-2'>Company Email:</label>
                        <label className='form-label' id='Cemail'>{email}</label>
                    </div>
                    </div>
                    <div className='row'>

                    <div className='col-md-6'>
                        <label for="Contact Number" className='form-label font-weight-bold mx-2'>Contact Number:</label>
                        <label className='form-label' id='Cnumber'>{phonenumber}</label>
                    </div>
                    <div className='col-md-6'>
                        <label for="Ccountry" className='form-label font-weight-bold mx-2'>Country:</label>
                        <label className='form-label' id='Ccountry'>{country}</label>
                    </div>
                    </div>
                    <div className='row'>

                    <div className='col-md-6 col-sm-9'>
                        <label for="Csite" className='form-label font-weight-bold mx-2'>Website: </label>
                        <label className='form-label caddress' id='Csite' >{url}</label>
                    </div>
                    <div className='col-md-6'>
                        <label for="cAddress" className='form-label font-weight-bold mx-2'>Address: </label>
                        <label className='form-label ' id='Caddress'>{address}</label>
                    </div>
                </div>

            </div>
            <br></br>
            <Footer />
        </>
    );
};

export default Recruiterprofile;