
function ReParkModal(){
    return <>
            <div className="modal fade" id="ReparkModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="reparkImg" className="form-label">upload vehicle image</label>
                                <input type="file" className="form-control" id="reparkImg" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="vehnum" className="form-label">vehicle number</label>
                                <input type="text" className="form-control" id="vehnum" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="parkadd" className="form-label"> re-parking address parked</label>
                                <input type="text" className="form-control" id="parkadd" required />
                            </div>
                            <div className="mb-3">
                                <input type="checkbox"  id="checked" required />&nbsp;
                                <label htmlFor="checked" className="form-label"> I hereby give consent that, I re-parked the vehicle without any damage*</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                </div>
                </div>
            </div>
            </div>
    </>
 }
 export default ReParkModal;
