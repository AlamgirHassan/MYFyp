import React,{useState} from 'react'
import "./ChangePassword.css"
const ChangePssword = () => {
    const [password, setpassword] = useState({
        cpassword:"",newpassword:"",newcpassword:"",
    })
    let name,value
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setpassword({ ...password, [name]: value })
    }
  return <>
        <div class="container changepasswordcontainer">
            <div className='container border'>
                <h4>Change Password</h4>
                <form className='row g-3'>
                    <div className='col-md-12'>
                        <label for="Current Password" className='form-label'>Current Password</label>
                        <input className='form-control' type="password" name='cpassword' id='cpassword' placeholder='Current Password' value={password.cpassword} onChange={handleInputs} required></input>
                    </div>
                    <div className='col-md-12'>
                        <label for="New Password" className='form-label'>New Password</label>
                        <input className='form-control' type="password" name='newpassword' id='newpassword' placeholder='New Password' value={password.newpassword} onChange={handleInputs} required></input>
                    </div>
                    <div className='col-md-12'>
                        <label for="Confirm Password" className='form-label'>Confirm Password</label>
                        <input className='form-control' type="password" name='newcpassword' id='newcpassword' placeholder='Confirm Password' value={password.newcpassword} onChange={handleInputs} required></input>
                    </div>
                    <br></br>
                    <br></br>
                    <button class="btn btn-primary" type="button">Confirm</button>
                </form>
            </div>
        </div>
  </>
};

export default ChangePssword;