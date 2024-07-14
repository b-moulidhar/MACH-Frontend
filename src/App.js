import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React, { Suspense } from 'react';

let Login = React.lazy(() => import('./components/login/loginComp'));
let Register = React.lazy(() => import('./components/register/registerComp'));
let HomePage = React.lazy(() => import('./components/HomePage/homepage.comp'));
let AboutUsPage = React.lazy(() => import('./components/AboutUs/aboutuspage.comp'));
let PaymentsPage = React.lazy(() => import('./components/Payments/payments.comp'));
let UnParkComp = React.lazy(() => import('./components/unpark/unpark.comp'));
let ProfileComp = React.lazy(() => import('./components/MyProfile/myprofile.comp'));
let ExternalPayments = React.lazy(() => import('./components/PaymentExternal/externalpayments.comp'));
let Return = React.lazy(() => import('./components/PaymentExternal/returnpayments.comp'));

function App() {
  const isAuthenticated = () => {
    return !!localStorage.getItem('Authorization'); // Check if token is available in local storage
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path=""
          element={<Suspense fallback={<>loading...</>}><Login /></Suspense>}
        />
        <Route
          path="register"
          element={<Suspense fallback={<>loading...</>}><Register /></Suspense>}
        />
        <Route
          path="homepage"
          element={isAuthenticated() ? <Suspense fallback={<>loading...</>}><HomePage /></Suspense> : <Navigate to="/" />}
        />
        <Route
          path="myprofile"
          element={isAuthenticated() ? <Suspense fallback={<>loading...</>}><ProfileComp /></Suspense> : <Navigate to="/" />}
        />
        <Route
          path="about-us"
          element={isAuthenticated() ? <Suspense fallback={<>loading...</>}><AboutUsPage /></Suspense> : <Navigate to="/" />}
        />
        <Route
          path="paymentdetails"
          element={isAuthenticated() ? <Suspense fallback={<>loading...</>}><PaymentsPage /></Suspense> : <Navigate to="/" />}
        />
        <Route
          path="unpark"
          element={isAuthenticated() ? <Suspense fallback={<>loading...</>}><UnParkComp /></Suspense> : <Navigate to="/" />}
        />
        <Route
          path="externalpayment"
          element={isAuthenticated() ? <Suspense fallback={<>loading...</>}><ExternalPayments /></Suspense> : <Navigate to="/" />}
        />
        <Route
          path="return"
          element={isAuthenticated() ? <Suspense fallback={<>loading...</>}><Return /></Suspense> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
