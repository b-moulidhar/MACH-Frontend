import React, { useState } from 'react';
import { Api } from "../../api/api";
import Swal from "sweetalert2";
   

function CompleteProfileModal(){
    const [formData, setFormData] = useState({
        ApplicationUserId: localStorage.getItem("UserId"),
        dateOfBirth: '',
        gender: 'male',
        city: '',
        address:'',
        drivingLicenseId:''
    });

    const handleChange = (e) => {      
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Api.put('/api/user/update', formData);
            
            console.log('user updated', response.data);
            if(response.status==200){
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: "Profile updated",
                    showConfirmButton: false,
                    timer: 1000
                  }).then(()=>{
                    debugger;
                      window.location.href ="/myprofile"
                  })
                }
        } catch (error) {
            console.error('There was an error updating the user!', error);
        }
    };

    
    return <>
            <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">My Profile details</h5>
                    <span aria-hidden="true" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{cursor:"pointer",fontSize:"42px"}}>&times;</span>
                </div>
                <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="dateOfBirth" className="form-label">Date of birth</label>
                                <input type="date" className="form-control" id="dateOfBirth" required onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="gender" className="form-label">Gender</label>
                                <select id="gender" className="form-control" onChange={handleChange}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="city" className="form-label">city</label>
                                <input type="text" className="form-control" id="city"  required onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="textbox" className="form-control" id="address" onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="drivingLicenseId" className="form-label">Driving Licence Id</label>
                                <input type="text" className="form-control" id="drivingLicenseId" required  onChange={handleChange}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                </div>
                </div>
            </div>
            </div>
    </>
 }
 export default CompleteProfileModal;
