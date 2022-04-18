import { formatCurrency } from '@coingecko/cryptoformat';
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
            <Col>{formatCurrency(data.market_cap, 'USD', 'en', false, { decimalPlaces: 0 })}</Col>
            <Col>{formatCurrency(data.volume_24h, 'USD', 'en', false, { decimalPlaces: 0 })}</Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;
