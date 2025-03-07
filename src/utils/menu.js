//import { useUser } from "../contexts/UserContext"
//import UserInfo from "../pages/UserInfo"

//import useEmployeeId from "./useEmployeeId";
//const employeeId = useEmployeeId();

const getMenu =(userRole,employeeId)=>{
   // const employeeId = useEmployeeId();
const menu = [
   

    // {
    //     id:0,
    //     displayName:'Home',
    //     path:'dashboard',
    //     role:['USER', 'MANAGER'] //access role
    // },
    {
        id:1,
        displayName:'Associates',
       // path:'admin',
        dropdown: [
            { label: "Onboard New Talent", path: "/add-employee" },
            { label: "Browse All Profiles", path: "/employees" },
            { label: "Lookup Associate ", path: "/employees" },
            { label: "Refine Associate Profile", path: "/employees" },
            { label: "Farewell to Associates", path: "/employees" },
          ],
        role:['MANAGER'] //access role
    },
    {
        id:2,
        displayName:'Challenges',
       // path:'users',
       dropdown: [
        { label: "Add Challenge", path: "/addChallenge" },
        { label: "Get All Challenges", path: "/challenges" },
        { label: "Get Challenge By Id", path: "/challenges" },
        { label: "Update Challenge", path: "/challenges" },
        { label: "Delete Challenge", path: "/challenges" },
        { label: "Registered Challenges", path: `/registeredChallenges/${employeeId}` },
  
      ],
       
        role:['MANAGER'] //access role
    },
//
{
    id:3,
    displayName:'Challenges',
   // path:'users',
   dropdown: [
   // { label: "Add Challenge", path: "/addChallenge" },
    { label: "Get All Challenges", path: "/userchallenges" },
    { label: "Get Challenge By Id", path: "/userchallenges" },
   // { label: "Update Challenge", path: "/challenges" },
   // { label: "Delete Challenge", path: "/challenges" },
    { label: "Registered Challenges", path: `/registeredChallenges/${employeeId}`},

  ],
   
    role:['USER'] //access role
},


{
    id:4,
    displayName:'Events',
   // path:'users',
   dropdown: [
    { label: "Add Events", path: "/addEvent" },
    { label: "Get All Events", path: "/event" },
    { label: "Get Event By Id", path: "/eventSearch" },
    { label: "Update Event", path: "/event" },
    { label: "Delete Event", path: "/event" },
    {label : "Registered Events", path:`/registeredEvents/${employeeId}`}
  ],
   
    role:['MANAGER'] //access role
},

{
    id:5,
    displayName:'Events',
   // path:'users',
   dropdown: [
    //{ label: "Add Events", path: "/addEvent" },
    { label: "Get All Events", path: "/userEvents" },
    { label: "Get Event By Id", path: "/userEvents" },
    //{ label: "Update Event", path: "/event" },
   // { label: "Delete Event", path: "/event" },
    {label : "Registered Events", path:`/registeredEvents/${employeeId}`}
  ],
   
    role:['USER'] //access role
},


{
    id:6,
    displayName:'Wellness Program',
   // path:'users',
   dropdown: [
    { label: "Add Wellness Program", path: "/addWellnessprogram" },
    { label: "Get All Wellness Programs", path: "/wellnessProgram"  },
    { label: "Get Wellness Program By Id", path: "/WellnessSearch" },
    { label: "Update Wellness Program", path: "/wellnessProgram" },
    { label: "Delete Wellness Program", path: "/wellnessProgram" },
    {label : "Registered Wellness Programs", path:`/registeredWellness/${employeeId}`}
  ],
   
    role:['MANAGER'] //access role
},

{
    id:7,
    displayName:'Wellness Program',
   // path:'users',
   dropdown: [
   // { label: "Add Wellness Program", path: "/addWellnessprogram" },
    { label: "Get All Wellness Programs", path: "/userWellness"  },
    { label: "Get Wellness Program By Id", path: "/userWellness" },
   // { label: "Update Wellness Program", path: "/wellnessProgram" },
    //{ label: "Delete Wellness Program", path: "/wellnessProgram" },
    {label : "Registered Wellness Programs", path:`/registeredWellness/${employeeId}`}
  ],
   
    role:['USER'] //access role
},



{
  id:8,
  displayName:'Doctor appoinment',
 // path:'users',
 dropdown: [
  { label: "Get All Doctors", path: "/doctor" },
  { label: "Add Doctor", path: "/addDoctor" },
  { label: "Get doctor By Id", path: "/doctorSearch" },
  { label: "Update Doctor", path: "/doctor" },
  { label: "Delete doctor", path: "/doctor" },
],
 
  role:['MANAGER'] //access role
},

{
  id:9,
  displayName:'Doctor appoinment',
 // path:'users',
 dropdown: [
  { label: "Get All Doctors", path: "/userDoctorHome" },
 // { label: "Add Doctor", path: "/addDoctor" },
  { label: "Get doctor By Id", path: "/userDoctorHome" },
 // { label: "Update Doctor", path: "/doctor" },
 // { label: "Delete doctor", path: "/doctor" },
],
 
  role:['USER'] //access role
},









    // {
    //     id:10,
    //     displayName:'User Info',
    //     path:'user-info',
    //     role:['USER'] //access role
    // }




    
];

// Function to get menu items based on the user role base 
 
    //filter the menu itmes based on the user role 
    return menu.filter((item)=> item.role.includes(userRole));
};
export default getMenu;