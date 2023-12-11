import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [values, setValues] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (event: React.SyntheticEvent) => {
    console.log(values, 'dupa');

    event.preventDefault();
    try {
      const { data } = await axios.post(
        'http://localhost:8000/api/register',
        {
          ...values,
        },
        { withCredentials: true },
      );
      if (data) {
        if (data.errors) {
          console.log('error');
        } else {
          navigate('/');
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div>
      <h2>Register your account</h2>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <div>
          Already have account? <Link to={'/login'}> Login</Link>
        </div>
      </div>
    </div>
  );
}
