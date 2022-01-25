import React, { useState } from 'react'
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';
import ErrorMessage from '../othercomponents/ErrorMessage';
import Loading from '../othercomponents/Loading';
import { useNavigate } from 'react-router-dom';
const JobPostingForm = () => {
    document.body.style.backgroundColor = "#e6f2ff"
    const back=useNavigate();
    const [jobdata, setjobdata] = useState({
        jobtitle: "", skills: "Web Development", description: "", positions: "1", location: "Lahore", experience: "Fresh", qualification: "Intermediate", jobtype: "Internship",
    })
    const [message, setmessage] = useState(null);
    const [error, seterror] = useState(false);
    const [loading, setloading] = useState(false);

    const handleInputs = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;
        setjobdata({ ...jobdata, [name]: value })
    }
    const PostData = async (e) => {
        e.preventDefault();
        const data = localStorage.getItem("userData");
        const data1 = JSON.parse(data);
        console.log(data1.email);


        setloading(true);
        const { jobtitle, skills, description, positions, location, experience, qualification, jobtype } = jobdata;
        if (jobtitle === "" || description === "") {
            console.log("Please fill all the required fields");
            setmessage("Please fill all the required fields");
            setloading(false);
        }
        else {
            setmessage(null);
            try {
                const res = await fetch("/recruiter/addjob", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        recruiterEmail: data1.email,
                        jobtitle: jobtitle,
                        skills: skills,
                        description: description,
                        positions: positions,
                        location: location,
                        experience: experience,
                        qualification: qualification,
                        jobtype: jobtype,
                        status: "open"
                    })
                });
                const data = await res.json();
                console.log("Data : ", data);
                if (res.status == 422 || !data) {
                    //window.alert("Invalid Registration");
                    //console.log("Error ",data.error);
                    console.log("Registeration Invalid");

                    seterror(data.error);
                    setloading(false);
                }
                else if (res.status == 500) {
                    seterror(data.message);
                    setloading(false);
                }
                else {
                    console.log('Resp ', data.message);
                   
                    seterror(false);
                    setloading(false);
                    back('/rprofile');
                }
            }
            catch (error) {
                seterror(error.response.data.message);
                setloading(false);
            }
        }
      
    }
    return <>
        <NavigationBar />
        <div className='container mt-5 '>
            <h1>Form for Job Posting</h1>
            <form method="POST">
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
                {loading && <Loading />}
                <div class="row">


                    <div className='col-md-6'>
                        <label for="Job Title" className='form-label'>Job Title</label>
                        <input className='form-control' type="text" name='jobtitle' id='jobTitle' value={jobdata.jobtitle} onChange={handleInputs} placeholder='Enter Job Title' required></input>
                    </div>
                    <div className='col-md-6'>
                        <label for="Skills" className='form-label'>Category</label>
                        <select class="form-select" aria-label="Skills" name='skills' value={jobdata.skills} onChange={handleInputs} id="skills" required>

                            <option value="Web Development" selected>Web Development</option>
                            <option value="Android Development">Android Development</option>
                            <option value="Graphic Designing">Graphic Designing</option>
                            <option value="iOS development">iOS Development</option>
                            <option value="Data Science">Data Science</option>
                            <option value="Artificial Intelligence">Artificial Intelligence</option>
                            <option value="Cyber Security">Cyber Security</option>
                            <option value="Networking">Networking</option>
                            
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <label for="Description" className='form-label'>Description</label>
                        <textarea class="form-control" type="text" name='description' value={jobdata.description} onChange={handleInputs} id='description' placeholder='Enter Full Description' aria-label="With textarea" required></textarea>
                    </div>
                </div>
                <div className='row'>


                    <div className='col-md-4'>
                        <label for="positions" className='form-label'>No of Positions</label>
                        <select class="form-select" aria-label="positions" name='positions' value={jobdata.positions} onChange={handleInputs} id="positions" required>

                            <option value="1" selected>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="5+">5+</option>
                        </select>
                    </div>
                    <div className='col-md-4'>
                        <label for="location" className='form-label'>Location</label>
                        <select class="form-select" aria-label="location" name='location' value={jobdata.location} onChange={handleInputs} id="location" required>
                            <option value="Lahore" selected>Lahore</option>
                            <option value="Islamabad">Islamabad</option>
                            <option value="Karachi">Karachi</option>
                            <option value="Faisalabad">Faisalabad</option>
                            <option value="Peshawar">Peshawar</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className='col-md-4'>
                        <label for="experience" className='form-label'>Experience Required</label>
                        <select class="form-select" aria-label="experience" name='experience' value={jobdata.experience} onChange={handleInputs} id="experience" required>
                            <option value="Fresh" selected>Fresh</option>
                            <option value="Less than a year">Less than a year</option>
                            <option value="1-2 years">1-2 years</option>
                            <option value="2-5 years">2-5 years</option>
                            <option value="5-7 years">5-7 years</option>
                            <option value="7+ years">7+ years</option>
                        </select>
                    </div>
                </div>
                <div className='row'>


                    <div className='col-md-6'>
                        <label for="qualification" className='form-label'>Minimum Qualification Required</label>
                        <select class="form-select" aria-label="qualification" name='qualification' value={jobdata.qualification} onChange={handleInputs} id="qualification" required>
                            <option value="Intermediate" select>Intermediate</option>
                            <option value="Bachelor">Bachelor</option>
                            <option value="Master">Master</option>
                            <option value="PhD">PhD</option>
                        </select>
                    </div>
                    <div className='col-md-6'>
                        <label for="jobtype" className='form-label'>Job Type</label>
                        <select class="form-select" aria-label="jobtype" name='jobtype' value={jobdata.jobtype} onChange={handleInputs} id="jobtype" required>
                            <option value="Internship" selected>Internship</option>
                            <option value="Full Time">Full Time</option>
                            <option value="Part Time">Part Time</option>
                            <option value="Remote">Remote</option>
                        </select>
                    </div>
                </div>
                <br></br><br></br>
               
                    <button class="btn btn-primary" onClick={PostData} type="button">Add Job</button>
                
                <br></br><br></br><br></br>
                <br></br>


            </form>
        </div>

        <Footer />
    </>;
};

export default JobPostingForm;