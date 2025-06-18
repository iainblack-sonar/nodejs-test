// S5334: MongoDB $where injection
const { MongoClient } = require('mongodb');
const express = require('express');
const app = express();
const mongoURI = 'mongodb://localhost:27017';
app.get('/your-endpoint', async (req, res) => {
  const client = new MongoClient(mongoURI);
  try {
    const database = client.db('example');
    const products = database.collection('product');
    const query = { $where: `isString(this.${req.query.prop})`};
    const product = await products.findOne(query); // Noncompliant
    res.json(product);
  } catch (err) {
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
  }
});
