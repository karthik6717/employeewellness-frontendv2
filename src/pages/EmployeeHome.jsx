import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { getAllemployees,deleteEmployee} from '../services/employeeService';
//import Home from './managerhome';
import EmployeeSearch from './EmployeeSearch';

//import{EmployeeDetails} from '../components/EmployeeDetails'
import { Modal, Button } from 'react-bootstrap';


function EmployeeHome() {
    const [data,setData] = useState([])
    const [showModal,setShowModal] = useState(false);
    const [selectedEmployeeId,setSelectedEmployeeId] = useState(null);   

    //const navigate = useNavigate();
   

   useEffect(() => {
      getAllemployees().then((response) => {
         setData(response.data);
      
       })
       .catch((err)=>console.error("Error Fetching Associates",err));
     }, []);


     // Open Modal and set the employee ID
    const handleShowModal = (employeeId,employeeName) => {
      setSelectedEmployeeId({ id: employeeId, name: employeeName });
      setShowModal(true);
  };


 
     const handleDelete = () =>{
      if(selectedEmployeeId?.id)
      {
        deleteEmployee(selectedEmployeeId.id)
        
        .then(()=>{
          setData(data.filter(emp=>emp.employeeId !== selectedEmployeeId.id));
          setShowModal(false);
        //  window.location.reload()
         // navigate('/employees');
         
        })
        .catch(err=>console.log(err));
      }
     };






  //    const handleDelete = (employeeId)=>{
  //   const confirm = window.confirm("Would you like to Delete?");
  //   if(confirm)
  //   {
  //       deleteEmployee(employeeId).then(res=>{
  //         //  navigate('/');
  //         window.location.reload()
  //       })
  //       .catch(err=>console.log(err));
  //   }
  // }






  return (
    <>
    
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
        
     <h1>List Of  All Profiles</h1>
     
     <div className='w-80 rounded bg-white border shadow p-4'>
     <div className='d-flex justify-content-end mb-2'>
      <EmployeeSearch />

         <Link to="/add-employee" className='btn btn-success ms-2'>Onboard New Talent +</Link>
        </div>
       <table className='table table-bordered'>
        <thead>
            <tr>
                <th>Associate Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
                <th>Password</th>
                <th>Contact Number</th>
                <th>Department</th>
                <th>Total Reward Points</th>             
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                data.length > 0 ? data.map((d,i)=>(
                 <tr key={i}>
                    <td>{d.employeeId}</td>
                    <td>{d.firstName}</td>
                    <td>{d.lastName}</td>
                    <td>{d.email}</td>
                    <td>{d.password}</td>
                    <td>{d.contactNumber}</td>
                    <td>{d.department}</td>
                    <td>{d.totalRewardPoints}</td>
                    <td>
                        <Link to={`/employeeRead/${d.employeeId}`} className='btn btn-sm btn-info me-2'>READ</Link>
                        <Link to={`/employeeUpdate/${d.employeeId}`} className='btn btn-sm btn-primary me-2'>REFINE</Link>
                        <button onClick={()=>handleShowModal(d.employeeId,`${d.firstName} ${d.lastName}`)} className='btn btn-sm btn-danger'>REMOVE</button>
                    </td>
                 </tr>   
                )) : <tr><td colSpan={9}>No Associates Found</td></tr>
            }
        </tbody>
       </table>
        <Link to='/dashboard' className='btn btn-primary ms-3'> HOME</Link>
       </div>
       </div> 
        
      {/* Delete Confirmation Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete <strong>{selectedEmployeeId?.name}</strong> Record ?
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
  
  )
  
 


}

export default EmployeeHome