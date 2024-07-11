import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  if (!formData) {
    return <div>No data to display</div>;
  }

  return (
    <div className="success-container">
      <h2>Form Submission Successful!</h2>
      <div><strong>First Name:</strong> {formData.firstName}</div>
      <div><strong>Last Name:</strong> {formData.lastName}</div>
      <div><strong>Username:</strong> {formData.username}</div>
      <div><strong>Email:</strong> {formData.email}</div>
      <div><strong>Phone Number:</strong> {formData.phoneNo}</div>
      <div><strong>Country:</strong> {formData.country}</div>
      <div><strong>City:</strong> {formData.city}</div>
      <div><strong>PAN Number:</strong> {formData.panNo}</div>
      <div><strong>Aadhar Number:</strong> {formData.aadharNo}</div>
    </div>
  );
}

export default Success;
