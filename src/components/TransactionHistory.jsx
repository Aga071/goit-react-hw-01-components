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
        {items.map(item => {
          <TransactionHistoryList
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />;
        })}
      </tbody>
    </table>
  );
}

function TransactionHistoryList({ type, amount, currency }) {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}
