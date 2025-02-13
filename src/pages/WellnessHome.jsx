import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { getAllWellness, deleteWellness, registerWellnessProgram } from '../services/wellnessprogramService';
import { Modal, Button } from 'react-bootstrap';
//import { useParams } from "react-router-dom";
//import { useUser } from "../contexts/UserContext";
import useEmployeeId from '../utils/useEmployeeId';
import WellnessSearch from './WellnessSearch';

function WellnessHome() {
    const [data, setData] = useState([]);

      const [showModal,setShowModal] = useState(false);
      const [selectedWellness,setSelectedWellness] = useState(null);
    
      const [dialog,setDialog]  = useState(false);
      const [selectedWellnessRegister , setSelectedWellnessRegister] = useState(null);
      const [successDialog,setSuccessDialog] = useState(false);
      const [errorMessage, setErrorMessage] = useState("");
      const [errorDialog, setErrorDialog] = useState(false);
      const navigate = useNavigate();


      const employeeId = useEmployeeId();
    useEffect(() => {
        getAllWellness().then((response) => {
           
            setData(response.data);
        });
    }, []);

    const handleShowModal = (wellnessProgramId,programName) => {
        setSelectedWellness({ id: wellnessProgramId, name: programName });
        setShowModal(true);
    };





    const handleDelete = () => {

        if(selectedWellness?.id)
        {
            deleteWellness(selectedWellness.id)
            .then(()=>{
            setData(data.filter(wellness =>wellness.wellnessProgramId !== selectedWellness.id));
            setShowModal(false);  
            })
            .catch(err=>console.log(err));
        }
    };
    

    const handleShowDialog = (wellnessProgramId,programName) =>{
        setSelectedWellnessRegister({id:wellnessProgramId,name:programName});
        setDialog(true);
      }



    const handleRegister = (employeeId, wellnessProgramId) => {
        if(selectedWellnessRegister?.id)
        {
            registerWellnessProgram(employeeId, wellnessProgramId)
            .then(()=>{
             setDialog(false);
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
            <h1>List of Wellness Programs</h1>

            <div className='w-80 rounded bg-white border shadow p-4'>
                <div className='d-flex justify-content-end mb-2'>
                    <WellnessSearch/>
                    <Link to="/addWellnessProgram" className='btn btn-success ms-2'>Add +</Link>
                </div>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Program ID</th>
                            <th>Program Name</th>
                            <th>Description</th>
                            <th>Program Type</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Max Participants</th>
                            <th>Venue</th>
                            <th>Location Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d, i) => (
                                <tr key={i}>
                                    <td>{d.wellnessProgramId}</td>
                                    <td>{d.programName}</td>
                                    <td>{d.description}</td>
                                    <td>{d.programType}</td>
                                    <td>{d.startDate}</td>
                                    <td>{d.endDate}</td>
                                    <td>{d.maxParticipants}</td>
                                    <td>{d.venue}</td>
                                    <td>{d.locationType}</td>
                                    <td>
                                        <Link to={`/wellnessProgramRead/${d.wellnessProgramId}`} className='btn btn-sm btn-info me-2'>Read</Link>
                                        <Link to={`/wellnessUpdate/${d.wellnessProgramId}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                                        <button onClick={() => handleShowModal(d.wellnessProgramId,`${d.programName}`)} className='btn btn-sm btn-danger me-2'>Delete</button>
                                        <button onClick={() => handleShowDialog(d.wellnessProgramId,d.programName)} className="btn btn-sm btn-success">Register</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                 <Link to='/dashboard' className='btn btn-primary ms-3'> Home</Link>
            </div>
        </div>


          {/* Delete Confirmation Modal */}
     <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete <strong>{selectedWellness?.name}</strong> Record ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Yes, Delete
                    </Button>
                </Modal.Footer>
            </Modal>
    
      {/*register Confirmation Modal */}
            <Modal show={dialog} onHide={() => setDialog(false)} centered>
                      <Modal.Header closeButton>
                          <Modal.Title>Confirm Register</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                          Are you sure you want to register <strong>{selectedWellnessRegister?.name}</strong> Wellness Program?
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={() => setDialog(false)}>
                              Cancel
                          </Button>
                          <Button variant="danger" onClick={() => handleRegister(employeeId,selectedWellnessRegister?.id)}>
                              Yes, Register
                          </Button>
                      </Modal.Footer>
                  </Modal>

      
                  <Modal show={successDialog} onHide={() => {
    setSuccessDialog(false);
    navigate(`/registeredWellness/${employeeId}`); // Navigate to registered challenges
}} centered>
  <Modal.Header closeButton>
    <Modal.Title>Success</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    You have successfully registered for <strong>{selectedWellnessRegister?.name}</strong>!
  </Modal.Body>
  <Modal.Footer>
    <Button variant="primary" onClick={() => {
        setSuccessDialog(false);
        navigate(`/registeredWellness/${employeeId}`);
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

export default WellnessHome;
