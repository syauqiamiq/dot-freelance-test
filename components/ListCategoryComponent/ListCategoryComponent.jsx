import React, { useEffect } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCoinCategories } from '../../redux/slices/coinSlice';
import CardComponent from '../CardComponent/CardComponent';
import TableComponent from '../TableComponent/TableComponent';

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
        {/* <Card className={styles.card}>
          <Card.Body>
            <Row>
              <Col>#</Col>
              <Col>Category</Col>
              <Col>Top Coins</Col>
              <Col>Market Capitalization</Col>
              <Col>24h Volume</Col>
            </Row>
          </Card.Body>
        </Card> */}
      </div>
      {coinLoading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="grow" variant="danger" className="spinner" />
        </div>
      ) : coinCategoryData ? (
        <TableComponent data={coinCategoryData.slice(0, 10)} />
      ) : (
        // coinCategoryData.slice(0, 10).map((data, index) => {
        //   return <CardComponent index={index} data={data} />;
        // })
        <p>{errorCoinCategory ? errorCoinCategory : 'DATA KOSONG'}</p>
      )}
    </div>
  );
};

export default ListCategoryComponent;
