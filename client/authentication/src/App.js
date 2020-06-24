import React, {useState, useEffect} from 'react';
import {NavLink, BrowserRouter as Router, Route} from 'react-router-dom';

import Register from './Register'
import Login from './Login'; 
import './App.css';

const App = () => {
  return (
    <Router>
        <div className="App">
            <Route path = '/register' render = {() => 
                <>
                    <Register />
                    <div className = 'other-user-actions'>
                        <div className = 'other-action-text'>
                            Already have an account!
                        </div>
                        <NavLink to = '/login'>
                            <div className = 'sign-up'>
                                Login
                            </div>
                        </NavLink>
                    </div>
                </>
                }
            />
            <Route path = '/(|login)' render = {() => 
                <>
                    <Login />
                    <div className = 'other-user-actions'>
                        <div className = 'forgot-password'>
                            Forgot Password?
                        </div>
                        <NavLink to ='/register'>
                            <div className = 'sign-up'>
                                Sign up for app
                            </div>
                        </NavLink>
                    </div>    
                </>
                } 
            />
        </div>
    </Router>
  );
}

export default App;
