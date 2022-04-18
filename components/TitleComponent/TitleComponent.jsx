import React from 'react';
import styles from './title.module.css';
const TitleComponent = ({ title }) => {
  return <h4 className={styles.title}>{title}</h4>;
};

export default TitleComponent;
