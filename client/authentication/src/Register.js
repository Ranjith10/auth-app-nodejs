import React, {useState} from 'react';

import './Register.css';

const Register = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleRegisterSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div className = 'register-wrapper'>
            <div className = 'app-title'>
                Create your account
            </div>
            <form 
                onSubmit = {handleRegisterSubmit}
                autoComplete = 'off'
            >   
                <div>
                    <input 
                        type = 'text'
                        value = {name}
                        onChange = {(e) => setName(e.target.value)}
                        className = 'register-name-input'
                        placeholder = "Enter your name"
                    />
                </div>
                <div>
                    <input 
                        type = 'email'
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                        className = 'register-email-input'
                        placeholder = "Enter your E-mail"
                    />
                </div>
                <div>
                    <input 
                        type = 'password'
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                        className = 'register-password-input'
                        placeholder = "Enter your password"
                    />
                </div>
                <button 
                    type = 'submit'
                    onClick = {handleRegisterSubmit}
                    className = 'register-submit-button'
                >
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default Register;