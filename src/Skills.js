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
                I am a computer science student currently studying at PES
                UNIVERSITY Bangalore, India. I am driven by a strong interest in
                technology, especially in the fields of web development and
                cloud computing. With experience in machine learning and data
                analytics, I am constantly exploring new ways to leverage
                technology to make a positive impact on society. I believe that
                technology can be a powerful tool for social change, and I am
                excited to be a part of a community that is working towards this
                goal.
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
                <SkillCard skillName="AWS" />
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
