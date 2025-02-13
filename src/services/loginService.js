import axios from "axios";
import { LOGIN } from "../constants/apiEndpoints"

export const login = async (formData)=>{
    const apiURL = LOGIN +`?username=${formData.email}&password=${formData.password}`;
    return axios.post(apiURL,{
        headers:{
            "Content-Type":"application/json",
        },
    });
};