import React, { useState } from 'react';

import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLoginSubmit= (event) => {
        console.log({event})
    }

    return (
        <div className = 'login-wrapper'>
            <form onSubmit = {handleLoginSubmit}>
                <div>
                    <label htmlFor = 'emailInput '>Email ID</label>
                    <input 
                        type = 'email'
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                        className = 'email-input'
                        id = 'emailInput'
                    />
                </div>
                <div>
                    <label htmlFor = 'passwordInput'>Password</label>
                    <input 
                        type = 'password'
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                        className = 'password-input'
                        id = 'passwordInput'
                    />
                </div>
            </form>
        </div>
    )
}

export default Login