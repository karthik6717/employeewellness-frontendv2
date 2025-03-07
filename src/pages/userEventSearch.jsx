import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { getEventById } from '../services/eventService'; // Import service for fetching event details

function UserEventSearch() {
  const [eventId, setEventId] = useState('');
 // const [error, setError] = useState('');
  const navigate = useNavigate();
   // Initialize navigate
   const showDialog = (message) => {
  
    alert(message);
  };

  const handleSearch = () => {
    if (!eventId) {
      showDialog('Please enter a valid Event ID.');
      return;
    }

    getEventById(eventId)
      .then((response) => {
        if(response.data){
          navigate(`/usereventRead/${eventId}`);

        }else{
          showDialog("Event not Found. Please Check the Event ID.");

        }
      })
      .catch(() => {
        showDialog('Error fetching event. Please check the ID.');
      });
  };

  return (
    <div className="d-flex align-items-center">
     
          <input
            type="text"
            id="eventId"
            value={eventId}
            onChange={(e) => setEventId(e.target.value)}
            className="form-control me-2"
            placeholder="Enter Event ID"
          />
        
        <button className="btn btn-primary " onClick={handleSearch}>
          Search
        </button>

       
      </div>
  
  );
}

export default UserEventSearch;
