import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllDoctors } from '../services/doctorService'; // Adjust based on your service structure

function UserDoctorHome() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllDoctors()
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((err) => console.error("Error fetching doctors:", err));
    }, []);

    // const handleDelete = (doctorId) => {
    //     const confirm = window.confirm("Would you like to delete this doctor?");
    //     if (confirm) {
    //         deleteDoctor(doctorId)
    //             .then(() => {
    //                 alert("Doctor deleted successfully!");
    //                 setData(data.filter((doctor) => doctor.doctorId !== doctorId));
    //             })
    //             .catch(err => console.error("Error deleting doctor:", err));
    //     }
    // };

    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
            <h1>List of Doctors</h1>

            <div className='w-80 rounded bg-white border shadow p-4'>
                {/* <div className='d-flex justify-content-end mb-2'>
                    <Link to="/addDoctor" className='btn btn-success'>Add +</Link>
                </div> */}
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Doctor ID</th>
                            <th>Doctor Name</th>
                            <th>Specialization</th>
                            <th>Contact Number</th>
                            <th>Email</th>
                            <th>Hospital Affiliation</th>
                            <th>Location</th>
                            <th>Available From</th>
                            <th>Available Till</th>
                            <th>Qualification</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((doctor, index) => (
                                <tr key={index}>
                                    <td>{doctor.doctorId}</td>
                                    <td>{doctor.doctorName}</td>
                                    <td>{doctor.specialization}</td>
                                    <td>{doctor.contactNumber}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.hospitalAffilation}</td>
                                    <td>{doctor.location}</td>
                                    <td>{doctor.availableFrom}</td>
                                    <td>{doctor.availableTill}</td>
                                    <td>{doctor.qualification}</td>
                                    <td>
                                        <Link to={`/doctorRead/${doctor.doctorId}`} className='btn btn-sm btn-info me-2'>Read</Link>
                                        {/* <Link to={`/doctorUpdate/${doctor.doctorId}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                                        <button onClick={() => handleDelete(doctor.doctorId)} className='btn btn-sm btn-danger me-2'>Delete</button> */}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserDoctorHome;
