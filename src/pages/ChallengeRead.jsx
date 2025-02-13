import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getChallengeById } from "../services/challengeService"; // Import your service function
//import Home from "./managerhome";

function ChallengeRead() {
  const [data, setData] = useState([]);
  const { challengeId } = useParams();

  useEffect(() => {
    getChallengeById(challengeId)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [challengeId]);

  return (
    <>
    
    <div className="d-flex  justify-content-center align-items-center bg-light mt-5">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 round">
        <h3>Details of Challenge</h3>
        <div className="mb-2">
          <strong>Challenge ID: {data.challengeId}</strong>
        </div>
        <div className="mb-2">
          <strong>Challenge Name: {data.challengeName}</strong>
        </div>
        <div className="mb-2">
          <strong>Start Date: {data.startDate}</strong>
        </div>
        <div className="mb-2">
          <strong>End Date: {data.endDate}</strong>
        </div>
        <div className="mb-2">
          <strong>Reward Points: {data.rewardPoints}</strong>
        </div>
        <div className="mb-2">
          <strong>Description: {data.description}</strong>
        </div>

        <Link to={`/challengeUpdate/${challengeId}`} className="btn btn-success">
          Edit
        </Link>
        <Link to="/challenges" className="btn btn-primary ms-3">
          Back
        </Link>
      </div>
    </div>
    </>
  );
}

export default ChallengeRead;
