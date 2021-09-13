import React from 'react'
import { StyleSheet, css } from 'aphrodite'

function Login() {
  return (
    <React.Fragment>
      <body className={css(styles.bodyStyle)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email' className={css(styles.labelStyle)}>Email: </label>
        <input type='email' id='email' name='email'/>
        <label htmlFor='password' className={css(styles.labelStyle)}>Password: </label>
        <input type='password' id='password' name='password'/>
        <button className={css(styles.buttonStyle)}>OK</button>
      </body>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  bodyStyle: {
    padding: '3rem',
    marginBottom: '20em',
  },
  labelStyle: {
    width: '10rem',
  },
  buttonStyle: {
    marginLeft: '0.5rem',
    width: '3rem',
  }
});

export default Login;
