import './cardsComp.css';
import bike from "../../../assets/images/bike_blue1.jpg";
import Rental from '../../Modal/rental.modal';
import { useState } from 'react';

function CardsComp(props) {
  const [rentalData, setRentalData] = useState(null);

  const handleRentNowClick = (data) => {
    setRentalData(data); // Set rentalData when "Rent Now" button is clicked
  };

  return (
    <div className="container">    
      <div className="allUserUploads">
        {props.searchResults.map((data, idx) => (
          <div key={idx} className="uploads">
            <span className='available'>available </span>
            <span className='notAvailable'>available </span>
            <img src={bike} alt="bike" />
            <p><span>vehicle no:</span>{data.vehicleNumber}</p> 
            <p><span>address:</span>{data.location}</p>
            <p><span>price per Hour: </span>₹{data.pricePerHour}<span>/hr</span></p>
            <p><span>Available Hours:</span>{data.availableHours}hours</p>
            <button className="RentNow" data-bs-toggle="modal" onClick={() => handleRentNowClick(data)} data-bs-target="#RentalModal">Rent Now</button>
          </div>
        ))}
        <Rental data={rentalData} /> {/* Render Rental component with rentalData */}
      </div>
    </div>
  );
}

export default CardsComp;
