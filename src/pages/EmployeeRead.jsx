import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getEmployeebyId } from "../services/employeeService";
//import Home from "./managerhome";

function EmployeeRead() {
  const [data, setData] = useState([]);
  const { employeeId } = useParams();

  const displayGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", 
    gap: "10px",
    alignItems: "center"
  }

  useEffect(() => {
    getEmployeebyId(employeeId)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [employeeId]);
  return (
    <>
      
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 round">
          <h3 style={{marginBottom: "2rem", textAlign: "Center"}}>Details Of Associate</h3>

          <div style={displayGrid}>
            <div className="mb-2">
              <strong>Associate Id: {data.employeeId}</strong>
            </div>
            <div className="mb-2">
              <strong>First Name: {data.firstName}</strong>
            </div>
            <div className="mb-2">
              <strong>Last Name: {data.lastName}</strong>
            </div>
            <div className="mb-2">
              <strong>Email Address: {data.email}</strong>
            </div>
            <div className="mb-2">
              <strong>Password: {data.password}</strong>
            </div>
            <div className="mb-2">
              <strong>Contact Number: {data.contactNumber}</strong>
            </div>
            <div className="mb-2">
              <strong>Department: {data.department}</strong>
            </div>
            <div className="mb-2">
              <strong>Date Of Birth: {data.dateOfBirth}</strong>
            </div>
            <div className="mb-2">
              <strong>Gender: {data.gender}</strong>
            </div>
            <div className="mb-2">
              <strong>Weight: {data.weight}</strong>
            </div>
            <div className="mb-2">
              <strong>Height: {data.height}</strong>
            </div>
            <div className="mb-2">
              <strong>Role: {data.role}</strong>
            </div>
            <div className="mb-2">
              <strong>Date Of Joining: {data.dateOfJoining}</strong>
            </div>
            <div className="mb-2">
              <strong>Hobbies: {data.hobbies}</strong>
            </div>
            <div className="mb-2">
              <strong>Address:{data.address}</strong>
            </div>
            <div className="mb-2">
              <strong>Sports Interest:{data.sportsInterest}</strong>
            </div>
            <div className="mb-2">
              <strong>Medical History:{data.medicalHistory}</strong>
            </div>
            <div className="mb-2">
              <strong>Emergency Contact:{data.emergencyContact}</strong>
            </div>
            <div className="mb-2">
              <strong>Blood Group:{data.bloodGroup}</strong>
            </div>
            <div className="mb-2">
              <strong>Marital Status:{data.maritalStatus}</strong>
            </div>
            <div className="mb-2">
              <strong>Nationality:{data.nationality}</strong>
            </div>
            <div className="mb-2">
              <strong>Total Reward Points:{data.totalRewardPoints}</strong>
            </div>
          </div>

          <div style={{float: "right"}}>
            <Link
              to={`/employeeUpdate/${employeeId}`}
              className="btn btn-success"
            >
              REFINE
            </Link>
            <Link to="/employees" className="btn btn-primary ms-3">
              BACK
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeRead;
