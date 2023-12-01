import React from 'react';
import css from "../styles/TransactionHistory.module.css"


export const TransactionHistory = ({items}) => {
    return (
   <>                     
   <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
          {items.map((item, index) => (
            <tr
              className={css.name}
            >
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
</table>        
 </>
    );
}