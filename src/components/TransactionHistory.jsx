// import PropTypes from 'prop-types';
// import clsx from 'clsx';
import css from '../css/TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  console.log(items);
  return (
    <table className={css['transaction-history']}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// function TransactionHistoryList({ type, amount, currency }) {
//   return (
//     <tr key={id}>
//       <td>{type}</td>
//       <td>{amount}</td>
//       <td>{currency}</td>
//     </tr>
//   );
// }
