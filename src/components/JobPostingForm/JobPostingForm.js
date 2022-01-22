import React, { useState } from 'react'
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';

const JobPostingForm = () => {
    const [jobdata, setjobdata] = useState({
        jobtitle: "", skills: "", description: "", positions: "", location: "", experience: "", qualification: "", jobtype: "",
    })
    const handleInputs = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;
        setjobdata({ ...jobdata, [name]: value })
    }
    const PostData = async (e) => {
        e.preventDefault();
        const { jobtitle, skills, description, positions, location, experience, qualification, jobtype } = jobdata;
        console.log("Job Title : ", jobtitle);
        console.log("Skills ", skills);
        console.log("Desciption ", description);
        console.log("Position", positions);
        console.log("Location", location);
        console.log("Experience", experience);
        console.log("Qualification", qualification);
        console.log("Job Type", jobtype);
    }
    return <>
        <NavigationBar/>
        <div className='container mt-5 '>
            <h1>Form for Job Posting</h1>
            <form className='row g-3'>
                <div className='col-md-6'>
                    <label for="Job Title" className='form-label'>Job Title</label>
                    <input className='form-control' type="text" name='jobtitle' id='jobTitle' value={jobdata.jobtitle} onChange={handleInputs} placeholder='Enter Job Title' required></input>
                </div>
                <div className='col-md-6'>
                    <label for="Skills" className='form-label'>Skills</label>
                    <select class="form-select" aria-label="Skills" name='skills' value={jobdata.skills} onChange={handleInputs} id="skills" required>
                        <option selected>Select One Skill</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Android Development">Android Development</option>
                        <option value="Graphic Designing">Graphic Designing</option>
                    </select>
                </div>
                <div className='col-md-12'>
                    <label for="Description" className='form-label'>Description</label>
                    <textarea class="form-control" type="text" name='description' value={jobdata.description} onChange={handleInputs} id='description' placeholder='Enter Full Description' aria-label="With textarea" required></textarea>
                </div>
                <div className='col-md-4'>
                    <label for="positions" className='form-label'>No of Positions</label>
                    <select class="form-select" aria-label="positions" name='positions' value={jobdata.positions} onChange={handleInputs} id="positions" required>
                        <option selected>Select No of Positions</option>
                        <option value="1">1</option>
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
                        <option selected>Select City</option>
                        <option value="Lahore">Lahore</option>
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
                        <option selected>Select Experience</option>
                        <option value="Fresh">Fresh</option>
                        <option value="0-1">0-1</option>
                        <option value="1-2">1-2</option>
                        <option value="2-5">2-5</option>
                        <option value="5-7">5-7</option>
                        <option value="7+">7+</option>
                    </select>
                </div>
                <div className='col-md-6'>
                    <label for="qualification" className='form-label'>Minimum Qualification Required</label>
                    <select class="form-select" aria-label="qualification" name='qualification' value={jobdata.qualification} onChange={handleInputs} id="qualification" required>
                        <option selected>Select Qualification</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Bachelor">Bachelor</option>
                        <option value="Master">Master</option>
                        <option value="PhD">PhD</option>
                    </select>
                </div>
                <div className='col-md-6'>
                    <label for="jobtype" className='form-label'>Job Type</label>
                    <select class="form-select" aria-label="jobtype" name='jobtype' value={jobdata.jobtype} onChange={handleInputs} id="jobtype" required>
                        <option selected>Select Job Type</option>
                        <option value="Internship">Internship</option>
                        <option value="Full Time">Full Time</option>
                        <option value="Part Time">Part Time</option>
                        <option value="Remote">Remote</option>
                    </select>
                </div>
                <br></br><br></br>
                <div class="d-grid d-md-block">
                    <button class="btn btn-primary" onClick={PostData} type="button">Add Job</button>
                </div>
                <br></br><br></br><br></br>
            </form>
        </div>

        <Footer/>
    </>;
};

export default JobPostingForm;