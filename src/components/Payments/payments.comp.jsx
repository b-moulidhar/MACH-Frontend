import Footer from "../Footer/footer.comp";
import HeaderComp from "../Header/header.comp";
import React, { useEffect, useState } from 'react';
import "./paymentsPage.css"



const PaymentPage = () => {
    
    return (
        
        <>
        <HeaderComp/>
        <div className='payments-container'>
         <h1>Payments page</h1>
        </div>
          <Footer/>
        </>
        
      );

}

export default PaymentPage;
