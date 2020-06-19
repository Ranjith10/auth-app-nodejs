import React, {useState} from 'react';

import Register from './Register'
import Login from './Login'; 
import './App.css';

const App = () => {
  const [isSignup, setIsSignup] = useState(false)

  const handleSignup = () => {
    setIsSignup(true)
  }

  const handleLogin = () => {
      setIsSignup(false)
  }

  return (
    <div className="App">
      {
        isSignup 
            ?
                <>
                    <Register />
                    <div className = 'other-user-actions'>
                        <div className = 'other-action-text'>
                            Already have an account!
                        </div>
                        <div className = 'sign-up' onClick = {() => handleLogin()}>
                            Login
                        </div>
                    </div>
                </>
            :
            <>
              <Login />
              <div className = 'other-user-actions'>
                  <div className = 'forgot-password'>
                    Forgot Password?
                  </div>
                  <div className = 'sign-up' onClick = {() => handleSignup()}>
                    Sign up for app
                  </div>
              </div>
            </>
      }
    </div>
  );
}

export default App;
