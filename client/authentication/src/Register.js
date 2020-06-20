import React, {useState} from 'react';

import './Register.css';

const Register = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [name, setName] = useState('')
    const [isPasswordValid, setIsPasswordValid] = useState(true)
    const [isEmailValid, setIsEmailValid] = useState(true)
    
    const validateEmail = (event) => {
        let email = event.target.value;
        let isEmailValid = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(`${email}`)
        setIsEmailValid(isEmailValid)
    }

    const handleFormValidation = () => {
        if(name.length > 0 && email.length > 0 && password.length > 0 && repeatPassword.length > 0) {
            if(isPasswordValid && isEmailValid) {
                return true
            } else if (!isEmailValid) {
                return false
            } else if (!isPasswordValid) {
                return false
            }
        }
        return false
    }

    const handleRegisterSubmit = (event) => {
        event.preventDefault()
        let isFormValid = handleFormValidation()
        if(isFormValid) {
            alert("Successfully registered")
        } else {
            alert("Please fill all fields")
        }
    }

    const handleReenterPassword = (event) => {
        let repeatedPassword = event.target.value
        setRepeatPassword(repeatedPassword)
        if(repeatedPassword !== password) {
            setIsPasswordValid(false)
        } else {
            setIsPasswordValid(true)
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
                        required 
                    />
                </div>
                <div>
                    <input 
                        type = 'email'
                        value = {email}
                        onBlur = {(e) => validateEmail(e)}
                        onChange = {(e) => setEmail(e.target.value)}
                        className = 'register-email-input'
                        placeholder = "Enter your E-mail"
                        required 
                    />
                </div>
                <div>
                    <input 
                        type = 'password'
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                        className = 'register-password-input'
                        placeholder = "Enter your password"
                        required
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
                        required
                    />
                </div>
                {
                    !isEmailValid
                        ? <div>Please enter a valid Email ID</div>
                        :   null
                }
                {
                    !isPasswordValid 
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