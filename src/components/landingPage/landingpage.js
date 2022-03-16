import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import img from '../../images/logo.jpeg'
import img1 from '../../images/cover_img.jpg'
import './landingPage.css'

import CandidateLogin from '../UserProfile/CandidateLogin'
import RecruiterLogin from '../UserProfile/RecruiterLogin'




const Landingpage = () => {

    document.body.style.backgroundColor = "#e6f2ff"
    const [user, setuser] = useState("");
    const [counter,setcounter]=useState();
    
 


    return (
        <>
            <div className='container-fluid'>
                <div className="row">
                    <div className=" col-lg-6 d-none d-sm-block ">
                        <img src={img1} className="my-image" alt="Img" />
                    </div>
                    <div className=" col-lg-6 sm-6">
                        <div className="loginForm">

                            <img src={img} className='logo_pic' alt="Logo" />
                            <h3 className='title'>Welcome User</h3>

                            <div className="row">
                                <div class="col-lg-12 text-center">
                                
                                <button id="btnClear" className="btn btn-success btn-lg center-block" Style="margin:2%2%;" OnClick="btnClear_Click" onClick={() => setuser("Candidate")} >Login as Candidate</button>
                                    <button id="btnSearch" className="btn btn-primary btn-lg center-block" Style="margin:2%2%;" OnClick="btnSearch_Click" onClick={() => setuser("Recruiter")} >Login as Recruiter</button>
                                  
                                </div>
                            </div>

                            {user===""&&<CandidateLogin/>}

                            


                            {user === "Recruiter" && <RecruiterLogin />}
                            {user === "Candidate" && <CandidateLogin />}




                        </div>
                    </div>
                </div>
            </div>











        </>
    )
}

export default Landingpage
