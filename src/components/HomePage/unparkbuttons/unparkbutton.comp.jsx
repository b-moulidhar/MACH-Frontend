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
                <strong class="">Park</strong>
                <h3 class="mb-0">explore parking</h3>
                </div>
                
            </div>
            </button>
            <button class="unpark-button"  >
            <div class="row">
                <div class="col">
                <strong class="">UnPark</strong>
                <h3 class="mb-0">explore unparking</h3>
                
                </div>
                
            </div>
            </button>
            <button class="repark-button" data-bs-toggle="modal" data-bs-target="#ReparkModal">
            <div class="row">
                <div class="col">
                <strong class="">Re-park</strong>
                <h3 class="mb-0">explore reparking</h3>
                
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