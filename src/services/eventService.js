import axios from "axios";
import { GET_ALL_EVENTS } from "../constants/apiEndpoints";
import { GET_EVENT_BY_ID } from "../constants/apiEndpoints";
import { ADD_EVENT } from "../constants/apiEndpoints";
import { UPDATE_EVENT } from "../constants/apiEndpoints";
import { DELETE_EVENT } from "../constants/apiEndpoints";
import { EVENT_REGISTRATION } from "../constants/apiEndpoints";
import { GET_REGISTERED_EVENTS } from "../constants/apiEndpoints";
import { getCookie } from "../utils/common";

export const getAllEvents = async()=>{
    const apiURL = GET_ALL_EVENTS;
    try{
        const response = await axios.get(apiURL,{
          headers:{
            Authorization: "Bearer " +JSON.parse(getCookie("_USER_AUTH_")),
          },
  
        });
        return response;
      }catch(error)
      {
         console.error('Error in fetching events:',error);
         throw error;
      }
};

export const getEventById = async(eventId) =>{
    const apiURL = `${GET_EVENT_BY_ID}${eventId}`;
    try{
        const response = await axios.get(apiURL,{
          headers:{
            Authorization: "Bearer "+JSON.parse(getCookie("_USER_AUTH_")),
          },
    
        });
      
      return response;
      }catch(error)
      {
        console.error('Error in fetching event:',error);
           throw error;
      }
};

export const addEvent =async(formData) =>{
    const apiURL =ADD_EVENT;
    try{
        const response = await axios.post(apiURL,formData,{
          headers:{
            Authorization: "Bearer "+JSON.parse(getCookie("_USER_AUTH_")),
          },
    
        });
      
      return response;
      }catch(error)
      {
        console.error('Error in while adding event:',error);
           throw error;
      }
};

export const updateEvent = async(values) =>{
    const apiURL = UPDATE_EVENT;
    try{
        const response = await axios.put(apiURL,values,{
          headers:{
            Authorization: "Bearer "+JSON.parse(getCookie("_USER_AUTH_")),
          },
    
        });
      
      return response;
      }catch(error)
      {
        console.error('Error in while updating the event:',error);
           throw error;
      }
};

export const deleteEvent = async(eventId) =>{
    const apiURL = DELETE_EVENT + eventId;
    try{
        const response = await axios.delete(apiURL,{
          headers:{
            Authorization: "Bearer "+JSON.parse(getCookie("_USER_AUTH_")),
          },
    
        });
      
      return response;
      }catch(error)
      {
        console.error('Error while deleting event:',error);
           throw error;
      }
};

//events Registration
export const registerEvent = async (employeeId, eventId, formData) => {
  const apiURL = `${EVENT_REGISTRATION}${employeeId}/${eventId}`;
  try {
    const response = await axios.post(apiURL, formData, {
      headers: {
        Authorization: "Bearer " + JSON.parse(getCookie("_USER_AUTH_")),
      },
    });
    return response;

 } catch (error) {
    console.error("Error during Event registration:", error);

    // Extract error response or provide a fallback message
    const errorMessage = error.response?.data;
    
    // Throw error so the caller function can handle it
    throw new Error(errorMessage);
  }
};
export const getRegisterdEvents = async (employeeId) => {
  const apiURL = `${GET_REGISTERED_EVENTS}${employeeId}`;

  try {
    const response = await axios.get(apiURL, {
      headers: {
        Authorization: "Bearer " + JSON.parse(getCookie("_USER_AUTH_")),
      },
    });
    return response;
  } catch (error) {
    console.error("Error in fetching Registered Events:", error);
    throw error;
  }
};
