import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [values, setValues] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        'http://localhost:3000/login',
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
      <h2>Login to your account</h2>
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
          <button type="submit">Submit</button>
        </form>
        <div>
          Don't you have account? <Link to={'/register'}> Register</Link>
        </div>
      </div>
    </div>
  );
}
