import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getEventById, updateEvent } from "../services/eventService"; // Import your service function

function EventUpdate() {
  const { eventId } = useParams(); // Get the event ID from route params
  const navigate = useNavigate();
  const [values, setValues] = useState({
    eventId: '',
    name: '',
    enrolmentDate: '',
    organizer: '',
    startDate: '',
    endDate: '',
    eventDescription: '',
  });

  useEffect(() => {
    getEventById(eventId)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => console.log(err));
  }, [eventId]);

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateEvent(values);
      alert('Event updated successfully');
      navigate('/events');
    } catch (error) {
      alert('Failed to update event. Please try again.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-light mt-5 mb-5">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update Event</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlFor="eventId">Event ID:</label>
            <input
              type="number"
              name="eventId"
              className="form-control"
              placeholder="Enter Event ID"
              value={values.eventId}
              onChange={handleChange}
              readOnly
            />
          </div>
          <div className="mb-2">
            <label htmlFor="name">Event Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Event Name"
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="enrolmentDate">Enrollment Date:</label>
            <input
              type="date"
              name="enrolmentDate"
              className="form-control"
              value={values.enrolmentDate}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="organizer">Organizer:</label>
            <input
              type="text"
              name="organizer"
              className="form-control"
              placeholder="Enter Organizer Name"
              value={values.organizer}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="date"
              name="startDate"
              className="form-control"
              value={values.startDate}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="endDate">End Date:</label>
            <input
              type="date"
              name="endDate"
              className="form-control"
              value={values.endDate}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="eventDescription">Description:</label>
            <textarea
              name="eventDescription"
              className="form-control"
              placeholder="Enter Event Description"
              value={values.eventDescription}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-between gap-4">
          <button type="submit" className="btn btn-primary w-100">Update Event</button>
          <Link to="/event" className="btn btn-danger w-100 w-100">Back</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EventUpdate;
