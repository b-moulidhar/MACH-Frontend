import { NavLink } from "react-router-dom";
import ParkModal from "../../Modal/park.modal";
import ReParkModal from "../../Modal/repark.modal";
import "./unparkbutton.css"
function UnParkButtonComp(){
    return(
        <>
        <div class="row mb-2 buttons-container">
            <button class="park-button" data-bs-toggle="modal" data-bs-target="#parkModal" >
            <div class="row">
                <div class="col">
                <h3 class="">Park</h3>
                <strong class="mb-0">Explore parking</strong>
                </div>
                
            </div>
            </button>
            <button class="unpark-button"  >
            <NavLink end to="/unpark">
            <div class="row">
                <div class="col">
                <h3 class="">UnPark</h3>
                <strong class="mb-0">Explore unparking</strong>
                
                </div>
                
            </div>
            </NavLink>
            </button>
            <button class="repark-button" data-bs-toggle="modal" data-bs-target="#ReparkModal">
            <div class="row">
                <div class="col">
                <h3 class="">Re-park</h3>
                <strong class="mb-0">Explore reparking</strong>
                
                </div>
                
            </div>
            </button>
        </div>
        <ParkModal/>
        <ReParkModal/>
        </>
    )
}
export default UnParkButtonComp;