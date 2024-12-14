const Joi = require('joi')

// Exported Method Description: Validates whether the incoming request body fulfils certain conditions.
module.exports = async (req, res, next) => {
  try {
    await validateRequestQueryParams(req) // Validate Request Query Params
    await validateRequestBody(req) // Validate Request Body
    next()
  } catch (error) {
    res.status(400).send(error.message)
  }
}

async function validateRequestQueryParams(req) {
  return await Joi.validate(
    req.params,
    Joi.object().keys({
      customer_id: Joi.number().required()
    })
  )
}

async function validateRequestBody(req) {
  return await Joi.validate(
    req.body,
    Joi.object().keys({
      customer_name: Joi.string().optional(), // Optional property. Check if its is a string
      customer_handphone: Joi.number().optional(), // Optional property. Check if its is a number
      customer_details: Joi.string().optional() // Optional property. Check if its is a string
    })
  )
}
