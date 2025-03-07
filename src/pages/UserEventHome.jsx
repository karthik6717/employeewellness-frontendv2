import React, { useEffect, useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { getAllEvents, registerEvent } from '../services/eventService'; // Assuming services are implemented
import { useUser } from "../contexts/UserContext";
import UserEventSearch from './userEventSearch';
import {Modal,Button} from 'react-bootstrap'
//import { useLocation } from "react-router-dom";

function UserEventHome() {
    const [data, setData] = useState([]);

    //const [showModal,setShowModal] = useState(false);
    //      const [selectedEvent,setSelectedEvent] = useState(null);
        
          const [dialog,setDialog]  = useState(false);
          const [selectedEventRegister , setSelectedEventRegister] = useState(null);
          const [successDialog,setSuccessDialog] = useState(false);
          const [errorMessage, setErrorMessage] = useState("");
          const [errorDialog, setErrorDialog] = useState(false);
          const navigate = useNavigate();



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

    // const handleShowModal = (eventId,name) => {
    //     setSelectedEvent({ id: eventId, name: name });
    //     setShowModal(true);
    // };

    const handleShowDialog = (eventId,name) =>{
        setSelectedEventRegister({id:eventId,name:name});
        setDialog(true);
      }


    const handleRegister = (employeeId,eventId ) => {
            if(selectedEventRegister?.id)
            {
                registerEvent(employeeId, eventId)
                .then(()=>{
                    setDialog(false)
                    setSuccessDialog(true);
                })
                .catch((err)=>{
                    console.log(err);
                    setErrorMessage(err.message);
                    setDialog(false);
                    setErrorDialog(true);
                });
    
            }
              
              };






    return (
        <>
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
            <h1>List of Events</h1>
            <div className='w-80 rounded bg-white border shadow p-4'>
                {/* <div className='d-flex justify-content-end mb-2'>
                    <Link to="/addEvent" className='btn btn-success'>Add +</Link>
                </div> */}
                 <div className="d-flex justify-content-end mb-2">
          <UserEventSearch/>
          </div>

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
                                        <Link to={`/usereventRead/${event.eventId}`} className='btn btn-sm btn-info me-2'>Read</Link>
                                        {/* <Link to={`/eventUpdate/${event.eventId}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                                        <button onClick={() => handleDelete(event.eventId)} className='btn btn-sm btn-danger'>Delete</button> */}
                                          <button onClick={() => handleShowDialog(event.eventId,event.name)} className="btn btn-sm btn-success ">Register</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <Link to='/dashboard' className='btn btn-primary ms-3'> Home</Link>
                          
            </div>
        </div>

        {/*register Confirmation Modal */}
                    <Modal show={dialog} onHide={() => setDialog(false)} centered>
                              <Modal.Header closeButton>
                                  <Modal.Title>Confirm Register</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                  Are you sure you want to register <strong>{selectedEventRegister?.name}</strong> Event?
                              </Modal.Body>
                              <Modal.Footer>
                                  <Button variant="secondary" onClick={() => setDialog(false)}>
                                      Cancel
                                  </Button>
                                  <Button variant="danger" onClick={() => handleRegister(employeeId,selectedEventRegister?.id)}>
                                      Yes, Register
                                  </Button>
                              </Modal.Footer>
                          </Modal>
        
              
                          <Modal show={successDialog} onHide={() => {
            setSuccessDialog(false);
            navigate(`/registeredEvents/${employeeId}`); // Navigate to registered challenges
        }} centered>
          <Modal.Header closeButton>
            <Modal.Title>Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            You have successfully registered for <strong>{selectedEventRegister?.name}</strong>!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => {
                setSuccessDialog(false);
                navigate(`/registeredEvents/${employeeId}`);
            }}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
        
         
        {/* Error Message Modal */}
        <Modal show={errorDialog} onHide={() => setErrorDialog(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {errorMessage}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={() => setErrorDialog(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        
        




        </>
    );
}

export default UserEventHome;
