import React, { useState } from 'react';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="login-signup">
      <div className="form-container">
        <h2>{isSignUp ? 'Sign Up' : 'Log In'}</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {isSignUp && <input type="password" placeholder="Confirm Password" />}
          <button className="loginbtn" type="submit">{isSignUp ? 'Sign Up' : 'Log In'}</button>
        </form>
        <p onClick={toggleForm}>
          {isSignUp ? 'Already have an account? Log in' : "Don't have an account? Sign up"}
        </p>
      </div>
    </div>
  );
};

export default Login;