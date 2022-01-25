import logo from './logo.svg';
import './App.css';
import react from 'react';
import Landingpage from './components/landingPage/landingpage';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Signup from './components/registeration/signup';
import JobDetail from './components/JobDetail/JobDetail';
import Home from './components/Home/Home';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import ContactUsForm from './components/contactus/ContactUsForm';
import CandidateEditInformation from './components/CandidateEditInformation/CandidateEditInformation';
import RecruiterEditInformation from './components/CandidateEditInformation/RecruiterEditInformation';
import RecruiterRegisteration from './components/CandidateRegisteration/RecruiterRegisteration';
import JobsList from './components/Jobs_List/JobsList';
import AppliedCandidatesList from './components/JobCandidateListResponse/AppliedCandidatesList';
import Not_Found from './components/NotFound/NotFound';
import JobPostingForm from './components/JobPostingForm/JobPostingForm';
import CandidateProfile from "./components/UserProfile/CandidateProfile"
import Recruiterprofile from './components/UserProfile/RecruiterProfile';
import ChangePssword from './components/UserProfile/ChangePassword';
import UserLogout from './components/UserProfile/UserLogout';
import YourJobs from './components/YourJobs/YourJobs';
import EditJobForm from './components/JobPostingForm/EditJobForm';
import JobDetail1 from './components/JobDetail/JobDetail1';
function App() {
  return (
    <BrowserRouter>
      
      <Routes>  
        <Route  exact path="/" element={<Landingpage />} />
        <Route  exact path="/registeration" element={<Signup/>}/>
        <Route  exact path="/home" element={<Home/>}/>
        <Route  exact path="/nav" element={<NavigationBar/>}/>
        <Route  exact path="/jobdetail" element={<JobDetail/>}/>
        <Route  exact path="/footer" element={<Footer/>}/>
        <Route  exact path="/contactus" element={<ContactUsForm/>}/>
        <Route  exact path="/ceditform" element={<CandidateEditInformation/>}/>
        <Route  exact path="/reditform" element={<RecruiterEditInformation/>}/>
        <Route  exact path="/jobslist" element={<JobsList/>}/>
        <Route  exact path="/candidatelist" element={<AppliedCandidatesList/>}/>
        <Route exact path="/jform" element={<JobPostingForm/>}/>
        <Route exact path="/cprofile" element={<CandidateProfile/>}/>
        <Route exact path="/rprofile" element={<Recruiterprofile/>}/>
        <Route exact path="/cpass" element={<ChangePssword/>}/>
        <Route exact path="/logout" element={<UserLogout/>}/>
        <Route exact path="/yourjobs" element={<YourJobs/>}/>
        <Route exact path="/editjobs" element={<EditJobForm/>}/>
        <Route exact path="/jobsdetail" element={<JobDetail1/>}/>
        <Route path="*" element={<Not_Found/>}/>

 
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
