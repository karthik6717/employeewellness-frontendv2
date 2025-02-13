import axios from "axios";
import { GET_ALL_DOCTORS } from "../constants/apiEndpoints";
import { GET_DOCTOR_BY_ID } from "../constants/apiEndpoints";
import { ADD_DOCTOR} from "../constants/apiEndpoints";
import { UPDATE_DOCTOR } from "../constants/apiEndpoints";
import { DELETE_DOCTOR } from "../constants/apiEndpoints";
import { getCookie } from "../utils/common";

export const getAllDoctors = async() => {
  const apiURL = GET_ALL_DOCTORS;

  try{
    const response = await axios.get(apiURL,{
      headers:{
        Authorization: "Bearer "+JSON.parse(getCookie("_USER_AUTH_")),
      },

    });
    return response;
  }catch(error)
  {
     console.error('Error in fetching doctors:',error);
     throw error;
  }
};

export const getDoctorById = async(doctorId) => {
  const apiURL = `${GET_DOCTOR_BY_ID}${doctorId}`;

  try{
    const response = await axios.get(apiURL,{
      headers:{
        Authorization: "Bearer "+JSON.parse(getCookie("_USER_AUTH_")),
      },

    });
  
  return response;
  }catch(error)
  {
    console.error('Error in fetching doctor:',error);
       throw error;
  }
};

export const addDoctor = async(formData) => {
  const apiURL = ADD_DOCTOR;

  try{
    const response = await axios.post(apiURL,formData,{
      headers:{
        Authorization: "Bearer "+JSON.parse(getCookie("_USER_AUTH_")),
      },

    });
  
  return response;
  }catch(error)
  {
    console.error('Error in while adding doctor:',error);
       throw error;
  }
};

export const updateDoctor = async(values) => {
  const apiURL = UPDATE_DOCTOR;
  try{
    const response = await axios.put(apiURL,values,{
      headers:{
        Authorization: "Bearer "+JSON.parse(getCookie("_USER_AUTH_")),
      },

    });
  
  return response;
  }catch(error)
  {
    console.error('Error in while updating the doctor:',error);
       throw error;
  }
};

export const deleteDoctor = async(doctorId) => {
  const apiURL = DELETE_DOCTOR + doctorId;
  try{
    const response = await axios.delete(apiURL,{
      headers:{
        Authorization: "Bearer "+JSON.parse(getCookie("_USER_AUTH_")),
      },

    });
  
  return response;
  }catch(error)
  {
    console.error('Error while deleting doctor:',error);
       throw error;
  }
};

