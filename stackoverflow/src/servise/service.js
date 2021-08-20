import axios from 'axios';
import { useState } from 'react';

const url = 'http://localhost:2000/api';

export const authenticateSignup = async (user) => {
    try{
        return await axios.post(`${url}/signin`, user)
    }
    catch(error) {
        console.log('Error while calling signup api', error);
    }
}

export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${url}/login`, user);
    }
    catch(error) {
        console.log('Error while calling login api', error);
    }
}







export const userfind = async (user) => {
    try{
        return await axios.get(`${url}/user/search`, user)
    }
    catch(error) {
        console.log('Error while calling user for shop address', error);
    }
}
export const questionAdder = async(question) => {
    try {
        return await axios.post(`${url}/AddQuestion`, question);
    }
    catch(error) {
        console.log('Error while calling medicine adder api', error);
    }
}
//hello