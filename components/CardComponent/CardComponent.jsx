import Image from 'next/image';
import { Card, Col, NavItem, Row } from 'react-bootstrap';

import styles from './card.module.css';

const CardComponent = ({ index, data }) => {
  return (
    <div className={styles.cardWrapper}>
      <Card className={styles.card}>
        <Card.Body>
          <Row>
            <Col>{index + 1}</Col>
            <Col>{data.name}</Col>
            <Col>
              {data.top_3_coins.map((item, index) => {
                console.log(item);
                return (
                  <div className={styles.imageCover}>
                    <Image src={item} className={styles.image} layout="fill" />
                  </div>
                );
              })}
            </Col>
            <Col>{data.market_cap}</Col>
            <Col>{data.volume_24h}</Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;
