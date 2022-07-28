import {Container, Row, Col} from 'react-bootstrap';
import styles from './Projects.module.scss';
import header from '../../images/header.png';

function Projects() {
  return (
    <section className={styles.sectionProjects}>
      <div className={styles.background}>
        <Container>
          <h1>PROJECTS</h1>
          <Row>
            <Col md={6}>
              <div className={styles.boxlarge}>
                <img src={header} alt="header" />
              </div>{' '}
            </Col>
            <Col md={6}>
              <div className={styles.boxlarge} />{' '}
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className={styles.boxlarge} />{' '}
            </Col>
            <Col md={6}>
              <Row>
                <Col md={12}>
                  <div className={styles.boxmedium} />{' '}
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <div className={styles.boxmedium} />{' '}
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Row>
                <Col md={6}>
                  <div className={styles.boxsmall} />
                </Col>
                <Col md={6}>
                  <div className={styles.boxsmall} />
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={4}>
                  <div className={styles.boxxsmall} />
                </Col>
                <Col md={4}>
                  <div className={styles.boxxsmall} />
                </Col>
                <Col md={4}>
                  <div className={styles.boxxsmall} />
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <div className={styles.boxxsmall} />
                </Col>
                <Col md={4}>
                  <div className={styles.boxxsmall} />
                </Col>
                <Col md={4}>
                  <div className={styles.boxxsmall} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
export default Projects;
