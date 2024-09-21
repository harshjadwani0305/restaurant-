import React, { useEffect, useState } from 'react';

const ShowReservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    async function fetchReservations() {
      const response = await fetch('/api/reservations/');
      const data = await response.json();
      setReservations(data);
    }
    fetchReservations();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`/api/reservation/${id}`, { method: 'DELETE' });
    setReservations(reservations.filter(reservation => reservation.id !== id));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>People</th>
          <th>Time Slot</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {reservations.map((reservation) => (
          <tr key={reservation.id}>
            <td>{reservation.name}</td>
            <td>{reservation.phone}</td>
            <td>{reservation.people}</td>
            <td>{reservation.timeSlot}</td>
            <td>
              <button onClick={() => handleDelete(reservation.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ShowReservations;
