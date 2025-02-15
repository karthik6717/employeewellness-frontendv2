import React, { useEffect, useState } from 'react';
import { Link,useNavigate, useParams } from 'react-router-dom';
import { getEmployeebyId, updateEmployee } from '../services/employeeService';
import '../App.css'

function EmployeeUpdate() {
  const { employeeId } = useParams(); // Get the employee ID from route params
  console.log(employeeId);
  const navigate = useNavigate(); 
  const [values, setValues] = useState({
    employeeId: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    contactNumber: '',
    department: '',
    dateOfBirth: '',
    gender: '',
    weight: '',
    height: '',
    role: '',
    dateOfJoining: '',
    hobbies: '',
    address: '',
    sportsInterest: '',
    medicalHistory: '',
    emergencyContact: '',
    bloodGroup: '',
    maritalStatus: '',
    nationality: '',
    totalRewardPoints: 0,
  });

  console.log(values);
  


  useEffect(() => {
    getEmployeebyId(employeeId)
      .then(res=>{
         setValues(res.data);
        })
      .catch((err) => console.log(err));
  }, [employeeId]);

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // Handle date field changes
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateEmployee(values);
      alert("Employee updated successfully");
      navigate("/employees");
    } catch (error) {
      //console.error("Error updating employee", error);
      alert("Failed to update employee. Please try again.");
    }
  };

  return (
    <div className="d-flex w-100  justify-content-center align-items-center bg-light mt-5">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
    {/* // <div >
    //   <div > */}
        <h1 className='d-flex justify-content-center mb-2'>Update Employee</h1>
       <div>
        <form onSubmit={handleUpdate} className='form-grid'>
    
          <div className="mb-2">
            <label htmlFor="employeeId">Employee ID:</label>
            <input
              type="number"
              name="employeeId"
              className="form-control"
              placeholder="Enter Employee ID"
              value={values.employeeId}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              placeholder="Enter First Name"
              value={values.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Enter Last Name"
              value={values.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter Password"
              value={values.password}
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
            <label htmlFor="department">Department:</label>
            <input
              type="text"
              name="department"
              className="form-control"
              placeholder="Enter Department"
              value={values.department}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              type="date"
              name="dateOfBirth"
              className="form-control"
              value={values.dateOfBirth}
              onChange={handleDateChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="gender">Gender:</label>
            <select
              name="gender"
              className="form-control"
              value={values.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
          <div className="mb-2">
            <label htmlFor="weight">Weight (kg):</label>
            <input
              type="number"
              name="weight"
              className="form-control"
              placeholder="Enter Weight"
              value={values.weight}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="height">Height (cm):</label>
            <input
              type="number"
              name="height"
              className="form-control"
              placeholder="Enter Height"
              value={values.height}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="role">Role:</label>
            <select
              name="role"
              className="form-control"
              value={values.role}
              onChange={handleChange}
            >
              <option value="">Select Role</option>
              <option value="ADMIN">Admin</option>
              <option value="USER">User</option>
            </select>
          </div>
          <div className="mb-2">
            <label htmlFor="dateOfJoining">Date of Joining:</label>
            <input
              type="date"
              name="dateOfJoining"
              className="form-control"
              value={values.dateOfJoining}
              onChange={handleDateChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="hobbies">Hobbies:</label>
            <input
              type="text"
              name="hobbies"
              className="form-control"
              placeholder="Enter Hobbies"
              value={values.hobbies}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              name="address"
              className="form-control"
              placeholder="Enter Address"
              value={values.address}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="sportsInterest">Sports Interest:</label>
            <input
              type="text"
              name="sportsInterest"
              className="form-control"
              placeholder="Enter Sports Interest"
              value={values.sportsInterest}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="medicalHistory">Medical History:</label>
            <input
              type="text"
              name="medicalHistory"
              className="form-control"
              placeholder="Enter Medical History"
              value={values.medicalHistory}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="emergencyContact">Emergency Contact:</label>
            <input
              type="text"
              name="emergencyContact"
              className="form-control"
              placeholder="Enter Emergency Contact"
              value={values.emergencyContact}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="bloodGroup">Blood Group:</label>
            <select
              name="bloodGroup"
              className="form-control"
              value={values.bloodGroup}
              onChange={handleChange}
            >
              <option value="">Select Blood Group</option>
              <option value="A_positive">A+</option>
              <option value="A_negative">A-</option>
              <option value="B_positive">B+</option>
              <option value="B_negative+">B-</option>
              <option value="O_positive">o+</option>
              <option value="O_negative">o-</option>
              <option value="AB_positive">AB+</option>
              <option value="AB_negative">AB-</option>
            </select>
          </div>
          <div className="mb-2">
            <label htmlFor="maritalStatus">Marital Status:</label>
            <select
              name="maritalStatus"
              className="form-control"
              value={values.maritalStatus}
              onChange={handleChange}
            >
              <option value="">Select Marital Status</option>
              <option value="SINGLE">Single</option>
              <option value="MARRIED">Married</option>
              <option value="DIVORCED">Divorced</option>
            </select>
          </div>

          <div className="mb-2">
            <label htmlFor="nationality">Nationality:</label>
            <input
              type="text"
              name="nationality"
              className="form-control"
              placeholder="Enter Nationality"
              value={values.nationality}
              onChange={handleChange}
            />
            </div>

            <div className="mb-2">
            <label htmlFor="totalRewardPoints">Total Reward Points:</label>
            <input
              type="number"
              name="totalRewardPoints"
              className="form-control"
              placeholder="Enter totalRewardPoints"
              value={values.totalRewardPoints}
              onChange={handleChange}
            />
            </div>
            

          <button type="submit" className="btn btn-primary w-100  mt-4 mb-2 d-flex align-items-center justify-content-center">Update Associate</button>
          <Link to='/employees' className='btn btn-danger w-100 mt-4  mb-2 d-flex align-items-center justify-content-center'>BACK</Link>
        </form>
        </div>
      </div>
    </div>
  );
}

export default EmployeeUpdate;
