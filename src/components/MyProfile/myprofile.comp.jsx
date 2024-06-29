import { useEffect } from "react"
import { useState } from "react";
import "./profileComp.css"
import { NavLink, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Api } from "../../api/api";
import HeaderComp from "../Header/header.comp";
import Footer from "../Footer/footer.comp";
import CompleteProfileModal from "../Modal/completeProfile.modal";
 
let ProfileComp = ()=>{
    const [userData, setUserData] = useState([]);
    const [kyc, setKyc] = useState([]);
    const [completeProfile, setcompleteProfile] = useState(true);
    let {id} = useParams();
    let userId = localStorage.getItem("UserId"); 

    let refresh = ()=>{
    Api.get('/profileDetails/'+id)
    .then((res)=>{
        if(res.status==401){
            Swal.fire({
                position: 'top',
                icon: 'error',
                text: 'session timed Out',
                timer: 2000
              }).then(()=>{
                window.location = "/";
              })
        }
        setUserData(res.data);
    }).catch(err=>{
        console.log(err)
        if(err.response.status==401){
            Swal.fire({
                position: 'top',
                icon: 'error',
                text: 'session timed Out',
                timer: 2000
              }).then(()=>{
                window.location = "/";
              })
        }
    })
    }
 
    useEffect(function(){
    //    refresh();
    },[id]);
          
    return <>

    <HeaderComp/>
    <div className="container">
    {console.log()}
            {
                userData.length>0 &&
                
                <form id="profileData">
            

            {/* <select  name="edit" id="" onChange={(evt)=>{changeImage(evt)}}>
                <option value="">edit pic</option>
                <option value="insertPic">add image</option>
                <option value="deletePic">remove image</option>
            </select> */}
           
            
            <img src="../assets/images/defaultProfilePic.jpg" alt="user Pic1" />
            
            <h3>Hello, {userData[0].u_name}</h3>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">User ID : {userData[0].id}</label>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">User Mail : {userData[0].email}</label>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">User Mobile : {userData[0].mobile}</label>
            </div>
            {kyc ? <button>complete kyc</button> : <div className="success">kyc done</div>}
        </form>
        }
            {
                !userData.length>0 &&
                
            <form id="profileData">
            <img src="../assets/images/defaultProfilePic.jpg" alt="user Pic1" />
            <h3>Hello, user</h3>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">User ID : </label>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">User Mail : </label>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">User Mobile : </label>
            </div>
            <button className="btn btn-primary" onClick={()=>setcompleteProfile(true)} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">complete my profile</button> 
        </form>
        
        }
        {completeProfile &&
            <CompleteProfileModal/>
}

    
    </div>
    <Footer/>
   
    </>
               
}
 
export default ProfileComp; 
 