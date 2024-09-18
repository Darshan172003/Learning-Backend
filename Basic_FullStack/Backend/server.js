import express from 'express';
import 'dotenv/config' // for ES6 use import 'dotenv/config' instead of require('dotenv').config() because require is not supported in ES6
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/userinfo', (req, res) => {
    const userinfo = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com'
        },
        {
            id: 2,
            name: 'Jane Wick',
            email: 'jane@example.com'
        },
        {
            id: 3,
            name: 'Alice Smith',
            email: 'alice@example.com'
        },
        {
            id: 4,
            name: 'Bob Johnson',
            email: 'bob@example.com'
        },
        {
            id: 5,
            name: 'Eva Davis',
            email: 'eva@example.com'
        },
        {
            id: 6,
            name: 'Michael Brown',
            email: 'michael@example.com'
        }
    ];
    res.send(userinfo);
});

app.listen(port, () => { 
    console.log(`Server is running on ${port}`);
});