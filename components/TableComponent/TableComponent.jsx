import React from 'react';
import Image from 'next/image';
import { Table } from 'react-bootstrap';
import styles from './table.module.css';
import { formatCurrency } from '@coingecko/cryptoformat';
const TableComponent = ({ data }) => {
  return (
    <div>
      <Table responsive>
        <thead className={styles.thead}>
          <tr>
            <th>#</th>
            <th>Category</th>
            <th>Top Coins</th>
            <th>Market Capitalization</th>
            <th>24h Volume</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td className={styles.td}>{index + 1}</td>
                <td className={styles.td}>{item.name}</td>
                <td className={styles.td}>
                  {item.top_3_coins.map((item, index) => {
                    return (
                      <div key={index} className={styles.imageCover}>
                        <Image src={item} className={styles.image} layout="fill" />
                      </div>
                    );
                  })}
                </td>
                <td className={styles.td}>{formatCurrency(item.market_cap, 'USD', 'en', false, { decimalPlaces: 0 })}</td>
                <td className={styles.td}>{formatCurrency(item.volume_24h, 'USD', 'en', false, { decimalPlaces: 0 })}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TableComponent;
