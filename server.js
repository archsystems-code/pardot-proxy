if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const express = require('express');
const PythonShell = require('python-shell');
const app = express();
const port = process.env.PORT || 5000;
const email = process.env.EMAIL;
const password = process.env.PASSWORD;
const key = process.env.KEY;

const addToList = async id => {
  return await PythonShell.run('app.py', {mode: 'text', args: [id, email, password, key]},  (err, results) => results)
}

app.use(express.json());
app.post('/add-to-cart-list', async (req, res) => {
  const visitor = req.query.visitor;
  const results = await addToList(visitor)
  console.log(results)
  res.send({status: results})
})
app.listen(port, () => console.log(`Listening on port ${port}`));