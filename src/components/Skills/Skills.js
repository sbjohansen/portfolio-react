import {Container, Row, Col} from 'react-bootstrap';
import SkillBadge from './SkillBadge';
import styles from './Skills.module.scss';

function Skills() {
  return (
    <section className={styles.sectionSkills}>
      <Container>
        <Row>
          <Col md={3}>
            <h1 className={styles.skills}>SKILLS</h1>
          </Col>
          <Col md={9}>
            <p className={styles.skillsDescription}>
              Loren ipsumLoren ipsumLoren ipsumLoren ipsumLoren ipsumLoren ipsumLoren ipsumLoren
              ipsum Loren ipsumLoren ipsumLoren ipsumLoren ipsumLoren ipsumLoren ipsumLoren
              ipsumLoren ipsumLoren ipsumLoren ipsumLoren ipsumLoren ipsumLoren ipsumLoren
              ipsumLoren ipsumLoren ipsumLoren ipsumLoren ipsum ipsumLoren ipsum ipsumLoren ipsum
              ipsumLoren ipsum ipsumLoren ipsum ipsumLoren ipsum ipsumLoren ipsum ipsumLoren ipsum
              ipsumLoren ipsum
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-evenly">
          <SkillBadge iconClass="fa-brands fa-github-square" iconName="Github" />
          <SkillBadge iconClass="fa-brands fa-html5" iconName="HTML5" />
          <SkillBadge iconClass="fa-brands fa-html5" iconName="HTML5" />
          <SkillBadge iconClass="fa-brands fa-html5" iconName="HTML5" />
          <SkillBadge iconClass="fa-brands fa-html5" iconName="HTML5" />
          <SkillBadge iconClass="fa-brands fa-html5" iconName="HTML5" />
        </Row>
      </Container>
    </section>
  );
}
export default Skills;
