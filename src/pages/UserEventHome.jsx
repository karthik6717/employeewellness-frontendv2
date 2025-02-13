import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllEvents, registerEvent } from '../services/eventService'; // Assuming services are implemented
import { useUser } from "../contexts/UserContext";

//import { useLocation } from "react-router-dom";

function UserEventHome() {
    const [data, setData] = useState([]);

    const { userInfo } = useUser();
    
      const employeeId = userInfo?.employeeId;

     //employeeId 
          //const location = useLocation();
          //const { employeeId } = location.state || {};

    useEffect(() => {
        getAllEvents().then((response) => {
            console.log(response.data);
            setData(response.data);
        }).catch((err) => console.error(err));
    }, []);

    // const handleDelete = (eventId) => {
    //     const confirm = window.confirm("Would you like to delete this event?");
    //     if (confirm) {
    //         deleteEvent(eventId)
    //             .then(() => {
    //                 alert("Event deleted successfully!");
    //                 setData(data.filter(event => event.eventId !== eventId));
    //             })
    //             .catch(err => console.error(err));
    //     }
    // };


    const handleRegister = (employeeId,eventId ) => {
            const confirm = window.confirm("Would you like to Register ths Event?");
            if (confirm) {
              registerEvent(employeeId, eventId)
                .then(() => {
                  window.location.reload();
                })
                .catch((err) => console.log(err));
            }
          };






    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
            <h1>List of Events</h1>
            <div className='w-80 rounded bg-white border shadow p-4'>
                {/* <div className='d-flex justify-content-end mb-2'>
                    <Link to="/addEvent" className='btn btn-success'>Add +</Link>
                </div> */}
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Event ID</th>
                            <th>Name</th>
                            <th>Enrollment Date</th>
                            <th>Organizer</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((event, i) => (
                                <tr key={i}>
                                    <td>{event.eventId}</td>
                                    <td>{event.name}</td>
                                    <td>{event.enrolmentDate}</td>
                                    <td>{event.organizer}</td>
                                    <td>{event.startDate}</td>
                                    <td>{event.endDate}</td>
                                    <td>{event.eventDescription}</td>
                                    <td>
                                        <Link to={`/eventRead/${event.eventId}`} className='btn btn-sm btn-info me-2'>Read</Link>
                                        {/* <Link to={`/eventUpdate/${event.eventId}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                                        <button onClick={() => handleDelete(event.eventId)} className='btn btn-sm btn-danger'>Delete</button> */}
                                        <button onClick={() => handleRegister(employeeId, event.eventId)} className="btn btn-sm btn-success">Register</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserEventHome;
