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
        <Col sm={6}>
          <div className="intro">
            <h1 className="intro-text">Hi, I'm</h1>
            <h1 className="intro-text">Aditya Lawankar.</h1>
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
          {/* <div>Full Stack Developer | Machine Learning | Student</div> */}
        </Col>
        <Col sm={6}>
          <img className="my-pic img-fluid" src={img} alt="Aditya Lawankar" />
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
