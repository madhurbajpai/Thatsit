import axios from 'axios';
const url = 'http://localhost:8000';

export const addUser = async (data) => {
    try{
        let response = await axios.post(`${url}/add`,data);
        return response.data;
    } catch(error){
        console.log('Error while addUser api',error.message);
    }
}

export const getUsers = async () => {
    try{
        let response = await axios.get(`${url}/users`);
        return response.data;
    } catch(error){
        console.log('Error while calling getusers api', error.message);
    }
}

export const setConversation = async (data) => {
    try{
        await axios.post(`${url}/conversation/add`, data);
    }
    catch(error){
        console.log('Error while calling setConversation api', error.message);
    }
}

export const getConversation = async (users) => {
    try{
        let response = await axios.post(`${url}/conversation/get`, users);
        console.log(response)
        return response.data;
    }
    catch(error){
        console.log('Error while calling getConversation api', error.message);
    }
}