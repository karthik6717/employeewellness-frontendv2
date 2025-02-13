import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { getDoctorById } from '../services/doctorService'; // Import the doctor service function

function DoctorSearch() {
  const [doctorId, setDoctorId] = useState('');
  //const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const showDialog = (message) =>{
    alert(message);
  }

  const handleSearch = () => {
    if (!doctorId) {
      showDialog('Please enter a valid Doctor ID.');
      return;
    }

    getDoctorById(doctorId)
      .then((response) => {
        if(response.data){
          navigate(`/doctorRead/${doctorId}`);
        }
        else{
          showDialog("Doctor not found . Please check the Doctor ID.")
        }
        // If doctor data is found, navigate to DoctorRead page with doctorId
        
      })
      .catch(() => {
        showDialog('Doctor not found. Please check the ID.');
      });
  };

  return (
    <div className="d-flex flex align-items-center">

          <input
            type="text"
            id="doctorId"
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
            className="form-control me-2"
            placeholder="Enter Doctor ID"
          />
        
        <button className="btn btn-primary " onClick={handleSearch}>
          Search
        </button>

       
      
    </div>
  );
}

export default DoctorSearch;
