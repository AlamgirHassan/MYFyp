import React,{useEffect,useState} from 'react';
import NavigationBar from '../NavigationBar/NavigationBar'
import img1 from '../../images/cover_img.jpg'
import "./CandidateProfile.css"
import Footer from '../Footer/Footer';
const Recruiterprofile = () => {

    const [name, setname] = useState();
    const[email,setemail]=useState();
    const[phonenumber,setphonenumber]=useState();
    const[country,setcountry]=useState();
    const[url,seturl]=useState();
    const[address,setaddress]=useState();
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
            <h1 className='text-center'>Recruiter Profile</h1>
            <div className='container mt-5 border'>
                <div className='row s-2 g-3'>
                    <div className='col-md-6'>
                        <img src={img1} className="rounded-circle float-left img1" alt="Logo" />
                    </div>
                    <div className='col-md-6'>
                    </div>
                    <div className='col-md-6'>
                        <table className='table'></table>
                        <label for="CName" className='form-label fw-bolder col-md-4'>Company Name:</label>
                        <label className='form-label ps-5 col-md-8' id='Cname '>{name}</label>
                    </div>
                    <div className='col-md-6'>
                        <label for="Cemail" className='form-label fw-bolder col-md-4'>Company Email:</label>
                        <label className='form-label ps-5 col-md-8' id='Cemail'>{email}</label>
                    </div>
                    <div className='col-md-6'>
                        <label for="Contact Number" className='form-label fw-bolder col-md-4'>Contact Number:</label>
                        <label className='form-label ps-5 col-md-8' id='Cnumber'>{phonenumber}</label>
                    </div>
                    <div className='col-md-6'>
                        <label for="Ccountry" className='form-label fw-bolder col-md-4'>Country</label>
                        <label className='form-label ps-5 col-md-8' id='Ccountry'>{country}</label>
                    </div>
                    <div className='col-md-6'>
                        <label for="Csite" className='form-label fw-bolder col-md-4'>Website</label>
                        <label className='form-label ps-5 col-md-8' id='Csite'>{url}</label>
                    </div>
                    <div className='col-md-6'>
                        <label for="cAddress" className='form-label fw-bolder col-md-4'>Address</label>
                        <label className='form-label ps-5 col-md-8' id='Caddress'>{address}</label>
                    </div>
                </div>

            </div>
            <br></br>
            <Footer />
        </>
    );
};

export default Recruiterprofile;