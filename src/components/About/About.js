import {Container} from 'react-bootstrap';
import header from '../../images/header.png';
import styles from './About.module.scss';

function About() {
  return (
    <section className={styles.sectionAbout}>
      <div>
        <Container>
          <img src={header} alt="header" />
        </Container>
      </div>
    </section>
  );
}

export default About;
