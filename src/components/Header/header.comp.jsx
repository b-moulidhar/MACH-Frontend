import { NavLink } from "react-router-dom";
import "./header.css"
import Swal from 'sweetalert2'
import unpark from "../../assets/images/unpark.png";
import { useEffect, useState } from "react";
import ParkModal from "../Modal/park.modal";
import ReParkModal from "../Modal/repark.modal";
function HeaderComp(){
    const [isHovered,setIsHovered] = useState(false);
    const [link,setLink] = useState("");
    useEffect(()=>{
        let userId = localStorage.getItem("UserId"); 
        const profilePage = "/myprofile";
        setLink(profilePage);
    },[])

    function logout(){
        Swal.fire({
            title: 'Are you sure?',
            text: "You will be logged out of this session!",
            icon: 'warning',
            showCancelButton: true,
            background:"#edf2f4",
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, logout!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    position:'top',
                    icon: 'success',
                    title: 'Logged out successfully',
                    showConfirmButton: false,
                    background:"#edf2f4",
                    timer: 1000
                  }).then(()=>{                 
                    localStorage.clear();
                    window.location = "/"
                })      
            }
        })
        
    }
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <NavLink end to="/homepage">
            <button className="btn primary navBtn"><img src={unpark} alt="" width={30} height={30} /></button>
        </NavLink>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
                <li className="nav-item">
                    <NavLink >
                        <button className="btn primary navBtn" data-bs-toggle="modal" data-bs-target="#parkModal" ><span>Park</span></button>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink >
                        <button className="btn primary navBtn"><span>Unpark</span></button>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink >
                        <button className="btn primary navBtn" data-bs-toggle="modal" data-bs-target="#ReparkModal"><span>Repark</span></button>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink end to="/paymentdetails">
                        <button className="btn primary navBtn"><span>Payments</span></button>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink end to="/about-us">
                        <button className="btn primary navBtn"><span>About Us</span> </button>
                    </NavLink>
                </li>
            </ul>
            <div id="myProfile" onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
                <img src="https://www.svgrepo.com/show/512729/profile-round-1342.svg" alt="profile" width={30} height={30} />
                {isHovered && (
                <div className="popup">
                    <img src="https://www.svgrepo.com/show/512729/profile-round-1342.svg" alt="profile" width={60} height={60} />
                    <div>
                    <NavLink end to={link}>
                        <button className="btn primary navBtn"><span>My profile</span></button>
                    </NavLink>
                    <button className="btn primary navBtn" onClick={logout}><span>
                        logout</span>
                    </button>
                    </div>
                </div>
                )}
            </div>
        </div>
    </div>
</nav>
        

        {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <NavLink end  to="/homePage"><button className="btn primary">Home</button></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink end  to="/homePage/uploads"><button className="btn primary">viewImages</button></NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink end  to="/homePage/userImages"><button className="btn primary">upload a image</button></NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink end  to="/homePage/profile"><button className="btn primary">profile</button></NavLink>
                    </li>
                    </ul>
               
                    <button className="btn btn-outline-success" onClick={logout}>logout</button>
                </div>
            </div>
        </nav> */}
           <ParkModal/>
           <ReParkModal/>

        </>
    )
}

export default HeaderComp;