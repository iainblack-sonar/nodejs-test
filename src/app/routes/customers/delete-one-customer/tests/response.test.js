const http = require('http')
const test = require('ava')
const got = require('got')
const listen = require('test-listen')
const getExpressApp = require('#server/app')
const app = getExpressApp()

// Before each test runs, it creates a new temporary Express server to server the API endpoint
test.beforeEach(async t => {
  t.context.server = http.createServer(app)
  t.context.baseUrl = await listen(t.context.server)
})

// The Express server is closed once the test is completed
test.afterEach.always(t => {
  t.context.server.close()
})

// The test submits a DELETE method to the API endpoint and test against the returned response
test('delete 1 customer', async t => {
  const customerID = 67890
  const res = await got.delete(`${t.context.baseUrl}/api/customers/${customerID}`, {
    responseType: 'json'
  })
  t.is(res.body.my_message, 'Delete One Customer!')
})
