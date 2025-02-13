import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getAllChallenges,
 // deleteChallenge,
  registerChallenge,
} from "../services/challengeService";
//import UserHome from "./userhome";
//import { jwtDecode } from "jwt-decode";
import RegisteredChallenges from "./RegisteredChallenges";
import { useUser } from "../contexts/UserContext";
import ChallengeSearch from "./ChallengeSearch";


function UserChallengeHome() {
  const [data, setData] = useState([]);

  //const employeeData = jwtDecode(localStorage.getItem('token'))

  //const employeeId = employeeData.employeeId;
  const { userInfo } = useUser();

  const employeeId = userInfo?.employeeId;

  useEffect(() => {
    getAllChallenges().then((response) => {
      setData(response.data);
    });
  }, []);

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

  const handleRegister = (employeeId, challengeId) => {
    const confirm = window.confirm("Would you like to Register ths Challenge?");
    if (confirm) {
      registerChallenge(employeeId, challengeId)
        .then(() => {
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };



  return (
    <>
      
      <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
        <h1>List of Challenges</h1>

        <div className="w-80 rounded bg-white border shadow p-4">
          {/* <div className="d-flex justify-content-end mb-2">
            <Link to="/addChallenge" className="btn btn-success">
              Add +
            </Link>
          </div> */}
          <div className="d-flex justify-content-end mb-2">
          <ChallengeSearch/>
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
                    {/* <Link
                      to={`/challengeUpdate/${d.challengeId}`}
                      className="btn btn-sm btn-primary me-2"
                    >
                      Edit
                    </Link> */}
                    {/* <button
                      onClick={() => handleDelete(d.challengeId)}
                      className="btn btn-sm btn-danger me-2"
                    >
                      Delete
                    </button> */}

                    <button
                      onClick={() => handleRegister(employeeId, d.challengeId)}
                      className="btn btn-sm btn-success"
                    >
                      Register
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
     {/* <RegisteredChallenges props={employeeId}/> */}
    </>
    
  );
}

export default UserChallengeHome;
