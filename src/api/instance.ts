import axios from 'axios'
export const  instance = axios.create({
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    withCredentials:true,
    headers:{
        "API-KEY":"dec75d6b-6ba0-47cf-9b75-d8cef7f7134b"
    }
})