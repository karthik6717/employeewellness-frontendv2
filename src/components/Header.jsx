// import { Button } from 'react-bootstrap';
// import {Menu,MenuItem,IconButton,Drawer,List,ListItem,ListItemText,CircularProgress} from "@mui/material"
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { useUser } from '../contexts/UserContext';
// import { deleteCookie } from '../utils/common';
// import { useEffect, useState } from 'react';
// import  getMenu  from '../utils/menu';
// import React from 'react'
// import SpaRoundedIcon from '@mui/icons-material/SpaRounded';
// import useEmployeeId from '../utils/useEmployeeId';
// import { getEmployeebyId } from "../services/employeeService";
// //import NavDropdown from 'react-bootstrap/NavDropdown'
// function Header() {
//    // const { userInfo, setUserInfo } = useUser();
//     const employeeId = useEmployeeId(); // Get employeeId dynamically
//    // const menuItems = getMenu(userRole, employeeId); // Pass employeeId to menu.js
    
//     const navigate = useNavigate();
//     const { userInfo, setUserInfo } = useUser();
//     const [menu, setMenu] = useState([]);
//     const [anchorEl, setAnchorEl] = useState(null);
//     const [currentDropdown, setCurrentDropdown] = useState([]);
//     const [drawerOpen, setDrawerOpen] = useState(false);
//     const [employeeDetails, setEmployeeDetails] = useState(null);
//     const [loading, setLoading] = useState(false);

   

// // function to retrive the profile details of user

//  useEffect(() => {
//     if (drawerOpen && !employeeDetails) {
//       setLoading(true);
//       getEmployeebyId(employeeId)
//         .then((response) => {
//           setEmployeeDetails(response.data);
//         })
//         .catch((error) => {
//           console.error("Error fetching employee details:", error);
//         })
//         .finally(() => {
//           setLoading(false);
//         });
//     }
//   }, [drawerOpen, employeeId, employeeDetails]);

//   console.log(employeeDetails);

//    // Function to fetch user data and set state
//    useEffect(() => {
//     if (userInfo) setMenu(getMenu(userInfo.role,employeeId)); // Update menu when user info changes
//     else setMenu([]);
// }, [userInfo,employeeId]);




// // useEffect(() => {
// //     if (userInfo) {
// //         setMenu(getMenu(userInfo.role, employeeId)); // Update menu when user info changes
// //     } else {
// //         setMenu([]);
// //     }

// //     if (drawerOpen && !employeeDetails) {
// //         setLoading(true);
// //         getEmployeebyId(employeeId)
// //             .then((response) => {
// //                 setEmployeeDetails(response.data);
// //             })
// //             .catch((error) => {
// //                 console.error("Error fetching employee details:", error);
// //             })
// //             .finally(() => {
// //                 setLoading(false);
// //             });
// //     }
// // }, [userInfo, employeeId, drawerOpen, employeeDetails]); // Combined dependencies

// // console.log(employeeDetails);




//     const handleMenuOpen = (event, dropdown) => {
//         setAnchorEl(event.currentTarget);
//         setCurrentDropdown(dropdown);
//     };

//     const handleMenuClose = () => {
//         setAnchorEl(null);
//         setCurrentDropdown([]);
//     };

//     const handleNavigate = (path) => {
//         navigate(path);
//         handleMenuClose();
//     };

//     const logout = () => {
//         deleteCookie('_USER_AUTH_');
//         setUserInfo(null); // Update userinfo state
//         navigate('/');
//         setMenu([]);
//     };


//     const toggleDrawer = (open) => (event) => {
//         if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//           return;
//         }
//         setDrawerOpen(open);
//       };



//     return (
//         <Navbar expand="lg" style={{ backgroundColor: "green"  }} >
//             <Container>
//             <IconButton
//             size="small"
//             edge="start"
//             color="inherit"
//             sx={{
             
//               border: "2px solid white",
//             }}
//             aria-label="logo"
//             onClick={toggleDrawer(true)}
//           >
//             <SpaRoundedIcon />
//           </IconButton>
//                 <Navbar.Brand href="#home" style={{ color: "white"  }}>EmployeeWellness</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="ms-auto">
//                         {menu.map((item, index) => (
//                             <div key={index}>
//                                 {item.dropdown ? (
//                                     <>
//                                         <NavLink
//                                             className="ms-2 nav-link"
//                                             onClick={(event) => handleMenuOpen(event, item.dropdown)}
//                                         >
//                                             <span style={{color:"white"}}>{item.displayName}</span>
                                            
