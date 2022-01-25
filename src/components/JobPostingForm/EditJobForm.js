import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/NavigationBar';
import ErrorMessage from '../othercomponents/ErrorMessage';
import Loading from '../othercomponents/Loading';
const EditJobForm = () => {
    document.body.style.backgroundColor = "#e6f2ff"
    const back=useNavigate();
    const [message, setmessage] = useState(null);
    const [error, seterror] = useState(false);
    const [loading, setloading] = useState(false);
    const [jobtype, setjobtype] = useState();
    const [jobtitle, setjobtitle] = useState();
    const [description, setdescription] = useState();
    const [skills, setskills] = useState();
    const [positions, setpositions] = useState();
    const [qualification, setqualification] = useState();
    const [experience, setexperience] = useState();
    const [location, setlocation] = useState();
    
    
    const PostData = async (e) => {
        e.preventDefault();

        /*const data1 = localStorage.getItem("jobdetail");
        const data2 = JSON.parse(data1);
        const id = data2.id;
        console.log("ID ",id)
        console.log("Title ",jobtitle);
        console.log("Skills ",skills);
        console.log("Description",description);
        console.log("Positions ",positions);
        console.log("Location : ",location);
        console.log("Experience : ",experience);
        console.log("Qualification ",qualification);
        console.log("Type : ",jobtype);*/

        const data1 = localStorage.getItem("jobdetail");
        const data2 = JSON.parse(data1);
        const id = data2.id;
        try {
            const res = await fetch("/recruiter/updatedetail/" + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({

                    jobtitle,
                    skills,
                    description,
                    positions,
                    location,
                    experience,
                    qualification,
                    jobtype,

                })
            });

            const mydata = await res.json();
            console.log('Data : ',mydata);
            if (res.status === 422 || !mydata) {
                console.log(mydata.message);
            }
            else if (res.status === 201) {
                console.log(mydata.message);
                back('/yourjobs');

            }

        }
        catch (error) {
            console.log(error);
        }
    }




    const getdata = async () => {

        const data1 = localStorage.getItem("jobdetail");
        const data2 = JSON.parse(data1);
        const id = data2.id;


        console.log("JOB ID : ", id);
        //console.log("EMAIL :",email);
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
            console.log(mydata.message[0]);
            console.log(mydata.message[0].jobtitle);

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

                //setcreatedon(mydata.message[0].createdAt);
                setlocation(mydata[0].location);
                //getuserdata();
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
            <div className='container mt-5 '>
                <h1>Edit Job Details</h1>
                <form method="POST">
                    {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                    {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
                    {loading && <Loading />}
                    <div class="row">


                        <div className='col-md-6'>
                            <label for="Job Title" className='form-label'>Job Title</label>
                            <input className='form-control' type="text" name='jobtitle' id='jobTitle' value={jobtitle} onChange={event => setjobtitle(event.target.value)} placeholder='Enter Job Title' required></input>
                        </div>
                        <div className='col-md-6'>
                            <label for="Skills" className='form-label'>Category</label>
                            <select class="form-select" aria-label="Skills" name='skills' value={skills} onChange={event => setskills(event.target.value)} id="skills" required>

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
                            <textarea class="form-control" type="text" name='description' value={description} onChange={event => setdescription(event.target.value)} id='description' placeholder='Enter Full Description' aria-label="With textarea" required></textarea>
                        </div>
                    </div>
                    <div className='row'>


                        <div className='col-md-4'>
                            <label for="positions" className='form-label'>No of Positions</label>
                            <select class="form-select" aria-label="positions" name='positions' value={positions} onChange={event => setpositions(event.target.value)} id="positions" required>

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
                            <select class="form-select" aria-label="location" name='location' id="location" value={location} onChange={event => setlocation(event.target.value)} required>
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
                            <select class="form-select" aria-label="experience" name='experience' value={experience} onChange={event => setexperience(event.target.value)} id="experience" required>
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
                            <select class="form-select" aria-label="qualification" name='qualification' value={qualification} onChange={event => setqualification(event.target.value)} id="qualification" required>
                                <option value="Intermediate" select>Intermediate</option>
                                <option value="Bachelor">Bachelor</option>
                                <option value="Master">Master</option>
                                <option value="PhD">PhD</option>
                            </select>
                        </div>
                        <div className='col-md-6'>
                            <label for="jobtype" className='form-label'>Job Type</label>
                            <select class="form-select" aria-label="jobtype" name='jobtype' value={jobtype} onChange={event => setjobtype(event.target.value)} id="jobtype" required>
                                <option value="Internship" selected>Internship</option>
                                <option value="Full Time">Full Time</option>
                                <option value="Part Time">Part Time</option>
                                <option value="Remote">Remote</option>
                            </select>
                        </div>
                        
                    </div>
                    <br></br><br></br>

                    <button class="btn btn-primary" onClick={PostData} type="button">Edit Job</button>

                    <br></br><br></br><br></br>
                    <br></br>


                </form>
            </div>
            <Footer />
        </>
    );
};

export default EditJobForm;
