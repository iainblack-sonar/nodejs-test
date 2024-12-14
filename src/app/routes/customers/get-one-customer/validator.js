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
      customer_id: Joi.number().required() // Required property. Check if its is a number
    })
  )
}

async function validateRequestBody(req) {
  return await Joi.validate(req.body, Joi.object().empty())
}
