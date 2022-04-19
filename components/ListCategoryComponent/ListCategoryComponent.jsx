import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCoinCategories } from '../../redux/slices/coinSlice';
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
      <div className={styles.cardWrapper}></div>
      {coinLoading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="grow" variant="danger" className="spinner" />
        </div>
      ) : coinCategoryData ? (
        <TableComponent data={coinCategoryData.slice(0, 10)} />
      ) : (
        <p>{errorCoinCategory ? errorCoinCategory : 'DATA KOSONG'}</p>
      )}
    </div>
  );
};

export default ListCategoryComponent;
