import Link from 'next/link';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styles from './navbar.module.css';

const NavbarComponent = () => {
  return (
    <Navbar className={styles.navbar} expand="lg">
      <Container>
        <Navbar.Brand className={styles.navbarBrand}>CryptoKu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="d-flex justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Link href="/">
              <a className={styles.navLink}> Home</a>
            </Link>
            <Link href="/login">
              <a className={styles.navLink}>Sign In</a>
            </Link>
            <Button className={styles.btnLogin}>Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
