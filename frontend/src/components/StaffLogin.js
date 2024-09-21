// import React, { useState } from 'react';

// const StaffLogin = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch('/api/login/', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       alert('Login successful!');
//     } else {
//       alert('Login failed');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="username" placeholder="Username" onChange={handleChange} />
//       <input name="password" type="password" placeholder="Password" onChange={handleChange} />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default StaffLogin;
import React, { useState } from 'react';

const StaffLogin = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call)
    console.log('ID:', id, 'Password:', password);
  };

  return (
    <div className="staff-login-container">
      <h2>Staff Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input 
            type="text" 
            value={id} 
            onChange={(e) => setId(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default StaffLogin;
