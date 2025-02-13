import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { getWellnessProgramById } from "../services/wellnessprogramService"; // Import the service function for wellness

function WellnessSearch() {
  const [wellnessId, setWellnessId] = useState('');
  //const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate
  
  const showDialog = (message) =>{
    alert(message);
  }


  const handleSearch = () => {
    if (!wellnessId) {
      showDialog('Please enter a valid Wellness ID.');
      return;
    }

    getWellnessProgramById(wellnessId)
      .then((response) => {
        if(response.data){
          navigate(`/wellnessProgramRead/${wellnessId}`);

        }
        else{
          showDialog("Wellness Program  not found . Please check the wellness program ID.")
        } 
      })
      .catch(() => {
        showDialog('Wellness not found. Please check the ID.');
      });
  };

  return (
    <div className="d-flex flex align-items-center">

          <input
            type="text"
            id="wellnessId"
            value={wellnessId}
            onChange={(e) => setWellnessId(e.target.value)}
            className="form-control me-2"
            placeholder="Enter Wellness ID"
          />
      
        <button className="btn btn-primary " onClick={handleSearch}>
          Search
        </button>

      </div>
  
  );
}

export default WellnessSearch;
