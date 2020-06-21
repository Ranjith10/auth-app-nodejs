import axios from 'axios';

export const registerUser = (name, email, password) => {
    let registerData = {name, email, password}
    return axios('/api/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json',
        },
        data: registerData
    })
}

export const loginUser = (email, password) => {
    let loginData = {email , password}
    return axios('/api/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json',
        },
        data: loginData
    })
}