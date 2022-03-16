import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./ChangePassword.css"
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/NavigationBar';
import ErrorMessage from '../othercomponents/ErrorMessage';
import Loading from '../othercomponents/Loading';

const ChangePssword = () => {
    const back = useNavigate();
    document.body.style.backgroundColor = "#e6f2ff"
    const [password, setpassword] = useState({
        cpassword: "", newpassword: "", newcpassword: "",
    })
    const [error, seterror] = useState(false);
    const [message, setmessage] = useState(false);
    const [email, setemail] = useState();
    const [usertype, setusertype] = useState();
    let name, value
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setpassword({ ...password, [name]: value })
    }
    const PostData = async (e) => {

        e.preventDefault();
        const data = localStorage.getItem("userData");
        const data1 = JSON.parse(data);


        const { cpassword, newpassword, newcpassword } = password;
        if (cpassword === "" || newcpassword === "" || newcpassword === "") {
            setmessage("Please fill all required fields");
        }
        else {
            setmessage(null)
            setemail(data1.email);
            setusertype(data1.type);


            if (newpassword !== newcpassword) {
                setmessage("New Passwords does not match");
            }
            else {
                setmessage(null);

                try {
                    if (usertype === 'Candidate') {
                        const res = await fetch("/candidate/newpass", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                email: email,
                                password: cpassword,
                                newpassword: newpassword,
                            })
                        });
                        const data = await res.json();
                        console.log("Data : ", data);
                        if (res.status === 422 || !data) {
                            setmessage(data.message);
                        }
                        else {
                            back('/home');
                        }
                    }
                    else if (usertype === 'Recruiter') {
                        const res = await fetch("/recruiter/newpass", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                email: email,
                                password: cpassword,
                                newpassword: newpassword,
                            })
                        });
                        const data = await res.json();
                        console.log("Data : ", data);
                        if (res.status === 422 || !data) {
                            setmessage(data.message);
                        }
                        else {
                            back('/home');
                        }
                    }


                }
                catch (error) {
                    seterror(error.response.data.message);
                }
            }
        }


    }
    return <>
        <NavigationBar />
        <div class="container changepasswordcontainer">
            <div className='container myformborder'>
                <br></br>
                <h4 >Change Password</h4>
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
                <form >

                    <div className='row'>

                        <div className='col-md-12'>
                            <label for="Current Password" className='form-label'>Current Password</label>
                            <input className='form-control' type="password" name='cpassword' id='cpassword' placeholder='Current Password' value={password.cpassword} onChange={handleInputs} required></input>
                        </div>
                        <div className='col-md-12'>
                            <label for="New Password" className='form-label'>New Password</label>
                            <input className='form-control' type="password" name='newpassword' id='newpassword' placeholder='New Password' value={password.newpassword} onChange={handleInputs} required></input>
                        </div>
                    </div>
                    <div className='row'>

                        <div className='col-md-12'>
                            <label for="Confirm Password" className='form-label'>Confirm New Password</label>
                            <input className='form-control' type="password" name='newcpassword' id='newcpassword' placeholder='Confirm Password' value={password.newcpassword} onChange={handleInputs} required></input>
                        </div>
                    </div>
                    <br></br>
                    <button class="btn btn-secondary changepassbtn" onClick={PostData} type="button">Confirm Change</button>
                    <br></br>

                </form>
            </div>

        </div>

        <Footer />
    </>
};

export default ChangePssword;