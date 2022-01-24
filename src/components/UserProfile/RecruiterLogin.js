import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './landing.css'
import ErrorMessage from '../othercomponents/ErrorMessage';
import Loading from '../othercomponents/Loading';

const RecruiterLogin = () => {

    const back = useNavigate();
    const [message, setmessage] = useState(null);
    const [error, seterror] = useState(false);
    const [loading, setloading] = useState(false);
    const [user, setUser] = useState({
        email: "", password: ""
    });
    const handleInputs = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value })
    }
    const PostData = async (e) => {
        e.preventDefault();
        const { email, password } = user;
        //console.log("Email : " + email);
        //console.log("Password : " + password);
        //window.location = '/home';
        setmessage(null);


        try {

            setloading(true);
            const res = await fetch("/recruiter/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });
            const data = await res.json();
            console.log("Data : ", data);
            if (res.status === 422 || !data) {

                console.log("Login Failed");

                seterror(data.error);
                setloading(false);
            }

            else {
                console.log('Resp ', data.message);
                window.alert("Recruiter Login successfully");
                seterror(false);
                setloading(false);
                const usrdata = {
                    username:data.message,
                    email: email,
                    type: "Recruiter"
                }
                localStorage.setItem("userData", JSON.stringify(usrdata));
                back('/home');
            }
        }
        catch (error) {
            seterror(error.response.data.message);
            setloading(false);
        }
    }



    return (

        <>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
            {loading && <Loading />}
            <form method="POST">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder='Enter your company email Address' name='email' value={user.email} onChange={handleInputs} />



                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                        placeholder='Enter your password' name='password' value={user.password} onChange={handleInputs} />

                </div>
                <NavLink to="/">Forget Password</NavLink>
                <br></br>
                <br></br>
                <button type="submit" className="btn btn-primary" onClick={PostData}>Login as Recruiter</button>
                <br></br>
                <br></br>
                <NavLink to="/registeration">Not Registered</NavLink>
                <br>
                </br>
                <br>
                </br>


            </form>
        </>

    );
};

export default RecruiterLogin;
