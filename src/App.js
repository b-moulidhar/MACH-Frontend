import './App.css';
import { BrowserRouter, NavLink, Route,Routes} from "react-router-dom"
import React, { Suspense } from 'react';
import ProfileComp from './components/MyProfile/myprofile.comp';
let Login = React.lazy(()=> import('./components/login/loginComp'))
let Register = React.lazy(()=> import('./components/register/registerComp'))
let HomePage = React.lazy(()=> import('./components/HomePage/homepage.comp'))
function App() {
  return<>
      <BrowserRouter>
            <Routes>
                <Route path="" element={<Login/>}/>
                <Route path="register"  element={<Suspense fallback={<> loading...</>}><Register/> </Suspense> }/>
                <Route path="homepage"  element={<Suspense fallback={<> loading...</>}><HomePage/> </Suspense> }/>
                <Route path="myprofile"  element={<Suspense fallback={<> loading...</>}><ProfileComp/> </Suspense> }/>
            </Routes>
        </BrowserRouter>
  </>
}

export default App;