import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './index.css';

function SkillCard(props) {
  return (
    <Card className="skill-card">
      <Card.Body className="skill-card-body">
        <Card.Title className="skill-card-title">{props.skillName}</Card.Title>
      </Card.Body>
    </Card>
  );
}

function Skills() {
  return (
    <Container fluid>
      <Row>
        <Col sm={{ span: 10, offset: 1 }} className="skills">
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
              <div className="d-flex flex-wrap justify-content-center skill-card-holder">
                <SkillCard skillName="Python" />
                <SkillCard skillName="C++" />
                <SkillCard skillName="C" />
                <SkillCard skillName="SQL" />
                <SkillCard skillName="HTML" />
                <SkillCard skillName="CSS" />
                <SkillCard skillName="Javascript" />
                <SkillCard skillName="Bootstrap" />
                <SkillCard skillName="React.js" />
                <SkillCard skillName="Node.js" />
                <SkillCard skillName="MongoDB" />
                <SkillCard skillName="Solidity" />
                <SkillCard skillName="MatLab" />
                <SkillCard skillName="Git" />
                <SkillCard skillName="GitHub" />
                <SkillCard skillName="Docker" />
                <SkillCard skillName="Kubernetes" />
                <SkillCard skillName="Hadoop" />
                <SkillCard skillName="Figma" />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
