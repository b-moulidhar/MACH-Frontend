import './cardsComp.css'
import bike from "../../../assets/images/bike_blue1.jpg"
function CardsComp(){
    return (
        <>
        <div className="container">    
          <div className="allUserUploads">
            
              <div key={0} className="uploads">
                <span className='available'>available </span>
                <span className='notAvailable'>available </span>
                <img src={bike} />
                <p><span>address:</span> </p>
                <p><span>vehicle no:</span></p> 
                <p><span>price: </span> <span>/hr</span></p> 
                <button className="RentNow">Rent Now</button>
              </div>

              <div key={1} className="uploads">
                <span className='available'>available </span>
                <span className='notAvailable'>available </span>
                <img src={bike} />
                <p><span>address:</span> </p>
                <p><span>vehicle no:</span></p> 
                <p><span>price: </span> <span>/hr</span></p> 
                <button className="RentNow">Rent Now</button>
              </div>

              <div key={2} className="uploads">
                <span className='available'>available </span>
                <span className='notAvailable'>available </span>
                <img src={bike} />
                <p><span>address:</span> </p>
                <p><span>vehicle no:</span></p> 
                <p><span>price: </span> <span>/hr</span></p> 
                <button className="RentNow">Rent Now</button>
              </div>

              <div key={2} className="uploads">
                <span className='available'>available </span>
                <span className='notAvailable'>available </span>
                <img src={bike} />
                <p><span>address:</span> </p>
                <p><span>vehicle no:</span></p> 
                <p><span>price: </span> <span>/hr</span></p> 
                <button className="RentNow">Rent Now</button>
              </div>

              <div key={2} className="uploads">
                <span className='available'>available </span>
                <span className='notAvailable'>available </span>
                <img src={bike} />
                <p><span>address:</span> </p>
                <p><span>vehicle no:</span></p> 
                <p><span>price: </span> <span>/hr</span></p> 
                <button className="RentNow">Rent Now</button>
              </div>
          </div>
        </div>
        </>
      );
}
export default CardsComp;