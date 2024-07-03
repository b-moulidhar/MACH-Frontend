import React, { useState } from 'react';
import { Api } from "../../api/api";
   

function ParkModal(){
    const [preview, setPreview] = useState(null);
    const [formData, setFormData] = useState({
        ApplicationUserId: localStorage.getItem("UserId"),
        VehicleDescription: '',
        Location: '',
        VehicleNumber: '',
        Address: '',
        AvailableHours: 0,
        ExpectedReturnTime: '',
        VehicleImage: null
    });
    const handleChange = (e) => {      
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        console.log(e.target.files[0]);
        setFormData({
            ...formData,
            VehicleImage: e.target.files[0]
            
        });
        
    };
  

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Api.post('/api/park/createpark', formData, {  
            headers:
            {
                'Content-Type': 'multipart/form-data'
            }
                
            });
            console.log('Park created', response.data);
        } catch (error) {
            console.error('There was an error creating the park!', error);
        }
    };
    return <>
            <div className="modal fade" id="parkModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Parking details</h5>
                    <span aria-hidden="true" data-bs-toggle="modal" data-bs-target="#parkModal" style={{cursor:"pointer",fontSize:"42px"}}>&times;</span>
                </div>
                <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="Location" className="form-label">Location(LandMark)</label>
                                <input type="text" className="form-control" id="Location" onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="VehicleNumber" className="form-label">Vehicle Number</label>
                                <input type="text" className="form-control"  id="VehicleNumber" onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="VehicleDescription" className="form-label">Descripiton</label>
                                <input type="text" className="form-control" id="VehicleDescription" onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="Address" onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="AvailableHours" className="form-label">available hours</label>
                                <input type="number" className="form-control" min="0" max="8" step="0.5" id="AvailableHours" onChange={handleChange}  required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="ExpectedReturnTime" className="form-label">Expected Return time</label>
                                <input type="datetime-local" className="form-control" id="ExpectedReturnTime" onChange={handleChange} required/>
                            </div>
            
                            <div className="mb-3">
                                <label htmlFor="VehicleImage" className="form-label">upload vehicle image</label>
                                <input type="file" className="form-control" id="VehicleImage" onChange={handleFileChange} required/>
                            </div>
                            <div className="mb-3">
                                <input type="checkbox"  id="check" required />&nbsp;
                                <label htmlFor="check" className="form-label"> I hereby give consent to give my vehicle for rent *</label>
                            </div>
                            <button type="submit" className="btn btn-primary" >Submit</button>
                        </form>
                </div>
                </div>
            </div>
            </div>
    </>
 }
 export default ParkModal;
