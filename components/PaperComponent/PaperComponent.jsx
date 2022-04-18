import { Card } from 'react-bootstrap';
import AuthFormComponent from '../AuthFormComponent/AuthFormComponent';
import styles from './paper.module.css';
const PaperComponent = () => {
  return (
    <Card className={styles.paper}>
      <Card.Body>
        <AuthFormComponent />{' '}
      </Card.Body>
    </Card>
  );
};

export default PaperComponent;
