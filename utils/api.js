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

  getAchievements() {
    return axios.get(`${this._baseURL}/achievements`)
  }

  getData() {
    return Promise.all([
      this.getIntro(),
      this.getMission(),
      this.getAchievements(),
    ])
  }
}

export const api = new Api({
  baseUrl: 'https://rylkov.ga',
})
