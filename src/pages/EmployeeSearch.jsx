import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEmployeebyId } from '../services/employeeService';
//import { Margin } from '@mui/icons-material';

function EmployeeSearch({ onSearch }) {
  const [employeeId, setEmployeeId] = useState('');
 
  const navigate = useNavigate(); 

  const showDialog = (message) => {
  
    alert(message);
  };


  const handleSearch = () => {
    if (!employeeId) {
      showDialog('Please enter a valid Employee ID.');
      return;
    }
    
    getEmployeebyId(employeeId)
      .then((response) => {
        if (response.data) {
          
          navigate(`/employeeRead/${employeeId}`);
        } else {
          showDialog('Employee not found. Please check the ID.');
        }
      })
      .catch(() => {
        showDialog('Error fetching employee. Please check the ID.');
      });
  };

  return (
    <div className="d-flex align-items-center">
      <input
        type="text"
        id="employeeId"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
        className="form-control me-2"
        placeholder="Enter Employee ID"
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
     
    </div>
  );
}

export default EmployeeSearch;
