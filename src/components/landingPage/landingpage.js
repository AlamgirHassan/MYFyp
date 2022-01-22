import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import img from '../../images/logo.jpeg'
import img1 from '../../images/cover_img.jpg'


   

import './landingPage.css'



const Landingpage = () => {

    const [user, setUser] = useState({
        email: "", password: ""
    });
    const handleInputs = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value })
    }
    const PostData=async (e)=>{
        e.preventDefault();
        const {email,  password } = user;
        console.log("Email : "+email);
        console.log("Password : "+password);
        window.location = '/home';



    }


    return (
        <>
            <div className='container-fluid'>
                <div className="row">
                    <div className=" col-lg-6 d-none d-sm-block ">
                        <img src={img1}  className="my-image "/>
                    </div>
                    <div className=" col-lg-6 sm-6">
                        <div className="loginForm">

                            <img src={img} className='logo_pic'/>
                            <h3 className='title'>Welcome User</h3>
                            
                                <form method="POST">
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        placeholder='Enter your email Address' name='email' value={user.email} onChange={handleInputs} />

                                        
                                
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" 
                                        placeholder='Enter your password'name='password' value={user.password} onChange={handleInputs} />

                                    </div>
                                    <NavLink to="/">Forget Password</NavLink>
                                    <br></br>
                                    <br></br>
                                    <button type="submit" className="btn btn-primary" onClick={PostData}>Login</button>
                                    <br></br>
                                    <br></br>
                                    <NavLink to="/registeration">Not Registered</NavLink>
                                    <br>
                                    </br>
                                    <br>
                                    </br>

                                    
                                </form>

                                
                            
                        </div>
                    </div>
                </div>
            </div>











        </>
    )
}

export default Landingpage
