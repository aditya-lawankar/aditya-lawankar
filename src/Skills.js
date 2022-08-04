import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.css';

function Skills() {
  return (
    <Container fluid>
      <Row>
        <Col
          sm={{ span: 10, offset: 1 }}
          className="skills"
          style={{ backgroundColor: '#f5f1ea' }}
        >
          <Row>
            <Col xs={{ span: 10, offset: 1 }} className="abt-box">
              <h1>About me</h1>
              <p className="abt-desc">
                I'm a Full Stack Developer currently studying in PES University
                Bangalore, India. "Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 10, offset: 1 }} className="skill-box">
              <h1>My skills</h1>
            </Col>
          </Row>
        </Col>
        {/* <div className="skills-container">2 of 2</div> */}
      </Row>
    </Container>
  );
}

export default Skills;
