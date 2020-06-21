import axios from 'axios';

export const registerUser = async (name, email, password) => {
    let registerData = {name, email, password}
    let data = await axios('/api/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json',
        },
        data: registerData
    })
    return data
}

export const loginUser = async (email, password) => {
    let loginData = {email , password}
    let data = await axios('/api/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json',
        },
        data: loginData
    })
    return data
}