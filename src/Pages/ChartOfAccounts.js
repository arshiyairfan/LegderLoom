import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Styles.css'

const ChartOfAccounts = () => {
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

        <div className="container mt-4 " class="mainclass">

            {/* <div class="sub-class" >
                <div class="myBtnContainer" >
                    <button className="btn btn-primary mr-2" >Journal Voucher</button>
                    <button className="btn btn-primary mr-2">Sales Invoice</button>
                    <button className="btn btn-primary mr-2">Chart of Accounts</button>
                </div>
            </div> */}
            <h1 class="h1-style">Chart of Accounts</h1>
            <h3 class="h3-style"> ADD ACCOUNTS:</h3>

            <div class="vertical-form">
                

                <label type="label-style" for="fname">Name:</label>
                <input type="text" id="fname" name="Name" placeholder="Your name.."></input>
                <label type="label-style" for="Credit">Credit:</label>
                <input type="text" id="Credit" name="Credit" placeholder="enter credit amount..."></input>
                <label type="label-style"for="Debit">Debit:</label>
                <input type="text" id="Debit" name="Debit" placeholder="enter debit  amount..."></input>

            </div>


            <div class="vertical-form">
                

                
                
                <label type="label-style" for="TurnOver">TurnOver:</label>
                <input type="text" id="TurnOver" name="TurnOver" placeholder="enter amount..."></input>
                <label type="label-style"for="Date">Date:</label>
                <input type="date" id="Date" name="Date" placeholder="enter date.. ."></input>
                <input type="submit" value="Submit"></input>
                 
            </div>

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

        </div>
    );
};

export default ChartOfAccounts;
