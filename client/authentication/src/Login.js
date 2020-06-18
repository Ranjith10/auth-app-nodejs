import React, { useState } from 'react';

import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLoginSubmit= (event) => {
        event.preventDefault()
        console.log({event})
    }

    return (
        <div className = 'login-wrapper'>
            <div className = 'app-title'>
                Login to the Demo App
            </div>
            <form 
                onSubmit = {handleLoginSubmit}
                autoComplete = 'off'
            >
                <div>
                    <input 
                        type = 'email'
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                        className = 'email-input'
                        id = 'emailInput'
                        placeholder = "Enter the registered E-mail"
                    />
                </div>
                <div>
                    <input 
                        type = 'password'
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                        className = 'password-input'
                        id = 'passwordInput'
                        placeholder = "Enter the password"
                    />
                </div>
                <button 
                    type = 'submit'
                    onClick = {handleLoginSubmit}
                    className = 'login-submit-button'
                >
                    Login
                </button>
            </form>
            <div className = 'other-user-actions'>
                <div className = 'forgot-password'>
                    Forgot Password?
                </div>
                <div className = 'sign-up'>
                    Sign up for app
                </div>
            </div>
        </div>
    )
}

export default Login