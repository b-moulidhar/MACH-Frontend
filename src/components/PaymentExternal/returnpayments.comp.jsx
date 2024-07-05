import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import successfulAnimation from '../../assets/gifs/AnimationSuccess.json';
import './returnPayment.css'
import { NavLink } from 'react-router-dom';
import { Api } from '../../api/api';
function Return(){
  const [paymentdetails, setPaymentDetails] = useState({OwnerUserId:'',RenterUserId:'',VehicleRNumber:'',RentedDate:Date.now(),Duration:Number,TotalAmount:Number,RentingLocation:'',paymentId:''});
  const finalAmount = localStorage.getItem('finalamount')
  const userData = localStorage.getItem('user')
  const renterData = localStorage.getItem('UserId')
  function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  useEffect(()=>{
      setPaymentDetails({
        OwnerUserId:userData.parkId,
        RenterUserId:renterData,
        VehicleRNumber:userData.vehicleNumber,
        Duration:Number(finalAmount),
        TotalAmount:Number(finalAmount),
        RentingLocation:userData.location,
        paymentId:generateRandomString(16)
      });
      if(paymentdetails.OwnerUserId!=''){
        Api.post('api/rental/createrentaldetails',paymentdetails);
      }
  },[userData])
    return(<>
          
                <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Lottie
                    loop={false}
                    animationData={successfulAnimation}
                    style={{ height: 'auto', width: '500px' }}
                  />
                </div>
                <div className="container-return">
                        <h3>Payment Succesful</h3>
                      <h4>Paid ₹{finalAmount} to UnPark</h4>
                      <h5>
                      <NavLink end to="/homepage">
                        <button className="btn primary navBtn">Return to home page</button>
                    </NavLink>
                      </h5>
                </div>
                    
    </>
    )
    
}

export default Return;
  