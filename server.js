if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const express = require('express');
const PythonShell = require('python-shell');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const email = process.env.EMAIL;
const password = process.env.PASSWORD;
const key = process.env.KEY;

app.use(express.json());
app.use(cors())
app.post('/add-to-cart-list', async (req, res) => {
  const visitor = req.body.visitor
  PythonShell.run('app.py', { mode: 'text', args: [visitor, email, password, key], pythonPath: 'python3' }, (err, results) => {
    if (err) throw err;
    res.send({ status: results[0] })
  })
})
app.listen(port, () => console.log(`Listening on port ${port}`));
