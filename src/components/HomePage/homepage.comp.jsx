import Footer from "../Footer/footer.comp";
import HeaderComp from "../Header/header.comp";
import CarouselComp from "./carousel/carousel.comp";
import UnParkButtonComp from "./unparkbuttons/unparkbutton.comp";
function HomePage(){
    return (
      <>
        <HeaderComp/>
        <CarouselComp/>
        <UnParkButtonComp/>
        <Footer/>
      </>
    );
}
export default HomePage;