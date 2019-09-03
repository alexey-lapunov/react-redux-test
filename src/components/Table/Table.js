import React from 'react';

import styles from './styles.module.scss';

const Table = ({ data }) => {
  const columns = data.columns;
  const rows = data.rows;

  const thead = (
    <thead className={styles.thead}>
      <tr className={styles.row}>
        {columns.map((column, i) => (
          <td key={i} className={styles.cel}>
            {column}
          </td>
        ))}
      </tr>
    </thead>
  );
  const tbody = (
    <tbody className={styles.tbody}>
      {rows.map(row => (
        <tr key={row.id} className={styles.row}>
          {columns.map((column, i) => (
            <td key={i} className={styles.cel}>
              {row[column]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );

  return (
    <table className={styles.table}>
      {thead}
      {tbody}
    </table>
  );
};

export default Table;
