import {Container, Row, Col} from 'react-bootstrap';
import styles from './Education.module.scss';

function Education() {
  return (
    <section className={styles.sectionEducation}>
      <Container>
        <Row>
          <Col md={12}>
            <h1 className={styles.headline}>EDUCATION</h1>
          </Col>
        </Row>
        <Row className="d-flex justify-content-evenly mt-5">
          <Col md={4}>
            <div className={styles.educationframe}>
              <h2>National-Louis University</h2>
              <h3>Computer Science Engineer</h3>
              <h4>Specialisations:</h4>
              <ul>
                <li>Cybersecurity</li>
                <li>Business Application Programming</li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className={styles.educationframe}>
              <h2>Kodilla</h2>
              <h3>Full Stack Developer</h3>
              <ul>
                <li>HTML/CSS/SASS</li>
                <li>Responsive Web Design</li>
                <li>Bootstrap</li>
                <li>DevTools</li>
                <li>JavaScript</li>
                <li>Data Structures</li>
                <li>OOP</li>
                <li>AJAX/API</li>
                <li>React</li>
                <li>Redux</li>
                <li>React Router</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Websocket</li>
                <li>MongoDB</li>
                <li>Typescript</li>
                <li>SQL/TypeORM</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Education;
