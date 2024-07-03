import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setToken} from "../../redux/actions/actions";
import Swal from "sweetalert2";
import {Api} from "../../api/api";
import { configdata } from "../../lib/data";
import unpark from "../../assets/images/unpark.png";
import loginImg from "../../assets/images/login.jpg";


// function Login({ history }){
function Login(){
    const token = useSelector(state=> state.authentication.token);
    const user_id = useSelector(state=> state.authentication.userId);
    const mobile = useSelector(state=> state.updation.phno);
    let dispatch = useDispatch();
const [credentials, setCredentials] = useState({email:'', pswd:''});

    // useEffect(()=>{
    // },[])

    function changeHandler(evt){
        setCredentials({...credentials,[evt.target.id]:evt.target.value})
    }

    function login(){
        localStorage.clear();
        Api.post("api/auth/login",credentials, {headers:{
            'Content-Type': 'application/json' // Ensure this is set correctly
          }})
        .then((res)=>{

            console.log(res.data)
            dispatch(setToken(res.data.token))
            dispatch(setUser(res.data.user))

            localStorage.setItem("Authorization",res.data.result.token);
            localStorage.setItem("Email",res.data.result.email);
            localStorage.setItem("UserId",res.data.result.applicationUserId);
            
            
            if(res.status==200){
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: "Login Successful",
                    showConfirmButton: false,
                    timer: 1000
                  }).then(()=>{
                    console.log(token);
                    debugger;
                      window.location.href ="/homePage"
                  })
            // history.push("/uploadImage");
            }
        })
        .catch((err)=>{
            console.log(err);
            Swal.fire({
                position: 'top',
                icon: 'error',
                text: 'Please Enter Correct Credentials!',
              })
        })
        console.log(token,user_id)
    }

    return(
        <>
        <section className="vh-100" style={{backgroundColor: "#456c9e"}}>
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
                <div className="card" style={{borderRadius: '1rem'}}>
                <div className="row g-0">
                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src={loginImg} alt="login form" className="img-fluid" style={{borderRadius: '1rem 0 0 1rem',height:"90%"}} />
                    </div>
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                        <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                            <img src={unpark} alt="unpark" width="100px" height="50px" />
                            {/* <i className="fas fa-cubes fa-2x me-3" style={{color: '#ff6219'}} /> */}
                            <span className="h1 fw-bold mb-0"> </span>
                        </div>
                        <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: 1}}>Sign into your account</h5>
                        <div className="form-outline mb-4">
                            <input type="text" id="UserName" className="form-control form-control-lg" onInput={(evt)=>{changeHandler(evt)}} />
                            <label className="form-label" htmlFor="UserName">UserName address</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="password" id="Password" className="form-control form-control-lg" onInput={(evt)=>{changeHandler(evt)}} />
                            <label className="form-label" htmlFor="Password">Password</label>
                        </div>
                        <div className="pt-1 mb-4">
                            <button className="btn btn-dark btn-lg btn-block" type="button" onClick={login}>Login</button>
                        </div>
                        {/* <a className="small text-muted" href="forgot">Forgot password?</a> */}
                        <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="register" style={{color: '#393f81'}}>Register here</a></p>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

        </>
    )
}

export default Login;