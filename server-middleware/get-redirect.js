const bodyParser = require('body-parser')
const app = require('express')()
const fetch = require('node-fetch')
const btoa = require('btoa')
var uniqid = require('uniqid')

app.use(bodyParser.json())
app.get('/', (req, res) => {
  const { value, return_url, currency } = req.query

  fetch('https://api.yookassa.ru/v3/payments', {
    method: 'POST',
    headers: {
      // btoa("<shopId>:<API-ключ>")
      Authorization:
        'Basic ODAyNDg0OnRlc3RfcTNvY0RRa21xWHh0U0I3UkNVM2hJUy1ZelNBNXVqWXRpa1VWcXo5SVZabw==',
      'Content-Type': 'application/json',
      //рандомное число
      'Idempotence-Key': uniqid(),
    },
    body: JSON.stringify({
      amount: { value, currency },
      confirmation: {
        type: 'redirect',
        return_url: 'http://localhost:3100/',
      },
      capture: true,
      description: 'Test',
    }),
  })
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((response) => {
      res.send(response)
    })
})

module.exports = app
