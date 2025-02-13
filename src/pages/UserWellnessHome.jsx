import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllWellness, registerWellnessProgram } from '../services/wellnessprogramService';

//import { useParams } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
function UserWellnessHome() {
    const [data, setData] = useState([]);

     //employeeId 
     // const location = useLocation();
     // const { employeeId } = location.state || {};
   const { userInfo } = useUser();
   
     const employeeId = userInfo?.employeeId;
    useEffect(() => {
        getAllWellness().then((response) => {
            console.log(response.data);
            setData(response.data);
        });
    }, []);

    // const handleDelete = (wellnessProgramId) => {
    //     const confirm = window.confirm("Would you like to delete this wellness program?");
    //     if (confirm) {
    //         deleteWellness(wellnessProgramId)
    //             .then(() => {
    //                 window.location.reload();
    //             })
    //             .catch(err => console.log(err));
    //     }
    // };

    const handleRegister = (employeeId, wellnessProgramId) => {
        const confirm = window.confirm("Would you like to Register ths wellness program?");
        if (confirm) {
          registerWellnessProgram(employeeId, wellnessProgramId)
            .then(() => {
              window.location.reload();
            })
            .catch((err) => console.log(err));
        }
      };


    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
            <h1>List of Wellness Programs</h1>

            <div className='w-80 rounded bg-white border shadow p-4'>
                {/* <div className='d-flex justify-content-end mb-2'>
                    <Link to="/addWellnessProgram" className='btn btn-success'>Add +</Link>
                </div> */}
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Program ID</th>
                            <th>Program Name</th>
                            <th>Description</th>
                            <th>Program Type</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Max Participants</th>
                            <th>Venue</th>
                            <th>Location Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d, i) => (
                                <tr key={i}>
                                    <td>{d.wellnessProgramId}</td>
                                    <td>{d.programName}</td>
                                    <td>{d.description}</td>
                                    <td>{d.programType}</td>
                                    <td>{d.startDate}</td>
                                    <td>{d.endDate}</td>
                                    <td>{d.maxParticipants}</td>
                                    <td>{d.venue}</td>
                                    <td>{d.locationType}</td>
                                    <td>
                                        <Link to={`/wellnessProgramRead/${d.wellnessProgramId}`} className='btn btn-sm btn-info me-2'>Read</Link>
                                        {/* <Link to={`/wellnessUpdate/${d.wellnessProgramId}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                                        <button onClick={() => handleDelete(d.wellnessProgramId)} className='btn btn-sm btn-danger me-2'>Delete</button> */}
                                        <button onClick={() => handleRegister(employeeId, d.wellnessProgramId)} className="btn btn-sm btn-success">Register</button>
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

export default UserWellnessHome;
