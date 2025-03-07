//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
//import AdminPanel from "./pages/AdminPanel";
import UserInfo from "./pages/UserInfo";
import Users from "./pages/Users";
import Login from "./pages/Login";
import { UserProvider } from "./contexts/UserContext";
import PrivateRoute from "./utils/PrivateRoute";

import EmployeeDetails from "./pages/EmployeeDetails"
import EmployeeHome from "./pages/EmployeeHome"
import EmployeeRead from "./pages/EmployeeRead";
//import EmployeeSearch from "./pages/EmployeeSearch";
import EmployeeUpdate from "./pages/EmployeeUpdate";


import AddChallenge from "./pages/AddChallenge";
import ChallengeHome from "./pages/ChallengeHome";
import ChallengeRead from "./pages/ChallengeRead";
import UserChallengeRead from "./pages/UserChallengeread";
//import ChallengeSearch from "./pages/ChallengeSearch";
import ChallengeUpdate from "./pages/ChallengeUpdate";

import RegisteredChallenges from "./pages/RegisteredChallenges";


import UserChallengeHome from "./pages/UserChallengeHome";

import AddEvent from "./pages/AddEvent"
import EventHome from "./pages/EventHome"
import EventRead from "./pages/EventRead"
//import EventSearch from "./pages/EventSearch"
import EventUpdate from "./pages/EventUpdate"

import RegisteredEvents from "./pages/RegisteredEvents"

import UserEventHome from "./pages/UserEventHome"

import AddWellnessprogram from "./pages/AddWellnessprogram"
import WellnessHome from "./pages/WellnessHome"
import WellnessProgramRead from "./pages/WellnessProgramRead"
//import WellnessSearch from "./pages/WellnessSearch"
import WellnessUpdate from "./pages/WellnessUpdate"

import RegisteredWellness from "./pages/RegisteredWellness"

import UserWellnessHome from "./pages/UserWellnessHome";


import AddDoctor from "./pages/AddDoctor"
import DoctorHome from "./pages/DoctorHome"
import DoctorRead from "./pages/DoctorRead"
//import DoctorSearch from "./pages/DoctorSearch"
import DoctorUpdate from "./pages/DoctorUpdate"


import UserDoctorHome from "./pages/UserDoctorHome ";
import { Navigate } from "react-router-dom";
//import UserChallengeSearch from "./pages/UserChallengeSearch";
import UserEventRead from "./pages/userEventRead";
import UserWellnessProgramRead from "./pages/UserWellnessProgramRead";
import UserDoctorRead from "./pages/UserDoctorRead";



