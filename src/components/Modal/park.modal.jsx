
function ParkModal(){
    return <>
            <div className="modal fade" id="parkModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Parking details</h5>
                    <span aria-hidden="true" data-bs-toggle="modal" data-bs-target="#parkModal" style={{cursor:"pointer",fontSize:"42px"}}>&times;</span>
                </div>
                <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="loc" className="form-label">Land Mark</label>
                                <input type="text" className="form-control" id="loc" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="avlhrs" className="form-label">available hours</label>
                                <input type="time" className="form-control" id="avlhrs"  required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="rettime" className="form-label">Expected Return time</label>
                                <input type="datetime-local" className="form-control" id="rettime" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="vehnumpark" className="form-label">vehicle number</label>
                                <input type="text" className="form-control" id="vehnumpark" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">upload vehicle image</label>
                                <input type="file" className="form-control" id="image" required/>
                            </div>
                            <div className="mb-3">
                                <input type="checkbox"  id="check" required />&nbsp;
                                <label htmlFor="check" className="form-label"> I hereby give consent to give my vehicle for rent *</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                </div>
                </div>
            </div>
            </div>
    </>
 }
 export default ParkModal;
