import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.css';
import img from './images/profile_pic_holder.png';
import github from './images/github.svg';
import linkedin from './images/linkedin.svg';

function Main() {
  return (
    <Container fluid>
      <Row style={{ marginBottom: '2rem' }}>
        <Col md={6}>
          <Row>
            <Col md={{ span: 9, offset: 3 }} xs={{ span: 8, offset: 2 }}>
              <div className="intro">
                <div className="intro-mid">
                  <h1 className="intro-text">Hi, I'm</h1>
                  <h1 className="intro-text">Aditya Lawankar.</h1>
                </div>
                <p className="intro-interests">
                  Full Stack Developer | ML Enthusiast | Student
                </p>
                <p>
                  <a
                    href="https://github.com/aditya-lawankar"
                    style={{ paddingRight: '1rem' }}
                  >
                    <img src={github} alt="GitHub" />
                  </a>
                  <a href="https://www.linkedin.com/in/aditya-lawankar">
                    <img src={linkedin} alt="LinkedIn" />
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <img className="my-pic img-fluid" src={img} alt="Aditya Lawankar" />
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
