import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  loginContainer: {
    padding: '20px',
    maxWidth: '500px',
    margin: '0 auto',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#333',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#e0354b',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    ':disabled': {
      backgroundColor: '#ccc',
      cursor: 'not-allowed',
    },
  },
});

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    return password.length >= 6;
  };

  const isFormValid = isEmailValid(email) && isPasswordValid(password);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // Handle form submission
      console.log('Form submitted:', { email, password });
    }
  };

  return (
    <div className={css(styles.loginContainer)}>
      <form onSubmit={handleSubmit}>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="email" className={css(styles.label)}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className={css(styles.input)}
            required
          />
        </div>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="password" className={css(styles.label)}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className={css(styles.input)}
            required
          />
        </div>
        <button
          type="submit"
          disabled={!isFormValid}
          className={css(styles.submitButton)}
        >
          Submit
        </button>
      </form>
    </div>
  );
} 