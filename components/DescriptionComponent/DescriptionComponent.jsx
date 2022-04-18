import React from 'react';
import styles from './description.module.css';
const DescriptionComponent = ({ desc }) => {
  return <p className={styles.description}>{desc}</p>;
};

export default DescriptionComponent;
