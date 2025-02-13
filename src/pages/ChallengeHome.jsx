import React, { useEffect, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import {
  getAllChallenges,
  deleteChallenge,
  registerChallenge,
} from "../services/challengeService";
//import UserHome from "./userhome";
//import { jwtDecode } from "jwt-decode";
//import RegisteredChallenges from "./RegisteredChallenges";
import { useUser } from "../contexts/UserContext";
import ChallengeSearch from "./ChallengeSearch";
import { Modal, Button } from 'react-bootstrap';


function ChallengeHome() {
  const [data, setData] = useState([]);
  const [showModal,setShowModal] = useState(false);
  const [selectedChallenge,setSelectedChallenge] = useState(null);

  const [dialog,setDialog]  = useState(false);
  const [selectedChallengeRegister , setSelectedChallengeRegister] = useState(null);
  const [successDialog,setSuccessDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorDialog, setErrorDialog] = useState(false);
  const navigate = useNavigate();

  //const employeeData = jwtDecode(localStorage.getItem('token'))

  //const employeeId = employeeData.employeeId;
  const { userInfo } = useUser();

  const employeeId = userInfo?.employeeId;

  useEffect(() => {
    getAllChallenges().then((response) => {
      setData(response.data);
    });
  }, []);

  //open Model and set the ChallengeId

  const handleShowModal = (challengeId,challengeName) => {
    setSelectedChallenge({ id: challengeId, name: challengeName });
    setShowModal(true);
};

const handleDelete = () =>{
  if(selectedChallenge?.id)
  {
    deleteChallenge(selectedChallenge.id)
    .then(()=>{
      setData(data.filter(chal =>chal.challengeId !== selectedChallenge.id));
      setShowModal(false);
     // navigate('/challenges');
      //window.location.reload()
     
    })
    .catch(err=>console.log(err));
  }
};






  // const handleDelete = (challengeId) => {
  //   const confirm = window.confirm("Would you like to delete this challenge?");
  //   if (confirm) {
  //     deleteChallenge(challengeId)
  //       .then(() => {
  //         window.location.reload();
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // };

    const handleShowDialog = (challengeId,challengeName) =>{
      setSelectedChallengeRegister({id:challengeId,name:challengeName});
      setDialog(true);
    }


     const handleRegister = (employeeId,challengeId)=>{
      if(selectedChallengeRegister?.id)
      {
        //console.log(challengeId);
        registerChallenge(employeeId, challengeId)
        .then(()=>{
         // navigate("/registered-challenges");
          setDialog(false)
          setSuccessDialog(true);
         

        })
        .catch((err) => {
          console.log(err);
         // const backendError = err.response?.data?.message;
         setErrorMessage(err.message);
          setDialog(false);
          setErrorDialog(true); 

        });
      }

     };


  // const handleRegister = (employeeId, challengeId) => {
  //   const confirm = window.confirm("Would you like to Register ths Challenge?");
  //   if (confirm) {
  //     registerChallenge(employeeId, challengeId)
  //       .then(() => {
  //         window.location.reload();
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // };



  return (
    <>
      
      <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
        <h1>List of Challenges</h1>

        <div className="w-80 rounded bg-white border shadow p-4">
          <div className="d-flex justify-content-end mb-2">
            <ChallengeSearch/>
            <Link to="/addChallenge" className="btn btn-success ms-2">
              Add +
            </Link>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Challenge ID</th>
                <th>Challenge Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Reward Points</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => (
                <tr key={i}>
                  <td>{d.challengeId}</td>
                  <td>{d.challengeName}</td>
                  <td>{d.startDate}</td>
                  <td>{d.endDate}</td>
                  <td>{d.rewardPoints}</td>
                  <td>{d.description}</td>

                  <td>
                    <Link
                      to={`/challengeRead/${d.challengeId}`}
                      className="btn btn-sm btn-info me-2"
                    >
                      Read
                    </Link>
                    <Link
                      to={`/challengeUpdate/${d.challengeId}`}
                      className="btn btn-sm btn-primary me-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleShowModal(d.challengeId,`${d.challengeName}`)}
                      className="btn btn-sm btn-danger me-2"
                    >
                      Delete
                    </button>

                    <button
                      onClick={() => handleShowDialog(d.challengeId ,d.challengeName)}
                      className="btn btn-sm btn-success"
                    >
                      Register
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to='/dashboard' className='btn btn-primary ms-3'> Home</Link>
        </div>
      </div>
     {/* <RegisteredChallenges props={employeeId}/> */}
     

     {/* Delete Confirmation Modal */}
     <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete <strong>{selectedChallenge?.name}</strong> Record ?
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
                          Are you sure you want to register <strong>{selectedChallengeRegister?.name}</strong> Challenge?
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={() => setDialog(false)}>
                              Cancel
                          </Button>
                          <Button variant="danger" onClick={() => handleRegister(employeeId,selectedChallengeRegister?.id)}>
                              Yes, Register
                          </Button>
                      </Modal.Footer>
                  </Modal>

      
                  <Modal show={successDialog} onHide={() => {
    setSuccessDialog(false);
    navigate(`/registeredChallenges/${employeeId}`); // Navigate to registered challenges
}} centered>
  <Modal.Header closeButton>
    <Modal.Title>Success</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    You have successfully registered for <strong>{selectedChallengeRegister?.name}</strong>!
  </Modal.Body>
  <Modal.Footer>
    <Button variant="primary" onClick={() => {
        setSuccessDialog(false);
        navigate(`/registeredChallenges/${employeeId}`);
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

export default ChallengeHome;
