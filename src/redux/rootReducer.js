// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import updation from './reducers/updation.reducer';
import Authentication from './reducers/authentication.reducer';
import {authReducer, formReducer} from './reducers/clear.reducer';


const rootReducer = combineReducers({
  updation: updation,
  authentication: Authentication,
  clearauth: authReducer,
  clearUpdate:formReducer


});

export default rootReducer;