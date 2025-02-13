import axios from "axios";
import { GET_ALL_CHALLENGES } from "../constants/apiEndpoints";
import { GET_CHALLENGE_BY_ID } from "../constants/apiEndpoints";
import { ADD_CHALLENGE } from "../constants/apiEndpoints";
import { UPDATE_CHALLENGE } from "../constants/apiEndpoints";
import { DELETE_CHALLENGE } from "../constants/apiEndpoints";
import { SET_CHALLENGE_AS_COMPLETE } from "../constants/apiEndpoints";
import { getCookie } from "../utils/common";
//import { SET_COMPLETE_CHALLEGE_ADD_REWARD_POINTS } from "../constants/apiEndpoints";

//Register Challenge
import { REGISTER_CHALLENGE } from "../constants/apiEndpoints";
import { GET_REGISTERD_CHALLENGES } from "../constants/apiEndpoints";

export const getAllChallenges = async () => {
  const apiURL = GET_ALL_CHALLENGES;

  try {
    const response = await axios.get(apiURL, {
      headers: {
        Authorization: "Bearer " + JSON.parse(getCookie("_USER_AUTH_")),
      },
    });
    return response;
  } catch (error) {
    console.error("Error in fetching challenges:", error);
    throw error;
  }
};

export const getChallengeById = async (challeId) => {
  const apiURL = `${GET_CHALLENGE_BY_ID}${challeId}`;

  try {
    const response = await axios.get(apiURL, {
      headers: {
        Authorization: "Bearer " + JSON.parse(getCookie("_USER_AUTH_")),
      },
    });

    return response;
  } catch (error) {
    console.error("Error in fetching challenge:", error);
    throw error;
  }
};

export const addChallenge = async (formData) => {
  const apiURL = ADD_CHALLENGE;

  try {
    const response = await axios.post(apiURL, formData, {
      headers: {
        Authorization: "Bearer " + JSON.parse(getCookie("_USER_AUTH_")),
      },
    });

    return response;
  } catch (error) {
    console.error("Error in while adding challenge:", error);
    throw error;
  }
};

export const updateChallenge = async (values) => {
  const apiURL = UPDATE_CHALLENGE;
  try {
    const response = await axios.put(apiURL, values, {
      headers: {
        Authorization: "Bearer " + JSON.parse(getCookie("_USER_AUTH_")),
      },
    });

    return response;
  } catch (error) {
    console.error("Error in while updating the challenge:", error);
    throw error;
  }
};

export const deleteChallenge = async (challeId) => {
  const apiURL = DELETE_CHALLENGE + challeId;
  try {
    const response = await axios.delete(apiURL, {
      headers: {
        Authorization: "Bearer " + JSON.parse(getCookie("_USER_AUTH_")),
      },
    });

    return response;
  } catch (error) {
    console.error("Error while deleting challenge:", error);
    throw error;
  }
};

//Register Challenge
export const registerChallenge = async (employeeId, challengeId, formData) => {
  const apiURL = `${REGISTER_CHALLENGE}${employeeId}/${challengeId}`;
  try {
    const response = await axios.post(apiURL, formData, {
      headers: {
        Authorization: "Bearer " + JSON.parse(getCookie("_USER_AUTH_")),
      },
    });
    return response; // Return response on success
  } catch (error) {
    console.error("Error during challenge registration:", error);

    // Extract error response or provide a fallback message
    const errorMessage = error.response?.data;
    
    // Throw error so the caller function can handle it
    throw new Error(errorMessage);
  }
};


export const getRegisterdChallenges = async (employeeId) => {
  const apiURL = `${GET_REGISTERD_CHALLENGES}${employeeId}`;

  try {
    const response = await axios.get(apiURL, {
      headers: {
        Authorization: "Bearer " + JSON.parse(getCookie("_USER_AUTH_")),
      },
    });
    return response;
  } catch (error) {
    console.error("Error in fetching Registered challenges:", error);
    throw error;
  }
};

// Mark a challenge as complete for an employee

export const markChallengeAsComplete = (
  employeeId,
  challeId,
  challengeStatus
) => {
  const apiURL = `${SET_CHALLENGE_AS_COMPLETE}${employeeId}/${challeId}/${challengeStatus}`;
  return axios.post(
    apiURL,
    {},
    {
      headers: {
        Authorization: "Bearer " + JSON.parse(getCookie("_USER_AUTH_")),
      },
    }
  );
};

// Complete challenges and add reward points

// export const setChallengesAsCompleteAddRewardPoints = (
//   employeeId,
//   challeId,
//   challengeStatus
// ) => {
//   const apiURL = `${SET_COMPLETE_CHALLEGE_ADD_REWARD_POINTS}${employeeId}/${challeId}/${challengeStatus}`;
//   return axios.post(apiURL, {
//     headers: {
//       Authorization: "Bearer " + localStorage.getItem("token"),
//     },
//   });
// };
