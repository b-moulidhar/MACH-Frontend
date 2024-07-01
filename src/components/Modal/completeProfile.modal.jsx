
function CompleteProfileModal(){
    return <>
            <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">My Profile details</h5>
                    <span aria-hidden="true" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{cursor:"pointer",fontSize:"42px"}}>&times;</span>
                </div>
                <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="dob" className="form-label">Date of birth</label>
                                <input type="date" className="form-control" id="dob" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="gender" className="form-label">Gender</label>
                                <select name="" id="gender" className="form-control">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="city" className="form-label">city</label>
                                <input type="text" className="form-control" id="city"  required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="textbox" className="form-control" id="address" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pscode" className="form-label">Postal code</label>
                                <input type="text" className="form-control" id="pscode" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="dlId" className="form-label">Driving Licence Id</label>
                                <input type="text" className="form-control" id="dlId" required />
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
