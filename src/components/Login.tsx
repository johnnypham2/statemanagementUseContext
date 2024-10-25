import { useContext, useReducer, useState } from 'react';
import LoginContext from '../context/loginContext';

const Login  = () => {
  

const loginContext = useContext(LoginContext);

  // Handle login
  const handleLogin = () => {
    loginContext.loginDispatch({type:'LOGIN', username:'Johnny'})
  }
  // Handle logout
  const handleLogout = () => {
    loginContext.loginDispatch({type:"LOGOUT"})
};
  
  return (
    <div className="container mt-5">
      {loginContext.user ? (
          <div className='d-flex justify-content-between'>
          <p style={{ color: 'blue', padding: '10px' }}>Hello {loginContext.user}</p>
          <button className="btn btn-danger" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      ) : (
          <button className="btn btn-primary" onClick={handleLogin}>
          Log In
        </button>
      )}
    </div>
  );
};

export default Login;