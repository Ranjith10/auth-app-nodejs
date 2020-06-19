import React, {useState} from 'react';

import './Register.css';

const Register = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [name, setName] = useState('')
    const [passwordErrorMessage, setPasswordErrorMessage] = useState(false)

    const handleRegisterSubmit = (event) => {
        event.preventDefault()
    }

    const handleReenterPassword = (event) => {
        let repeatedPassword = event.target.value
        setRepeatPassword(repeatedPassword)
        if(repeatedPassword !== password) {
            setPasswordErrorMessage(true)
        } else {
            setPasswordErrorMessage(false)
        }    
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
                <div>
                    <input 
                        type = 'password'
                        value = {repeatPassword}
                        onChange = {(e) => setRepeatPassword(e.target.value)}
                        onBlur = {(e) => handleReenterPassword(e)}
                        className = 'register-password-input'
                        placeholder = "Re-Enter your password"
                    />
                    <i class = 'fas fa-eye'/>
                </div>
                {
                    passwordErrorMessage 
                        ?
                            <div>Passwords do not match, re-enter the password</div>
                        :   null
                }
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