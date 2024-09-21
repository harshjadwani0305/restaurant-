import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import ReservationForm from './components/ReservationForm';
import StaffLogin from './components/StaffLogin'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<ReservationForm />} />
        <Route path="/staff-login" element={<StaffLogin/>} />
      </Routes>
    </Router>
  );
}

export default App;
