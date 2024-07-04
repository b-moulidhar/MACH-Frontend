import './cardsComp.css'
import bike from "../../../assets/images/bike_blue1.jpg"
function CardsComp(props){
    return (
        <>
        <div className="container">    
          <div className="allUserUploads">
            {
            props.searchResults.map((data,idx) => {
                return(
              <div key={idx} className="uploads">
                <span className='available'>available </span>
                <span className='notAvailable'>available </span>
                <img src={bike} />
                <p><span>address:</span>{data.location} </p>
                <p><span>vehicle no:</span>{data.vehicleRNumber}</p> 
                <p><span>price: </span>₹{data.pricePerHour}<span>/hr</span></p> 
                <button className="RentNow">Rent Now</button>
              </div>
                )
              })
}

              
          </div>
        </div>
        </>
      );
}
export default CardsComp;