function App() {
  return (
    <>
      <UserProvider>
        {/* wrap the application in the UserProvider to provide user context */}
        <Header />
        <Routes>
          {/* Public route for login  */}
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />

          {/* Private route for dashboard accessible to ADMIN and user Roles */}
          {/* <Route path="dashboard" element={ 
            <PrivateRoute allowedRoles={["MANAGER", "USER"]}>
            <Dashboard />
              </PrivateRoute>
            }

           /> */}

          {/* Private routes for Manager  to access the Employee dropdown */}
          <Route
            path="/add-employee"
            element={
              <PrivateRoute allowedRoles={["MANAGER"]}>
                <EmployeeDetails />
              </PrivateRoute>
            }
          />

          <Route
            path="/employees"
            element={
              <PrivateRoute allowedRoles={["MANAGER"]}>
                <EmployeeHome />
              </PrivateRoute>
            }
          />
          <Route
            path="/employees"
            element={
              <PrivateRoute allowedRoles={["MANAGER"]}>
                <EmployeeHome />
              </PrivateRoute>
            }
          />

          <Route
            path="/employeeRead/:employeeId"
            element={
              <PrivateRoute allowedRoles={["MANAGER"]}>
                <EmployeeRead />
              </PrivateRoute>
            }
          />

          <Route
            path="/employeeUpdate/:employeeId"
            element={
              <PrivateRoute allowedRoles={["MANAGER"]}>
                <EmployeeUpdate />
              </PrivateRoute>
            }
          />

          {/* Private route for Manager to access the  Challenges dropdown*/}

          <Route
            path="/addChallenge"
            element={
              <PrivateRoute allowedRoles={["MANAGER"]}>
                <AddChallenge />
              </PrivateRoute>
            }
          />
          <Route
            path="/challenges"
            element={
              <PrivateRoute allowedRoles={["MANAGER"]}>
                <ChallengeHome />
              </PrivateRoute>
            }
          />

          {/* <Route
            path="/challengeSearch"
            element={
              <PrivateRoute allowedRoles={["MANAGER","USER"]}>
                <ChallengeSearch />
              </PrivateRoute>
            }
          /> */}
          
          <Route
            path="/challengeUpdate/:challengeId"
            element={
              <PrivateRoute allowedRoles={["MANAGER"]}>
                <ChallengeUpdate />
              </PrivateRoute>
            }
          /> 

          <Route
            path="/challengeRead/:challengeId"
            element={
              <PrivateRoute allowedRoles={["MANAGER"]}>
                <ChallengeRead />
              </PrivateRoute>
            }
          /> 

           <Route
            path="/registeredChallenges/:employeeId"
            element={
              <PrivateRoute allowedRoles={["MANAGER","USER"]}>
                <RegisteredChallenges />
              </PrivateRoute>
            }
          /> 
        
        {/* private route for Users to access the Challenges dropdown*/}

         <Route
            path="/userchallenges"
            element={
              <PrivateRoute allowedRoles={["USER"]}>
                <UserChallengeHome />
              </PrivateRoute>
            }
          />
         
         {/* <Route
           path="/userChallengeSearch"
           element={
            <PrivateRoute allowedRoles={["USER"]}>
              <UserChallengeSearch/>
            </PrivateRoute>
            
           }/> */}

           <Route
           path="/userChallengeRead/:challengeId"
           element={
            <PrivateRoute allowedRoles={["USER"]}>
              <UserChallengeRead/>
            </PrivateRoute>
            
           }/>

{/* Private route for Manager to access the  Events dropdown*/}

           <Route
            path="/addEvent"
            element={
              <PrivateRoute allowedRoles={["MANAGER"]}>
                <AddEvent />
              </PrivateRoute>
            }
          />
          <Route
            path="/event"
            element={
              <PrivateRoute allowedRoles={["MANAGER"]}>
                <EventHome />
              </PrivateRoute>
            }
          />

          {/* <Route
            path="/eventSearch"
            element={
              <PrivateRoute allowedRoles={["MANAGER","USER"]}>
                <EventHome />
              </PrivateRoute>
            }
          /> */}
          
          <Route
            path="/eventUpdate/:eventId"
            element={
              <PrivateRoute allowedRoles={["MANAGER"]}>
                <EventUpdate />
              </PrivateRoute>
            }
          /> 

          <Route
            path="/eventRead/:eventId"
            element={
              <PrivateRoute allowedRoles={["MANAGER"]}>
                <EventRead />
              </PrivateRoute>
            }
          /> 

           <Route
            path="/registeredEvents/:employeeId"
            element={
              <PrivateRoute allowedRoles={["MANAGER","USER"]}>
                <RegisteredEvents />
              </PrivateRoute>
            }
          /> 

   
   {/* private route for Users to access the Event dropdown*/}

   <Route
            path="/userEvents"
            element={
              <PrivateRoute allowedRoles={["USER"]}>
                <UserEventHome />
              </PrivateRoute>
            }
          />
 
            <Route
            path="/usereventRead/:eventId"
            element={
              <PrivateRoute allowedRoles={["USER"]}>
                <UserEventRead/>
              </PrivateRoute>
            }
          /> 


          {/* Private route for Manager to access the  Wellness dropdown*/}

          <Route
            path="/addWellnessprogram"
            element={
              <PrivateRoute allowedRoles={["MANAGER"]}>
                <AddWellnessprogram />
              </PrivateRoute>
            }
          />
          <Route
            path="/wellnessProgram"
            element={
              <PrivateRoute allowedRoles={["MANAGER"]}>
                <WellnessHome />
              </PrivateRoute>
            }
          />

          {/* <Route
            path="/WellnessSearch"
            element={
              <PrivateRoute allowedRoles={["MANAGER","USER"]}>
                <WellnessHome/>
              </PrivateRoute>
            }
          /> */}
          
          <Route
            path="/wellnessUpdate/:wellnessProgramId"
            element={
              <PrivateRoute allowedRoles={["MANAGER"]}>
                <WellnessUpdate />
              </PrivateRoute>
            }
          /> 

          <Route
            path="/wellnessProgramRead/:wellnessProgramId"
            element={
              <PrivateRoute allowedRoles={["MANAGER"]}>
                <WellnessProgramRead />
              </PrivateRoute>
            }
          /> 

           <Route
            path="/registeredWellness/:employeeId"
            element={
              <PrivateRoute allowedRoles={["MANAGER","USER"]}>
                <RegisteredWellness />
              </PrivateRoute>
            }
          /> 

   
   {/* private route for Users to access the Wellness dropdown*/}

   <Route
            path="/userWellness"
            element={
              <PrivateRoute allowedRoles={["USER"]}>
                <UserWellnessHome />
              </PrivateRoute>
            }
          />

          <Route
            path="/userwellnessProgramRead/:wellnessProgramId"
            element={
              <PrivateRoute allowedRoles={["USER"]}>
                <UserWellnessProgramRead />
              </PrivateRoute>
            }
          /> 


{/* Private route for Manager to access the  doctor dropdown*/}

<Route
            path="/addDoctor"
            element={
              <PrivateRoute allowedRoles={["MANAGER"]}>
                <AddDoctor />
              </PrivateRoute>
            }
          />
          <Route
            path="/doctor"
            element={
              <PrivateRoute allowedRoles={["MANAGER"]}>
                <DoctorHome />
              </PrivateRoute>
            }
          />

          {/* <Route
            path="/doctorSearch"
            element={
              <PrivateRoute allowedRoles={["MANAGER","USER"]}>
                <DoctorHome/>
              </PrivateRoute>
            }
          /> */}
          
          <Route
            path="/doctorUpdate/:doctorId"
            element={
              <PrivateRoute allowedRoles={["MANAGER"]}>
                <DoctorUpdate />
              </PrivateRoute>
            }
          /> 

          <Route
            path="/doctorRead/:doctorId"
            element={
              <PrivateRoute allowedRoles={["MANAGER"]}>
                <DoctorRead />
              </PrivateRoute>
            }
          /> 


   
   {/* private route for Users to access the doctor dropdown*/}

   <Route
            path="/userDoctorHome"
            element={
              <PrivateRoute allowedRoles={["USER"]}>
                <UserDoctorHome />
              </PrivateRoute>
            }
          />
          
          <Route
            path="users"
            element={
              <PrivateRoute allowedRoles={["MANAGER"]}>
                <Users />
              </PrivateRoute>
            }
          />

            <Route
            path="/userdoctorRead/:doctorId"
            element={
              <PrivateRoute allowedRoles={["USER"]}>
                <UserDoctorRead />
              </PrivateRoute>
            }
          /> 

          {/*this route accessible to USER role only */}

          {/* <Route
            path="user-info"
            element={
              <PrivateRoute allowedRoles={["USER"]}>
                <UserInfo />
              </PrivateRoute>
            }
          /> */}
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
