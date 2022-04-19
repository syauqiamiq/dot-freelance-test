import Link from 'next/link';
import { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AuthLogout, AuthSuccess } from '../../redux/slices/authSlice';
import CustomButtonComponent from '../CustomButtonComponent/CustomButtonComponent';
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
                  <CustomButtonComponent title="Sign Up" type="button" />
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
