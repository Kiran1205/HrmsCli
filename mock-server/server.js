const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
];

const itconfig = [
  { id: 202425001, fy: '2024-2025', name: '80C', groupname:'', thresholdvalue: 150000, description: 'Investment made in Equity Linked Saving Schemes, PPF/SPF/RPF, payments made towards Life Insurance Premiums, principal sum of a home loan, SSY, NSC, SCSS, etc.' },
  { id: 202425002, fy: '2024-2025', name: '80CCC', groupname:'', thresholdvalue: 50000, description: 'Payment made towards pension funds' },
  { id: 202425003, fy: '2024-2025', name: '80CCD(1)', groupname:'', thresholdvalue: 50000, description: 'Payments made towards Atal Pension Yojana or other pension schemes notified by government' },
  { id: 202425004, fy: '2024-2025', name: '80CCE', groupname:'', thresholdvalue: 50000, description: 'Total deduction under Section 80C, 80CCC, 80CCD(1)' },
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/fyitconfig', (req, res) => {
  res.json(itconfig);
});

app.listen(3000, () => {
  console.log('Mock server running at http://localhost:3000');
});
