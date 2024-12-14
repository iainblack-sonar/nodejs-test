// -------- Essential Packages --------
const express = require('express')
const router = express.Router({ mergeParams: true })

// -------- Controllers --------
const getAllController = require('./get-all-customers/controller')
const getOneController = require('./get-one-customer/controller')
const createOneController = require('./create-one-customer/controller')
const updateOneController = require('./update-one-customer/controller')
const deleteOneController = require('./delete-one-customer/controller')

// -------- Validators --------
const getAllValidator = require('./get-all-customers/validator')
const getOneValidator = require('./get-one-customer/validator')
const createOneValidator = require('./create-one-customer/validator')
const updateOneValidator = require('./update-one-customer/validator')
const deleteOneValidator = require('./delete-one-customer/validator')

// -------- API Endpoints --------
router.get('/', getAllValidator, getAllController)
router.get('/:customer_id', getOneValidator, getOneController)
router.post('/', createOneValidator, createOneController)
router.put('/:customer_id', updateOneValidator, updateOneController)
router.delete('/:customer_id', deleteOneValidator, deleteOneController)

module.exports = router
