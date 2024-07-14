import React, { useState, useEffect } from 'react';
import { Api } from "../../api/api";
import Swal from "sweetalert2";

function ReParkModal() {
  const [paymentData, setPaymentData] = useState([]);
  const [status,setStatus]=useState(false);
  const [parkdata,setParkData]=useState();
  const userId = String(localStorage.getItem('UserId'));
  const [formData, setFormData] = useState();
  const [Lastitem, setLastItem] = useState();

  function getPaymentDetails() {
    Api.get('api/rental/getrentaldetailsbyuserid/' + userId)
      .then((res) => {
        setPaymentData(res.data);

      })
      .catch((err) => {
        alert("error getting payment details");
      });
  }

  useEffect(() => {
    getPaymentDetails();
  }, []);

  
  useEffect(() => {
    if (paymentData && paymentData.length > 0) {
      const lastItem = paymentData[paymentData.length - 1];
     
      //for fetching last item deatails
      //console.log(lastItem);
      setLastItem(lastItem);
      Api.get('/api/park/updateparkbyvehiclenumber/'+lastItem.vehicleRNumber)
      .then(response => {
        console.log('fectched succssfully',response.data);
        setStatus(true);
        setParkData(response.data);
        
      })
      .catch(error => {
        console.error('not able to fectch successfully', error);
      });
     //console.log(lastItem);

      //console.log(status);
    }
  }, [paymentData]);

  const handleChange = (e) => {      
    setFormData( e.target.value
    );
};

  function makerepark()
  {
    parkdata.flag=0;
    parkdata.address=formData;
    parkdata.availableHours=parkdata.availableHours-Lastitem.duration;
    Api.put("/api/park/updatepark", parkdata)
    .then((response) => {
        if(response.status==200||response.status==201){
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: "ReParked Successfully",
                showConfirmButton: false,
                timer: 1000
              }).then(()=>{
                
                  window.location.href ="/homePage"
                  setStatus(false);
                  
              })
        
        }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    
    <>    
      <div className="modal fade" id="ReparkModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
  { status&&
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Re-Parking Details</h5>
              <span aria-hidden="true" data-bs-dismiss="modal" style={{ cursor: "pointer", fontSize: "42px" }}>&times;</span>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="reparkImg" className="form-label">Upload vehicle image</label>
                  <input type="file" className="form-control" id="reparkImg" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="Address" className="form-label">Re-parked address</label>
                  <input type="text" className="form-control" id="Address" onChange={handleChange}required />
                </div>
                <div className="mb-3">
                  <input type="checkbox" id="checked" required />&nbsp;
                  <label htmlFor="checked" className="form-label">I hereby give consent that I re-parked the vehicle without any damage*</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={makerepark}>Submit</button>
              </form>
            </div>
          </div>
        </div>}
        {!status&&<>
            <div className="modal-dialog">
            <div className="modal-content">
             <h5 className="modal-body mb-3"> Please Unpark To Repark <span> </span><a className="btn btn-primary" href='/unpark'> Go to UnPark</a></h5>
            
            </div>
            </div>
        </>
    }
      </div>
    </>

  );
}

export default ReParkModal;
