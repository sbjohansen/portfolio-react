import Navbar from 'react-bootstrap/Navbar';
import {Nav, Container} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import styles from './NavBar.module.scss';

function NavBar() {
  return (
    <Navbar bg="purple" variant="dark" sticky="top" className={styles.navbar}>
      <Container>
        <Navbar.Brand href="#home" />
        <Nav className="justify-content-end">
          <Nav.Link as={NavLink} to="#about">
            ABOUT
          </Nav.Link>
          <Nav.Link as={NavLink} to="#category">
            SKILLS
          </Nav.Link>
          <Nav.Link as={NavLink} to="#about">
            EDUCATION
          </Nav.Link>
          <Nav.Link as={NavLink} to="#about">
            PROJECTS
          </Nav.Link>
          <Nav.Link as={NavLink} to="#about">
            CONTACT
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
