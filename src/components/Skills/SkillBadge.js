import {Col, Row} from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './Skills.module.scss';

function SkillBadge({iconClass, iconName}) {
  return (
    <Col md={4} xs={6} className="justify-content-center">
      <Row>
        <span className={styles.icon}>
          <i className={iconClass} />
        </span>
      </Row>
      <Row className="d-flex justify-content-center">
        <span className={styles.icontext}>
          <p>{iconName}</p>
        </span>
      </Row>
    </Col>
  );
}

SkillBadge.propTypes = {
  iconClass: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

export default SkillBadge;
