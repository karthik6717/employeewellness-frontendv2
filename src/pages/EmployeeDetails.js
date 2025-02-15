import React, { useState } from "react";
import { Box, TextField, MenuItem, Button, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../services/employeeService";
import { Dialog, DialogContent, DialogContentText } from "@mui/material";
//import axios from "axios";
import {  Link} from "react-router-dom";
//import Home from "./managerhome";
//import '../App.css';
 //import { ThemeProvider, createTheme } from '@mui/material/styles';

const GENDERS = ["MALE", "FEMALE", "OTHER"];
const ROLES = ["ADMIN", "USER"]; // Add actual roles
const BLOOD_GROUPS = ["A_positive", "A_negative", "B_positive", "B_negative", "O_positive", "O_negative", "AB_positive", "AB_negative"];
const MARITAL_STATUSES = ["SINGLE", "MARRIED", "DIVORCED", "Widowed"];


const EmployeeDetails = () => {
  const [formData, setFormData] = useState({
    employeeId: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contactNumber: "",
    department: "",
    dateOfBirth: null,
    gender: "",
    weight: "",
    height: "",
    role: "",
    dateOfJoining: null,
    hobbies: "",
    address: "",
    sportsInterest: "",
    medicalHistory: "",
    emergencyContact: "",
    bloodGroup: "N/A",
    maritalStatus: "",
    nationality: "",
    totalRewardPoints: 0,
  });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
   const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await addEmployee(formData);
      setDialogMessage("New Talent Onboarded Successfully!");
      setDialogOpen(true);

      setTimeout(() => {
        setDialogOpen(false);
      navigate("/employees");
      }, 2000);
      //alert("Employee added successfully");

    }
    catch(error)
    {
       // console.error("Error adding Employee");
        //alert("Failed to add employee. Please try again");
      setDialogMessage("Failed to Onboard New Talent Check All Fields Enterd Correctly."); // Set error message
      setDialogOpen(true);

      setTimeout(() => {
        setDialogOpen(false);
      }, 2000);

    }
    
  };

  return (
    <>
    
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {" "}
      {/* Wrap in LocalizationProvider */}
      <Typography variant="h4" textAlign="center" mt={2}>
        <strong>Onboard New Talent</strong>
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 2,
          width: "90%",
          marginInline: "auto",
          marginTop: 5
        }}
      >
        <TextField
          label="Associate Id"
          name="employeeId"
          value={formData.employeeId}
          onChange={handleChange}
          fullWidth
          required
         
        />
        <TextField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          fullWidth
          required
         
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
         
        />
        <TextField
          label="Email "
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
         
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          required
         
        />
        <TextField
          label="Contact Number"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          fullWidth
         
        />
        <TextField
          label="Department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          fullWidth
         
        />

        <DatePicker
          label="Date Of Birth"
          className="date-picker"
          value={formData.dateOfBirth}
          onChange={(value) => handleDateChange("dateOfBirth", value)}
         // labelcolor="green"
          renderInput={(params) => (
          
          <TextField  {...params}  fullWidth 
          />
         
          )}
          
        />

        <TextField
          select
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          fullWidth
         
          
        >
          {GENDERS.map((gender) => (
            <MenuItem key={gender} value={gender}>
              {gender}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Weight (kg)"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          fullWidth
          type="number"
         
        />
        <TextField
          label="Height (cm)"
          name="height"
          value={formData.height}
          onChange={handleChange}
          fullWidth
          type="number"
         
        />

        <TextField
          select
          label="Role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          fullWidth
         
        >
          {ROLES.map((role) => (
            <MenuItem key={role} value={role}>
              {role}
            </MenuItem>
          ))}
        </TextField>

        <DatePicker
          label="Date Of Joining"
          value={formData.dateOfJoining}
          onChange={(value) => handleDateChange("dateOfJoining", value)}
          renderInput={(params) => <TextField {...params} fullWidth />}
         
        />

        <TextField
          label="Hobbies"
          name="hobbies"
          value={formData.hobbies}
          onChange={handleChange}
          fullWidth
         
        />
        <TextField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          fullWidth
         
        />
        <TextField
          label="Sports Interest"
          name="sportsInterest"
          value={formData.sportsInterest}
          onChange={handleChange}
          fullWidth
         
        />
        <TextField
          label="Medical History"
          name="medicalHistory"
          value={formData.medicalHistory}
          onChange={handleChange}
          fullWidth
         
        />
        <TextField
          label="Emergency Contact"
          name="emergencyContact"
          value={formData.emergencyContact}
          onChange={handleChange}
          fullWidth
         
        />
        <TextField
          select
          label="Blood Group"
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          fullWidth
         
        >
          {BLOOD_GROUPS.map((bg) => (
            <MenuItem key={bg} value={bg}>
              {bg}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Marital Status"
          name="maritalStatus"
          value={formData.maritalStatus}
          onChange={handleChange}
          fullWidth
         
        >
          {MARITAL_STATUSES.map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Nationality"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
          fullWidth
         
        />

        <Button type="submit" variant="contained" color="success" fullWidth sx={{gridColumn: "2 / 3"}}>
          Submit
        </Button>
        <Link to='/employees' className='btn btn-primary ms-3'> HOME</Link>
      </Box>
    </LocalizationProvider>
    {/* Dialog Box */}
    <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogContent>
          <DialogContentText>{dialogMessage}</DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EmployeeDetails;
