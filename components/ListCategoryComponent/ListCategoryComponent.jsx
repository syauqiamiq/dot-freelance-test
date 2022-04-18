import React, { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCoinCategories } from '../../redux/slices/coinSlice';
import CardComponent from '../CardComponent/CardComponent';

import styles from './listCategory.module.css';

const ListCategoryComponent = () => {
  const dispatch = useDispatch();
  const { coinLoading, coinCategoryData, errorCoinCategory } = useSelector((state) => state.coinReducers);

  useEffect(() => {
    dispatch(getCoinCategories());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.cardWrapper}>
        <Card className={styles.card}>
          <Card.Body>
            <Row>
              <Col>#</Col>
              <Col>Category</Col>
              <Col>Top Coins</Col>
              <Col>Market Capitalization</Col>
              <Col>24h Volume</Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
      {coinLoading ? (
        <p>Loading Data...</p>
      ) : coinCategoryData ? (
        coinCategoryData.slice(0, 10).map((data, index) => {
          return <CardComponent index={index} data={data} />;
        })
      ) : (
        <p>{errorCoinCategory ? errorCoinCategory : 'DATA KOSONG'}</p>
      )}
    </div>
  );
};

export default ListCategoryComponent;
