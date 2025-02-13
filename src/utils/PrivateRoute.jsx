// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useUser } from "../contexts/UserContext";

// function PrivateRoute({ children, allowedRoles }) {
//   const { userInfo } = useUser();
// //   console.log("UserInfo:", userInfo);

//   // If no user is authenticated, navigate to the login page
//   if (!userInfo) {
//     return <Navigate to="/" replace />;
//   }

//   // Check if the user has the required role
//   const userHasRequiredRole = Array.isArray(allowedRoles) && userInfo?.role && allowedRoles.includes(userInfo.role);

//   // If the user is authenticated but does not have the required role, navigate to the dashboard
//   if (!userHasRequiredRole) {
//     return <Navigate to="/dashboard" replace />;
//   }

//   // If the user is authenticated and has the required role, render the child components
//   return children;
// }

// export default PrivateRoute;




import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
//import UserInfo from "../pages/UserInfo";

function PrivateRoute({children, allowedRoles}){
    const {userInfo} = useUser()
    //check if the user has the required role 
    const userHasRequireRole = userInfo && Array.isArray(allowedRoles) && allowedRoles.includes(userInfo.role)

    //if no user is authenticated, navigate to login page 
    if(!userInfo){
        return <Navigate to='/login' />   
    }

    //if user is authenticated but does not have the required role, navigate to dashboard 
    if(userInfo && !userHasRequireRole){
        return <Navigate to='/dashboard' />   
    }

    return children
}

export default PrivateRoute