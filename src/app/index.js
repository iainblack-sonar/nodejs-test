// -------- Services, Routes, Utils --------
const express = require('express')
const apiRoutes = require('./routes')

// -------- Configure Express Server --------
module.exports = function expressApp () {
  const app = express()
  app.use(apiRoutes)
  return app
}
