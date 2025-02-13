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
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  getRegisterdChallenges,
  markChallengeAsComplete,

} from "../services/challengeService"; // Import API service
import useEmployeeId from '../utils/useEmployeeId';
//import Home from "./managerhome";

const RegisteredChallenges = () => {
  //const location = useLocation();

  //const { employeeId } = location.state || {};
  const employeeId = useEmployeeId();

  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  //console.log(props)

  useEffect(() => {
    if (employeeId) {
      setLoading(true);
      getRegisterdChallenges(employeeId)
        .then((response) => {
          setChallenges(response.data);
        })
        .catch((error) => {
          setError("Failed to fetch challenges. Please try again.");
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [employeeId]);

  const handleCompleteClick = (challenge) => {
    setSelectedChallenge(challenge);
    setOpenDialog(true);
  };

  const handleFinish = () => {
    if (selectedChallenge) {
      
      const updatedChallenges = challenges.map((challenge) =>
        challenge.challengeId === selectedChallenge.challengeId
          ? { ...challenge, challengeStatus: "Completed" }
          : challenge
      );

      // Call the API to update the status
      markChallengeAsComplete(
        employeeId,
        selectedChallenge.challengeId,
        "completed"
      )
        .then(() => {
          setChallenges(updatedChallenges);
          setOpenDialog(false);

        })
        .catch((error) => {
          setError("Failed to update challenge status. Please try again.");
          console.error(error);
        });
    }
  };

  
  

  return (
    <>
    
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h5" gutterBottom>
          Registered Challenges
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : challenges.length > 0 ? (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Challenge ID</TableCell>
                  <TableCell>Challenge Name</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>End Date</TableCell>
                  <TableCell>Reward Points</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {challenges.map((challenge,i) => (
                  <TableRow key={i}>
                    <TableCell>{challenge.challengeId}</TableCell>
                    <TableCell>{challenge.challengeName}</TableCell>
                    <TableCell>{challenge.startDate}</TableCell>
                    <TableCell>{challenge.endDate}</TableCell>
                    <TableCell>{challenge.rewardPoints}</TableCell>
                    <TableCell>{challenge.description}</TableCell>
                    <TableCell>{challenge.challengeStatus}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        disabled={challenge.challengeStatus === "completed"}
                        onClick={() => handleCompleteClick(challenge)}
                      >
                        {challenge.challengeStatus === "completed"
                          ? "completed"
                          : "complete"}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Typography>No challenges found for this employee.</Typography>
        )}
      </Paper>

      {/* Dialog for showing challenge details */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Challenge Details</DialogTitle>
        <DialogContent>
          {selectedChallenge && (
            <>
              <Typography>
                <strong>Challenge Name:</strong>{" "}
                {selectedChallenge.challengeName}
              </Typography>
              <Typography>
                <strong>Start Date:</strong> {selectedChallenge.startDate}
              </Typography>
              <Typography>
                <strong>End Date:</strong> {selectedChallenge.endDate}
              </Typography>
              <Typography>
                <strong>Reward Points:</strong> {selectedChallenge.rewardPoints}
              </Typography>
              <Typography>
                <strong>Description:</strong> {selectedChallenge.description}
              </Typography>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleFinish} color="primary" variant="contained">
            Finish
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

// RegisteredChallenges.propTypes = {
//     employeeId: PropTypes.number.isRequired, // Validate that employeeId is a required number
//};

export default RegisteredChallenges;
