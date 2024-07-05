import { useEffect,useState } from "react"
import { Navigate } from "react-router-dom";
import {Api} from "../../api/api";
import Swal from "sweetalert2";


const handleChange=()=>{

    Swal.fire({
        position: 'top',
        icon: 'success',
        title: "Payment Successful",
        showConfirmButton: false,
        timer: 2000
      }).then(()=>{
       // console.log(token);
        debugger;
          window.location.href ="/homePage"
      })
}
const Return = () => {
    
    
}

export default Return;
  