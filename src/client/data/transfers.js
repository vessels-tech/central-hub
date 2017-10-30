'use strict'
import Uuid from 'uuid4';
import Members from './members'
const members = Members;

const createTransfer = (creditAccount, debitAccount, amount = '50.00') => {
  var credit = creditAccount || members[Math.floor(Math.random() * members.length)];
  var debit = debitAccount || members[Math.floor(Math.random() * members.length)];
  return {
    id: Uuid(),
    credits: [
      {
        account: creditAccount,
        amount: amount
      }
    ],
    debits: [
      {
        account: debitAccount,
        amount: amount
      }
    ],
    state: 'prepared',
    timeline: {
      prepared_at: new Date().toISOString()
    },
    credit_account_name: credit.name,
    debit_account_name: debit.name,
    amount: amount
  }
}

const createTransfers = () => {
  const t = [];
  for (var i = 0; i < 100; i++) {
    t.push(createTransfer());
  }
  return t;
}

export default createTransfers();
