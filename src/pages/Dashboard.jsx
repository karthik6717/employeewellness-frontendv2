import React from 'react'
import { useUser } from '../contexts/UserContext';

const Dashboard = () => {
    const {userInfo} = useUser();
    console.log(userInfo);
  return (
    <div> Dashboard {JSON.stringify(userInfo)}</div>
  )
}

export default Dashboard;
