import axios from "axios";
import { DELETE_EMPLOYEE, GET_ALL_EMPLOYEES } from "../constants/apiEndpoints";
import { GET_EMPLOYEE_BY_ID } from "../constants/apiEndpoints";
import { ADD_EMPLOYEE } from "../constants/apiEndpoints";
import { UPDATE_EMPLOYEE } from "../constants/apiEndpoints";
import { getCookie } from "../utils/common";

export const getAllemployees = async () => {
  const apiURL = GET_ALL_EMPLOYEES;
  try {
    const response = await axios.get(apiURL, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(getCookie("_USER_AUTH_")),
      },
    });
    return response;
  } catch (error) {
    console.error("Error in fetching employees:", error);
    throw error;
  }
};

export const getEmployeebyId = async (employeeId) => {
  const apiURL = `${GET_EMPLOYEE_BY_ID}${employeeId}`;
  try {
    const response = await axios.get(apiURL, {
      headers: {
        Authorization: "Bearer " + JSON.parse(getCookie("_USER_AUTH_")),
      },
    });

    return response;
  } catch (error) {
    console.error("Error in fetching employee:", error);
    throw error;
  }
};

export const addEmployee = async (formData) => {
  const apiURL = ADD_EMPLOYEE;
  try {
    const response = await axios.post(apiURL, formData, {
      headers: {
        Authorization: "Bearer " + JSON.parse(getCookie("_USER_AUTH_")),
      },
    });

    return response;
  } catch (error) {
    console.error("Error in while adding employee:", error);
    throw error;
  }
};

export const updateEmployee = async (values) => {
  const apiURL = UPDATE_EMPLOYEE;

  try {
    const response = await axios.put(apiURL, values, {
      headers: {
        Authorization: "Bearer " + JSON.parse(getCookie("_USER_AUTH_")),
      },
    });

    return response;
  } catch (error) {
    console.error("Error in while updating the employee:", error);
    throw error;
  }
};

export const deleteEmployee = async (employeeId) => {
  const apiURL = DELETE_EMPLOYEE + employeeId;
  try {
    const response = await axios.delete(apiURL, {
      headers: {
        Authorization: "Bearer " + JSON.parse(getCookie("_USER_AUTH_")),
      },
    });

    return response;
  } catch (error) {
    console.error("Error while deleting employee:", error);
    throw error;
  }
};
