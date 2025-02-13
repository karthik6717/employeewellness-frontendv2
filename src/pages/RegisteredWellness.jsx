import React, { useEffect, useState } from "react";
//import PropTypes from "prop-types";
//import { useParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
 // Button,

} from "@mui/material";
import {
    getRegisterdWellnessPrograms,
} from "../services/wellnessprogramService"; // Import API service
import useEmployeeId from '../utils/useEmployeeId';
//import Home from "./managerhome";

const RegisteredWellness = () => {
  //const location = useLocation();
  //const { employeeId } = location.state || {};
 // const { employeeId } = useParams();
  const employeeId = useEmployeeId();

  const [wellness, setWellness] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  //const [openDialog, setOpenDialog] = useState(false);
  //const [selectedChallenge, setSelectedChallenge] = useState(null);

  //console.log(props)

  useEffect(() => {
    if (employeeId) {
      setLoading(true);
      getRegisterdWellnessPrograms(employeeId)
        .then((response) => {
          setWellness(response.data);
        })
        .catch((error) => {
          setError("Failed to fetch Wellness Programs. Please try again.");
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [employeeId]);


  return (
    <>
      
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h5" gutterBottom>
          Registered Wellness Programs
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : wellness.length > 0 ? (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Program ID</TableCell>
                  <TableCell>Program Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Program Type</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>End Date</TableCell>
                  <TableCell>Max Participants</TableCell>
                  <TableCell>Venue</TableCell>
                  <TableCell>Location Type</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {wellness.map((wellnessR) => (
                  <TableRow key={wellnessR.wellnessRegistrationId}>
                    <TableCell>{wellnessR.wellnessProgramId}</TableCell>
                    <TableCell>{wellnessR.programName}</TableCell>
                    <TableCell>{wellnessR.description}</TableCell>
                    <TableCell>{wellnessR.programType}</TableCell>
                    <TableCell>{wellnessR.startDate}</TableCell>
                    <TableCell>{wellnessR.endDate}</TableCell>
                    <TableCell>{wellnessR.maxParticipants}</TableCell>
                    <TableCell>{wellnessR.venue}</TableCell>
                    <TableCell>{wellnessR.locationType}</TableCell>
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Typography>No wellness programs found for this employee.</Typography>
        )}
      </Paper>

      
    </>
  );
};



export default RegisteredWellness;
