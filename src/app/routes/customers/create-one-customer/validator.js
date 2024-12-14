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
    req.query,
    Joi.object().keys({
      customer_id: Joi.string().required() // Required property. Check if it is a number
    })
  )
}

async function validateRequestBody(req) {
  return await Joi.validate(req.body,
    Joi.object().keys({
      // ---------------------------- REQUEST BODY TO VALIDATE ---------------------------
      customer_name: Joi.string().required(), // Required Property. Check if its is a string
      customer_handphone: Joi.number().required(), // Required Property. Check if it is a number
      customer_details: Joi.string().required() // Required Property. Check if its is a string
      // -------------------------------------------------------------------------
    })
  )
}
