import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './custom.module.css';
const CustomButtonComponent = ({ title, type, onClick }) => {
  return (
    <Button type={type} onClick={onClick} className={styles.btn}>
      {title}
    </Button>
  );
};

export default CustomButtonComponent;
