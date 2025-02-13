import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getChallengeById, updateChallenge } from '../services/challengeService';
//import Home from './managerhome';

function ChallengeUpdate() {
  const { challengeId } = useParams(); // Get the challenge ID from route params
  const navigate = useNavigate(); 
  const [values, setValues] = useState({
    challengeId: '',
    challengeName: '',
    startDate: '',
    endDate: '',
    rewardPoints: '',
    description: '',
  });

  useEffect(() => {
    getChallengeById(challengeId)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => console.log(err));
  }, [challengeId]);

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateChallenge(values);
      alert('Challenge updated successfully');
      navigate('/');
    } catch (error) {
      alert('Failed to update challenge. Please try again.');
    }
  };

  return (
    <>
    
    <div className="d-flex w-100 justify-content-center align-items-center bg-light mt-5 mb-5">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update Challenge</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlFor="challengeId">Challenge ID:</label>
            <input
              type="number"
              name="challengeId"
              className="form-control"
              placeholder="Enter Challenge ID"
              value={values.challengeId}
              onChange={handleChange}
              readOnly
            />
          </div>
          <div className="mb-2">
            <label htmlFor="challengeName">Challenge Name:</label>
            <input
              type="text"
              name="challengeName"
              className="form-control"
              placeholder="Enter Challenge Name"
              value={values.challengeName}
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
            <label htmlFor="rewardPoints">Reward Points:</label>
            <input
              type="number"
              name="rewardPoints"
              className="form-control"
              placeholder="Enter Reward Points"
              value={values.rewardPoints}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="description">Description:</label>
            <textarea
              name="description"
              className="form-control"
              placeholder="Enter Challenge Description"
              value={values.description}
              onChange={handleChange}
            />
          </div>
          <div className='d-flex justify-content-between gap-4'>
          <Link to="/challenges" className="btn btn-primary w-100 ">Back</Link>
          <button type="submit" className="btn btn-success w-100 ">Update Challenge</button>
          
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default ChallengeUpdate;
