import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { getChallengeById } from '../services/challengeService';
//import Home from './managerhome';


function ChallengeSearch() {
  const [challengeId, setChallengeId] = useState('');
 // const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const showDialog = (message) =>{
    alert(message);
  }

  const handleSearch = () => {
    if (!challengeId) {
      showDialog('Please enter a valid Challenge ID.');
      return;
    }

   

    getChallengeById(challengeId)
      .then((response) => {
      if(response.data){
        // If challenge data is found, navigate to ChallengeRead page with challengeId
        navigate(`/challengeRead/${challengeId}`);
      }
      else{
        showDialog("Challenge not found . Please check the Challenge ID.")
      }
      })
      .catch(() => {
        showDialog('Challenge not found. Please check the ID.');
      });
  };

  return (
    
    
    <div className="d-flex flex align-items-center">
    
          <input
            type="text"
            id="challengeId"
            value={challengeId}
            onChange={(e) => setChallengeId(e.target.value)}
            className="form-control me-2"
            placeholder="Enter Challenge ID"
          />
      
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>

        
      </div>
    
    
  );
}

export default ChallengeSearch;
