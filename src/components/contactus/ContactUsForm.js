import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import "./ContactUsForm.css"
import formimg from "../../images/contactusimg.png"
const ContactUsForm = () => {

    document.body.style.backgroundColor = "#0080ff";
    const [contactus, setcontactus] = useState({
        name:"",email:"",subject:"",message:"",
    });

    const handleInputs = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;
        setcontactus({ ...contactus, [name]: value })
    };

    const PostData=async (e)=>{
        e.preventDefault();
        const {email,  name, message,subject } = contactus;
        console.log("Sender Name : ",name);
        console.log("Sender Email : "+email);
        console.log("Message : "+message);
        console.log("Subject : ",subject);

    }

    return (
    
       
        <>

            

               
                <div className='container myformcontainer'>
                    <div className='row'>
                        <div className='col col-lg-7'>
                            <img src={formimg} className='formimage' />
                        </div>
                        <div className='col col-lg-5'>
                            <div className='contactformcontainer'>
                                <h2 className='contactformheading'>Get in touch</h2>


                                <form>


                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Your Name</label>
                                        <input type="text" class="form-control" placeholder='Your Name' name="name" value={contactus.name} onChange={handleInputs} id="exampleInputPassword1" required />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" placeholder='Your email Address' class="form-control" name="email" id="exampleInputEmail1"  value={contactus.email} onChange={handleInputs} aria-describedby="emailHelp" required />

                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Subject</label>
                                        <input type="text" class="form-control" placeholder='Subject' name="subject"  value={contactus.subject} onChange={handleInputs} id="exampleInputPassword1" required />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Message</label>
                                        <textarea class="form-control" placeholder='Message' name="message" id="exampleFormControlTextarea1"   value={contactus.message} onChange={handleInputs}rows="5" required></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-success btn-lg" onClick={PostData}>Send Email &#8594;</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            


        </>
    );
};

export default ContactUsForm;
