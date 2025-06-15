import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  appBody: {
    padding: '36px 24px',
  },
  input: {
    margin: '0 16px 0 8px',
  },
});

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setEnableSubmit(e.target.value !== '' && password !== '');
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setEnableSubmit(email !== '' && e.target.value !== '');
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login submission
  };

  return (
    <div className={css(styles.appBody)}>
      <p>Login to access the full dashboard</p>
      <form onSubmit={handleLoginSubmit} role="form">
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            className={css(styles.input)}
            value={email}
            onChange={handleChangeEmail}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            name="password"
            className={css(styles.input)}
            value={password}
            onChange={handleChangePassword}
          />
        </label>
        <input type="submit" value="OK" disabled={!enableSubmit} />
      </form>
    </div>
  );
}

export default Login; 