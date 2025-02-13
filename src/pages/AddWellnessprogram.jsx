import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import { addWellness } from "../services/wellnessprogramService"; // Adjust based on your service structure
import { Link } from "react-router-dom";
//import Home from "./managerhome";

const AddWellnessProgram = () => {
  const [formData, setFormData] = useState({
    programName: "",
    description: "",
    programType: "",
    startDate: null,
    endDate: null,
    maxParticipants: "",
    venue: "",
    locationType: "",
  });

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
    try {
      await addWellness(formData);
      navigate("/wellness-programs");
      alert("Wellness program added successfully!");
    } catch (error) {
      console.error("Error adding wellness program:", error);
      alert("Failed to add wellness program. Please try again.");
    }
  };

  return (
    <>
    
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Typography variant="h4" textAlign="center" mt={2}>
        <strong>Add New Wellness Program</strong>
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 2,
          width: "90%",
          marginInline: "auto",
          marginTop: 5,
        }}
      >
        <TextField
          label="Program Name"
          name="programName"
          value={formData.programName}
          onChange={handleChange}
          fullWidth
          required
        />

        <TextField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          required
        />

        <TextField
          select
          label="Program Type"
          name="programType"
          value={formData.programType}
          onChange={handleChange}
          fullWidth
          required
        >
          <MenuItem value="FITNESS">FITNESS</MenuItem>
          <MenuItem value="MENTALHEALTH">MENTALHEALTH</MenuItem>
          <MenuItem value="NUTRITION">NUTRITION</MenuItem>
          <MenuItem value="STRESSMANAGEMENT">STRESSMANAGEMENT</MenuItem>
        </TextField>

        <DatePicker
          label="Start Date"
          value={formData.startDate}
          onChange={(value) => handleDateChange("startDate", value)}
          renderInput={(params) => <TextField {...params} fullWidth />}
          required
        />

        <DatePicker
          label="End Date"
          value={formData.endDate}
          onChange={(value) => handleDateChange("endDate", value)}
          renderInput={(params) => <TextField {...params} fullWidth />}
          required
        />

        <TextField
          label="Max Participants"
          name="maxParticipants"
          type="number"
          value={formData.maxParticipants}
          onChange={handleChange}
          fullWidth
          required
        />

        <TextField
          label="Venue"
          name="venue"
          value={formData.venue}
          onChange={handleChange}
          fullWidth
          required
        />

        <TextField
          
          label="Location Type"
          name="locationType"
          value={formData.locationType}
          onChange={handleChange}
          fullWidth
          required
        />

        <Button
          type="submit"
          variant="contained"
          color="success"
          fullWidth
          sx={{ gridColumn: "1 / 2" }}
        >
          Submit
        </Button>

        <Link to="/wellnessProgram" className="btn btn-primary ms-3">
          Back
        </Link>
      </Box>
    </LocalizationProvider>
    </>
  );
};

export default AddWellnessProgram;
