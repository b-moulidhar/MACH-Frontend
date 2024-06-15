import './App.css';
import { BrowserRouter, NavLink, Route,Routes} from "react-router-dom"
import React, { Suspense } from 'react';
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
            </Routes>
        </BrowserRouter>
  </>
}

export default App;