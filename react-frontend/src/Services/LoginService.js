import axios from "axios";

import React, { Component } from 'react';

const LOGIN_BASE_REST_API_URL ='http://localhost:8080/user';
class LoginService extends Component {
    authenticateUser(user)
    {
        return axios.post(LOGIN_BASE_REST_API_URL+"/login",user);
    }

    getUserName(email)
    {
        return axios.get(`${LOGIN_BASE_REST_API_URL}/login/${email}`);
    }

    getUser(id)
    {
        return axios.get(`${LOGIN_BASE_REST_API_URL}/${id}`);
    }
    getCurrentUser()
    {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new LoginService;