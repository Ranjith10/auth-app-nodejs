import React, {useState, useEffect} from 'react';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';

import Register from './Register'
import Login from './Login'; 
import './App.css';

const App = () => {
  const [isSignup, setIsSignup] = useState(false)

  useEffect(() => {
      if(window.location.href.includes('/register')) {
          setIsSignup(true)
      }
  }, [])

  const handleSignup = () => {
    setIsSignup(true)
  }

  const handleLogin = () => {
      setIsSignup(false)
  }

  return (
    <Router>
        <div className="App">
        {
            isSignup 
                ?   
                    <Route path = '/register' render = {() => 
                        <>
                            <Register />
                            <div className = 'other-user-actions'>
                                <div className = 'other-action-text'>
                                    Already have an account!
                                </div>
                                <Link to = '/login'>
                                    <div className = 'sign-up' onClick = {() => handleLogin()}>
                                        Login
                                    </div>
                                </Link>
                            </div>
                        </>
                        }
                    />
                :
                    <Route path = '/(|login)' render = {() => 
                        <>
                            <Login />
                            <div className = 'other-user-actions'>
                                <div className = 'forgot-password'>
                                    Forgot Password?
                                </div>
                                <Link to ='/register'>
                                    <div className = 'sign-up' onClick = {() => handleSignup()}>
                                        Sign up for app
                                    </div>
                                </Link>
                            </div>    
                        </>
                        } 
                    />
        }
        </div>
    </Router>
  );
}

export default App;
