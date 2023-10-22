import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


const JournalVoucher = () => {
  const [accounts, setAccounts] = useState([]);
  const [newAccount, setNewAccount] = useState({ accountname: '', debit: 0, credit: 0, turnover: 0, date: '' });

  const addAccount = () => {
    setAccounts([...accounts, newAccount]);
    setNewAccount({ accountname: '', debit: 0, credit: 0, turnover: 0, date: '' });
  };

  const deleteAccount = (index) => {
    const updatedAccounts = [...accounts];
    updatedAccounts.splice(index, 1);
    setAccounts(updatedAccounts);
  };

  return (
    <div className="container mt-4">
      <h1>Journal Voucher</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Account Name</th>
            <th>Debit</th>
            <th>Credit</th>
            <th>Turnover</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, index) => (
            <tr key={index}>
              <td>{account.accountname}</td>
              <td>{account.debit}</td>
              <td>{account.credit}</td>
              <td>{account.turnover}</td>
              <td>{account.date}</td>
              <td>
                <button className="btn btn-secondary">Edit</button>
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteAccount(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Account Name"
          value={newAccount.accountname}
          onChange={(e) => setNewAccount({ ...newAccount, accountname: e.target.value })}
        />
        <input
          type="number"
          className="form-control"
          placeholder="Debit"
          value={newAccount.debit}
          onChange={(e) => setNewAccount({ ...newAccount, debit: e.target.value })}
        />
        <input
          type="number"
          className="form-control"
          placeholder="Credit"
          value={newAccount.credit}
          onChange={(e) => setNewAccount({ ...newAccount, credit: e.target.value })}
        />
        <input
          type="number"
          className="form-control"
          placeholder="Turnover"
          value={newAccount.turnover}
          onChange={(e) => setNewAccount({ ...newAccount, turnover: e.target.value })}
        />
        <input
          type='date'
          className="form-control"
          placeholder="data"
          value={newAccount.date}
          onChange={(e) => setNewAccount({ ...newAccount, date: e.target.value })}
        />
        <button className="btn btn-primary" onClick={addAccount}>Add</button>
      </div>
    </div>
  );
};

export default JournalVoucher;
