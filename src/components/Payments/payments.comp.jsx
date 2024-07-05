import Footer from "../Footer/footer.comp";
import HeaderComp from "../Header/header.comp";
import React, { useEffect, useState } from 'react';
import "./paymentsPage.css"
import { Api } from "../../api/api";



const PaymentPage = () => {
  const [paymentData,setPaymentData] = useState([]);
  const userId = localStorage.getItem('UserId');
  function getPaymentDetails(){
    Api.get('api/rental/getrentaldetailsbyuserid/'+{userId})
    .then((res)=>{
        setPaymentData(res.data)
    })
    .catch((err)=>{
        alert("error getting payment details")
    })
  }
  useEffect(()=>{
    getPaymentDetails()
  },[])
    
    return (
        
        <>
        <HeaderComp/>
        <div className='payments-container'>
         <h1>Rentals</h1>
         <hr />
         {
          paymentData.length>0 ?
         <div className="allUserUploads">
         {paymentData.map((data, idx) => (
          <div key={idx} className="uploads">
            <p><span>Rental Id:</span>{data.rentalId}</p> 
            <p><span>Vehicle no</span>{data.vehicleRNumber}</p>
            <p><span>Rented date:</span>{data.rentedDate}</p> 
            <p><span>Duration:</span>{data.duration}</p>
            <p><span>Total Amount:</span>{data.totalAmount}</p> 
            <p><span>Payment Id:</span>{data.paymentId}</p>
            <p><span>Rented Location:</span>{data.rentingLocation}</p>
          </div>
        ))}
        </div> : <h2>No Rentals Made</h2>
         }
        </div>
          <Footer/>
        </>
        
      );

}

export default PaymentPage;
