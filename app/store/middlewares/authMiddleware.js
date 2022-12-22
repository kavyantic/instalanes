import { setAuth } from "../authSlice";
import store from "..";


export default (store) => (next) => (action) => {
    if (setAuth.match(action)) {
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('id',action.payload._id)
    } 
    // else if (setAuth.match(action)) {
    //   localStorage.setItem('token', '');
    // }
    return next(action);
  };

