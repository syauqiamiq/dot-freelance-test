import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button, Container, Dropdown, DropdownButton, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AuthLogout, AuthSuccess } from '../../redux/slices/authSlice';
import styles from './navbar.module.css';

const NavbarComponent = () => {
  const { isAuth } = useSelector((state) => state.authReducers);
  useEffect(() => {
    if (localStorage.getItem('isAuth')) {
      dispatch(AuthSuccess());
    }
  }, [isAuth]);
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem('isAuth');
    dispatch(AuthLogout());
  };
  return (
    <>
      <Navbar collapseOnSelect className={styles.navbar} expand="lg" variant="dark">
        <Container>
          <Navbar.Brand className={styles.navbarBrand}>CryptoKu</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse className={styles.linkWrapper} id="responsive-navbar-nav">
            <Nav>
              <Link href="/">
                <a className={styles.navLink}> Home</a>
              </Link>
              {isAuth ? (
                <>
                  <Link href="/profile">
                    <a className={styles.navLink}>Profile</a>
                  </Link>
                  <a className={styles.navLink} onClick={() => handleLogout()}>
                    Logout
                  </a>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <a className={styles.navLink}>Sign In</a>
                  </Link>
                  <Button className={styles.btnLogin}>Sign Up</Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
