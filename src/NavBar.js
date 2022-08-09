import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Offcanvas from 'react-bootstrap/Offcanvas';
import Pdf from './pdf/ADITYA_LAWANKAR-RESUME.pdf';
import './index.css';

function NavBar() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="../public/index.html" className="brand">
              Portfolio
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto justify-content-end flex-grow-1 pe-3 offcanvas-body">
                <Nav.Link href="#my-projects" style={{ paddingRight: '2rem' }}>
                  Projects
                </Nav.Link>
                <Nav.Link
                  href={Pdf}
                  target="_blank"
                  style={{ paddingRight: '2rem' }}
                >
                  Resume
                </Nav.Link>
                <Nav.Link href="#contact-me">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;
