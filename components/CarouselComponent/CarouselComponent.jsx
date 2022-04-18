import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from './carousel.module.css';

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className={styles.image} src="https://images.unsplash.com/photo-1622630732303-8e94514a1746?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1753&q=80" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className={styles.image} src="https://images.unsplash.com/photo-1626163015484-81fc7e3b90d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className={styles.image} src="https://images.unsplash.com/photo-1626162987518-4fee900a9323?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
