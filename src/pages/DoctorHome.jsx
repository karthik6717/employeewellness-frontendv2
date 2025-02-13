import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllDoctors, deleteDoctor } from '../services/doctorService'; // Adjust based on your service structure
import { Modal, Button } from 'react-bootstrap';
import DoctorSearch from './DoctorSearch';
function DoctorHome() {
    const [data, setData] = useState([]);
     const [showModal,setShowModal] = useState(false);
      const [selectedDoctor,setSelectedDoctor] = useState(null);

    useEffect(() => {
        getAllDoctors()
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((err) => console.error("Error fetching doctors:", err));
    }, []);


    const handleShowModal = (doctorId,doctorName) => {
        setSelectedDoctor({ id: doctorId, name: doctorName });
        setShowModal(true);
    };



    const handleDelete = () => {

        if(selectedDoctor?.id)
        {
            deleteDoctor(selectedDoctor.id)
            .then(()=>{
                setData(data.filter((doctor) => doctor.doctorId !== selectedDoctor.id));
                setShowModal(false);
            })
        
         .catch(err => console.error(err));
        }
    };

    return (
        <>
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
            <h1>List of Doctors</h1>

            <div className='w-80 rounded bg-white border shadow p-4'>
                <div className='d-flex justify-content-end mb-2'>
                    <DoctorSearch/>
                    <Link to="/addDoctor" className='btn btn-success ms-2 '>Add +</Link>
                </div>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Doctor ID</th>
                            <th>Doctor Name</th>
                            <th>Specialization</th>
                            <th>Contact Number</th>
                            {/* <th>Email</th> */}
                            <th>Hospital Affiliation</th>
                            <th>Location</th>
                            <th>Available From</th>
                            <th>Available Till</th>
                            {/* <th>Qualification</th> */}
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
                                    {/* <td>{doctor.email}</td> */}
                                    <td>{doctor.hospitalAffilation}</td>
                                    <td>{doctor.location}</td>
                                    <td>{doctor.availableFrom}</td>
                                    <td>{doctor.availableTill}</td>
                                    {/* <td>{doctor.qualification}</td> */}
                                    <td>
                                        <Link to={`/doctorRead/${doctor.doctorId}`} className='btn btn-sm btn-info me-2'>Read</Link>
                                        <Link to={`/doctorUpdate/${doctor.doctorId}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                                        <button onClick={() => handleShowModal(doctor.doctorId,`${doctor.doctorName}`)} className='btn btn-sm btn-danger me-2'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                  <Link to='/dashboard' className='btn btn-primary ms-3'> Home</Link>
            </div>
        </div>

         {/* Delete Confirmation Modal */}
     <Modal show={showModal} onHide={() => setShowModal(false)} centered>
     <Modal.Header closeButton>
         <Modal.Title>Confirm Deletion</Modal.Title>
     </Modal.Header>
     <Modal.Body>
         Are you sure you want to delete <strong>{selectedDoctor?.name}</strong> Record ?
     </Modal.Body>
     <Modal.Footer>
         <Button variant="secondary" onClick={() => setShowModal(false)}>
             Cancel
         </Button>
         <Button variant="danger" onClick={handleDelete}>
             Yes, Delete
         </Button>
     </Modal.Footer>
 </Modal>

</>

    );
}

export default DoctorHome;
