import React from "react";
import {useDispatch} from 'react-redux';
import {signout} from '../../actions/index';
import {useHistory} from 'react-router-dom'

const Signout = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const logOut = () => {
    
      dispatch(signout(()=>{
        console.log('pushing to another page');
        history.push('/');
      }));
  }

  return <div style={{height: "100vh"}} className="d-flex flex-column justify-content-center align-items-center">
  <h1 className="text-white">Goodbye</h1>

  <h3 className="text-warning">...sorry to see you go!</h3>
  <h5 className="text-info">This page should log the user out of the application by clearing the local storage and the redux store.</h5>

  <button className="btn btn-info" onClick={logOut}>Sign Out</button>
 </div>
};

export default Signout;
