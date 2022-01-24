
import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
    const back=useNavigate();
    useEffect(()=>{
        localStorage.removeItem("userData");
        fetch('/logout',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        }).then((res)=>{
            back('/',{replace:true});
            if(res.status!=200)
            {
                const error=new Error(res.error);
                throw error;
            }
        }).catch((err)=>
        {
            console.log(err);
        })

        
    });
  return (<>
  
  
  
  </>);
};

export default UserLogout;
