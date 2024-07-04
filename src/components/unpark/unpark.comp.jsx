import Footer from "../Footer/footer.comp";
import HeaderComp from "../Header/header.comp";
import CardsComp from "./cards/cards.comp";
import Search from "./search/search";
import "./unpark.css"
function UnParkComp(){
    return(
        <>  <HeaderComp/>
            <div className="unpark-container">
               <Search/>
            </div>
            <Footer/>
        </>
    )
}
export default UnParkComp;