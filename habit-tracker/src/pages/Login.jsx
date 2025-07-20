import React, { useRef, useState } from 'react';
import { logIn } from '../firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useAuth } from '../hooks/useAuth';

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  if (currentUser) {
    navigate('/');
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await logIn(emailRef.current.value, passwordRef.current.value);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-wrapper">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Log In</h2>
        {error && <p className="error">{error}</p>}
        <input type="email" placeholder="Email" ref={emailRef} required />
        <input type="password" placeholder="Password" ref={passwordRef} required />
        <button type="submit">Login</button>
        <p>
          Need an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;