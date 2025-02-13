import React,{useState} from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import { addEvent } from "../services/eventService"; // Adjust based on your service structure
import { Link } from "react-router-dom";
//import Home from "./managerhome";


const AddEvent =()=>{
    const [formData ,setFormData] = useState({
        name: "",
        enrolmentDate:null,
        organizer: "",
        startDate:null,
        endDate:null,
        eventDescription: "",
    });

    const navigate = useNavigate();


    const handleChange = (e) =>{
        const {name, value } = e.target;
        setFormData({...formData,[name]: value});
    };

    const handleDateChange =(key,value)=>{
        setFormData({...formData,[key]:value});
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await addEvent(formData);
            navigate("/event");
            alert("Event added successfully!");
        }
        catch(error)
        {
            console.error("Error adding challenge:", error);
            alert("Failed to add challenge. Please try again.");  
        }
    }



    return(
        <>
        
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Typography varient="h4" textAlign="center" mt={2}>
                <strong>Add new Event</strong>
            </Typography>
            <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
             display: "grid",
             gridTemplateColumns: "repeat(2,1fr)",
             gap: 2,
             width: "90%",
             marginInline: "auto",
             marginTop:5,

            }}
            >
                <TextField
                label="Event name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
                />
                <DatePicker
                label="Enrollment Date"
                value={formData.enrolmentDate}
                onChange={(value)=>handleDateChange("enrolmentDate",value)}
                renderInput={(params)=><TextField{...params}fullWidth/>}
                required
                />
                <TextField
                label="Organizer"
                name="organizer"
                value={formData.organizer}
                onChange={handleChange}
                fullWidth
                />
                <DatePicker
                label="Start Date"
                value={formData.startDate}
                onChange={(value)=>handleDateChange("startDate",value)}
                renderInput={(params)=><TextField{...params} fullWidth/>}
                required
                />
                <DatePicker
                label ="End Date"
                value={formData.endDate}
                onChange={(value)=>handleDateChange("endDate",value)}
                renderInput={(params)=><TextField{...params} fullWidth/>}
                />
                <TextField
                label="Description"
                value={formData.eventDescription}
                name="eventDescription"
                onChange={handleChange}
                fullWidth
                />
                <Button
                type="submit"
                variant="contained"
                color="success"
                fullWidth
                sx={{gridColumn:"1 / 2"}}
                >
                Submit
                </Button>
             <Link to="/event" className="btn btn-primary ms-3">
               Back
             </Link>
         </Box>
        </LocalizationProvider>
        </>
    );
};

export default AddEvent;
