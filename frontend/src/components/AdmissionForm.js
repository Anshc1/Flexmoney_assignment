// AdmissionForm.js
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const AdmissionForm = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    type : 1,  
    name: '',
    age: '',
    batch: '',
    email: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://backendflexmoneyassignment.onrender.com/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const resp = await response.json();
      console.log(resp);   
      alert(resp.status);
      if (response.ok) {
        navigate('/paymentform', {state : {email : formData.email}})
      }
    } catch (error) {
      alert('Error submitting form:', error);
    }
  };

  return (
    <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      flexDirection : 'column'
    }}
    >
      <h1>
        Admission Form
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          width: '300px',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}
        >
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
            required
            />
        </label>

        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
            required
            />
        </label>

        <label>
          Preferred Batch:
          <select
            name="batch"
            value={formData.batch}
            onChange={handleInputChange}
            style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
            required
            >
            <option value="6-7AM">6-7AM</option>
            <option value="7-8AM">7-8AM</option>
            <option value="8-9AM">8-9AM</option>
            <option value="5-6PM">5-6PM</option>
          </select>
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
            required
            />
        </label>
        <button
          type="submit"
          style={{ width: '100%', backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none' }}
          >
          Submit
        </button>
      </form>
    </div>
    
  );
};

export default AdmissionForm;
