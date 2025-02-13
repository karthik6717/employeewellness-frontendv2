// import React, { createContext, useContext, useState, useEffect } from "react";
// import { getAuthToken } from "../utils/common";
// import {jwtDecode} from "jwt-decode";

// // Create a new context for user information
// const UserContext = createContext();

// // Provider component to wrap around the part of the app that needs access to user context
// export const UserProvider = ({ children }) => {
//   const [userInfo, setUserInfo] = useState(null);

//   useEffect(() => {
//     const token = getAuthToken();
//     if (token && typeof token === "string") {
//       try {
//         const decodedToken = jwtDecode(token); // Decode the token to extract user info
//         setUserInfo(decodedToken);
//       } catch (error) {
//         console.error("Failed to decode token:", error);
//         setUserInfo(null); // Reset userInfo if the token is invalid
//       }
//     } else {
//       setUserInfo(null); // Reset userInfo if no token exists
//     }
//   }, []); // Run this logic once when the component mounts

//   return (
//     <UserContext.Provider value={{ userInfo, setUserInfo }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// // Custom hook to use the UserContext
// export const useUser = () => useContext(UserContext);





import React, { createContext, useContext, useState, useEffect } from "react";
import { getAuthToken } from "../utils/common";
import {jwtDecode} from "jwt-decode"; // Corrected import

// Create a new context for user information
const UserContext = createContext();

// Provider component to wrap around the part of the app that needs access to user context
export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  const updateUserInfo = () => {
    const token = getAuthToken(); // Get the latest token
    if (token && typeof token === "string") {
      try {
        const decodedToken = jwtDecode(token); // Decode the token
        setUserInfo(decodedToken); // Update userInfo
      } catch (error) {
        console.error("Failed to decode token:", error);
        setUserInfo(null);
      }
    } else {
      setUserInfo(null);
    }
  };

  useEffect(() => {
    // Initial load
    updateUserInfo();

    // Set up an event listener to handle token updates
    const handleStorageChange = () => updateUserInfo();

    // Listen to `localStorage` or `cookie` changes
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);
