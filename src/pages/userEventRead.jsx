import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getEventById } from "../services/eventService"; // Import your service function

function UserEventRead() {
  const [data, setData] = useState({});
  const { eventId } = useParams();

  useEffect(() => {
    getEventById(eventId)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [eventId]);

  return (
    <>
    <div className="d-flex justify-content-center align-items-center bg-light mt-5">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h3>Details of Event</h3>
        <div className="mb-2">
          <strong>Event ID:</strong> {data.eventId}
        </div>
        <div className="mb-2">
          <strong>Event Name:</strong> {data.name}
        </div>
        <div className="mb-2">
          <strong>Enrollment Date:</strong> {data.enrolmentDate}
        </div>
        <div className="mb-2">
          <strong>Organizer:</strong> {data.organizer}
        </div>
        <div className="mb-2">
          <strong>Start Date:</strong> {data.startDate}
        </div>
        <div className="mb-2">
          <strong>End Date:</strong> {data.endDate}
        </div>
        <div className="mb-2">
          <strong>Description:</strong> {data.eventDescription}
        </div>
        {/* <Link to={`/eventUpdate/${eventId}`} className="btn btn-success">
          Edit
        </Link> */}
        <Link to="/userEvents" className="btn btn-primary ms-3">
          Back
        </Link>
      </div>
    </div>
    </>
  );
}

export default UserEventRead;
