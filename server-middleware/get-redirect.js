const app = require('express')()
const express = require('express')
const fetch = require('node-fetch')
const btoa = require('btoa')
var uniqid = require('uniqid')
const apiKey =
  process.env.API_KEY || 'test_q3ocDQkmqXxtSB7RCU3hIS-YzSA5ujYtikUVqz9IVZo'
const shopId = process.env.SHOP_ID || '802484'

//bodyParser deprecated
app.use(express.json())

app.get('/', (req, res) => {
  const { value, currency, return_url, type_of_payment, is_saved } = req.query

  let paymentId

  fetch('https://api.yookassa.ru/v3/payments', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(`${shopId}:${apiKey}`)}`,
      'Content-Type': 'application/json',
      //рандомное число
      'Idempotence-Key': uniqid(),
    },
    body: JSON.stringify({
      amount: { value, currency },
      confirmation: {
        type: 'redirect',
        return_url: return_url,
      },
      capture: true,
      description: 'Test',
      payment_method_data: {
        type: type_of_payment,
      },
      save_payment_method: is_saved,
    }),
  })
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      console.log(response)
      //в тестовом режиме оплата наличными не работает
      if (response && type_of_payment !== 'cash') {
        paymentId = response.payment_method.id
      }
      res.send(response)
    })
})

app.get('/status', (req, res) => {
  const { id } = req.query

  fetch(`https://api.yookassa.ru/v3/payments/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Basic ${btoa(`${shopId}:${apiKey}`)}`,
      'Content-Type': 'application/json',
      //рандомное число
      'Idempotence-Key': uniqid(),
    },
  })
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      console.log('status', response)
      res.send(response)
    })
})

app.get('/auto-pay', (req, res) => {
  const { value, currency, id } = req.query

  fetch('https://api.yookassa.ru/v3/payments', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(`${shopId}:${apiKey}`)}`,
      'Content-Type': 'application/json',
      //рандомное число
      'Idempotence-Key': uniqid(),
    },
    body: JSON.stringify({
      amount: { value, currency },
      payment_method_id: id,
    }),
  })
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      console.log('auto', response)
      res.send(response)
    })
})

module.exports = app
