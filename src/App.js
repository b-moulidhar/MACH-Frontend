import './App.css';
import { BrowserRouter, NavLink, Route,Routes} from "react-router-dom"
import React, { Suspense } from 'react';
let Login = React.lazy(()=> import('./components/login/loginComp'))
let Register = React.lazy(()=> import('./components/register/registerComp'))
let HomePage = React.lazy(()=> import('./components/HomePage/homepage.comp'))
let AboutUsPage=React.lazy(()=>import('./components/AboutUs/aboutuspage.comp'))
let PaymentsPage=React.lazy(()=>import('./components/Payments/payments.comp'))
let UnParkComp=React.lazy(()=>import('./components/unpark/unpark.comp'))
let ProfileComp=React.lazy(()=>import('./components/MyProfile/myprofile.comp'))
let ExternalPayments=React.lazy(()=>import('./components/PaymentExternal/externalpayments.comp'))
let Return=React.lazy(()=>import('./components/PaymentExternal/returnpayments.comp'))
function App() {
  return<>
      <BrowserRouter>
            <Routes>
                <Route path="" element={<Login/>}/>
                <Route path="register"  element={<Suspense fallback={<> loading...</>}><Register/> </Suspense> }/>
                <Route path="homepage"  element={<Suspense fallback={<> loading...</>}><HomePage/> </Suspense> }/>
                <Route path="myprofile"  element={<Suspense fallback={<> loading...</>}><ProfileComp/> </Suspense> }/>
                <Route path="about-us"  element={<Suspense fallback={<> loading...</>}><AboutUsPage/> </Suspense> }/>
                <Route path="paymentdetails" element={<Suspense fallback={<>loading...</>}><PaymentsPage/></Suspense>}/>
                <Route path="unpark" element={<Suspense fallback={<>loading...</>}><UnParkComp/></Suspense>}/>
                <Route path="externalpayment" element={<Suspense fallback={<>loading...</>}><ExternalPayments/></Suspense>}/>
                <Route path="return" element={<Suspense fallback={<>loading...</>}><Return/></Suspense>}/>
            </Routes>
        </BrowserRouter>
  </>
}

export default App;