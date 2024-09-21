import React, { useState } from 'react';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    people: '',
    timeSlot: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the API to submit the reservation
    const response = await fetch('/api/reservation/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Reservation successful!');
    } else {
      alert('Reservation failed or unavailable');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="people" placeholder="Number of People" onChange={handleChange} />
      <input name="timeSlot" type="time" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReservationForm;
