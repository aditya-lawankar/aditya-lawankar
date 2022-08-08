import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './index.css';
import Button from 'react-bootstrap/Button';

function Projects() {
  const [repoData, setRepoData] = useState();

  useEffect(() => {
    fetch('https://api.github.com/users/aditya-lawankar/repos')
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(4, result);
          const list = result.map((item, i) => (
            <Card className="project-card">
              <Card.Body>
                <Card.Title> {item.name}</Card.Title>
                <Card.Subtitle className="mb-2">{item.language}</Card.Subtitle>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
              <Card.Footer className="card-footer justify-content-center align-items-center d-flex">
                <a
                  target="_blank"
                  href={item.svn_url}
                  rel="noreferrer"
                  style={{ textDecoration: 'none' }}
                  key={i}
                >
                  <Button className="repo-btn">View on GitHub</Button>
                </a>
              </Card.Footer>
            </Card>
          ));
          setRepoData(list);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  return (
    <Container fluid>
      <Row>
        <Col sm={{ span: 10, offset: 1 }} className="projects" id="my-projects">
          {/* <div className="justify-content-center align-items-center d-flex flex-row"> */}
          {/* <img src={img} alt="b1"></img> */}
          <h1>My projects</h1>
          <Row
            xs={1}
            sm={2}
            md={3}
            className="d-flex justify-content-center flex-wrap"
          >
            {repoData}
          </Row>
          {/* <div className="d-flex flex-row flex-wrap justify-content-center">
            {repoData}
          </div> */}

          {/* <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid d-flex flex-row flex-wrap"
            columnClassName="my-masonry-grid_column"
            style={{ width: 'max-content' }}
          >
            {repoData}
          </Masonry> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
