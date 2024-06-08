import './App.css';
import { BrowserRouter, NavLink, Route,Routes} from "react-router-dom"
import React, { Suspense } from 'react';
let Login = React.lazy(()=> import('./components/login/loginComp'))
let Register = React.lazy(()=> import('./components/register/registerComp'))
function App() {
  return<>
      <BrowserRouter>
            <Routes>
                <Route path="" element={<Login/>}/>
                <Route path="register"  element={<Suspense fallback={<> loading...</>}><Register/> </Suspense> }/>
            </Routes>
        </BrowserRouter>
  </>
}

export default App;