//                                         </NavLink>
//                                         <Menu
//                                             anchorEl={anchorEl}
//                                             open={Boolean(anchorEl)}
//                                             onClose={handleMenuClose}
//                                         >
//                                             {currentDropdown.map((dropdownItem, idx) => (
//                                                 <MenuItem key={idx} onClick={() => handleNavigate(dropdownItem.path)}>
//                                                     {dropdownItem.label}
//                                                 </MenuItem>
//                                             ))}
//                                         </Menu>
//                                     </>
//                                 ) : (
//                                     <NavLink className="ms-2 nav-link" to={item.path}>
//                                         {item.displayName}
//                                     </NavLink>
//                                 )}
//                             </div>
//                         ))}

//                         {userInfo ? (
//                             <Button variant='danger' onClick={logout}>Logout</Button>
//                         ) : (
//                             <Button variant='primary'>
//                                 <NavLink to="/" className='text-white'>Login</NavLink>
//                             </Button>
//                         )}
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>

  

//             <Drawer
//         anchor="left"
//         open={drawerOpen}
//         onClose={toggleDrawer(false)} // Close drawer
//       >


// <List sx={{ width: 250, padding: 2 }}>
//   <ListItem>
//    <ListItemText primary="Profile" sx={{ fontWeight: "bold" }} />
//    </ListItem>
   
//   <ListItem>
//     <ListItemText primary={`Associate ID: ${employeeId}`} />
//   </ListItem>
//   {loading ? (
//     <ListItem>
//       <CircularProgress />
//     </ListItem>
//   ) : (
//     employeeDetails && (
      
//       <>
//         <ListItem>
           
//           <ListItemText primary={`Associate Name: ${employeeDetails.firstName}`} />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary={`Mail Id: ${employeeDetails.email}`} />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary={`Role: ${employeeDetails.role}`} />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary={`Department: ${employeeDetails.department}`} />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary={`Blood Group: ${employeeDetails.bloodGroup}`} />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary={`Reward Points: ${employeeDetails.totalRewardPoints}`} />
//         </ListItem>
//         <ListItem button={"true"} onClick={toggleDrawer(false)}>
//             <ListItemText primary="Close" />
//           </ListItem>

          
           
//       </>
//     )
//   )}
  
// </List>




//       </Drawer>
//       {/* Dropdown Menu */}
//       <Menu
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleMenuClose}
//         MenuListProps={{
//           "aria-labelledby": "basic-button",
//         }}
      
//         sx={{
//           "& .MuiPaper-root": {
//             boxShadow: "none",
//             border: "1px solid #ddd",
//           },
//         }}
//       >
//         {currentDropdown.map((item, index) => (
//           <MenuItem key={index} onClick={() => handleNavigate(item.path, { employeeId })}
//           sx={{
            
//            // backgroundColor: "lightgreen", // Set background color
//           //  color: "white", // Set text color
//             "&:hover": {
//               color: "white",
//               backgroundColor: "#267a0f", // Change background on hover
//             },
//           }}
//           >
//             {item.label}
//           </MenuItem>
//         ))}
//       </Menu>









//         </Navbar>
//     );
// }

// export default Header;



import { Button } from 'react-bootstrap';
import { Menu, MenuItem, IconButton, Drawer, List, ListItem, ListItemText, CircularProgress, Avatar } from "@mui/material";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { deleteCookie } from '../utils/common';
import { useEffect, useState } from 'react';
import getMenu from '../utils/menu';
import React from 'react';
import SpaRoundedIcon from '@mui/icons-material/SpaRounded';
import useEmployeeId from '../utils/useEmployeeId';
import { getEmployeebyId } from "../services/employeeService";

