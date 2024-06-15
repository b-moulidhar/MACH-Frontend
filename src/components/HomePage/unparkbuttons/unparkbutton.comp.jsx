import "./unparkbutton.css"
function UnParkButtonComp(){
    return(
        <>
        <div class="row mb-2 buttons-container">
            <div class="park-button">
            <div class="row">
                <div class="col">
                <strong class="">Park</strong>
                <h3 class="mb-0">explore parking</h3>
                </div>
                
            </div>
            </div>
            <div class="unpark-button">
            <div class="row">
                <div class="col">
                <strong class="">UnPark</strong>
                <h3 class="mb-0">explore unparking</h3>
                
                </div>
                
            </div>
            </div>
        </div>
        </>
    )
}
export default UnParkButtonComp;