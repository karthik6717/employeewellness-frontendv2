import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import { addChallenge } from "../services/challengeService"; // Adjust based on your service structure
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogContentText } from "@mui/material";
//import Home from "./managerhome";

const AddChallenge = () => {
  const [formData, setFormData] = useState({
    challengeName: "",
    startDate: null,
    endDate: null,
    rewardPoints: "",
    description: "",
  });
  
  const navigate = useNavigate();
  const [dialogOpen,setDialogOpen] = useState(false);
  const [dialogMessage,setDialogMessage] = useState("");

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
      await addChallenge(formData);
      setDialogMessage("New Challenge Added successfully!");
      setDialogOpen(true);

      setTimeout(() => {
        setDialogOpen(false);
      navigate("/challenges");
      }, 2000);



     // navigate("/challenges");
     // alert("Challenge added successfully!");
    } catch (error) {
      setDialogMessage("Failed to Add new Challenge Check All Fields Enterd Correctly."); // Set error message
      setDialogOpen(true);

      setTimeout(() => {
        setDialogOpen(false);
      }, 2000);
    }
  };

  return (
    <>
    
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Typography variant="h4" textAlign="center" mt={2}>
        <strong>Add New Challenge</strong>
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
          label="Challenge Name"
          name="challengeName"
          value={formData.challengeName}
          onChange={handleChange}
          fullWidth
          required
        />

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
          label="Reward Points"
          name="rewardPoints"
          type="number"
          value={formData.rewardPoints}
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
      
        <Button
          type="submit"
          variant="contained"
          color="success"
          fullWidth
          sx={{ gridColumn: "1 / 2" }}
        >
          Submit
        </Button>
        <Link to="/challenges" className="btn btn-primary ms-3">
          BACK
        </Link>
      </Box>
    </LocalizationProvider>

    <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogContent>
          <DialogContentText>{dialogMessage}</DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddChallenge;
