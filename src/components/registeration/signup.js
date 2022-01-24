
import React, { useState } from 'react'
import CandidateRegisteration from '../CandidateRegisteration/CandidateRegisteration';
import RecruiterRegisteration from '../CandidateRegisteration/RecruiterRegisteration';
import './signup.css'
import 'bootstrap/dist/css/bootstrap.css'
const Signup = () => {
    const [user, setuser] = useState("Candidate")
    return (
        <>
            <div className="container">

                <br></br>
                <h3 className="text-center">SignUp Form</h3>
                <br></br>
                <div className="row">
                    <div class="col-lg-12 text-center">
                        <button id="btnSearch" className="btn btn-primary btn-lg center-block" Style="margin:2%2%;" OnClick="btnSearch_Click" onClick={() => setuser("Recruiter")} >Register as Recruiter</button>
                        <button id="btnClear" className="btn btn-success btn-lg center-block" Style="margin:2%2%;" OnClick="btnClear_Click" onClick={() => setuser("Candidate")} >Register as Candidate</button>
                    </div>
                </div>


                {user === "Recruiter" && <RecruiterRegisteration />}
                {user === "Candidate" && <CandidateRegisteration />}




            </div>




        </>
    )
}

export default Signup
