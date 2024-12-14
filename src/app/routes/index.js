// ---- Router Config ----
const express = require('express')
const router = express.Router()

// ---- API Routes ------
const customers = require('./customers')

// ---- Custom API ----
router.use('/api/customers', customers)

// -------- Health Check endpoint --------
router.get('/health', (req, res) => { return res.status(200).send({ message: 'Health Check Endpoint is alive.' }) }) // Health check Dummy response
router.get('/', (req, res) => { return res.status(200).send({ message: 'Server is online' }) }) // Health check Dummy response

module.exports = router
