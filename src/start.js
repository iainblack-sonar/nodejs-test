// Set env variables
process.env.BACKEND_API_SERVER_APP_PORT = 9020 // Set the port for the backend API server
process.env.NODE_ENV='production'

// Let SERVER_ROOT be the absolute path for easy package referencing (prevents ../../../../ kind of file referencing)
global.SERVER_ROOT = require('path').resolve(__dirname)

// -------- Used for neater logging --------
const SIGNALE = require('signale') // Used for more readable CLI Logging
const chalk = require('chalk') // Used for more readable CLI Logging

// -------- Packages --------
const os = require('os')
const getExpressApp = require('./app')
const app = getExpressApp()

const port = process.env.BACKEND_API_SERVER_APP_PORT || 9001 // Integer value - Defaults to 9001 if BACKEND_API_SERVER_APP_PORT is not set in your ".env" file
app.listen(port, (error) => { // Starts server to listen on specified port
  if (error) throw error
  SIGNALE.start(`Server started on ${chalk.white(os.hostname())} in ${chalk.yellow(process.env.NODE_ENV || 'development')} mode - ${chalk.cyan(`http://localhost:${port}`)}`)
})
