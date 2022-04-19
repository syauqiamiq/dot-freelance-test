import { Card } from 'react-bootstrap';
import AuthFormComponent from '../AuthFormComponent/AuthFormComponent';
import styles from './paper.module.css';
const PaperComponent = ({ children }) => {
  return (
    <Card className={styles.paper}>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
};

export default PaperComponent;
