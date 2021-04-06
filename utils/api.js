const axios = require('axios').default

class Api {
  constructor(initialSettings) {
    this._baseURL = initialSettings['baseUrl']
  }

  getIntro() {
    return axios.get(`${this._baseURL}/index-intro`)
  }

  getMission() {
    return axios.get(`${this._baseURL}/index-mission`)
  }

  getData(token) {
    return Promise.all([this.getIntro(), this.getMission()])
  }
}

export const api = new Api({
  baseUrl: 'https://rylkov.ga',
})
