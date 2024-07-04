
function Rental(props){
    
    return <>
            <div className="modal fade" id="RentalModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Rental details</h5>
                    <span aria-hidden="true" data-bs-toggle="modal" data-bs-target="#RentalModal" style={{cursor:"pointer",fontSize:"42px"}}>&times;</span>
                </div>
                <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="vehnum" className="form-label">vehicle number</label>
                                <input type="number" className="form-control" id="vehnum" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="parkadd" className="form-label"> re-parking address parked</label>
                                <input type="text" className="form-control" id="parkadd" required />
                            </div>
                            <button type="submit" className="btn btn-primary">Pay <span>{}</span></button>
                        </form>
                </div>
                </div>
            </div>
            </div>
    </>
 }
 export default Rental;
