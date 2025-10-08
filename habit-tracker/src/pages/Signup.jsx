import React, { useRef, useState } from 'react';
import { signUp } from '../firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }
    try {
      await signUp(emailRef.current.value, passwordRef.current.value);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-wrapper">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {error && <p className="error">{error}</p>}
        <input type="email" placeholder="Email" ref={emailRef} required />
        <input type="password" placeholder="Password" ref={passwordRef} required />
        <input type="password" placeholder="Confirm Password" ref={passwordConfirmRef} required />
        <button type="submit">Create Account</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;