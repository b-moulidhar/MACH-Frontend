import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import successfulAnimation from '../../assets/gifs/AnimationSuccess.json';
import './returnPayment.css';
import { NavLink } from 'react-router-dom';
import { Api } from '../../api/api';
 
function Return() {
  const [paymentDetails, setPaymentDetails] = useState({
    OwnerUserId: '',
    RenterUserId: '',
    VehicleRNumber: '',
    RentedDate: '0001-01-01T00:00:00',
    Duration: 0,
    TotalAmount: 0,
    RentingLocation: '',
    paymentId: ''
  });
 
  const [isApiCalled, setIsApiCalled] = useState(false);
 
  const finalAmount = Number(localStorage.getItem('finalamount'));
  const userData = JSON.parse(localStorage.getItem('user'));
  const renterData = localStorage.getItem('UserId');
 
  function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
 
  useEffect(() => {
    if (userData) {
      setPaymentDetails(prevDetails => ({
        ...prevDetails,
        OwnerUserId: userData.applicationUserId,
        RenterUserId: renterData,
        VehicleRNumber: userData.vehicleNumber,
        Duration: finalAmount/userData.pricePerHour,
        TotalAmount: finalAmount,
        RentingLocation: userData.location,
        paymentId: generateRandomString(16)
      }));
    }
  }, []);
 
  useEffect(() => {
    if (paymentDetails.OwnerUserId !== '' && !isApiCalled) {
      Api.post('api/rental/createrentaldetails', paymentDetails)
        .then(response => {
          console.log('Payment details saved:', response.data);
          setIsApiCalled(true);
        })
        .catch(error => {
          console.error('Error saving payment details:', error);
        });
        Api.get('/api/park/updateparkbyvehiclenumber/'+paymentDetails.VehicleRNumber)
        .then(response => {
          console.log('updated details saved in algolia:', response.data);
          setIsApiCalled(true);
        })
        .catch(error => {
          console.error('updated details saved in algolia:', error);
        });
    }
  }, [paymentDetails, isApiCalled]);
 
  return (
    <>
      <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Lottie
          loop={false}
          animationData={successfulAnimation}
          style={{ height: 'auto', width: '500px' }}
        />
      </div>
      <div className="container-return">
        <h3>Payment Successful</h3>
        <h4>Paid ₹{finalAmount} to UnPark</h4>
        <h5>
          <NavLink end to="/homepage">
            <button className="btn primary navBtn">Return to home page</button>
          </NavLink>
        </h5>
      </div>
    </>
  );
}
 
export default Return;
 
 