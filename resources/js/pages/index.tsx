import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      <div>index</div>
      <div><Link to="/dashboard">link to dashboard</Link></div>
    </>
  );
}

export default Index;
