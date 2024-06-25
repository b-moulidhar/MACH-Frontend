import axios from 'axios';
import Swal from 'sweetalert2';
import { configdata } from '../lib/data';
const Api = axios.create({
  baseURL: 'http://localhost:5250/',
});

const Contentful = axios.create({
  baseURL:'https://cdn.contentful.com/spaces/gqzgjhtdpuk2/environments/master/entries/'
})

Contentful.interceptors.request.use(
  (config) => {
    if (configdata) {
      config.headers['Authorization'] = `Bearer ${configdata.contenfulToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
Contentful.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      Swal.fire({
        position: 'top',
        icon: 'error',
        text: 'session timed Out',
        timer: 2000
      }).then(()=>{
        window.location = "/";
      })
    } 
    // else if (!error.response) {
    //   // Handle network error
    //   console.log('Network Error');
    // }
    return Promise.reject(error);
  }
);



Api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('Authorization');
    const userId = localStorage.getItem("UserId"); 
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
      config.headers["UserID"]= userId;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      Swal.fire({
        position: 'top',
        icon: 'error',
        text: 'session timed Out',
        timer: 2000
      }).then(()=>{
        window.location = "/";
      })
    } 
    // else if (!error.response) {
    //   // Handle network error
    //   console.log('Network Error');
    // }
    return Promise.reject(error);
  }
);

export {Api,Contentful};