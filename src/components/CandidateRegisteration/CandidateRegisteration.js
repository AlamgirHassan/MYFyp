import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink, useNavigate } from 'react-router-dom'
import './CandidateRegisteration.css'
import ErrorMessage from '../othercomponents/ErrorMessage';
import Loading from '../othercomponents/Loading';


const CandidateRegisteration = () => {

    const back = useNavigate();
    const [candidate, setcandidate] = useState({
        firstname: "", lastname: "", email: "", address: "", dob: "", country: "Afghanistan", password: "", cpassword: "", gender: "Male", status: "Employeed", image: ""
    });
    const [message, setmessage] = useState(null);
    const [error, seterror] = useState(false);
    const [loading, setloading] = useState(false);
    const handleInputs = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;
        setcandidate({ ...candidate, [name]: value })
    }
    const PostData = async (e) => {
        e.preventDefault();
        setloading(true);
        const { email, password, firstname, lastname, address, cpassword, country, dob, gender, status } = candidate;
        if (password !== cpassword) {
            setmessage("Passwords do not match");
            setloading(false);
        }
        else {
            setmessage(null);
            try {

                const res = await fetch("/candidate/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        firstname: firstname,
                        lastname: lastname,
                        email: email,
                        country: country,
                        address: address,
                        gender: gender,
                        emp_status: status,
                        password: password,
                        cpassword: cpassword,
                        dob: dob

                    })
                });

                const data = await res.json();
                //console.log('Response ' + data.json);
                //console.log('Response',data.error);
                //console.log('Status ',res.status);
                if (res.status == 422 || !data ) {
                    //window.alert("Invalid Registration");
                    //console.log("Error ",data.error);
                    console.log("Registeration Invalid");
                    
                    seterror(data.error);
                    setloading(false);
                }
                else if(res.status==500)
                {
                    seterror(data.message);
                }
                else {
                    console.log('Resp ',data.message);
                   // window.alert("Data saved successfully");
                    seterror(false);
                    setloading(false);
                    back('/');
                }
            }
            catch (error) {
                seterror(error.response.data.message);
                setloading(false);
            }
        }


        /*console.log("User Name : ", firstname + " " + lastname);
        console.log("Address : ", address);
        console.log("Gender : ", gender);
        console.log("Country : ", country);
        console.log("Email : ", email);
        console.log("Password : " + password);
        console.log("Cpassword : ", cpassword);
        console.log("DOB : ", dob);
        console.log("Status : ", status);*/



    }

    return (
        <>

            <div className='container'>
                <div className='signupForm'>
                    {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                    {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
                    {loading && <Loading />}
                    <form method="POST" className=" needs-validation" novalidate>
                        <h3>Candidate Registeration Form</h3>
                        <div className="row">
                            <div className="col">
                                <label for="exampleFormControlInput1" className="form-label">First Name</label>
                                <input type="text" className="form-control" placeholder="First name" name="firstname" value={candidate.firstname} onChange={handleInputs} aria-label="First name" required />

                                <div className="invalid-feedback">
                                    Please provide your first name.
                                </div>
                            </div>
                            <div className="col">
                                <label for="exampleFormControlInput1" className="form-label">Last Name</label>
                                <input type="text" className="form-control" placeholder="Last name" name="lastname" value={candidate.lastname} onChange={handleInputs} aria-label="Last name" required />

                                <div className="invalid-feedback">
                                    Please provide your last name.
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col">
                                <label for="exampleFormControlInput1" className="form-label">Email Address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email Address" name="email" required value={candidate.email} onChange={handleInputs} />
                                <div className="invalid-feedback">
                                    Please provide your Email Address.
                                </div>
                            </div>
                            <div className="col">
                                <label for="exampleFormControlInput1" className="form-label">Current Address</label>
                                <input type="text" className="form-control" placeholder="Current Address" name="address" aria-label="Current Address" required value={candidate.address} onChange={handleInputs} />
                                <div className="invalid-feedback">
                                    Please provide your Current Address.
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col">
                                <label for="exampleFormControlInput1" className="form-label">Date of Birth</label>
                                <input type="date" className="form-control" name="dob" aria-label="DOB" required value={candidate.dob} onChange={handleInputs} />
                                <div className="invalid-feedback">
                                    Please provide your date of birth.
                                </div>
                            </div>
                            <div className="col">
                                <label for="exampleFormControlInput1" className="form-label">Country</label>
                                <select className="form-select" id="validationCustom04" required name="country" value={candidate.country} onChange={handleInputs}>

                                    <option value="Afganistan" selected>Afghanistan</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="American Samoa">American Samoa</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Anguilla">Anguilla</option>
                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Aruba">Aruba</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaijan">Azerbaijan</option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Belize">Belize</option>
                                    <option value="Benin">Benin</option>
                                    <option value="Bermuda">Bermuda</option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bonaire">Bonaire</option>
                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                    <option value="Botswana">Botswana</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                                    <option value="Brunei">Brunei</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina Faso">Burkina Faso</option>
                                    <option value="Burundi">Burundi</option>
                                    <option value="Cambodia">Cambodia</option>
                                    <option value="Cameroon">Cameroon</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Canary Islands">Canary Islands</option>
                                    <option value="Cape Verde">Cape Verde</option>
                                    <option value="Cayman Islands">Cayman Islands</option>
                                    <option value="Central African Republic">Central African Republic</option>
                                    <option value="Chad">Chad</option>
                                    <option value="Channel Islands">Channel Islands</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Christmas Island">Christmas Island</option>
                                    <option value="Cocos Island">Cocos Island</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Comoros">Comoros</option>
                                    <option value="Congo">Congo</option>
                                    <option value="Cook Islands">Cook Islands</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Cote DIvoire">Cote DIvoire</option>
                                    <option value="Croatia">Croatia</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Curaco">Curacao</option>
                                    <option value="Cyprus">Cyprus</option>
                                    <option value="Czech Republic">Czech Republic</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Djibouti">Djibouti</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Dominican Republic">Dominican Republic</option>
                                    <option value="East Timor">East Timor</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Ethiopia">Ethiopia</option>
                                    <option value="Falkland Islands">Falkland Islands</option>
                                    <option value="Faroe Islands">Faroe Islands</option>
                                    <option value="Fiji">Fiji</option>
                                    <option value="Finland">Finland</option>
                                    <option value="France">France</option>
                                    <option value="French Guiana">French Guiana</option>
                                    <option value="French Polynesia">French Polynesia</option>
                                    <option value="French Southern Ter">French Southern Ter</option>
                                    <option value="Gabon">Gabon</option>
                                    <option value="Gambia">Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Gibraltar">Gibraltar</option>
                                    <option value="Great Britain">Great Britain</option>
                                    <option value="Greece">Greece</option>
                                    <option value="Greenland">Greenland</option>
                                    <option value="Grenada">Grenada</option>
                                    <option value="Guadeloupe">Guadeloupe</option>
                                    <option value="Guam">Guam</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Haiti">Haiti</option>
                                    <option value="Hawaii">Hawaii</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hong Kong">Hong Kong</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="India">India</option>
                                    <option value="Iran">Iran</option>
                                    <option value="Iraq">Iraq</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Isle of Man">Isle of Man</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Jordan">Jordan</option>
                                    <option value="Kazakhstan">Kazakhstan</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option value="Korea North">Korea North</option>
                                    <option value="Korea Sout">Korea South</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                    <option value="Laos">Laos</option>
                                    <option value="Latvia">Latvia</option>
                                    <option value="Lebanon">Lebanon</option>
                                    <option value="Lesotho">Lesotho</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libya">Libya</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="Lithuania">Lithuania</option>
                                    <option value="Luxembourg">Luxembourg</option>
                                    <option value="Macau">Macau</option>
                                    <option value="Macedonia">Macedonia</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Malawi">Malawi</option>
                                    <option value="Maldives">Maldives</option>
                                    <option value="Mali">Mali</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marshall Islands">Marshall Islands</option>
                                    <option value="Martinique">Martinique</option>
                                    <option value="Mauritania">Mauritania</option>
                                    <option value="Mauritius">Mauritius</option>
                                    <option value="Mayotte">Mayotte</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Midway Islands">Midway Islands</option>
                                    <option value="Moldova">Moldova</option>
                                    <option value="Monaco">Monaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montserrat">Montserrat</option>
                                    <option value="Morocco">Morocco</option>
                                    <option value="Mozambique">Mozambique</option>
                                    <option value="Myanmar">Myanmar</option>
                                    <option value="Nambia">Nambia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Netherland Antilles">Netherland Antilles</option>
                                    <option value="Netherlands">Netherlands (Holland, Europe)</option>
                                    <option value="Nevis">Nevis</option>
                                    <option value="New Caledonia">New Caledonia</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Niue">Niue</option>
                                    <option value="Norfolk Island">Norfolk Island</option>
                                    <option value="Norway">Norway</option>
                                    <option value="Oman">Oman</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Palau Island">Palau Island</option>
                                    <option value="Palestine">Palestine</option>
                                    <option value="Panama">Panama</option>
                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Phillipines">Philippines</option>
                                    <option value="Pitcairn Island">Pitcairn Island</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Puerto Rico">Puerto Rico</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Republic of Montenegro">Republic of Montenegro</option>
                                    <option value="Republic of Serbia">Republic of Serbia</option>
                                    <option value="Reunion">Reunion</option>
                                    <option value="Romania">Romania</option>
                                    <option value="Russia">Russia</option>
                                    <option value="Rwanda">Rwanda</option>
                                    <option value="St Barthelemy">St Barthelemy</option>
                                    <option value="St Eustatius">St Eustatius</option>
                                    <option value="St Helena">St Helena</option>
                                    <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                                    <option value="St Lucia">St Lucia</option>
                                    <option value="St Maarten">St Maarten</option>
                                    <option value="St Pierre and Miquelon">St Pierre and Miquelon</option>
                                    <option value="St Vincent and Grenadines">St Vincent and Grenadines</option>
                                    <option value="Saipan">Saipan</option>
                                    <option value="Samoa">Samoa</option>
                                    <option value="Samoa American">Samoa American</option>
                                    <option value="San Marino">San Marino</option>
                                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Seychelles">Seychelles</option>
                                    <option value="Sierra Leone">Sierra Leone</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Slovakia">Slovakia</option>
                                    <option value="Slovenia">Slovenia</option>
                                    <option value="Solomon Islands">Solomon Islands</option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Sudan">Sudan</option>
                                    <option value="Suriname">Suriname</option>
                                    <option value="Swaziland">Swaziland</option>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Syria">Syria</option>
                                    <option value="Tahiti">Tahiti</option>
                                    <option value="Taiwan">Taiwan</option>
                                    <option value="Tajikistan">Tajikistan</option>
                                    <option value="Tanzania">Tanzania</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Togo">Togo</option>
                                    <option value="Tokelau">Tokelau</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                    <option value="Tunisia">Tunisia</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Turkmenistan">Turkmenistan</option>
                                    <option value="Turks and Caicos Is">Turks and Caicos Is</option>
                                    <option value="Tuvalu">Tuvalu</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Erimates">United Arab Emirates</option>
                                    <option value="United States of America">United States of America</option>
                                    <option value="Uraguay">Uruguay</option>
                                    <option value="Uzbekistan">Uzbekistan</option>
                                    <option value="Vanuatu">Vanuatu</option>
                                    <option value="Vatican City State">Vatican City State</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                                    <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                                    <option value="Wake Island">Wake Island</option>
                                    <option value="Wallis and Futana Is">Wallis and Futana Is</option>
                                    <option value="Yemen">Yemen</option>
                                    <option value="Zaire">Zaire</option>
                                    <option value="Zambia">Zambia</option>
                                    <option value="Zimbabwe">Zimbabwe</option>
                                </select>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col">
                                <label for="exampleFormControlInput1" className="form-label">Gender</label>
                                <select className="form-select" id="validationCustom05" required name="gender" value={candidate.gender} onChange={handleInputs}>

                                    <option value="Male" selected>Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="col">
                                <label for="exampleFormControlInput1" className="form-label">Employment Status</label>
                                <select className="form-select" id="validationCustom06" required name="status" value={candidate.status} onChange={handleInputs}>

                                    <option value="Employed" selected>Employed</option>
                                    <option value="Unemployed">Unemployed</option>
                                </select>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col">
                                <label for="exampleFormControlInput1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name="password" placeholder='Password' required value={candidate.password} onChange={handleInputs} />
                                <div className="invalid-feedback">
                                    Please provide your password.
                                </div>
                            </div>
                            <div className="col">
                                <label for="exampleFormControlInput1" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name="cpassword" placeholder='Confirm Password' required value={candidate.cpassword} onChange={handleInputs} />
                                <div className="invalid-feedback">
                                    Please re enter password.
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="mb-3">
                            <label for="formFile" className="form-label">Your Image</label>
                            <input className="form-control" type="file" accept="image/*" id="formFile" name="image" required value={candidate.image} onChange={handleInputs} />
                            <div className="invalid-feedback">
                                Please upload your Image.
                            </div>
                        </div>
                        <br></br>
                        <button type="button" className="btn btn-outline-primary" onClick={PostData}>Register as Candidate</button>



                    </form>
                </div>
            </div>
        </>
    )
}

export default CandidateRegisteration