function Header() {
    const employeeId = useEmployeeId();
    const navigate = useNavigate();
    const { userInfo, setUserInfo } = useUser();
    const [menu, setMenu] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentDropdown, setCurrentDropdown] = useState([]);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [employeeDetails, setEmployeeDetails] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (userInfo) {
            setMenu(getMenu(userInfo.role, employeeId));
        } else {
            setMenu([]);
        }

        if (drawerOpen) {
            setLoading(true);
            getEmployeebyId(employeeId)
                .then((response) => {
                    setEmployeeDetails(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching employee details:", error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [userInfo, employeeId, drawerOpen]);


    useEffect(() => {
        if (userInfo && employeeId) {
            setLoading(true);
            getEmployeebyId(employeeId)
                .then((response) => {
                    setEmployeeDetails(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching employee details:", error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [userInfo, employeeId]);  //  Runs as soon as userInfo or employeeId changes
    






    const handleMenuOpen = (event, dropdown) => {
        setAnchorEl(event.currentTarget);
        setCurrentDropdown(dropdown);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setCurrentDropdown([]);
    };

    const handleNavigate = (path) => {
        navigate(path);
        handleMenuClose();
    };

    const logout = () => {
        deleteCookie('_USER_AUTH_');
        setUserInfo(null);
        navigate('/');
        setMenu([]);
    };

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    // Extract initials from userInfo (first letter of first name + first letter of last name)
    const getUserInitials = () => {
        if (employeeDetails && employeeDetails.firstName && employeeDetails.lastName) {
            return `${employeeDetails.firstName[0].toUpperCase()}${employeeDetails.lastName[0].toUpperCase()}`;
        }
        return '';
    };
    
    return (
        <Navbar expand="lg" style={{ backgroundColor: "green" }}>
            <Container>
                <IconButton
                    size="small"
                    edge="start"
                    color="inherit"
                    sx={{ border: "2px solid white", color: "white" }}
                    aria-label="logo"
                >
                    <SpaRoundedIcon />
                </IconButton>

                <Navbar.Brand href="/" style={{ color: "white" }}>EmployeeWellness</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" style={{ alignItems: "center" }}>
                        {menu.map((item, index) => (
                            <div key={index}>
                                {item.dropdown ? (
                                    <>
                                        <NavLink className="ms-2 nav-link" onClick={(event) => handleMenuOpen(event, item.dropdown)}>
                                            <span style={{ color: "white" }}>{item.displayName}</span>
                                        </NavLink>
                                        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                                            {currentDropdown.map((dropdownItem, idx) => (
                                                <MenuItem key={idx} onClick={() => handleNavigate(dropdownItem.path)}>
                                                    {dropdownItem.label}
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </>
                                ) : (
                                    <NavLink className="ms-2 nav-link" to={item.path}>
                                        {item.displayName}
                                    </NavLink>
                                )}
                            </div>
                        ))}

                        {/* Profile Icon - Visible only for logged-in users (user or manager role) */}
                        {userInfo && (userInfo.role === 'USER' || userInfo.role === 'MANAGER') && (
                            <Nav.Item className="ms-3">
                                <IconButton color="inherit" onClick={toggleDrawer(true)}>
                                    <Avatar sx={{ bgcolor: "white", color: "green", fontWeight: "bold" }}>
                                        {getUserInitials()}
                                    </Avatar>
                                </IconButton>
                            </Nav.Item>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>

            {/* Profile Drawer */}
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <List sx={{ width: 250, padding: 2 }}>
                    <ListItem>
                        <ListItemText primary="Profile" sx={{ fontWeight: "bold" }} />
                    </ListItem>

                    <ListItem>
                        <ListItemText primary={`Associate ID: ${employeeId}`} />
                    </ListItem>

                    {loading ? (
                        <ListItem>
                            <CircularProgress />
                        </ListItem>
                    ) : (
                        employeeDetails && (
                            <>
                                <ListItem>
                                    <ListItemText primary={`Name: ${employeeDetails.firstName}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`Email: ${employeeDetails.email}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`Role: ${employeeDetails.role}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`Department: ${employeeDetails.department}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`Blood Group: ${employeeDetails.bloodGroup}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`Reward Points: ${employeeDetails.totalRewardPoints}`} />
                                </ListItem>
                                <ListItem button onClick={toggleDrawer(false)}>
                                    <ListItemText primary="Close" />
                                </ListItem>
                                {userInfo ? (
                                    <Button variant='danger' onClick={logout}>Logout</Button>
                                ) : (
                                    <Button variant='primary'>
                                        <NavLink to="/" className='text-white'>Login</NavLink>
                                    </Button>
                                )}
                            </>
                        )
                    )}
                </List>
            </Drawer>
        </Navbar>
    );
}

export default Header;








