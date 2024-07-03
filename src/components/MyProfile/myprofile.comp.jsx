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
    const [userData2,setUserData2]=useState([]);
    const [kyc, setKyc] = useState([]);
    const [completeProfile, setcompleteProfile] = useState(true);
    let {id} = useParams();
    let userId = localStorage.getItem("UserId"); 

    let refresh = ()=>{
    Api.get('/api/auth/GetUserProfileByUserID/'+userId)
    .then((res)=>{
        setUserData(res.data);
    }).catch(err=>{
        console.log(err)
    })

    Api.get('/api/user/GetUserProfileByApplicationID/'+userId)
    .then((res)=>{
        setUserData2(res.data);
    }).catch(err=>{
        console.log(err)
    })
    }
 
    useEffect(function(){
      refresh();
    },[id]);
          
    return <>

    <HeaderComp/>
    <div className="container">
        {
            userData2.drivingLicenseId!=null &&
           <form id="profileData">
            {/* <select  name="edit" id="" onChange={(evt)=>{changeImage(evt)}}>
                <option value="">edit pic</option>
                <option value="insertPic">add image</option>
                <option value="deletePic">remove image</option>
            </select> */}
           
            
            <img src="https://www.svgrepo.com/show/428257/male.svg" alt="user Pic1" />
            
            <h3>Hello, {userData.name}</h3>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name : {userData.name}</label>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">User ID : {userData.userId}</label>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">User Name : {userData.userName}</label>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">User Email : {userData.email}</label>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Date of Birth : {userData2.dateOfBirth}</label>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Gender : {userData2.gender}</label>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">City : {userData2.city}</label>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Address : {userData2.address}</label>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Driving License Id : {userData2.drivingLicenseId}</label>
            </div>

            {kyc ? <button className="btn btn-primary" >complete kyc</button> : <div className="success">kyc done</div>}
            </form>
        
        }
        {
            !userData.length>0 && userData2.drivingLicenseId==null&&
            <form id="profileData">
            
            <img src="https://www.svgrepo.com/show/428257/male.svg" alt="user Pic1" />
            <h3>Hello, {userData.name}</h3>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name : {userData.name}</label>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">User ID : {userData.userId}</label>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">User Name : {userData.userName}</label>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">User Email : {userData.email}</label>
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
 