import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getDoctorById } from "../services/doctorService"; // Import your service function

function DoctorRead() {
  const [data, setData] = useState({});
  const { doctorId } = useParams();

  useEffect(() => {
    getDoctorById(doctorId)
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching doctor data:", err));
  }, [doctorId]);

  return (
    <div className="d-flex justify-content-center align-items-center bg-light mt-5 ">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h3>Details of Doctor</h3>
        <div className="mb-2">
          <strong>Doctor ID: </strong> {data.doctorId}
        </div>
        <div className="mb-2">
          <strong>Doctor Name: </strong> {data.doctorName}
        </div>
        <div className="mb-2">
          <strong>Specialization: </strong> {data.specialization}
        </div>
        <div className="mb-2">
          <strong>Contact Number: </strong> {data.contactNumber}
        </div>
        <div className="mb-2">
          <strong>Email: </strong> {data.email}
        </div>
        <div className="mb-2">
          <strong>Hospital Affiliation: </strong> {data.hospitalAffilation}
        </div>
        <div className="mb-2">
          <strong>Location: </strong> {data.location}
        </div>
        <div className="mb-2">
          <strong>Available From: </strong> {data.availableFrom}
        </div>
        <div className="mb-2">
          <strong>Available Till: </strong> {data.availableTill}
        </div>
        <div className="mb-2">
          <strong>Qualification: </strong> {data.qualification}
        </div>

        <Link to={`/doctorUpdate/${doctorId}`} className="btn btn-success">
          Edit
        </Link>
        <Link to="/doctor" className="btn btn-primary ms-3">
          Back
        </Link>
      </div>
    </div>
  );
}

export default DoctorRead;
