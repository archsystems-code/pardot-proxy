if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const express = require('express');
const PythonShell = require('python-shell');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const email = process.env.EMAIL;
const password = process.env.PASSWORD;
const key = process.env.KEY;

app.use(express.json());
app.use(cors())
app.post('/add-to-cart-list', async (req, res) => {
  const visitor = req.body.visitor
  PythonShell.run('add.py', { args: [visitor, email, password, key] }, (err, results) => {
    if (err) {
      console.log(err)
      res.send({ status: err })
    } else {
      res.send({ status: results[0] })
    }
  })
})

app.post('/remove-from-cart-list', async (req, res) => {
  const visitor = req.body.visitor
  PythonShell.run('remove.py', { args: [visitor, email, password, key] }, (err, results) => {
    if (err) {
      console.log(err)
      res.send({ status: err })
    } else {
      res.send({ status: results[0] })
    }
  })
})

app.listen(port, () => console.log(`Listening on port ${port}`));
