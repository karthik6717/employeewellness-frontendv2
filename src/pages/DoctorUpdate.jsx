import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getDoctorById, updateDoctor } from "../services/doctorService"; // Import your service functions

function DoctorUpdate() {
  const { doctorId } = useParams(); // Get the doctor ID from route params
  
  const navigate = useNavigate();
  const [values, setValues] = useState({
    doctorId: "",
    doctorName: "",
    specialization: "",
    contactNumber: "",
    email: "",
    hospitalAffilation: "",
    location: "",
    availableFrom: "",
    availableTill: "",
    qualification: "",
  });

  useEffect(() => {
    getDoctorById(doctorId)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => console.error("Error fetching doctor data:", err));
  }, [doctorId]);

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateDoctor(values);
      alert("Doctor updated successfully!");
      navigate("/doctors");
    } catch (error) {
      alert("Failed to update doctor. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-light mt-5 mb-5">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1 className="text-center">Update Doctor</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlFor="doctorId">Doctor ID:</label>
            <input
              type="number"
              name="doctorId"
              className="form-control"
              placeholder="Enter Doctor ID"
              value={values.doctorId}
              onChange={handleChange}
              readOnly
            />
          </div>
          <div className="mb-2">
            <label htmlFor="doctorName">Doctor Name:</label>
            <input
              type="text"
              name="doctorName"
              className="form-control"
              placeholder="Enter Doctor Name"
              value={values.doctorName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="specialization">Specialization:</label>
            <input
              type="text"
              name="specialization"
              className="form-control"
              placeholder="Enter Specialization"
              value={values.specialization}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="contactNumber">Contact Number:</label>
            <input
              type="text"
              name="contactNumber"
              className="form-control"
              placeholder="Enter Contact Number"
              value={values.contactNumber}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email Address"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="hospitalAffilation">Hospital Affiliation:</label>
            <input
              type="text"
              name="hospitalAffilation"
              className="form-control"
              placeholder="Enter Hospital Affiliation"
              value={values.hospitalAffilation}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              name="location"
              className="form-control"
              placeholder="Enter Location"
              value={values.location}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="availableFrom">Available From:</label>
            <input
              type="datetime-local"
              name="availableFrom"
              className="form-control"
              value={values.availableFrom}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="availableTill">Available Till:</label>
            <input
              type="datetime-local"
              name="availableTill"
              className="form-control"
              value={values.availableTill}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="qualification">Qualification:</label>
            <input
              type="text"
              name="qualification"
              className="form-control"
              placeholder="Enter Qualification"
              value={values.qualification}
              onChange={handleChange}
            />
          </div>
          <div className='d-flex justify-content-between gap-4'>
          <Link to="/doctor" className="btn btn-danger w-100 ">
            Back
          </Link>
          <button type="submit" className="btn btn-primary w-100">
            Update Doctor
          </button>
          </div>
         
        </form>
      </div>
    </div>
  );
}

export default DoctorUpdate;
