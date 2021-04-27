const app = require('express')()
const express = require('express')
const fetch = require('node-fetch')
const btoa = require('btoa')
var uniqid = require('uniqid')

//bodyParser deprecated
app.use(express.json())
app.get('/', (req, res) => {
  const { value, currency, return_url, type_of_payment } = req.query
  const apiKey = process.env.API_KEY || 'test_q3ocDQkmqXxtSB7RCU3hIS-YzSA5ujYtikUVqz9IVZo'
  const shopId = process.env.SHOP_ID || '802484'

  fetch('https://api.yookassa.ru/v3/payments', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(`${shopId}:${apiKey}`)}`,
      "Content-Type": "application/json",
      //рандомное число
      'Idempotence-Key': uniqid(),
    },
    body: JSON.stringify({
      "amount": { value, currency },
      "confirmation": {
        "type": "redirect",
        "return_url": return_url
      },
      "capture": true,
      "description": "Test",
      "payment_method_data": {
        type: type_of_payment,
      },
    })
  })
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      console.log(response)
      res.send(response)
    })
})

module.exports = app
