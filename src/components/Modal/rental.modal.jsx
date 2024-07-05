import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';
import { Api } from '../../api/api';

function Rental(props) {
  const stripePromise = loadStripe('pk_test_51PKxtiSGyaisjdTZWhAP1IhD2hWqUTCcRcuapvy9Ht9BOJyRUFMwJe9pBXulgaVk8Cm30GgnB2QYiBpbq2aBDXO100ntkrts0v');
  const [payment, setPayment] = useState(true);
  const [options, setOptions] = useState(null);
  const [user, setUser] = useState({ value: '', UserId: '', vehiclenumber: '', vehicleownerId: '' });
  const [finalAmount, setFinalAmount] = useState(null);

  function finalAmountCalc(e) {
    const amount = (props.data.pricePerHour) * (e.target.value);
    setFinalAmount(amount);
  }

  function makePayment() {
    
    Api.post("api/create-checkout-session/create", user)
      .then((res) => {
        if (res.status === 200||res.status === 201) {
          setOptions(res.data);
          setPayment(false);
          console.log(res.data.clientSecret);
          const optionsEncoded = encodeURIComponent(JSON.stringify(res.data));
        
          window.location.href = `/externalpayment?options=${optionsEncoded}`;
          
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (finalAmount !== null) {
      console.log(finalAmount);
      setUser((prevUser) => ({
        ...prevUser,
        value: finalAmount,
        UserId: localStorage.getItem("UserId"),
        vehiclenumber: props.data.vehicleNumber,
        vehicleownerId: props.data.applicationUserId
      }));
      console.log(props);
      localStorage.setItem("user",JSON.stringify(props.data));
      localStorage.setItem("finalamount",finalAmount)
    }
  }, [finalAmount]);

  useEffect(() => {
    if (props.data) {
      console.log(props.data.vehicleNumber);
      setUser({
        value: finalAmount,
        UserId: localStorage.getItem("UserId"),
        vehiclenumber: props.data.vehicleNumber,
        vehicleownerId: props.data.applicationUserId
      });
    }
  }, [props.data]);

  return (
    <>
      {payment && (
        <div className="modal fade" id="RentalModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Rental details</h5>
                <span aria-hidden="true" data-bs-toggle="modal" data-bs-target="#RentalModal" style={{ cursor: "pointer", fontSize: "42px" }}>&times;</span>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="numhrsreq" className="form-label">No. of Hours required</label>
                    <input onChange={(evt) => finalAmountCalc(evt)} type="number" className="form-control" id="numhrsreq" required />
                  </div>
                  <button type="button" className="btn btn-primary" disabled={finalAmount === null || finalAmount === 0} onClick={makePayment}>
                    Pay <span>₹{finalAmount}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Rental;
