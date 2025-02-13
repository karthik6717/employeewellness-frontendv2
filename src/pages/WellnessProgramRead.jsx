import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getWellnessProgramById } from "../services/wellnessprogramService"; // Import your service function

function WellnessProgramRead() {
  const [data, setData] = useState({});
  const { wellnessProgramId } = useParams();

  useEffect(() => {
    getWellnessProgramById(wellnessProgramId)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [wellnessProgramId]);

  return (
    <div className="d-flex justify-content-center align-items-center bg-light mt-5">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h3>Details of Wellness Program</h3>
        <div className="mb-2">
          <strong>Program ID:</strong> {data.wellnessProgramId}
        </div>
        <div className="mb-2">
          <strong>Program Name:</strong> {data.programName}
        </div>
        <div className="mb-2">
          <strong>Description:</strong> {data.description}
        </div>
        <div className="mb-2">
          <strong>Program Type:</strong> {data.programType}
        </div>
        <div className="mb-2">
          <strong>Start Date:</strong> {data.startDate}
        </div>
        <div className="mb-2">
          <strong>End Date:</strong> {data.endDate}
        </div>
        <div className="mb-2">
          <strong>Max Participants:</strong> {data.maxParticipants}
        </div>
        <div className="mb-2">
          <strong>Venue:</strong> {data.venue}
        </div>
        <div className="mb-2">
          <strong>Location Type:</strong> {data.locationType}
        </div>

        <Link to={`/wellnessUpdate/${wellnessProgramId}`} className="btn btn-success">
          Edit
        </Link>
        <Link to="/wellnessProgram" className="btn btn-primary ms-3">
          Back
        </Link>
      </div>
    </div>
  );
}

export default WellnessProgramRead;
