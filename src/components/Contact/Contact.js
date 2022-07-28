import {Container, Row, Col, Button} from 'react-bootstrap';
import styles from './Contact.module.scss';

function Contact() {
  return (
    <section className={styles.sectionContact}>
      <Container>
        <form>
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={7}>
              <h1 className={styles.headline}>CONTACT</h1>
            </Col>
            <Col md={3}>
              <div className={styles.connectframe}>
                <h1 className={styles.connectText}>connect</h1>
                <span>
                  <span className={styles.connectIcon}>
                    <i className="fa-brands fa-github-square" />
                  </span>

                  <span className={styles.connectIcon}>
                    <i className="fa fa-linkedin-square" />
                  </span>
                </span>
              </div>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-centercontent-between">
            <Col md={4} className="d-flex flex-column">
              <Row>
                <Col md={12}>
                  <div className={styles.labelContact}>Name</div>
                  <input type="text" placeholder="Name" className={styles.inputContact} />
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <div className={styles.labelContact}>E-mail</div>
                  <input type="text" placeholder="Name" className={styles.inputContact} />
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <div className={styles.labelContact}>Subject</div>
                  <input type="text" placeholder="Name" className={styles.inputContact} />
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <Col md={12} className="flex-grow-1 d-flex flex-column">
                <div className={styles.labelContact}>Message</div>
                <textarea type="textarea" className={styles.textAreaContact} />
              </Col>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col md={10} className="d-flex justify-content-end">
              <Button type="submit" className={styles.button}>
                Submit
              </Button>
            </Col>
          </Row>
        </form>
      </Container>
    </section>
  );
}

export default Contact;
