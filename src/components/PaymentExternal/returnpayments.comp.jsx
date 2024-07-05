import { useEffect,useState } from "react"
import { Navigate } from "react-router-dom";
import {Api} from "../../api/api";

const Return = () => {
    const [status, setStatus] = useState(null);
    const [customerEmail, setCustomerEmail] = useState('');
  
    useEffect(() => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const sessionId = urlParams.get('session_id');
  
      Api.get(`/session-status?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          setStatus(data.status);
          setCustomerEmail(data.customer_email);
        });
    }, []);
  
    if (status === 'open') {
      return (
        <Navigate to="/unpark" />
      )
    }
  
    if (status === 'complete') {
      return (
        <section id="success">
          <p>
            We appreciate your business! A confirmation email will be sent to {customerEmail}.
  
            If you have any questions, please email <a href="mailto:unpark@gmail.com">unpark@gmail.com</a>.
          </p>
        </section>
      )
    }
  
    return null;
}

export default Return;
  