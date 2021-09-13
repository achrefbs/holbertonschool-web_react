import React from 'react'
import logo from '../assets/logo.jpg'
import { StyleSheet, css } from 'aphrodite'

function Header() {
  return (
    <header className={css(styles.headerStyle)}>
      <img src={logo} className={css(styles.logoStyle)} alt="logo" />
      <h1 className={css(styles.h1Style)}>School dashboard</h1>
    </header>
  );
}

const styles = StyleSheet.create( {
  logoStyle: {
    height: '18rem',
    width: '18rem',
  },
  headerStyle: {
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '4px solid #e1354b',
  },
  h1Style: {
    display: 'inline',
    position: 'relative',
    fontSize: '50px',
    color: '#e1354b',
  }
});

export default Header;
