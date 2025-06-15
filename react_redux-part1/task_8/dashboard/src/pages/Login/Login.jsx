import React, { useState } from 'react';
import { StyleSheet, css } from "aphrodite";
import WithLogging from "../../components/HOC/WithLogging";
import useLogin from "../../hooks/useLogin";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";

const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "column",
    height: "60vh",
    padding: "20px 20px 20px 40px",
    borderTop: "5px solid red",
    fontFamily: "Roboto, sans-serif",
  },
  paragraph: {
    fontSize: "1.3rem",
    margin: 0,
  },
  form: {
    margin: "20px 0",
    fontSize: "1.2rem",
  },
  label: {
    paddingRight: "10px",
  },
  input: {
    marginRight: "10px",
  },
  button: {
    cursor: "pointer",
  },
  appBody: {
    padding: '36px 24px',
  },
});

function Login() {
  const dispatch = useDispatch();
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
    dispatch(login({ email, password }));
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

export default WithLogging(Login);
