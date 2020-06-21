import React, { useState } from 'react';
import Swal from 'sweetalert2';

import {loginUser} from './service/Api';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLoginSubmit= async (event) => {
        event.preventDefault()
        if(email.length === 0 || password.length === 0) {
            Swal.fire({
                title: 'Login Failed',
                text: 'Please fill in all the details',
                icon: 'error',
                showCancelButton: false,
                confirmButtonText: 'Ok',
            })
        } else {
            try {
                let result = await loginUser(email, password)
                if(result.status === 200) {
                    window.location.href = 'https://reactjs.org'
                }
            } catch(err) {
                Swal.fire({
                    title: 'Login Failed',
                    text: err.response.data.message,
                    icon: 'error',
                    showCancelButton: false,
                    confirmButtonText: 'Ok',
                })
            }
        }
        
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
        </div>
    )
}

export default Login